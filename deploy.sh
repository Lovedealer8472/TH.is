#!/bin/bash

# Deployment script for Tölvuhvíslarinn
# Run this on your Linux server after uploading the code

echo "🚀 Starting deployment..."

# Check Node.js version
echo "📦 Checking Node.js version..."
node_version=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$node_version" -lt 18 ]; then
    echo "❌ Node.js 18+ required. Current version: $(node -v)"
    exit 1
fi
echo "✅ Node.js version: $(node -v)"

# Install dependencies (need devDependencies for build)
echo "📥 Installing dependencies..."
npm install

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "⚠️  .env.local not found!"
    echo "📝 Creating .env.local from example..."
    if [ -f .env.production.example ]; then
        cp .env.production.example .env.local
        echo "⚠️  Please edit .env.local with your actual credentials before continuing!"
        exit 1
    else
        echo "❌ .env.production.example not found. Please create .env.local manually."
        exit 1
    fi
fi

# Build the application
echo "🔨 Building application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build successful!"

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    npm install -g pm2
fi

# Stop existing instance if running
echo "🛑 Stopping existing instance (if any)..."
pm2 stop tolvuhvislarinn 2>/dev/null || true
pm2 delete tolvuhvislarinn 2>/dev/null || true

# Start with PM2
echo "🚀 Starting application with PM2..."
pm2 start npm --name "tolvuhvislarinn" -- start

# Save PM2 configuration
echo "💾 Saving PM2 configuration..."
pm2 save

echo "✅ Deployment complete!"
echo ""
echo "📊 Application status:"
pm2 status

echo ""
echo "📝 Useful commands:"
echo "  pm2 logs tolvuhvislarinn    - View logs"
echo "  pm2 restart tolvuhvislarinn - Restart application"
echo "  pm2 stop tolvuhvislarinn    - Stop application"
echo "  pm2 monit                   - Monitor application"
