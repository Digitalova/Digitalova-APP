import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réseaux sociaux & Avis clients',
  description:"Suivez Digitalova à Mons sur LinkedIn, Instagram, Facebook et TikTok. Avis Google, actualités web et projets digitaux pour booster votre visibilité locale.",
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
    'ICBM': '50.4542, 3.9567',
  },
  alternates: {
    canonical: 'https://digitalova.be/nous-suivre',
  },
  openGraph: {
    type: 'website',
    url: 'https://digitalova.be/nous-suivre',
    title: 'Rejoignez la Communauté DIGITALOVA | Avis & Réseaux',
    description: 'Découvrez les coulisses de l\'agence, nos astuces web et laissez votre avis pour soutenir l\'entrepreneuriat à Mons.',
    images: [
      {
        url: 'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/IMagePourPortfoliog.webp',
        width: 1200,
        height: 630,
        alt: 'Communauté DIGITALOVA',
      },
    ],
    locale: 'fr_BE',
    siteName: 'Digitalova',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soutenir DIGITALOVA à Mons',
    description: 'Suivez l\'agence et laissez votre avis sur nos solutions Web & IA.',
    images: ['https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/IMagePourPortfoliog.webp'],
  },
};

export default function NousSuivreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
