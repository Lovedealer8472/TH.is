'use client';

import { useI18n } from '@/lib/i18n';

interface SocialMediaLinksProps {
  variant?: 'footer' | 'inline';
  showLabels?: boolean;
}

export default function SocialMediaLinks({ variant = 'footer', showLabels = false }: SocialMediaLinksProps) {
  const { t } = useI18n();
  
  // WhatsApp: Icelandic phone number format (remove dashes, add country code)
  const whatsappNumber = '3548486755'; // +354 848-6755
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;
  
  // Facebook and Messenger - Configure via environment variable or use default
  const facebookPage = process.env.NEXT_PUBLIC_FACEBOOK_PAGE || 'your-page-username';
  
  // Handle different Facebook URL formats
  let facebookUrl = '#';
  let messengerUrl = '#';
  
  if (facebookPage !== 'your-page-username') {
    if (facebookPage.startsWith('http')) {
      // Full URL provided (e.g., https://www.facebook.com/profile.php?id=61576150526759)
      facebookUrl = facebookPage;
      
      // Extract ID from profile URL for Messenger
      const profileIdMatch = facebookPage.match(/[?&]id=(\d+)/);
      if (profileIdMatch) {
        // Note: Messenger typically works better with Pages, not personal profiles
        messengerUrl = `https://m.me/${profileIdMatch[1]}`;
      } else {
        // Try to extract username from URL
        const usernameMatch = facebookPage.match(/facebook\.com\/([^/?]+)/);
        if (usernameMatch && usernameMatch[1] !== 'profile.php') {
          messengerUrl = `https://m.me/${usernameMatch[1]}`;
        }
      }
    } else {
      // Username provided (e.g., 'tolvuhvislarinn')
      facebookUrl = `https://www.facebook.com/${facebookPage}`;
      messengerUrl = `https://m.me/${facebookPage}`;
    }
  }

  const socialLinks = [
    {
      name: 'Facebook',
      url: facebookUrl,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
      color: 'hover:text-blue-500',
    },
    {
      name: 'WhatsApp',
      url: whatsappUrl,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      ),
      color: 'hover:text-green-500',
    },
    {
      name: 'Messenger',
      url: messengerUrl,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 0C5.373 0 0 4.925 0 11c0 3.368 1.593 6.378 4.072 8.325L2.838 24l5.09-2.785C9.198 21.526 10.554 21.8 12 21.8c6.627 0 12-4.925 12-11C24 4.925 18.627 0 12 0zm1.191 13.307l-3.247-3.419L4.582 13.3l5.582-5.89 3.248 3.419 5.342-3.422-5.581 5.9z"/>
        </svg>
      ),
      color: 'hover:text-blue-400',
    },
  ];

  if (variant === 'footer') {
    return (
      <div className="flex items-center gap-4">
        {showLabels && <span className="text-sm text-gray-400">{t.social.followUs || 'Fylgdu okkur'}:</span>}
        <div className="flex gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-400 ${link.color} transition-colors`}
              aria-label={link.name}
              title={link.name}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    );
  }

  // Inline variant
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 px-4 py-2 bg-gray-800 text-gray-300 rounded-lg ${link.color} transition-colors hover:bg-gray-700`}
        >
          {link.icon}
          {showLabels && <span>{link.name}</span>}
        </a>
      ))}
    </div>
  );
}
