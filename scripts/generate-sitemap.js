const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '14fm2ae3',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

async function generateSitemap() {
  const baseUrl = 'https://coachkaty.help';

  // Get all blog posts
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      slug,
      publishedAt
    }
  `);

  // Static pages
  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'monthly' },
    { url: '/home', priority: '1.0', changefreq: 'monthly' },
    { url: '/about', priority: '0.9', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'monthly' },
    { url: '/pricing', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/contact', priority: '0.7', changefreq: 'yearly' },
    { url: '/booking', priority: '0.9', changefreq: 'yearly' },
    { url: '/johnson-city-tennessee-coaching', priority: '0.8', changefreq: 'monthly' },
  ];

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
${posts.map(post => `  <url>
    <loc>${baseUrl}/blog/${post.slug.current}</loc>
    <lastmod>${post.publishedAt ? new Date(post.publishedAt).toISOString() : new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write to public folder
  const publicPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  fs.writeFileSync(publicPath, sitemap);

  console.log(`✅ Sitemap generated successfully at ${publicPath}`);
  console.log(`📝 Included ${staticPages.length} static pages and ${posts.length} blog posts`);
}

generateSitemap().catch(console.error);
