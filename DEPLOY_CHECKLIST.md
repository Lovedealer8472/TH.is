# Deployment Checklist

## ✅ Pre-Deployment (Already Done)
- [x] Git repository initialized
- [x] All code committed
- [x] Production build tested
- [x] Deployment scripts created
- [x] Documentation created

## 📋 What You Need to Do Now

### Step 1: Push to Git Repository (if using Git)

If you have a Git repository (GitHub, GitLab, etc.):

```bash
# Add your Git remote
git remote add origin <your-git-repo-url>

# Push code
git push -u origin master
```

**If you don't have a Git repository yet:**
- Create one on GitHub/GitLab
- Or skip to Step 2 (upload files directly)

### Step 2: Upload to Server

**Option A: Using Git (Recommended)**
```bash
# On your Linux server
git clone <your-git-repo-url>
cd tolvuhvislarinn
```

**Option B: Upload Files Directly**
- Use SCP, SFTP, or file manager
- Upload all files EXCEPT: `node_modules`, `.next`, `.git`
- Or compress and upload:
  ```bash
  # On Windows (PowerShell)
  Compress-Archive -Path * -DestinationPath tolvuhvislarinn.zip -Exclude node_modules,.next,.git
  # Then upload tolvuhvislarinn.zip to server and extract
  ```

### Step 3: On Your Server - Run Deployment

```bash
# Navigate to project directory
cd /path/to/tolvuhvislarinn

# Make scripts executable
chmod +x deploy.sh update.sh

# Create .env.local file
nano .env.local
```

Paste this into `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=dadi@tolvuhvislarinn.com
SMTP_PASS=jthiwuhokwfmrokd
SMTP_FROM=dadi@tolvuhvislarinn.com
CONTACT_EMAIL=tolvuhvislarinn@gmail.com
```

Save (Ctrl+X, Y, Enter)

```bash
# Run deployment script
./deploy.sh
```

### Step 4: Set Up Nginx (Optional - for port 80/443)

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

### Step 5: SSL Certificate (Optional - for HTTPS)

```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d tolvuhvislarinn.is -d www.tolvuhvislarinn.is
```

## ✅ Verification

1. Check if app is running:
   ```bash
   pm2 status
   ```

2. Check logs:
   ```bash
   pm2 logs tolvuhvislarinn
   ```

3. Test the website:
   - Visit: http://your-server-ip:3000
   - Or: http://tolvuhvislarinn.is (if Nginx configured)

4. Test contact form:
   - Go to /contact page
   - Submit a test message
   - Check your email inbox

## 🔧 Troubleshooting

- **Port 3000 in use?** Check: `lsof -i :3000` or `netstat -tulpn | grep 3000`
- **App crashes?** Check logs: `pm2 logs tolvuhvislarinn`
- **Can't connect?** Check firewall: `sudo ufw status`
- **Build fails?** Check Node.js version: `node -v` (needs 18+)

## 📝 Quick Reference Commands

```bash
pm2 status              # Check status
pm2 logs tolvuhvislarinn    # View logs
pm2 restart tolvuhvislarinn # Restart
pm2 stop tolvuhvislarinn    # Stop
pm2 monit                 # Monitor
```
