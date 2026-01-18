import type { Metadata } from 'next';

const HERO_IMAGE = 'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/IMagePourPortfoliog.webp';

export const metadata: Metadata = {
  title: 'Création de Sites Web à Mons - Vitrine & E-commerce | DIGITALOVA',
  description: 'Création de sites web professionnels à Mons : vitrine, e-commerce, sur mesure. Design moderne, performance optimale et SEO intégré. Devis gratuit.',
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
  alternates: {
    canonical: 'https://digitalova.be/services/creation-site-web',
  },
  openGraph: {
    type: 'website',
    url: 'https://digitalova.be/services/creation-site-web',
    title: 'Création de Sites Web à Mons | DIGITALOVA',
    description: 'Sites web professionnels sur mesure à Mons : vitrine, e-commerce, design moderne et performance optimale.',
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Création de Sites Web DIGITALOVA',
      },
    ],
  },
};

export default function CreationSiteWebLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
