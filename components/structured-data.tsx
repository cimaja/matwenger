export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Mathias Wendlinger',
    jobTitle: 'Principal Design Manager',
    worksFor: {
      '@type': 'Organization',
      name: 'Microsoft',
    },
    url: 'https://matwenger.at',
    sameAs: [
      'https://www.linkedin.com/in/mathias-wendlinger/',
      'https://github.com/matwenger',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'University of Applied Sciences Upper Austria',
    },
    knowsAbout: [
      'User Experience Design',
      'AI-driven Design',
      'Enterprise Software',
      'Product Design',
      'Design Systems',
      'Interaction Design',
    ],
    description: 'Principal Design Manager specializing in AI-driven experiences, enterprise solutions, and innovative digital products at Microsoft with 18+ years of experience.',
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
