import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programme Partenaires Élite Mons | DIGITALOVA - Commissions 24/7',
  description: 'Devenez partenaire DIGITALOVA à Mons. Jusqu\'à 25% de commission, paiement sous 72h et support 24/7. Transformez votre réseau en revenus dès aujourd\'hui.',
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
    canonical: 'https://digitalova.be/partenaires',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    siteName: 'DIGITALOVA',
    url: 'https://digitalova.be/partenaires',
    title: 'Gagnez jusqu\'à 25% de commission avec DIGITALOVA Mons',
    description: 'Rejoignez l\'élite du web à Mons. Programme de recommandation transparent : paiement éclair en 72h et crédits business offerts.',
    images: [
      {
        url: 'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg',
        width: 1200,
        height: 630,
        alt: 'Programme Partenaires DIGITALOVA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Programme Partenaire Digitalova | Mons',
    description: 'Rejoignez l\'élite du web à Mons. Programme de recommandation transparent : paiement éclair en 72h et crédits business offerts.',
    images: ['https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg'],
  },
};

export default function PartenairesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
