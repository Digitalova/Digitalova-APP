'use client';

import React from 'react';

import Link from 'next/link';
import {
  Globe,
  TrendingUp,
  MapPin,
  Bot,
  ArrowRight,
  CheckCircle,
  Zap,
  Sparkles,
  ShieldCheck,
  MousePointerClick,
  Stars,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQSection';
import BackgroundBlobs from '@/components/BackgroundBlobs';

const HERO_IMG =
  'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg';

/* -------------------- Helpers -------------------- */
const cx = (...c) => c.filter(Boolean).join(' ');
const ease = [0.22, 1, 0.36, 1];

/* -------------------- Webflow-like primitives -------------------- */
const Section = ({ className = '', children }) => (
  <section className={cx('relative', className)}>{children}</section>
);

const Container = ({ className = '', children }) => (
  <div className={cx('container mx-auto px-4', className)}>{children}</div>
);

const Badge = ({ icon, children, tone = 'light' }) => (
  <div
    className={cx(
      'inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold tracking-wide border shadow-sm',
      tone === 'dark'
        ? 'bg-slate-900 text-white border-white/10'
        : 'bg-white/70 text-slate-900 border-slate-200 backdrop-blur'
    )}
  >
    {icon ? <span className="opacity-90">{icon}</span> : null}
    {children}
  </div>
);

/* -------------------- Webflow-like Card -------------------- */
const ServiceCardWF = ({
  icon,
  label,
  title,
  description,
  featuresTitle,
  benefitsTitle,
  features,
  benefits,
  detailsLink,
  gradient = 'from-purple-600/16 via-pink-600/10 to-transparent',
  iconTone = 'purple',
  delay = 0,

  // ✅ NEW — Tarifs
  priceTitle,
  priceLines = [],
  priceNote,
}) => {
  const tone =
    {
      purple: {
        ring: 'ring-purple-400/20',
        iconBg: 'bg-purple-400/10',
        iconBorder: 'border-purple-300/25',
        iconText: 'text-purple-200',
        dot: 'bg-purple-300',
        priceText: 'text-purple-200',
        priceBorder: 'border-purple-300/25',
      },
      pink: {
        ring: 'ring-pink-400/20',
        iconBg: 'bg-pink-400/10',
        iconBorder: 'border-pink-300/25',
        iconText: 'text-pink-200',
        dot: 'bg-pink-300',
        priceText: 'text-pink-200',
        priceBorder: 'border-pink-300/25',
      },
      emerald: {
        ring: 'ring-emerald-400/20',
        iconBg: 'bg-emerald-400/10',
        iconBorder: 'border-emerald-300/25',
        iconText: 'text-emerald-200',
        dot: 'bg-emerald-300',
        priceText: 'text-emerald-200',
        priceBorder: 'border-emerald-300/25',
      },
      amber: {
        ring: 'ring-amber-400/20',
        iconBg: 'bg-amber-400/10',
        iconBorder: 'border-amber-300/25',
        iconText: 'text-amber-200',
        dot: 'bg-amber-300',
        priceText: 'text-amber-200',
        priceBorder: 'border-amber-300/25',
      },
    }[iconTone] || {
      ring: 'ring-white/10',
      iconBg: 'bg-white/5',
      iconBorder: 'border-white/10',
      iconText: 'text-white',
      dot: 'bg-slate-300',
      priceText: 'text-white',
      priceBorder: 'border-white/10',
    };

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease, delay }}
      whileHover={{ y: -6 }}
      className={cx(
        'group relative overflow-hidden rounded-[28px]',
        'bg-[#0F172A]',
        'border border-white/10 ring-1',
        tone.ring,
        'shadow-[0_18px_60px_-45px_rgba(0,0,0,0.65)]'
      )}
    >
      <div className={cx('absolute inset-0 pointer-events-none opacity-90', `bg-gradient-to-br ${gradient}`)} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.25]">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:46px_46px]" />
      </div>

      <div className="relative p-7 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div
              className={cx(
                'w-14 h-14 rounded-2xl border flex items-center justify-center',
                'shadow-[0_14px_35px_-30px_rgba(0,0,0,0.7)]',
                tone.iconBg,
                tone.iconBorder
              )}
            >
              {React.cloneElement(icon, { size: 28, className: tone.iconText })}
            </div>

            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2">
                <span className={cx('w-2 h-2 rounded-full', tone.dot)} />
                <span className="text-xs font-black uppercase tracking-widest text-slate-200">{label}</span>
              </div>
              <p className="text-[11px] text-slate-400 mt-1">Solution orientée résultats</p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 text-slate-300 text-xs font-semibold">
            <Stars className="w-4 h-4" />
            <span>Webflow-like</span>
          </div>
        </div>

        <h2 className="mt-5 text-2xl md:text-[1.65rem] font-extrabold text-white leading-tight">{title}</h2>

        {/* ✅ TARIFS */}
        {(priceTitle || (priceLines && priceLines.length > 0) || priceNote) && (
          <div className={cx('mt-3 rounded-2xl border bg-white/5 p-5', tone.priceBorder)}>
            <div className="flex items-center justify-between gap-3">
              <div className="text-xs font-black uppercase tracking-widest text-slate-300">
                {priceTitle || 'Tarifs'}
              </div>
              <span className={cx('text-xs font-extrabold', tone.priceText)}>À partir de</span>
            </div>

            {priceLines?.length > 0 && (
              <ul className="mt-3 space-y-2">
                {priceLines.map((line, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle className={cx('mt-0.5 shrink-0', tone.iconText)} size={16} />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            )}

            {priceNote && <p className="mt-3 text-xs text-slate-400 leading-relaxed">{priceNote}</p>}
          </div>
        )}

        <p className="mt-4 text-slate-300 leading-relaxed">{description}</p>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-xs font-black uppercase tracking-widest text-slate-300 mb-3">{featuresTitle}</div>

            <ul className="space-y-2.5">
              {features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-200">
                  <CheckCircle className={cx('mt-0.5 shrink-0', tone.iconText)} size={16} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-xs font-black uppercase tracking-widest text-slate-300 mb-3 flex items-center gap-2">
              <Zap className={tone.iconText} size={16} />
              <span>{benefitsTitle}</span>
            </div>

            <ul className="space-y-2">
              {benefits.map((b, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-slate-200 font-semibold">
                  <span className={cx('w-2 h-2 rounded-full', tone.dot)} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {detailsLink && (
              <div className="mt-5">
                <Link href={detailsLink} title="En savoir plus - Digitalova">
                  <Button
                    variant="outline"
                    className={cx(
                      'w-full h-12 rounded-2xl border-2',
                      'bg-white/5 border-white/15 text-white',
                      'hover:bg-white hover:text-slate-900 hover:border-white transition-all'
                    )}
                  >
                    Voir la solution en détail
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="mt-7 flex items-center justify-between text-xs text-slate-400">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Qualité • Sécurité</span>
          </span>
          <span className="inline-flex items-center gap-2">
            <MousePointerClick className="w-4 h-4" />
            <span>Axé conversion</span>
          </span>
        </div>
      </div>
    </motion.article>
  );
};

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
                'Création de sites web, SEO, Google Business Profile et automatisation IA pour les entreprises à Mons.',
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
              serviceType: 'Création de site web et Marketing Digital',
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

      <div className="relative bg-slate-50 overflow-hidden">
        <BackgroundBlobs />

        {/* HERO */}
        <Section className="pt-24 pb-12">
          <Container className="relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white/70 backdrop-blur shadow-[0_25px_80px_-60px_rgba(2,6,23,0.55)]">
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute -top-28 -left-28 h-[520px] w-[520px] rounded-full bg-purple-600/10 blur-3xl" />
                  <div className="absolute -bottom-28 -right-28 h-[520px] w-[520px] rounded-full bg-pink-600/10 blur-3xl" />
                  <div className="absolute inset-0 opacity-[0.22]">
                    <div className="h-full w-full bg-[linear-gradient(to_right,rgba(2,6,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
                  </div>
                </div>

                <div className="relative px-6 py-10 md:px-12 md:py-12 text-center">
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, ease }}>
                    <h1 className="mt-5 text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.12] pb-2 overflow-visible">
                      Mes solutions Web & IA
                      <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
                        pour faire grandir votre activité
                      </span>
                    </h1>

                    <p className="mt-4 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
                      Sites web, SEO, Google Business Profile et automatisations IA — des services concrets, orientés résultats.
                    </p>

                    <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
                      <Link href="/contact" title="Aller à la page Contact - Digitalova">
                        <Button className="h-12 px-8 rounded-full font-extrabold bg-slate-900 hover:bg-slate-800 text-white shadow-xl">
                          Demander un devis
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>

                      <Link href="/portfolio" title="Aller à la page Portfolio - Digitalova">
                        <Button
                          variant="outline"
                          className="h-12 px-8 rounded-full font-extrabold bg-white/60 border-2 border-slate-200 text-slate-900 hover:bg-slate-100"
                        >
                          Voir le portfolio
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="mt-10 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
            </div>
          </Container>
        </Section>

{/* GRID — Webflow-like cards */}
<Section className="pb-16">
  <Container className="relative z-10">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        <ServiceCardWF
          icon={<Globe />}
          label="Web"
          iconTone="purple"
          gradient="from-purple-600/16 via-pink-600/10 to-transparent"
          title="Création de sites vitrine & boutiques e-commerce"
          description="Un site élégant et rapide, pensé pour guider vos visiteurs vers l’action : demandes de devis, appels, ventes, réservations."
          featuresTitle="Inclus"
          benefitsTitle="Résultats"
          features={[
            'Structure pensée pour convertir',
            'Design premium (mobile-first)',
            'Intégrations (form, réservation, paiement)',
            'Performances (Core Web Vitals)',
          ]}
          benefits={['Image de marque premium', 'Disponibilité 24h/24', 'Crédibilité immédiate']}
          detailsLink="/services/creation-site-web"
          delay={0}
        />

        <ServiceCardWF
          icon={<TrendingUp />}
          label="SEO"
          iconTone="pink"
          gradient="from-pink-600/16 via-purple-600/10 to-transparent"
          title="Optimisation SEO avancée"
          description="Audit, stratégie et optimisation : pour obtenir une visibilité durable et attirer des clients réellement intéressés."
          featuresTitle="Inclut"
          benefitsTitle="Pourquoi"
          features={[
            'Optimisation Title & Meta',
            'Structure Hn (H1/H2/H3) sémantique',
            'Stratégie de contenu & mots-clés',
            'Suivi & ajustements',
          ]}
          benefits={['Trafic qualifié', 'Confiance renforcée', 'Avantage concurrentiel']}
          detailsLink="/services/seo-referencement"
          delay={0.08}
        />

        <ServiceCardWF
          icon={<MapPin />}
          label="Local"
          iconTone="emerald"
          gradient="from-emerald-600/16 via-purple-600/8 to-transparent"
          title="Gestion de fiche Google My Business"
          description="Optimisation et gestion pour apparaître sur Google Maps, capter plus d’appels et contrôler votre réputation."
          featuresTitle="Actions"
          benefitsTitle="Impact"
          features={[
            'Audit & complétion parfaite',
            'Mots-clés locaux & catégories',
            'Gestion des avis & réponses',
            'Google Posts réguliers',
          ]}
          benefits={['Visibilité prioritaire Maps', 'Plus de visites', 'Plus d’appels entrants']}
          detailsLink="/services/google-business"
          delay={0.16}
        />

        <ServiceCardWF
          icon={<Bot />}
          label="IA"
          iconTone="amber"
          gradient="from-amber-500/16 via-purple-600/8 to-transparent"
          title="Automatisation & assistants IA"
          description="Workflows intelligents, chatbots et agents IA : pour automatiser vos tâches répétitives et accélérer vos process."
          featuresTitle="Outils"
          benefitsTitle="Gains"
          features={[
            'Agents IA (support, admin, prospection)',
            'Chatbots intelligents',
            'Workflows inter-apps',
            'RDV / leads / relances automatiques',
          ]}
          benefits={['Moins d’erreurs humaines', 'Temps libéré', 'Processus scalables']}
          detailsLink="/services/automatisation-ia"
          delay={0.24}
        />
      </div>

      {/* CTA — Webflow-like */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease }}
        className="mt-16"
      >
        <div className="relative overflow-hidden rounded-[34px] border border-slate-200 bg-slate-950 text-white shadow-2xl">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-purple-600/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-pink-600/20 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.25]">
              <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:52px_52px]" />
            </div>
          </div>

          <div className="relative p-10 md:p-14 text-center">
            <Badge tone="dark" icon={<Sparkles className="w-4 h-4" />}>
              Audit rapide • Reco claires • Plan d’action
            </Badge>

            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight">
              Prêt à passer à l’action ?
            </h2>
            <p className="mt-4 text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              J'identifie le bloc le plus rentable pour vous, puis je construis une feuille de route simple et efficace.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" title="Aller à la page Contact - Digitalova">
                <Button className="h-14 px-10 rounded-full text-lg font-extrabold bg-white text-slate-900 hover:bg-slate-100 shadow-xl">
                  Demander un devis gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/portfolio" title="Aller à la page Portfolio - Digitalova">
                <Button
                  variant="outline"
                  className="h-14 px-10 rounded-full text-lg font-extrabold border-white/30 text-white hover:bg-white/10"
                >
                  Voir des réalisations
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </Container>
</Section>
      </div>
      <FAQSection />
    </>
  );
};

export default Services;