import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Configure transporter
    const smtpUser = process.env.SMTP_USER?.trim();
    const smtpPass = process.env.SMTP_PASS?.trim();
    
    // Debug logging (remove in production)
    console.log('SMTP Config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE,
      user: smtpUser,
      passLength: smtpPass?.length,
    });
    
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      authMethod: 'PLAIN',
      tls: {
        // Do not fail on invalid certificates
        rejectUnauthorized: false,
        ciphers: 'SSLv3',
      },
      // Explicitly require TLS for port 587
      requireTLS: parseInt(process.env.SMTP_PORT || '587') === 587,
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'tolvuhvislarinn@gmail.com',
      replyTo: email,
      subject: `Ný fyrirspurn frá ${name} - Tölvuhvíslarinn`,
      text: `
Ný fyrirspurn frá vefsíðu

Nafn: ${name}
Netfang: ${email}

Skilaboð:
${message}

---
Þessi fyrirspurn kom frá hafðu samband formi á tolvuhvislarinn.is
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9;">Ný fyrirspurn frá vefsíðu</h2>
          <div style="background-color: #1f2937; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="color: #d1d5db; margin: 10px 0;"><strong style="color: #f3f4f6;">Nafn:</strong> ${name}</p>
            <p style="color: #d1d5db; margin: 10px 0;"><strong style="color: #f3f4f6;">Netfang:</strong> <a href="mailto:${email}" style="color: #60a5fa;">${email}</a></p>
          </div>
          <div style="background-color: #111827; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #f3f4f6; margin-top: 0;">Skilaboð:</h3>
            <p style="color: #d1d5db; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #374151; margin: 30px 0;">
          <p style="color: #9ca3af; font-size: 12px;">Þessi fyrirspurn kom frá hafðu samband formi á tolvuhvislarinn.is</p>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Full error details:', error);
    return NextResponse.json(
      { error: `Failed to send email: ${errorMessage}` },
      { status: 500 }
    );
  }
}
