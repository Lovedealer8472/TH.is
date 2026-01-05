#!/bin/bash

# Update script - run this after pulling new code

echo "🔄 Updating application..."

# Install/update dependencies (need devDependencies for build)
echo "📥 Installing dependencies..."
npm install

# Build the application
echo "🔨 Building application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Restart PM2
echo "🔄 Restarting application..."
pm2 restart tolvuhvislarinn

echo "✅ Update complete!"
pm2 status
