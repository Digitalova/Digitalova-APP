import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Réseaux sociaux & Avis clients',
  description: 'Suivez DIGITALOVA sur LinkedIn, Instagram, Facebook, TikTok et WhatsApp. Laissez un avis Google ou un avis directement sur le site : votre soutien booste notre visibilité locale à Mons et en Hainaut.',
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
        url: 'https://digitalova.be/og-image-social.jpg',
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
    images: ['https://digitalova.be/og-image-social.jpg'],
  },
};

export default function NousSuivreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
