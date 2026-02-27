import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://orfys.com";

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];

  // Dynamic routes - placeholder for blog, products, etc.
  // Example: Uncomment and modify when you have dynamic routes
  // const blogPosts = await getBlogPosts(); // Replace with your data fetching
  // const dynamicRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
  //   url: `${baseUrl}/blog/${post.slug}`,
  //   lastModified: post.updatedAt,
  //   changeFrequency: "weekly",
  //   priority: 0.8,
  // }));

  // const products = await getProducts(); // Replace with your data fetching
  // const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
  //   url: `${baseUrl}/products/${product.slug}`,
  //   lastModified: product.updatedAt,
  //   changeFrequency: "monthly",
  //   priority: 0.7,
  // }));

  return [...staticRoutes];
}

