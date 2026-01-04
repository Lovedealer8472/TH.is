'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="max-w-md w-full text-center">
        <h2 className="text-4xl font-bold text-gray-100 mb-4">404</h2>
        <p className="text-xl text-gray-400 mb-6">Síðan fannst ekki</p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
        >
          Til baka á forsíðu
        </Link>
      </div>
    </div>
  );
}
