import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RGPD - Politique de Protection des Données',
  description: 'Découvrez la politique RGPD de DIGITALOVA : données collectées, finalités, base légale, durée de conservation, cookies, sécurité et droits des utilisateurs.',
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
    canonical: 'https://digitalova.be/rgpd',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    url: 'https://digitalova.be/rgpd',
    siteName: 'DIGITALOVA',
    title: 'RGPD - Politique de Protection des Données | DIGITALOVA',
    description:
      'Politique RGPD de DIGITALOVA : données collectées, finalités, base légale, destinataires, conservation, droits et cookies.',
    images: [
      {
        url: 'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg',
        width: 1200,
        height: 630,
        alt: 'Politique RGPD Digitalova',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RGPD - Politique de Protection des Données | DIGITALOVA',
    description: 'Consultez la politique RGPD de DIGITALOVA : vos droits, cookies, sécurité, conservation et traitement des données.',
    images: [
      'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg',
    ],
  },
};

export default function RGPDLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
