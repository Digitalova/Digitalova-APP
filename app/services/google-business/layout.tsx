import type { Metadata } from 'next';

const HERO_IMAGE = 'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/1637335605565.webp';

export const metadata: Metadata = {
  title: 'Gestion de fiche Google Business à Mons - DIGITALOVA',
  description: 'Optimisation et gestion Google Business Profile : visibilité Maps, avis, posts, appels et itinéraires. Audit gratuit et plan d\'action local.',
  robots: {
    index: true,
    follow: true,
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
  alternates: {
    canonical: 'https://digitalova.be/services/google-business',
  },
  openGraph: {
    type: 'website',
    url: 'https://digitalova.be/services/google-business',
    title: 'Optimisation Google Business Profile à Mons | DIGITALOVA',
    description: 'Optimisation et gestion Google Business Profile : visibilité Maps, avis, posts, appels et itinéraires.',
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Google Business DIGITALOVA',
      },
    ],
  },
};

export default function GoogleBusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
