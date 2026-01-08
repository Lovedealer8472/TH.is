# Migadu Email Setup Guide for tolvuhvislarinn.is

## About Migadu
- **Location**: Switzerland (good privacy laws)
- **Free Tier**: Yes, with usage limits
- **Pricing**: Based on actual usage, not number of addresses
- **No Credit Card**: Required for free tier
- **Support**: Direct from postmasters

## Step 1: Sign Up for Migadu

1. Go to: https://www.migadu.com/
2. Click "Try for Free" or "Sign In" → "Sign Up"
3. Create an account (no credit card needed for free tier)
4. Verify your email address

## Step 2: Add Your Domain

1. After signing in, go to the Migadu dashboard
2. Click "Add Domain" or "Domains" → "New Domain"
3. Enter: `tolvuhvislarinn.is`
4. Click "Add Domain"

## Step 3: Verify Domain Ownership

Migadu will provide a TXT record to verify you own the domain. It will look like:
```
Type: TXT
Name: @ (or tolvuhvislarinn.is)
Value: migadu-verification=xxxxxxxxxxxxxxxxxxxxx
TTL: 3600
```

**Add this to your DNS provider** first.

## Step 4: Get DNS Records from Migadu

After adding the domain, Migadu will show you the DNS records you need:

### MX Records (for receiving email):
```
Priority: 10
Host: @ (or tolvuhvislarinn.is)
Points to: mx.migadu.com

Priority: 20
Host: @ (or tolvuhvislarinn.is)
Points to: mx2.migadu.com
```

### SPF Record (for sending email):
```
Type: TXT
Name: @ (or tolvuhvislarinn.is)
Value: v=spf1 include:spf.migadu.com ~all
```

### DKIM Record (for email authentication):
Migadu will provide a unique DKIM record, something like:
```
Type: TXT
Name: default._domainkey (or default._domainkey.tolvuhvislarinn.is)
Value: (long string provided by Migadu)
```

### DMARC Record (optional but recommended):
```
Type: TXT
Name: _dmarc (or _dmarc.tolvuhvislarinn.is)
Value: v=DMARC1; p=none; rua=mailto:dadi@tolvuhvislarinn.is
```

## Step 5: Add DNS Records

Add all the above records to your DNS provider. DNS propagation usually takes 15-30 minutes.

## Step 6: Create Email Address

1. Once domain is verified and DNS is set up, go to "Mailboxes" or "Addresses"
2. Click "New Mailbox" or "Create Address"
3. Create: `dadi@tolvuhvislarinn.is`
4. Set a password (you'll use this for SMTP)

## Step 7: Get SMTP Settings

In Migadu dashboard, find "SMTP Settings" or "Email Client Configuration". You'll need:
- **SMTP Host**: `smtp.migadu.com`
- **SMTP Port**: `587` (TLS) or `465` (SSL)
- **Username**: `dadi@tolvuhvislarinn.is`
- **Password**: (the password you set for the mailbox)

## Step 8: Update Website Configuration

Update your `.env.local`:

```env
SMTP_HOST=smtp.migadu.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=dadi@tolvuhvislarinn.is
SMTP_PASS=your-mailbox-password
SMTP_FROM=dadi@tolvuhvislarinn.is
CONTACT_EMAIL=tolvuhvislarinn@gmail.com
```

## Step 9: Test

1. Send a test email from your contact form
2. Check that it arrives at tolvuhvislarinn@gmail.com
3. Try replying to verify the "From" address works

## Migadu Free Tier Limits

- **Daily sending limit**: Usually 2GB/day (very generous for one person)
- **Storage**: Check current limits in your dashboard
- **Domains**: Usually 1-3 domains on free tier

## Troubleshooting

- **DNS not working?** Wait 30-60 minutes for propagation
- **Can't send email?** Check that SPF and DKIM records are correct
- **Emails going to spam?** Make sure all DNS records (SPF, DKIM, DMARC) are set up
- **Need help?** Migadu offers direct support from postmasters

## Need Help?

Once you have the DNS values from Migadu, I can help you:
1. Configure the DNS records
2. Update your website's .env.local file
3. Test the email sending
