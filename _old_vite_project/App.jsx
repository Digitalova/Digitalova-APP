import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop.jsx';
import CallButton from '@/components/CallButton.jsx';
import CookieConsent from '@/components/CookieConsent';

const Home = lazy(() => import('@/pages/Home.jsx'));
const Services = lazy(() => import('@/pages/Services.jsx'));
const Portfolio = lazy(() => import('@/pages/Portfolio.jsx'));
const Method = lazy(() => import('@/pages/Method.jsx'));
const Contact = lazy(() => import('@/pages/Contact.jsx'));
const Social = lazy(() => import('@/pages/Social.jsx'));
const Legal = lazy(() => import('@/pages/Legal.jsx'));
const RGPD = lazy(() => import('@/pages/RGPD.jsx'));
const Partners = lazy(() => import('@/pages/Partners.jsx'));

const WebDevelopment = lazy(() => import('@/pages/services/WebDevelopment.jsx'));
const AIAutomation = lazy(() => import('@/pages/services/AIAutomation.jsx'));
const GoogleBusiness = lazy(() => import('@/pages/services/GoogleBusiness.jsx'));
const SEOOptimization = lazy(() => import('@/pages/services/SEOOptimization.jsx'));

function App() {
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

  return (
    <Router>
      <ScrollToTop />

      <Helmet>
        <link rel="alternate" href="https://digitalova.be/" hrefLang="fr-be" />
        <meta name="geo.region" content="BE-WHT" />
        <meta name="geo.placename" content="Mons" />
        <meta name="geo.position" content="50.4542;3.9567" />
        <meta name="ICBM" content="50.4542, 3.9567" />
        <link rel="icon" type="image/png" href="https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/favicon-96x96.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0F172A" /> 
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <script type="application/ld+json">
          {JSON.stringify([jsonLdOrganization, jsonLdWebsite, jsonLdBusiness])}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header />

        <main className="flex-grow">
          <Suspense
            fallback={
              <div className="min-h-screen pt-20 flex flex-col items-center justify-center bg-white">
                <div className="w-10 h-10 border-3 border-slate-100 border-t-slate-900 rounded-full animate-spin"></div>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/creation-site-web" element={<WebDevelopment />} />
              <Route path="/services/automatisation-ia" element={<AIAutomation />} />
              <Route path="/services/google-business" element={<GoogleBusiness />} />
              <Route path="/services/seo-referencement" element={<SEOOptimization />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/methode" element={<Method />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/nous-suivre" element={<Social />} />
              <Route path="/mentions-legales" element={<Legal />} />
              <Route path="/rgpd" element={<RGPD />} />
              <Route path="/partenaires" element={<Partners />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <CallButton phoneNumber="+32471586708" /> 
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;