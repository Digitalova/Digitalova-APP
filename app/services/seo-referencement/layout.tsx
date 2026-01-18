import type { Metadata } from 'next';

const HERO_IMAGE = 'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/referencement-local-seo.webp';

export const metadata: Metadata = {
  title: 'Optimisation SEO à Mons | Référencement Naturel - DIGITALOVA',
  description: 'Boostez votre visibilité sur Google avec DIGITALOVA à Mons. Audit SEO technique, recherche de mots-clés stratégiques et optimisation de contenu pour dominer votre marché local.',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  authors: [{ name: 'Digitalova - Agence Web Mons' }],
  publisher: 'Digitalova',
  other: {
    'geo.region': 'BE-WHT',
    'geo.placename': 'Mons',
    'geo.position': '50.4542;3.9567',
    'ICBM': '50.4542, 3.9567',
  },
  alternates: {
    canonical: 'https://digitalova.be/services/seo-referencement',
  },
  openGraph: {
    type: 'article',
    title: 'Dominez Google à Mons avec nos Stratégies SEO | DIGITALOVA',
    description: 'Découvrez comment nous propulsons votre entreprise en première page de Google grâce au SEO local.',
    url: 'https://digitalova.be/services/seo-referencement',
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: 'SEO DIGITALOVA',
      },
    ],
    siteName: 'Digitalova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert SEO Mons - Digitalova',
    description: 'Découvrez comment nous propulsons votre entreprise en première page de Google grâce au SEO local.',
    images: [HERO_IMAGE],
  },
};

export default function SEOReferencementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
