import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ma méthode de conception Web à Mons',
  description: 'Découvrez les 5 étapes de votre projet web à Mons : Audit, Analyse concurrentielle, Diagnostic, Solutions sur-mesure et Plan d\'action. La méthode Digitalova pour booster votre CA.',
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
    canonical: 'https://digitalova.be/methode',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    siteName: 'DIGITALOVA',
    url: 'https://digitalova.be/methode',
    title: 'Ma méthode Freelance Web à Mons | DIGITALOVA',
    description: 'Une méthode claire en 5 étapes pour transformer votre visibilité en ligne à Mons. Audit gratuit et plan d\'action personnalisé.',
    images: [
      {
        url: 'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg',
        width: 1200,
        height: 630,
        alt: 'Méthode Digitalova',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Méthode Digitalova : Votre Site Web à Mons en 5 étapes',
    description: 'De l\'audit à la mise en ligne, découvrez comment DIGITALOVA propulse votre entreprise à Mons.',
    images: ['https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg'],
  },
};

export default function MethodeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
