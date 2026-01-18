import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales - Informations Juridiques | DIGITALOVA',
  description: 'Consultez les mentions légales et informations juridiques de DIGITALOVA, votre freelance en création de sites web en Belgique.',
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
    canonical: 'https://digitalova.be/mentions-legales',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    url: 'https://digitalova.be/mentions-legales',
    siteName: 'DIGITALOVA',
    title: 'Mentions Légales - Informations Juridiques | DIGITALOVA',
    description:
      'Consultez les mentions légales, coordonnées, hébergement, propriété intellectuelle et protection des données (RGPD) de DIGITALOVA.',
    images: [
      {
        url: 'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg',
        width: 1200,
        height: 630,
        alt: 'Mentions Légales Digitalova',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mentions Légales - Informations Juridiques | DIGITALOVA',
    description: 'Mentions légales et informations juridiques de DIGITALOVA : coordonnées, hébergeur, RGPD, cookies.',
    images: [
      'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg',
    ],
  },
};

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
