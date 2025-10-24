export default function SchemaMarkup() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Katy Welborn",
    "jobTitle": "Neurodivergent Life Coach",
    "description": "Late-diagnosed autistic life coach specializing in neurodivergent-affirming coaching for autistic and ADHD adults",
    "url": "https://coachkaty.help",
    "image": "https://coachkaty.help/katy1.webp",
    "email": "katy@coachkaty.help",
    "telephone": "+1-XXX-XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Johnson City",
      "addressRegion": "TN",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://facebook.com/ndcoachkaty",
      "https://instagram.com/4theneurodiverseby1",
      "https://gentlenook.com"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Masters of Social Work (MSW)"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "degree",
        "educationalLevel": "Master's Degree",
        "name": "Master of Social Work (MSW)",
        "description": "Advanced clinical training in therapy and mental health"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "certification",
        "name": "ICF-Accredited Neurodiversity Coaching Training",
        "description": "Professional coaching certification specializing in neurodivergent populations"
      }
    ],
    "knowsAbout": [
      "Autism",
      "ADHD",
      "Neurodivergent Coaching",
      "Trauma-Informed Care",
      "EMDR",
      "Acceptance and Commitment Therapy (ACT)",
      "Dialectical Behavior Therapy (DBT)",
      "Neurodiversity-Affirming Practice",
      "Late Diagnosis Support",
      "Autistic Burnout",
      "Self-Acceptance",
      "LGBTQIA+ Affirming Care"
    ],
    "memberOf": {
      "@type": "ProfessionalService",
      "name": "Coach Katy"
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Coach Katy",
    "description": "Neurodivergent-affirming life coaching for late-diagnosed autistic and ADHD adults",
    "url": "https://coachkaty.help",
    "logo": "https://coachkaty.help/coach.svg",
    "image": "https://coachkaty.help/katy1.webp",
    "telephone": "+1-XXX-XXX-XXXX",
    "email": "katy@coachkaty.help",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Johnson City",
      "addressRegion": "TN",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "State",
        "name": "Tennessee"
      }
    ],
    "serviceType": [
      "Life Coaching",
      "Neurodivergent Coaching",
      "Autism Coaching",
      "ADHD Coaching"
    ],
    "priceRange": "$50-$100",
    "paymentAccepted": "Cash, Credit Card",
    "founder": {
      "@type": "Person",
      "name": "Katy Welborn"
    },
    "sameAs": [
      "https://facebook.com/ndcoachkaty",
      "https://instagram.com/4theneurodiverseby1"
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Neurodivergent Life Coaching",
    "provider": {
      "@type": "Person",
      "name": "Katy Welborn",
      "jobTitle": "Neurodivergent Life Coach"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "audience": {
      "@type": "PeopleAudience",
      "audienceType": "Neurodivergent Adults",
      "description": "Late-diagnosed autistic and ADHD adults seeking neurodivergent-affirming support"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Free 30-Minute Consultation",
        "description": "Complimentary initial consultation to determine fit",
        "price": "0",
        "priceCurrency": "USD"
      },
      {
        "@type": "Offer",
        "name": "Individual Coaching Sessions",
        "description": "One-on-one neurodivergent-affirming coaching",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": "50",
          "maxPrice": "100",
          "priceCurrency": "USD",
          "description": "Sliding scale pricing based on financial situation"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
