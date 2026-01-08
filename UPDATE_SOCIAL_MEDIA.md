# Update Server with Social Media Integration

## Quick Update Steps

### 1. SSH into Your Server

```bash
ssh your-username@your-server-ip
```

### 2. Navigate to Your Project Directory

```bash
cd /var/www/tolvuhvislarinn
# (or wherever your project is located)
```

### 3. Pull Latest Changes

```bash
git pull origin main
```

### 4. Update the Application

```bash
./update.sh
```

Or manually:
```bash
npm install
npm run build
pm2 restart tolvuhvislarinn
```

### 5. Add Facebook Environment Variable (Optional but Recommended)

Edit your `.env.local` file on the server:

```bash
nano .env.local
```

Add this line:
```env
NEXT_PUBLIC_FACEBOOK_PAGE=https://www.facebook.com/profile.php?id=61576150526759
```

Then restart:
```bash
pm2 restart tolvuhvislarinn
```

## Verify It's Working

1. Visit your website: `https://www.tolvuhvislarinn.is`
2. Scroll to the footer - you should see social media icons
3. Check the contact page - you should see social media buttons
4. Look for the green WhatsApp button in the bottom-right corner

## Troubleshooting

**If you don't see the changes:**
- Clear your browser cache (Ctrl+Shift+Delete)
- Hard refresh the page (Ctrl+F5)
- Check PM2 status: `pm2 status`
- Check PM2 logs: `pm2 logs tolvuhvislarinn`

**If the build fails:**
- Check Node.js version: `node --version` (should be 18+)
- Check npm version: `npm --version`
- Try: `rm -rf node_modules .next && npm install && npm run build`
