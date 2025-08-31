import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'service';
  serviceName?: string;
  serviceArea?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image = '/rapid-roofing-logo.png',
  url = typeof window !== 'undefined' ? window.location.href : '',
  type = 'website',
  serviceName,
  serviceArea = 'Cypress, TX',
}) => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "Rapid Roofing & Construction LLC",
    "image": "https://rapidroofingandconstruction.com/rapid-roofing-logo.png",
    "telephone": "+12817981357",
    "email": "therapidroofingandconstruction@gmail.com",
    "url": "https://rapidroofingandconstruction.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "P.O. Box 1587",
      "addressLocality": "Cypress",
      "addressRegion": "TX",
      "postalCode": "77410",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 29.9668,
      "longitude": -95.6972
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Cypress",
        "containedInPlace": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "Katy",
        "containedInPlace": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "Spring",
        "containedInPlace": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "Tomball",
        "containedInPlace": {
          "@type": "State",
          "name": "Texas"
        }
      },
      {
        "@type": "City",
        "name": "The Woodlands",
        "containedInPlace": {
          "@type": "State",
          "name": "Texas"
        }
      }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    },
    "serviceOffered": [
      {
        "@type": "Service",
        "name": "Emergency Roof Repair",
        "description": "24/7 emergency roof repair services"
      },
      {
        "@type": "Service",
        "name": "Roof Replacement",
        "description": "Complete roof replacement services"
      },
      {
        "@type": "Service",
        "name": "Storm Damage Repair",
        "description": "Insurance claim assistance and storm damage repairs"
      },
      {
        "@type": "Service",
        "name": "Commercial Roofing",
        "description": "Commercial roofing installation and maintenance"
      },
      {
        "@type": "Service",
        "name": "Roof Inspection",
        "description": "Free comprehensive roof inspections"
      }
    ]
  };

  const serviceSchema = serviceName ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "provider": {
      "@type": "RoofingContractor",
      "name": "Rapid Roofing & Construction LLC",
      "telephone": "+12817981357",
      "url": "https://rapidroofingandconstruction.com"
    },
    "areaServed": {
      "@type": "City",
      "name": serviceArea.split(',')[0],
      "containedInPlace": {
        "@type": "State",
        "name": "Texas"
      }
    }
  } : null;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Rapid Roofing & Construction LLC" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Local Business */}
      <meta name="geo.region" content="US-TX" />
      <meta name="geo.placename" content="Cypress" />
      <meta name="geo.position" content="29.9668;-95.6972" />
      <meta name="ICBM" content="29.9668, -95.6972" />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(businessSchema)}
      </script>
      
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;