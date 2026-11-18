import { getFacebookUrl } from '@/lib/social-links';

export default function StructuredData() {
  const siteUrl = 'https://www.tolvuhvislarinn.is';

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Tölvuhvíslarinn',
    image: `${siteUrl}/logo.png`,
    logo: `${siteUrl}/logo.png`,
    '@id': siteUrl,
    url: siteUrl,
    telephone: '+354-848-6755',
    email: 'dadi@tolvuhvislarinn.is',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Starmýri 23',
      postalCode: '740',
      addressLocality: 'Neskaupstaður',
      addressRegion: 'Austurland',
      addressCountry: 'IS',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 65.148,
      longitude: -13.683,
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
      description: 'Eftir samkomulagi',
    },
    areaServed: [
      { '@type': 'City', name: 'Neskaupstaður' },
      { '@type': 'City', name: 'Norðfjörður' },
      { '@type': 'City', name: 'Eskifjörður' },
      { '@type': 'City', name: 'Reyðarfjörður' },
      { '@type': 'City', name: 'Egilsstaðir' },
      { '@type': 'AdministrativeArea', name: 'Fjarðabyggð' },
      { '@type': 'AdministrativeArea', name: 'Austurland' },
    ],
    sameAs: [getFacebookUrl(), `${siteUrl}/projects`],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Tölvuþjónusta',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tölvuviðgerðir' } },
        { '@type': 'Offer', price: '6900', priceCurrency: 'ISK', itemOffered: { '@type': 'Service', name: 'Bilanagreining' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fartölvuviðgerðir' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SSD uppfærsla' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sérsmíði borðtölva' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tækniráðgjöf' } },
        {
          '@type': 'Offer',
          priceSpecification: { '@type': 'UnitPriceSpecification', minPrice: '3900', priceCurrency: 'ISK', unitText: 'spóla' },
          url: `${siteUrl}/services/vhs-minidv`,
          itemOffered: { '@type': 'Service', name: 'VHS, VHS-C og MiniDV yfirfærsla á USB', areaServed: { '@type': 'Country', name: 'Iceland' } },
        },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gagnaflutningur og öryggisafrit' } },
      ],
    },
    description:
      'Tölvuviðgerðir, sérsmíði borðtölva og tækniráðgjöf í Neskaupstað og á Austurlandi. VHS, VHS-C og MiniDV spólur færðar á USB, líka sendar í pósti af öllu landinu.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
