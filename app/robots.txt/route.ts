import { NextResponse } from 'next/server';

export async function GET() {

  const robotsContent = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://digitalova.be/sitemap.xml`;

  return new NextResponse(robotsContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate', 
    },
  });
}