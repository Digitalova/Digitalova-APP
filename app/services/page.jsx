import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FAQSection from '@/components/FAQSection';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import { ServicesGrid, ServicesCTA } from './ServicesClientComponents';

const HERO_IMG =
  'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg';

/* -------------------- Webflow-like primitives -------------------- */
const Section = ({ className = '', children }) => (
  <section className={`relative ${className}`}>{children}</section>
);

const Container = ({ className = '', children }) => (
  <div className={`container mx-auto px-4 ${className}`}>{children}</div>
);

/* -------------------- Page -------------------- */
const Services = () => {
  return (
    <>
      {/* JSON-LD pour les données structurées */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'WebPage',
              '@id': 'https://digitalova.be/services#webpage',
              url: 'https://digitalova.be/services',
              name: 'Solutions Web & IA à Mons | DIGITALOVA',
              description:
                'Création de sites web, référencement SEO et gestion Google Business Profile pour les entreprises locales à Mons.',
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [
                  { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://digitalova.be/' },
                  { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://digitalova.be/services' },
                ],
              },
              isPartOf: { '@id': 'https://digitalova.be/#website' },
            },
            {
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'Création de site internet et Marketing Digital',
              provider: {
                '@type': 'LocalBusiness',
                name: 'DIGITALOVA',
                image: HERO_IMG,
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Mons',
                  addressRegion: 'Hainaut',
                  addressCountry: 'BE',
                },
                telephone: '+32 471 58 67 08',
                priceRange: '€€€',
              },
              areaServed: { '@type': 'City', name: 'Mons' },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Services Digitalova',
                itemListElement: [
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Création de sites vitrine & E-commerce' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Optimisation SEO' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Gestion Google My Business' } },
                  { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automatisation IA' } },
                ],
              },
            },
          ]) }}
      />

      <div className="relative min-h-screen overflow-hidden bg-[#070B16]">
        <BackgroundBlobs />

        <div className="absolute inset-0 pointer-events-none opacity-[0.7]">
          <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-pink-600/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.22]">
            <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
          </div>
        </div>

        {/* HERO */}
        <Section className="pt-24 pb-12">
          <Container className="relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500/20">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-28 -left-28 h-[520px] w-[520px] rounded-full bg-purple-600/10 blur-3xl" />
                  <div className="absolute -bottom-28 -right-28 h-[520px] w-[520px] rounded-full bg-pink-600/10 blur-3xl" />
                  <div className="absolute inset-0 opacity-[0.22]">
                    <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
                  </div>
                </div>

                <div className="relative px-6 py-10 md:px-12 md:py-12 text-center">
                  <div>
                    <h1 className="mt-5 text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.12] pb-2 overflow-visible">
                      Mes solutions de création & marketing digitales
                    </h1>

                    <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
                    Digitalova vous accompagne avec des services complets de création de site web, référencement SEO et optimisation Google Business en Belgique.
                    Je concois des solutions digitales performantes pour développer votre visibilité et attirer plus de clients.
                    </p>

                    <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact" title="Aller à la page Contact - Digitalova">
                        <Button className="h-12 px-8 rounded-full font-extrabold bg-white hover:bg-slate-100 text-slate-900 shadow-xl">
                          Demander un devis
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>

                      <Link href="/portfolio" title="Aller à la page Portfolio - Digitalova">
                        <Button
                          variant="outline"
                          className="h-12 px-8 rounded-full font-extrabold bg-white/5 border-2 border-white/20 text-white hover:bg-white/10"
                        >
                          Voir le portfolio
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </Container>
        </Section>

        {/* GRID — Webflow-like cards */}
        <Section className="pb-16">
          <Container className="relative z-10">
            <div className="max-w-6xl mx-auto">
              <ServicesGrid />
              <ServicesCTA />
            </div>
          </Container>
        </Section>

        {/* FAQ */}
        <Section className="pb-20">
          <FAQSection />
        </Section>
      </div>
    </>
  );
};

export default Services;
