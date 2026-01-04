# Linux Server Setup Guide

Complete guide to set up your Linux server for Tölvuhvíslarinn.

## Prerequisites

- Ubuntu 20.04+ or Debian 11+ server
- SSH access with sudo privileges
- Domain name pointed to your server IP (tolvuhvislarinn.is)

## Quick Setup (Automated)

### Option 1: Run Setup Script

```bash
# SSH into your server
ssh user@your-server-ip

# Download and run setup script
curl -O https://raw.githubusercontent.com/Lovedealer8472/TH.is/main/server-setup.sh
sudo bash server-setup.sh
```

### Option 2: Manual Setup

Follow the step-by-step instructions below.

## Manual Setup Steps

### 1. Update System

```bash
sudo apt update
sudo apt upgrade -y
```

### 2. Install Node.js 20

```bash
# Add NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Install Node.js
sudo apt install -y nodejs

# Verify installation
node -v  # Should show v20.x.x
npm -v   # Should show 10.x.x
```

### 3. Install PM2

```bash
sudo npm install -g pm2
pm2 -v  # Verify installation
```

### 4. Install Nginx

```bash
sudo apt install -y nginx

# Start and enable Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Verify
sudo systemctl status nginx
```

### 5. Install Git

```bash
sudo apt install -y git
git --version  # Verify
```

### 6. Install Certbot (for SSL)

```bash
sudo apt install -y certbot python3-certbot-nginx
```

### 7. Configure Firewall

```bash
# Enable UFW (if not already enabled)
sudo ufw enable

# Allow SSH (important!)
sudo ufw allow ssh
sudo ufw allow 80/tcp   # HTTP
sudo ufw allow 443/tcp  # HTTPS
sudo ufw allow 3000/tcp # Node.js (optional, if not using Nginx)

# Check status
sudo ufw status
```

### 8. Create Application Directory

```bash
# Create directory
sudo mkdir -p /var/www/tolvuhvislarinn

# Set ownership (replace 'your-username' with your actual username)
sudo chown -R $USER:$USER /var/www/tolvuhvislarinn

# Navigate to directory
cd /var/www/tolvuhvislarinn
```

### 9. Clone Repository

```bash
cd /var/www/tolvuhvislarinn
git clone https://github.com/Lovedealer8472/TH.is.git .

# Make scripts executable
chmod +x deploy.sh update.sh
```

### 10. Create Environment File

```bash
nano .env.local
```

Paste this content (with your actual credentials):

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=dadi@tolvuhvislarinn.com
SMTP_PASS=jthiwuhokwfmrokd
SMTP_FROM=dadi@tolvuhvislarinn.com
CONTACT_EMAIL=tolvuhvislarinn@gmail.com
```

Save: Ctrl+X, Y, Enter

### 11. Deploy Application

```bash
# Run deployment script
./deploy.sh
```

This will:
- Install dependencies
- Build the application
- Start with PM2
- Save PM2 configuration

### 12. Configure Nginx

Create Nginx configuration:

```bash
sudo nano /etc/nginx/sites-available/tolvuhvislarinn
```

Paste this configuration:

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

Enable the site:

```bash
# Create symlink
sudo ln -s /etc/nginx/sites-available/tolvuhvislarinn /etc/nginx/sites-enabled/

# Remove default site (optional)
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

### 13. Set Up SSL Certificate (Let's Encrypt)

```bash
sudo certbot --nginx -d tolvuhvislarinn.is -d www.tolvuhvislarinn.is
```

Follow the prompts:
- Enter your email
- Agree to terms
- Choose redirect HTTP to HTTPS (recommended)

Certbot will automatically:
- Obtain SSL certificate
- Configure Nginx
- Set up auto-renewal

### 14. Set Up PM2 Startup

```bash
# Generate startup script
pm2 startup

# Follow the instructions it provides (usually something like):
# sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u your-username --hp /home/your-username

# Save current PM2 processes
pm2 save
```

## Verification

### Check Application Status

```bash
# Check PM2 status
pm2 status

# Check logs
pm2 logs tolvuhvislarinn

# Check if app is responding
curl http://localhost:3000
```

### Check Nginx Status

```bash
sudo systemctl status nginx
```

### Test Website

1. Visit: http://tolvuhvislarinn.is (or your server IP)
2. Test contact form: http://tolvuhvislarinn.is/contact
3. Submit a test message
4. Check your email inbox

## Troubleshooting

### Port 3000 Already in Use

```bash
# Find process using port 3000
sudo lsof -i :3000

# Kill the process (replace PID with actual process ID)
sudo kill -9 PID
```

### PM2 Not Starting

```bash
# Check logs
pm2 logs tolvuhvislarinn

# Restart
pm2 restart tolvuhvislarinn

# Check if Node.js is working
node -v
```

### Nginx Not Working

```bash
# Check Nginx status
sudo systemctl status nginx

# Check error logs
sudo tail -f /var/log/nginx/error.log

# Test configuration
sudo nginx -t

# Restart
sudo systemctl restart nginx
```

### Firewall Issues

```bash
# Check firewall status
sudo ufw status

# Allow specific port
sudo ufw allow 3000/tcp

# Disable firewall (only for testing)
sudo ufw disable
```

### Application Crashes

```bash
# View logs
pm2 logs tolvuhvislarinn

# Monitor in real-time
pm2 monit

# Restart application
pm2 restart tolvuhvislarinn
```

## Maintenance Commands

```bash
# Update application
cd /var/www/tolvuhvislarinn
git pull
./update.sh

# View logs
pm2 logs tolvuhvislarinn

# Restart application
pm2 restart tolvuhvislarinn

# Stop application
pm2 stop tolvuhvislarinn

# Check system resources
pm2 monit

# Update system packages
sudo apt update && sudo apt upgrade -y
```

## Security Checklist

- [ ] Firewall enabled (UFW)
- [ ] SSH key authentication (disable password auth)
- [ ] Non-root user for application
- [ ] SSL certificate installed
- [ ] `.env.local` has secure permissions (chmod 600)
- [ ] Regular system updates enabled
- [ ] PM2 startup configured
- [ ] Nginx configured with security headers (optional)

## Next Steps

1. Test the website thoroughly
2. Set up regular backups
3. Configure monitoring (optional)
4. Set up domain email (optional)

## Need Help?

- Check logs: `pm2 logs tolvuhvislarinn`
- Check Nginx: `sudo tail -f /var/log/nginx/error.log`
- Check system: `journalctl -xe`
