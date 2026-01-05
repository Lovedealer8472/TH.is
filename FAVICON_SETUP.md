# Favicon Setup Instructions

## How to Add Your Custom Icon

### Option 1: Using PNG/ICO Files (Recommended)

1. **Prepare your icon files:**
   - `icon.png` - 32x32 pixels (or larger, square)
   - `apple-icon.png` - 180x180 pixels (for iOS devices)
   - `favicon.ico` - 16x16 or 32x32 pixels (optional, for older browsers)

2. **Place files in the `app` directory:**
   ```
   app/
   ├── icon.png
   ├── apple-icon.png
   └── favicon.ico (optional)
   ```

3. **Next.js will automatically serve them at:**
   - `/icon.png`
   - `/apple-icon.png`
   - `/favicon.ico`

### Option 2: Using SVG Files

If you have SVG versions:
- `app/icon.svg` - Any size (scalable)
- `app/apple-icon.svg` - Any size (scalable)

### Option 3: Single File

If you only have one icon file:

1. Rename it to `icon.png` (or `icon.svg`)
2. Place it in the `app` directory
3. Copy it to also create `apple-icon.png` (resize to 180x180 if needed)

## File Formats Supported

- **PNG** - Best for photos/complex images (recommended for your icon)
- **SVG** - Best for simple graphics, scalable
- **ICO** - Traditional favicon format (optional)

## After Adding Files

1. **Commit the files:**
   ```bash
   git add app/icon.png app/apple-icon.png
   git commit -m "Add custom favicon"
   git push
   ```

2. **Deploy to server:**
   ```bash
   cd /var/www/tolvuhvislarinn
   git pull
   npm run build
   pm2 restart tolvuhvislarinn
   ```

3. **Clear browser cache** to see the new icon:
   - Chrome/Edge: Ctrl+Shift+Delete → Clear cached images
   - Or hard refresh: Ctrl+F5

## Current Setup

The configuration in `app/layout.tsx` supports:
- PNG files (preferred)
- SVG files (fallback)
- ICO files (for older browsers)

The system will automatically use the best available format.
