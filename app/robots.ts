import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Use www as canonical URL
  const baseUrl = 'https://www.tolvuhvislarinn.is';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
