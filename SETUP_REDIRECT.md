# Setup Redirect: tolvuhvislarinn.is → www.tolvuhvislarinn.is

This will redirect `tolvuhvislarinn.is` to `www.tolvuhvislarinn.is` (canonical URL).

## Quick Setup on Your Server

### 1. Backup Current Config

```bash
sudo cp /etc/nginx/sites-available/tolvuhvislarinn /etc/nginx/sites-available/tolvuhvislarinn.backup
```

### 2. Edit Nginx Configuration

```bash
sudo nano /etc/nginx/sites-available/tolvuhvislarinn
```

### 3. Replace with This Configuration

**Copy and paste this entire configuration:**

```nginx
# HTTP - Redirect non-www to www
server {
    listen 80;
    server_name tolvuhvislarinn.is;
    return 301 https://www.tolvuhvislarinn.is$request_uri;
}

# HTTP - www version (will be upgraded to HTTPS by Certbot)
server {
    listen 80;
    server_name www.tolvuhvislarinn.is;

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

# HTTPS - Redirect non-www to www
server {
    listen 443 ssl http2;
    server_name tolvuhvislarinn.is;
    
    # SSL certificates (update paths if different)
    ssl_certificate /etc/letsencrypt/live/tolvuhvislarinn.is/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tolvuhvislarinn.is/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    
    return 301 https://www.tolvuhvislarinn.is$request_uri;
}

# HTTPS - www version (canonical - main site)
server {
    listen 443 ssl http2;
    server_name www.tolvuhvislarinn.is;

    # SSL certificates
    ssl_certificate /etc/letsencrypt/live/tolvuhvislarinn.is/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tolvuhvislarinn.is/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

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

**Save:** Press `Ctrl+X`, then `Y`, then `Enter`

### 4. Test Configuration

```bash
sudo nginx -t
```

Should show: `nginx: configuration file /etc/nginx/nginx.conf test is successful`

### 5. Reload Nginx

```bash
sudo systemctl reload nginx
```

## Verify It Works

Test these URLs:
- `http://tolvuhvislarinn.is` → Should redirect to `https://www.tolvuhvislarinn.is`
- `https://tolvuhvislarinn.is` → Should redirect to `https://www.tolvuhvislarinn.is`
- `https://www.tolvuhvislarinn.is` → Should load normally

## Troubleshooting

**If SSL certificate paths are different:**

Check where your certificates are:
```bash
sudo ls -la /etc/letsencrypt/live/
```

Update the paths in the config above.

**If you get errors:**

Check Nginx error log:
```bash
sudo tail -f /var/log/nginx/error.log
```

**If certificates are missing:**

Generate them:
```bash
sudo certbot --nginx -d tolvuhvislarinn.is -d www.tolvuhvislarinn.is
```
