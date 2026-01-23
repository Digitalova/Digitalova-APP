import type { Metadata } from 'next';

const HERO_IMG = 'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg';

export const metadata: Metadata = {
  title: 'Mes Solutions Digitales & Marketing à Mons',
  description: "Services Digitalova : création de site web professionnel, référencement SEO et optimisation Google Business en Belgique. Sites rapides, design premium et visibilité durable.",
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
    title: 'Mes Solutions Web & Marketing Digitale | DIGITALOVA',
    description: 'Site web, référencement SEO, Google Business Profile et automatisation IA : découvrez la solution adaptée à votre projet.',
    images: [
      {
        url: HERO_IMG,
        width: 1200,
        height: 630,
        alt: 'Solutions de Création de Sites Web et Marketing Digitale - DIGITALOVA Mons',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mes Solutions Web & Marketing digitales | DIGITALOVA',
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
