# Quick Start - Deploy to Linux Server

## Fastest Way to Deploy

### 1. Upload Code to Server

**Option A: Using Git (Recommended)**
```bash
# On your local machine
git init
git add .
git commit -m "Ready for deployment"
git remote add origin <your-git-repo-url>
git push -u origin main

# On your server
git clone <your-git-repo-url>
cd tolvuhvislarinn
```

**Option B: Using SCP/SFTP**
```bash
# On your local machine (compress)
tar -czf tolvuhvislarinn.tar.gz --exclude=node_modules --exclude=.next --exclude=.git .

# Upload to server
scp tolvuhvislarinn.tar.gz user@your-server:/path/to/deploy/

# On your server
cd /path/to/deploy
tar -xzf tolvuhvislarinn.tar.gz
cd tolvuhvislarinn
```

### 2. On Your Server - Run Deployment Script

```bash
# Make scripts executable
chmod +x deploy.sh update.sh

# Run deployment
./deploy.sh
```

**OR manually:**

```bash
# Install dependencies
npm install --production

# Create .env.local (copy your current .env.local content)
nano .env.local
# Paste your SMTP credentials

# Build
npm run build

# Install PM2 (if not installed)
npm install -g pm2

# Start
pm2 start npm --name "tolvuhvislarinn" -- start
pm2 save
pm2 startup
```

### 3. Set Up Nginx (Optional - for port 80/443)

```bash
sudo nano /etc/nginx/sites-available/tolvuhvislarinn
```

Paste:
```nginx
server {
    listen 80;
    server_name tolvuhvislarinn.is www.tolvuhvislarinn.is;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable:
```bash
sudo ln -s /etc/nginx/sites-available/tolvuhvislarinn /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

### 4. SSL Certificate (Let's Encrypt)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d tolvuhvislarinn.is -d www.tolvuhvislarinn.is
```

## Your .env.local Content

Copy this to `.env.local` on your server (replace with your actual credentials):

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password-here
SMTP_FROM=your-email@gmail.com
CONTACT_EMAIL=tolvuhvislarinn@gmail.com
```

**Important:** 
- Keep this file secure and never commit it to Git!
- See `README_EMAIL_SETUP.md` for instructions on generating a Gmail App Password.

## Updating the Site

After making changes:

```bash
# On server
cd /path/to/tolvuhvislarinn
git pull  # If using Git
./update.sh  # Or manually: npm install --production && npm run build && pm2 restart tolvuhvislarinn
```

## Quick Commands

```bash
pm2 status              # Check status
pm2 logs tolvuhvislarinn    # View logs
pm2 restart tolvuhvislarinn # Restart
pm2 stop tolvuhvislarinn    # Stop
```

## Troubleshooting

- **Port 3000 in use?** Check with `lsof -i :3000` or `netstat -tulpn | grep 3000`
- **App crashes?** Check logs: `pm2 logs tolvuhvislarinn`
- **Can't connect?** Check firewall: `sudo ufw status`
- **Email not working?** Verify `.env.local` has correct credentials
