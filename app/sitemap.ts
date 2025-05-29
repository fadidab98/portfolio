import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://fadidabboura.com';

  // Static routes
  const staticRoutes = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1,
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/website-scan`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Placeholder for dynamic routes (e.g., project pages)
  // Replace with actual logic to fetch dynamic content if needed
  const dynamicRoutes: MetadataRoute.Sitemap = [
    // Example: Add dynamic project pages
    // {
    //   url: `${baseUrl}/project/machine-learning-dashboard`,
    //   lastModified: new Date('2024-06-01'),
    //   changeFrequency: 'monthly',
    //   priority: 0.6,
    // },
  ];

  return [...staticRoutes, ...dynamicRoutes];
}