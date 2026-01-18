import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://digitalova.be';
  const lastModified = new Date();

  const routes = [
    '',
    '/services',
    '/services/creation-site-web',
    '/services/seo-referencement',
    '/services/google-business',
    '/services/automatisation-ia',
    '/portfolio',
    '/methode',
    '/contact',
    '/nous-suivre',
    '/partenaires',
    '/mentions-legales',
    '/rgpd',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
