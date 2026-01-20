import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact & Devis sur mesure',
  description: 'Remplissez le formualaire de contact ici ou choisissez un créneau d\'appel avec Digitalova sur Calendly. Devis gratuit pour site vitrine, e-commerce et référencementSEO. Réponse rapide garantie.',
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
    canonical: 'https://digitalova.be/contact',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    siteName: 'DIGITALOVA',
    url: 'https://digitalova.be/contact',
    title: 'Contactez DIGITALOVA à Mons | Disponible 24h/24 & 7j/7',
    description: 'Projet de site web, SEO ou automatisation à Mons ? Obtenez votre devis gratuit immédiatement. Nous sommes à votre écoute 24/7.',
    images: [
      {
        url: 'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg',
        width: 1200,
        height: 630,
        alt: 'Contact DIGITALOVA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contactez DIGITALOVA - Agence Web Mons (24/7)',
    description: 'Demandez votre audit gratuit pour votre projet web à Mons. Réponse ultra-rapide 24h/24.',
    images: ['https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
