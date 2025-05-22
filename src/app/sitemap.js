
export default function sitemap() {
  return [
    {
      url: 'https://repuestosmega.com.ar',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://repuestosmega.com.ar/replacements',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}