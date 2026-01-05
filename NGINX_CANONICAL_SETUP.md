# Fix URL Canonicalization (www vs non-www)

This guide fixes the issue where `tolvuhvislarinn.is` and `www.tolvuhvislarinn.is` don't resolve to the same URL.

## Solution

We'll redirect `tolvuhvislarinn.is` → `www.tolvuhvislarinn.is` (www is canonical)

## Steps on Your Server

### 1. Backup Current Configuration

```bash
sudo cp /etc/nginx/sites-available/tolvuhvislarinn /etc/nginx/sites-available/tolvuhvislarinn.backup
```

### 2. Update Nginx Configuration

```bash
sudo nano /etc/nginx/sites-available/tolvuhvislarinn
```

**Replace the entire file content with:**

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
    
    # SSL certificates (Certbot should have added these)
    ssl_certificate /etc/letsencrypt/live/tolvuhvislarinn.is/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tolvuhvislarinn.is/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
    
    return 301 https://www.tolvuhvislarinn.is$request_uri;
}

# HTTPS - www version (canonical)
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

Save with `Ctrl+X`, `Y`, `Enter`.

### 3. Test Nginx Configuration

```bash
sudo nginx -t
```

You should see:
```
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

### 4. Reload Nginx

```bash
sudo systemctl reload nginx
```

### 5. Update Application (Rebuild with new sitemap)

```bash
cd /var/www/tolvuhvislarinn
git pull
npm run build
pm2 restart tolvuhvislarinn
```

## Verify It Works

1. Visit `https://tolvuhvislarinn.is` - should redirect to `https://www.tolvuhvislarinn.is`
2. Visit `https://www.tolvuhvislarinn.is` - should load normally
3. Check sitemap: `https://www.tolvuhvislarinn.is/sitemap.xml` - should use www URLs

## Troubleshooting

### If SSL certificates are in a different location:

Check where Certbot placed them:
```bash
sudo ls -la /etc/letsencrypt/live/
```

Update the paths in the Nginx config accordingly.

### If you get SSL errors:

Make sure Certbot has certificates for both domains:
```bash
sudo certbot certificates
```

If not, regenerate:
```bash
sudo certbot --nginx -d tolvuhvislarinn.is -d www.tolvuhvislarinn.is
```

### If redirects don't work:

Check Nginx error logs:
```bash
sudo tail -f /var/log/nginx/error.log
```

## After Fixing

1. Wait 5-10 minutes for changes to propagate
2. Re-test in Google Search Console
3. The canonicalization test should now pass
