import { NextResponse } from "next/server";
import { articles } from "../blog/articles-data";

export async function GET() {
  const baseUrl = "https://digitalova.be";
  const lastModified = new Date(
    process.env.BUILD_TIME || Date.now()
  ).toISOString();

  const routes = [
    "/",
    "/services",
    "/services/creation-site-web",
    "/services/seo-referencement",
    "/services/google-business",
    "/services/automatisation-ia",
    "/portfolio",
    "/blog",
    ...articles.map((a) => `/blog/${a.slug}`),
    "/methode",
    "/contact",
    "/nous-suivre",
    "/partenaires",
    "/mentions-legales",
    "/rgpd",
  ];

  const urls = routes
    .map((path) => {
      const loc = `${baseUrl}${path === "/" ? "" : path}`;
      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastModified}</lastmod>
  </url>`;
    })
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
