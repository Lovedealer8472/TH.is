# Zoho Mail Setup Guide for tolvuhvislarinn.is

## Step 1: Sign Up for Zoho Mail

1. Go to: https://www.zoho.com/mail/
2. Click "Sign Up Now" or "Get Started"
3. Choose "Free Plan" (5 users, 5GB each)
4. Sign up with your email (can use tolvuhvislarinn@gmail.com temporarily)

## Step 2: Add Your Domain

1. After signing up, go to the Zoho Mail Admin Console
2. Click "Add Domain" or "Domain Setup"
3. Enter: `tolvuhvislarinn.is`
4. Click "Add Domain"

## Step 3: Verify Domain Ownership

Zoho will give you a TXT record to add to your DNS. It will look something like:
```
Type: TXT
Name: @ (or tolvuhvislarinn.is)
Value: zoho-verification=xxxxxxxxxxxxxxxxxxxxx
TTL: 3600
```

**Add this to your DNS provider** (wherever you manage tolvuhvislarinn.is DNS).

## Step 4: Create Email Address

1. Once domain is verified, go to "Users" or "Email Accounts"
2. Click "Add User" or "Create Email"
3. Create: `dadi@tolvuhvislarinn.is`
4. Set a password (you'll use this for SMTP)

## Step 5: Get DNS Records from Zoho

After verification, Zoho will provide these DNS records:

### MX Records (for receiving email):
```
Priority: 10
Host: @ (or tolvuhvislarinn.is)
Points to: mx.zoho.com

Priority: 20
Host: @ (or tolvuhvislarinn.is)
Points to: mx2.zoho.com
```

### SPF Record (for sending email):
```
Type: TXT
Name: @ (or tolvuhvislarinn.is)
Value: v=spf1 include:zoho.com ~all
```

### DKIM Record (for email authentication):
Zoho will provide a unique DKIM record, something like:
```
Type: TXT
Name: zmail._domainkey (or zmail._domainkey.tolvuhvislarinn.is)
Value: (long string provided by Zoho)
```

### DMARC Record (optional but recommended):
```
Type: TXT
Name: _dmarc (or _dmarc.tolvuhvislarinn.is)
Value: v=DMARC1; p=none; rua=mailto:dadi@tolvuhvislarinn.is
```

## Step 6: Add DNS Records

Add all the above records to your DNS provider. DNS propagation can take 15 minutes to 48 hours (usually 15-30 minutes).

## Step 7: Generate App Password for SMTP

1. Log into Zoho Mail web interface
2. Go to Settings → Security → App Passwords
3. Generate a new App Password (name it "Website Contact Form")
4. **Save this password** - you'll need it for your website

## Step 8: Update Website Configuration

Once DNS is set up and email is working, update your `.env.local`:

```env
SMTP_HOST=smtp.zoho.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=dadi@tolvuhvislarinn.is
SMTP_PASS=your-app-password-from-zoho
SMTP_FROM=dadi@tolvuhvislarinn.is
CONTACT_EMAIL=tolvuhvislarinn@gmail.com
```

## Step 9: Test

1. Send a test email from your contact form
2. Check that it arrives at tolvuhvislarinn@gmail.com
3. Try replying to verify the "From" address works

## Troubleshooting

- **DNS not working?** Wait 30-60 minutes for propagation
- **Can't send email?** Check that SPF and DKIM records are correct
- **Emails going to spam?** Make sure all DNS records (SPF, DKIM, DMARC) are set up
- **SMTP authentication fails?** Use App Password, not your regular password

## Need Help?

Once you have the DNS values from Zoho, I can help you:
1. Configure the DNS records
2. Update your website's .env.local file
3. Test the email sending
