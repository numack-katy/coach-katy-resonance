export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://coachkaty.help';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
