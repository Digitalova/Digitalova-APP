import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import CallButton from '@/components/CallButton';
import CookieConsent from '@/components/CookieConsent';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: {
    default: 'Création de Sites Web à Mons - DIGITALOVA',
    template: '%s | Digitalova - Agence Web à Mons',
  },
  description: "Besoin d'un site web ? Je crée votre site internet, blog ou boutique en ligne. Design adapté aux mobiles et gestion simplifiée. Devis gratuit sans engagement à Mons.",
  authors: [{ name: 'Digitalova - Agence Web Mons' }],
  creator: 'DIGITALOVA',
  publisher: 'Digitalova',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://digitalova.be'),
  alternates: {
    canonical: '/',
    languages: {
      'fr-BE': 'https://digitalova.be/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_BE',
    url: 'https://digitalova.be/',
    siteName: 'Digitalova',
    title: 'Digitalova | Création de Sites Web & Automatisation IA à Mons',
    description: 'Agence web en Hainaut : création de sites vitrine, e-commerce, SEO et automatisations IA.',
    images: [
      {
        url: 'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/LogoDIGITALOVA2026D.webp',
        width: 1200,
        height: 630,
        alt: 'Logo Digitalova',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digitalova | Création de Sites Web à Mons',
    description: 'Agence web en Hainaut : création de sites vitrine, e-commerce, SEO et automatisations IA.',
    images: ['https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/LogoDIGITALOVA2026D.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: 'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/favicon-96x96.png',
    apple: '/apple-touch-icon.png',
  },
  other: {
    'geo.region': 'BE-WHT',
    'geo.placename': 'Mons',
    'geo.position': '50.4542;3.9567',
    'ICBM': '50.4542, 3.9567',
    'theme-color': '#0F172A',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
};

// JSON-LD pour le SEO structuré
const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://digitalova.be/#organization",
  "name": "DIGITALOVA",
  "url": "https://digitalova.be/",
  "logo": {
    "@type": "ImageObject",
    "url": "https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/LogoDIGITALOVA2026D.webp"
  },
  "email": "contact@digitalova.be",
  "telephone": "+32471586708",
  "sameAs": [
    "https://www.instagram.com/digitalova.be",
    "https://www.facebook.com/DigitalovaBE?locale=fr_FR",
    "https://www.tiktok.com/@digitalova.be?is_from_webapp=1&sender_device=pc",
    "https://wa.me/32471586708"
  ]
};

const jsonLdWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://digitalova.be/#website",
  "url": "https://digitalova.be/",
  "name": "DIGITALOVA",
  "inLanguage": "fr-BE",
  "publisher": { "@id": "https://digitalova.be/#organization" }
};

const jsonLdBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://digitalova.be/#business",
  "name": "DIGITALOVA - Création de Sites Web à Mons",
  "image": "https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/LogoDIGITALOVA2026D.webp",
  "url": "https://digitalova.be/",
  "telephone": "+32471586708",
  "priceRange": "997€ - 10000€",
  "description": "Agence web en Hainaut : création de sites vitrine, e-commerce, SEO et automatisations IA. Intervention à Mons et alentours.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Pl. de la Gare 1",
    "addressLocality": "Quiévrain",
    "postalCode": "7380",
    "addressCountry": "BE"
  },
  "areaServed": [
    { "@type": "City", "name": "Mons" },
    { "@type": "AdministrativeArea", "name": "Hainaut" },
    { "@type": "Country", "name": "Belgique" }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    }
  ],
  "parentOrganization": { "@id": "https://digitalova.be/#organization" }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr-BE">
      <head>
        <link rel="preconnect" href="https://mzeisxseqdcxwgyjpajm.supabase.co" crossOrigin="anonymous" />
        <link rel="preload" href="https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/fonts/Poppins-Light.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/fonts/Poppins-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/fonts/Poppins-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/fonts/Poppins-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([jsonLdOrganization, jsonLdWebsite, jsonLdBusiness]),
          }}
        />
      </head>
      <body suppressHydrationWarning={true}>
        <div className="min-h-screen flex flex-col bg-slate-50">
          <Header />
          
          <main className="flex-grow">
            {children}
          </main>
          
          <Footer />
          <CallButton phoneNumber="+32471586708" />
          <CookieConsent />
          <ScrollToTop />
          <Toaster />
        </div>

        {/* Google Analytics - Chargé après le rendu */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.addEventListener('load', () => {
                setTimeout(() => {
                  const s = document.createElement('script');
                  s.async = true;
                  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-DPF2CVXV71';
                  document.head.appendChild(s);
                  gtag('js', new Date());
                  gtag('config', 'G-DPF2CVXV71', { anonymize_ip: true });
                }, 3000);
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
