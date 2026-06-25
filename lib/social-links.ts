const WHATSAPP_NUMBER = '3548486755';

export function getWhatsAppUrl(message?: string) {
  const text = message ?? 'Hæ, ég vildi spyrja um tölvuþjónustu';
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getMessengerUrl() {
  const facebookPage = process.env.NEXT_PUBLIC_FACEBOOK_PAGE || '';
  if (!facebookPage || facebookPage === 'your-page-username') {
    return null;
  }
  if (facebookPage.startsWith('http')) {
    const profileIdMatch = facebookPage.match(/[?&]id=(\d+)/);
    if (profileIdMatch) {
      return `https://m.me/${profileIdMatch[1]}`;
    }
    const usernameMatch = facebookPage.match(/facebook\.com\/([^/?]+)/);
    if (usernameMatch && usernameMatch[1] !== 'profile.php') {
      return `https://m.me/${usernameMatch[1]}`;
    }
    return null;
  }
  return `https://m.me/${facebookPage}`;
}

export function getFacebookUrl() {
  const facebookPage = process.env.NEXT_PUBLIC_FACEBOOK_PAGE || '';
  if (!facebookPage || facebookPage === 'your-page-username') {
    return 'https://www.facebook.com/tolvuhvislarinn';
  }
  if (facebookPage.startsWith('http')) {
    return facebookPage;
  }
  return `https://www.facebook.com/${facebookPage}`;
}

export const PHONE_DISPLAY = '848-6755';
export const PHONE_TEL = 'tel:+3548486755';
