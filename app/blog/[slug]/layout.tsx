import type { Metadata } from 'next';
import { articles, getArticleBySlug } from '../articles-data';

type Props = {
  params: { slug: string };
  children: React.ReactNode;
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);

  if (!article) {
    return {
      title: 'Article non trouvé | Blog Digitalova',
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${article.title} | Blog DIGITALOVA`,
    description: article.excerpt,
    robots: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    authors: [{ name: 'Digitalova - Agence Web Mons' }],
    publisher: 'Digitalova',
    other: {
      'geo.region': 'BE-WHT',
      'geo.placename': 'Mons',
      'geo.position': '50.4542;3.9567',
      ICBM: '50.4542, 3.9567',
    },
    alternates: {
      canonical: `https://digitalova.be/blog/${article.slug}`,
    },
    openGraph: {
      type: 'article',
      url: `https://digitalova.be/blog/${article.slug}`,
      title: `${article.title} | Blog DIGITALOVA`,
      description: article.excerpt,
      images: [
        {
          url: article.image,
          width: 1200,
          height: 630,
          alt: article.imageAlt || article.title,
        },
      ],
      locale: 'fr_BE',
      siteName: 'Digitalova',
      publishedTime: article.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} | Blog DIGITALOVA`,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default function ArticleLayout({ children }: Props) {
  return <>{children}</>;
}
