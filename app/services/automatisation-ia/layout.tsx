import type { Metadata } from 'next';

const HERO_IMAGE = 'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/AutoN8N.webp';

export const metadata: Metadata = {
  title: 'Automatisation IA & Chatbots à Mons | DIGITALOVA',
  description: 'Automatisation intelligente : chatbots, workflows et agents IA. Gagnez du temps, augmentez votre productivité et connectez vos outils.',
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
    canonical: 'https://digitalova.be/services/automatisation-ia',
  },
  openGraph: {
    type: 'website',
    url: 'https://digitalova.be/services/automatisation-ia',
    title: 'Automatisation IA & Chatbots à Mons | DIGITALOVA',
    description: 'Solutions d\'automatisation intelligente : chatbots, workflows, agents IA pour gagner du temps et augmenter votre productivité.',
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: 'Automatisation IA DIGITALOVA',
      },
    ],
  },
};

export default function AutomatisationIALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
