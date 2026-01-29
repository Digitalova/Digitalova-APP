import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Conseils & actualités digitales à Mons',
  description:
    "Articles et conseils SEO, web et marketing digital par DIGITALOVA à Mons. Astuces référencement local, création de sites web et visibilité digitale pour booster votre business en Belgique.",
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
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
    ICBM: '50.4542, 3.9567',
  },
  alternates: {
    canonical: 'https://digitalova.be/blog',
  },
  openGraph: {
    type: 'website',
    url: 'https://digitalova.be/blog',
    title: 'Blog DIGITALOVA | Articles SEO & Web à Mons',
    description:
      "Conseils SEO, création de sites web et marketing digital en Hainaut. Articles pour améliorer votre visibilité locale.",
    images: [
      {
        url: 'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/LogoDIGITALOVA2026D.webp',
        width: 1200,
        height: 630,
        alt: 'Blog Digitalova - Articles SEO Mons',
      },
    ],
    locale: 'fr_BE',
    siteName: 'Digitalova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog DIGITALOVA | Articles SEO & Web à Mons',
    description: 'Conseils SEO et web pour booster votre visibilité locale en Belgique.',
    images: ['https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/LogoDIGITALOVA2026D.webp'],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
