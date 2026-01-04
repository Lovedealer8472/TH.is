#!/bin/bash

# Linux Server Setup Script for Tölvuhvíslarinn
# Run this script as root or with sudo on a fresh Ubuntu/Debian server

set -e

echo "🚀 Setting up Linux server for Tölvuhvíslarinn..."
echo ""

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    echo "⚠️  Please run as root or with sudo"
    echo "Usage: sudo bash server-setup.sh"
    exit 1
fi

# Update system
echo "📦 Updating system packages..."
apt update
apt upgrade -y

# Install Node.js 18+ (using NodeSource)
echo "📦 Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs

# Verify Node.js installation
NODE_VERSION=$(node -v)
echo "✅ Node.js installed: $NODE_VERSION"

# Install npm (usually comes with Node.js, but ensure it's latest)
npm install -g npm@latest

# Install PM2 globally
echo "📦 Installing PM2..."
npm install -g pm2

# Install Nginx
echo "📦 Installing Nginx..."
apt install -y nginx

# Install Git (if not already installed)
echo "📦 Installing Git..."
apt install -g git || apt install -y git

# Install Certbot for SSL
echo "📦 Installing Certbot..."
apt install -y certbot python3-certbot-nginx

# Create application directory
APP_DIR="/var/www/tolvuhvislarinn"
echo "📁 Creating application directory: $APP_DIR"
mkdir -p $APP_DIR
chown -R $SUDO_USER:$SUDO_USER $APP_DIR

# Set up firewall (UFW)
echo "🔥 Configuring firewall..."
ufw --force enable
ufw allow ssh
ufw allow 80/tcp
ufw allow 443/tcp
ufw allow 3000/tcp  # Allow Node.js port (optional, only if not using Nginx)

# Summary
echo ""
echo "✅ Server setup complete!"
echo ""
echo "📋 Summary:"
echo "  - Node.js: $(node -v)"
echo "  - npm: $(npm -v)"
echo "  - PM2: $(pm2 -v)"
echo "  - Nginx: $(nginx -v 2>&1 | cut -d'/' -f2)"
echo "  - Application directory: $APP_DIR"
echo ""
echo "📝 Next steps:"
echo "  1. Clone repository:"
echo "     cd $APP_DIR"
echo "     git clone https://github.com/Lovedealer8472/TH.is.git ."
echo ""
echo "  2. Create .env.local file:"
echo "     nano .env.local"
echo "     (Add your SMTP credentials)"
echo ""
echo "  3. Run deployment:"
echo "     chmod +x deploy.sh"
echo "     ./deploy.sh"
echo ""
echo "  4. Set up Nginx (see DEPLOYMENT.md for configuration)"
echo ""
echo "  5. Set up SSL certificate:"
echo "     certbot --nginx -d tolvuhvislarinn.is -d www.tolvuhvislarinn.is"
