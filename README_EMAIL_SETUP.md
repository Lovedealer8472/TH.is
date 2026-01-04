# Email Setup Instructions

This site uses a self-hosted email solution with Nodemailer and SMTP.

## Configuration

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` and configure your SMTP settings:

### For Gmail (Recommended for testing):

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
SMTP_FROM=noreply@tolvuhvislarinn.is
CONTACT_EMAIL=tolvuhvislarinn@gmail.com
```

**Important:** To use Gmail, you need to:
1. Enable 2-Step Verification on your Google Account
2. Generate an "App Password": https://myaccount.google.com/apppasswords
3. Use the app password (not your regular password) in `SMTP_PASS`

### For Your Own SMTP Server:

```env
SMTP_HOST=mail.yourdomain.is
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-smtp-username
SMTP_PASS=your-smtp-password
SMTP_FROM=noreply@tolvuhvislarinn.is
CONTACT_EMAIL=tolvuhvislarinn@gmail.com
```

## Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Go to http://localhost:3000/contact
3. Fill out and submit the form
4. Check your email inbox (and spam folder)

## Production Deployment

When deploying to your Linux server:

1. Create `.env.local` on your server with the same configuration
2. Ensure Node.js 18+ is installed
3. Build and start:
   ```bash
   npm run build
   npm start
   ```

Or use PM2 for process management:
```bash
npm install -g pm2
pm2 start npm --name "tolvuhvislarinn" -- start
pm2 save
pm2 startup
```

## Troubleshooting

- **Email not sending**: Check SMTP credentials and port settings
- **Connection errors**: Verify SMTP_HOST and SMTP_PORT are correct
- **Authentication failed**: Double-check SMTP_USER and SMTP_PASS
- **Emails going to spam**: Configure SPF/DKIM records for your domain
