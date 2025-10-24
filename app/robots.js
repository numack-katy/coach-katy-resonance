export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/johnson-city-tennessee-coaching'],
    },
    sitemap: 'https://coachkaty.help/sitemap.xml',
  };
}
