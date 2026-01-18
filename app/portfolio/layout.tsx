import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio - Réalisations de Sites Web à Mons | DIGITALOVA',
  description: 'Découvrez les créations de Sites Web par DIGITALOVA à Mons : e-commerce, sites vitrines, plateformes d\'automatisation IA sur mesure pour les entreprises.',
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
    canonical: 'https://digitalova.be/portfolio',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.digitalova.be/portfolio',
    title: 'Portfolio DIGITALOVA | Nos réalisations Web à Mons',
    description: 'Explorez nos derniers projets : du restaurant italien au cabinet d\'avocat. Design premium et performance SEO.',
    images: [
      {
        url: 'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg',
        width: 1200,
        height: 630,
        alt: 'Portfolio DIGITALOVA',
      },
    ],
    locale: 'fr_BE',
    siteName: 'DIGITALOVA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio DIGITALOVA | Nos réalisations Web à Mons',
    description: 'Explorez nos derniers projets : du restaurant italien au cabinet d\'avocat. Design premium et performance SEO.',
    images: ['https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg'],
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
