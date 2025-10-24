import { getAllPosts } from '@/lib/sanity';

export default async function sitemap() {
  const baseUrl = 'https://coachkaty.help';

  // Get all blog posts
  const posts = await getAllPosts();

  // Map blog posts to sitemap entries
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/posts/${post.slug.current}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Static pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/brutalist-multi-page-dark`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/brutalist-about-dark`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/brutalist-services-dark`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/main-pages-pricing-1-dark`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brutalist-blog-dark`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/brutalist-contact-dark`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/brutalist-booking-dark`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    // Note: johnson-city-tennessee-coaching is excluded as it has noindex
  ];

  return [...routes, ...blogUrls];
}
