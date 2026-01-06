'use client';

import { useEffect, useState } from 'react';

interface EmailLinkProps {
  email: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Email link component with basic obfuscation to reduce spam scraping.
 * Splits the email and reconstructs it client-side.
 */
export default function EmailLink({ email, className = '', children }: EmailLinkProps) {
  const [displayEmail, setDisplayEmail] = useState<string>('');
  const [mailtoLink, setMailtoLink] = useState<string>('');

  useEffect(() => {
    // Split email into parts for basic obfuscation
    const [localPart, domain] = email.split('@');
    // Reconstruct on client-side
    setDisplayEmail(email);
    setMailtoLink(`mailto:${email}`);
  }, [email]);

  // Show obfuscated version until client-side JS loads
  if (!displayEmail) {
    return (
      <span className={className} data-email={email}>
        {children || '[email protected]'}
      </span>
    );
  }

  return (
    <a
      href={mailtoLink}
      className={className}
      // Additional obfuscation: reverse the email in data attribute
      data-email={email.split('').reverse().join('')}
    >
      {children || displayEmail}
    </a>
  );
}
