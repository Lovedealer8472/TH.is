# Quick Deploy - Copy & Paste Commands

Fastest way to deploy Tölvuhvíslarinn to a fresh Linux server.

## One-Liner Setup (Fresh Server)

SSH into your server and run:

```bash
curl -fsSL https://raw.githubusercontent.com/Lovedealer8472/TH.is/main/server-setup.sh | sudo bash
```

Then:

```bash
cd /var/www/tolvuhvislarinn
git clone https://github.com/Lovedealer8472/TH.is.git .
chmod +x deploy.sh
nano .env.local  # Paste your SMTP credentials
./deploy.sh
```

## Step-by-Step (Copy Each Section)

### 1. Basic Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2 and Git
sudo npm install -g pm2
sudo apt install -y git nginx certbot python3-certbot-nginx

# Configure firewall
sudo ufw allow ssh
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

### 2. Clone and Deploy

```bash
# Create directory
sudo mkdir -p /var/www/tolvuhvislarinn
sudo chown -R $USER:$USER /var/www/tolvuhvislarinn
cd /var/www/tolvuhvislarinn

# Clone repository
git clone https://github.com/Lovedealer8472/TH.is.git .

# Create .env.local
nano .env.local
```

Paste this (replace with your actual credentials):
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password-here
SMTP_FROM=your-email@gmail.com
CONTACT_EMAIL=tolvuhvislarinn@gmail.com
```

**Important:** See `README_EMAIL_SETUP.md` for instructions on generating a Gmail App Password.

Save (Ctrl+X, Y, Enter)

```bash
# Deploy
chmod +x deploy.sh
./deploy.sh
```

### 3. Configure Nginx

```bash
# Create config
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
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx
```

### 4. SSL Certificate

```bash
sudo certbot --nginx -d tolvuhvislarinn.is -d www.tolvuhvislarinn.is
```

### 5. PM2 Startup

```bash
pm2 startup
# Follow the instructions it provides
pm2 save
```

## Done! 🎉

Your site should now be live at: https://tolvuhvislarinn.is

## Quick Commands

```bash
pm2 status              # Check status
pm2 logs tolvuhvislarinn    # View logs
pm2 restart tolvuhvislarinn # Restart
```
