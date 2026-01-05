# Social Media Integration Setup

This website includes integration with Facebook, WhatsApp, and Messenger for easy customer contact.

## What's Included

1. **Social Media Links in Footer** - Facebook, WhatsApp, and Messenger icons
2. **Floating WhatsApp Button** - Quick contact button that appears on all pages (bottom-right)
3. **Social Media Links on Contact Page** - Additional contact options with labels

## Configuration

### WhatsApp
✅ **Already configured** - Uses your phone number: `+354 848-6755`

The WhatsApp link opens a chat with a pre-filled message in Icelandic.

### Facebook & Messenger

To enable Facebook and Messenger links, you need to:

1. **Create or find your Facebook Page** (if you don't have one):
   - Go to [Facebook Pages](https://www.facebook.com/pages/create)
   - Create a page for "Tölvuhvíslarinn"
   - Note your page username (e.g., `tolvuhvislarinn`)

2. **Add your Facebook page to environment variables**:

   Create or update `.env.local`:
   ```bash
   NEXT_PUBLIC_FACEBOOK_PAGE=tolvuhvislarinn
   ```

   Or if you have a full URL:
   ```bash
   NEXT_PUBLIC_FACEBOOK_PAGE=https://www.facebook.com/tolvuhvislarinn
   ```

3. **Restart your development server** (or rebuild on production):
   ```bash
   npm run dev
   ```

### Example Facebook URL Formats

- **Simple username**: `tolvuhvislarinn` → `https://www.facebook.com/tolvuhvislarinn`
- **Full Page URL**: `https://www.facebook.com/tolvuhvislarinn` → Uses as-is
- **Profile URL with ID**: `https://www.facebook.com/profile.php?id=61576150526759` → Uses as-is
  - ⚠️ **Note**: Messenger works best with Facebook Pages, not personal profiles. Consider creating a [Facebook Page](https://www.facebook.com/pages/create) for better business integration.

## How It Works

### WhatsApp
- **Footer**: Icon link to WhatsApp chat
- **Floating Button**: Green button in bottom-right corner on all pages
- Opens WhatsApp with pre-filled message: "Hæ, ég vildi spyrja um tölvuþjónustu"

### Facebook
- **Footer**: Facebook icon link to your page
- **Contact Page**: Button with "Facebook" label
- Opens your Facebook business page

### Messenger
- **Footer**: Messenger icon link
- **Contact Page**: Button with "Messenger" label
- Opens Messenger chat with your page

## Customization

### Change WhatsApp Message

Edit `components/ui/FloatingWhatsApp.tsx`:
```typescript
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=YOUR_MESSAGE_HERE`;
```

### Hide Floating WhatsApp Button

Remove from `app/layout.tsx`:
```typescript
// Remove this line:
<FloatingWhatsApp />
```

### Change Social Media Icons Position

Edit `components/layout/Footer.tsx` to move the social links to a different section.

## Testing

1. **Local Testing**:
   - Run `npm run dev`
   - Check footer for social media icons
   - Look for green WhatsApp button in bottom-right
   - Click links to verify they work

2. **Production Testing**:
   - After deploying, test all links
   - Verify WhatsApp opens correctly on mobile
   - Check that Facebook/Messenger links work

## Notes

- The floating WhatsApp button is mobile-friendly and appears on all pages
- All links open in new tabs (`target="_blank"`)
- Icons use SVG for crisp display at any size
- Social links are accessible with proper ARIA labels

## Troubleshooting

**Facebook/Messenger links don't work:**
- Check that `NEXT_PUBLIC_FACEBOOK_PAGE` is set correctly
- Verify your Facebook page username is correct
- Make sure your page is public

**WhatsApp link doesn't work:**
- Verify phone number format: `3548486755` (country code + number without dashes)
- Test on mobile device (WhatsApp Web may require mobile app)

**Icons not showing:**
- Clear browser cache
- Check that SVG icons are rendering (inspect element)
- Verify Tailwind CSS is compiling correctly
