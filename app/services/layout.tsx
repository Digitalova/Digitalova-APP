import type { Metadata } from 'next';

const HERO_IMG = 'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg';

export const metadata: Metadata = {
  title: 'Mes Solutions Web & Marketing à Mons | DIGITALOVA',
  description: 'Découvrez mes solutions : création de sites web, SEO, Google Business Profile et automatisation IA. Des outils concrets pour faire grandir votre activité.',
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
  other: {
    'geo.region': 'BE-WHT',
    'geo.placename': 'Mons',
    'geo.position': '50.4542;3.9567',
    'ICBM': '50.4542, 3.9567',
  },
  authors: [{ name: 'Digitalova - Agence Web' }],
  publisher: 'Digitalova',
  alternates: {
    canonical: 'https://digitalova.be/services',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    siteName: 'DIGITALOVA',
    url: 'https://digitalova.be/services',
    title: 'Mes Solutions Web & IA | DIGITALOVA',
    description: 'Site web, SEO, Google Business Profile et automatisation IA : découvrez la solution adaptée à votre projet.',
    images: [
      {
        url: HERO_IMG,
        width: 1200,
        height: 630,
        alt: 'Solutions Web & IA DIGITALOVA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mes Solutions Web & IA | DIGITALOVA',
    description: 'Site web, SEO, Google Business Profile et automatisation IA : découvrez la solution adaptée à votre projet.',
    images: [HERO_IMG],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
