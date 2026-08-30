import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const SUBDOMAIN_RE = /^[a-z0-9][a-z0-9-]{1,24}$/;
const RESERVED = new Set([
  'www', 'api', 'mail', 'th', 'pan', 'demo', 'muninn', 'pantanakerfi',
  'media', 'testshop', 'smtp', 'ftp', 'ns1', 'ns2', 'admin',
]);

// Light in-memory rate limit: 5 requests per IP per hour.
const buckets = new Map<string, number[]>();
function rateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 60 * 1000;
  const events = (buckets.get(ip) || []).filter((t) => now - t < windowMs);
  if (events.length >= 5) return true;
  events.push(now);
  buckets.set(ip, events);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (rateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests' }, { status: 429 });
    }

    const body = await request.json();
    const { shopName, contactName, email, phone, subdomain, message, website } = body;

    // Honeypot: real users never fill this hidden field.
    if (website) {
      return NextResponse.json({ message: 'OK' }, { status: 200 });
    }

    if (!shopName || !contactName || !email || !subdomain) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }
    const sub = String(subdomain).toLowerCase().trim();
    if (!SUBDOMAIN_RE.test(sub) || RESERVED.has(sub)) {
      return NextResponse.json({ error: 'Invalid subdomain' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER?.trim(),
        pass: process.env.SMTP_PASS?.trim(),
      },
      authMethod: 'PLAIN',
      tls: { rejectUnauthorized: false },
      requireTLS: parseInt(process.env.SMTP_PORT || '587') === 587,
    });

    const provisionCmd = `/opt/muninn-tools/new_trial.sh ${sub} "${String(shopName).replace(/"/g, '')}"`;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'dadi@tolvuhvislarinn.is',
      replyTo: email,
      subject: `Muninn prufubeiðni: ${shopName} (${sub}.tolvuhvislarinn.is)`,
      text: `
Ný prufubeiðni fyrir Muninn

Verslun:    ${shopName}
Tengiliður: ${contactName}
Netfang:    ${email}
Sími:       ${phone || '—'}
Veffang:    ${sub}.tolvuhvislarinn.is

Skilaboð:
${message || '—'}

Til að setja upp (á edge-þjóninum):
  ${provisionCmd}

IP: ${ip}
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">Ný prufubeiðni fyrir Muninn</h2>
          <div style="background-color: #1f2937; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #d1d5db; margin: 8px 0;"><strong style="color: #f3f4f6;">Verslun:</strong> ${shopName}</p>
            <p style="color: #d1d5db; margin: 8px 0;"><strong style="color: #f3f4f6;">Tengiliður:</strong> ${contactName}</p>
            <p style="color: #d1d5db; margin: 8px 0;"><strong style="color: #f3f4f6;">Netfang:</strong> <a href="mailto:${email}" style="color: #60a5fa;">${email}</a></p>
            <p style="color: #d1d5db; margin: 8px 0;"><strong style="color: #f3f4f6;">Sími:</strong> ${phone || '—'}</p>
            <p style="color: #d1d5db; margin: 8px 0;"><strong style="color: #f3f4f6;">Veffang:</strong> ${sub}.tolvuhvislarinn.is</p>
          </div>
          ${message ? `<div style="background-color: #111827; padding: 20px; border-radius: 8px; margin: 20px 0;"><p style="color: #d1d5db; white-space: pre-wrap;">${String(message).replace(/</g, '&lt;')}</p></div>` : ''}
          <div style="background-color: #0c4a6e; padding: 16px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #e0f2fe; margin: 0; font-size: 13px;">Uppsetning á edge:</p>
            <code style="color: #7dd3fc; font-size: 13px;">${provisionCmd}</code>
          </div>
          <p style="color: #9ca3af; font-size: 12px;">Beiðni frá tolvuhvislarinn.is/prufa — IP ${ip}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Request received' }, { status: 200 });
  } catch (error) {
    console.error('Trial request error:', error);
    return NextResponse.json({ error: 'Failed to submit request' }, { status: 500 });
  }
}
