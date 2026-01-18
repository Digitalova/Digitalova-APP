import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://digitalova.be';
  const lastModified = new Date().toISOString();

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

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${route === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
