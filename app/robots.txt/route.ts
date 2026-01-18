import { NextResponse } from 'next/server';

export async function GET() {
  const robotsContent = `User-agent: *

Allow: /

Sitemap: https://digitalova.be/sitemap.xml

User-agent: GPTBot
Disallow: /`;

  return new NextResponse(robotsContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
