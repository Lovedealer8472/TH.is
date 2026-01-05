export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Tölvuhvíslarinn',
    image: 'https://www.tolvuhvislarinn.is',
    '@id': 'https://www.tolvuhvislarinn.is',
    url: 'https://www.tolvuhvislarinn.is',
    telephone: '848-6755',
    email: 'tolvuhvislarinn@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Neskaupstaður',
      addressCountry: 'IS',
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'IS',
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
    },
    areaServed: {
      '@type': 'Country',
      name: 'Iceland',
    },
    serviceType: [
      'Computer Repair',
      'Custom PC Builds',
      'IT Consulting',
      'Data Recovery',
      'Network Setup',
    ],
    description: 'Tölvuviðgerðir, sérsmíði borðtölva, gagnavernd og tækniráðgjöf í Neskaupstað. Viðgerðir, uppfærslur og ráðgjöf fyrir einstaklinga og smáfyrirtæki.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
