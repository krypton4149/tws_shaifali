import { useEffect } from 'react';

export default function SEO() {
  useEffect(() => {
    // Set document title
    document.title = 'TWS Transformation With Shaifali | Best Salon in Shikohabad | Bridal Makeup Studio';

    // Create or update meta tags
    const metaTags = [
      { name: 'description', content: 'TWS Transformation With Shaifali - Premier luxury salon and bridal makeup studio in Shikohabad. Expert bridal makeup, HD makeup, hair styling, facial, hair spa. Book now: +91 93892 87463' },
      { name: 'keywords', content: 'best salon in shikohabad, beauty parlour shikohabad, bridal makeup shikohabad, hd makeup artist, hair spa shikohabad, party makeup, luxury salon, makeup studio, hair styling, facial shikohabad' },
      { name: 'author', content: 'TWS Transformation With Shaifali' },
      { name: 'robots', content: 'index, follow' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },

      // Open Graph / Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'TWS Transformation With Shaifali | Best Salon in Shikohabad' },
      { property: 'og:description', content: 'Premier luxury salon and bridal makeup studio in Shikohabad. Expert bridal transformations, HD makeup, hair styling, and beauty services.' },
      { property: 'og:image', content: '/logo.png' },
      { property: 'og:url', content: 'https://twstransformation.com' },
      { property: 'og:site_name', content: 'TWS Transformation With Shaifali' },

      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'TWS Transformation With Shaifali | Best Salon in Shikohabad' },
      { name: 'twitter:description', content: 'Premier luxury salon and bridal makeup studio in Shikohabad' },
      { name: 'twitter:image', content: '/logo.png' },

      // Local Business Schema
      { name: 'geo.region', content: 'IN-UP' },
      { name: 'geo.placename', content: 'Shikohabad' },
      { name: 'geo.position', content: '27.1089;78.5893' },
    ];

    metaTags.forEach(({ name, property, content }) => {
      const attribute = name ? 'name' : 'property';
      const value = name || property;

      let meta = document.querySelector(`meta[${attribute}="${value}"]`);

      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, value!);
        document.head.appendChild(meta);
      }

      meta.setAttribute('content', content);
    });

    // Add JSON-LD structured data for Local Business
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BeautySalon',
      name: 'TWS Transformation With Shaifali',
      image: '/logo.png',
      '@id': 'https://twstransformation.com',
      url: 'https://twstransformation.com',
      telephone: '+91-93892-87463',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '20 Foota Gali Ke Samne, Pratappur Road',
        addressLocality: 'Shikohabad',
        addressRegion: 'UP',
        postalCode: '283135',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 27.1089,
        longitude: 78.5893,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '10:00',
        closes: '20:00',
      },
      sameAs: ['https://instagram.com/tws_shaifali'],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '150',
      },
      makesOffer: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bridal Makeup',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HD Makeup',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hair Styling',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hair Spa',
          },
        },
      ],
    });

    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }
    document.head.appendChild(script);
  }, []);

  return null;
}
