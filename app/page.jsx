'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowDown,
  X,
  Zap,
  Code,
  TrendingUp,
  Search,
  Clock,
  BarChart,
  MousePointerClick,
  Building2,
  Bot,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

// ✅ Lazy-load (évite de charger ces composants dès le premier paint)
const LazyBackgroundBlobs = React.lazy(() => import('@/components/BackgroundBlobs'));
const LazyFAQSection = React.lazy(() => import('@/components/FAQSection'));

/* =========================
   Logos outils (simple-icons)
========================= */
const TOOL_LOGOS = {
  n8n: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/n8n.svg',
  ChatGPT: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg',
  Gemini: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googlegemini.svg',
  Claude: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/anthropic.svg',
  Supabase: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/supabase.svg',
  Notion: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/notion.svg',
  'Google Sheets': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googlesheets.svg',
  Gmail: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gmail.svg',
  Hostinger: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/hostinger.svg',

  // ✅ ajouts demandés
  'Google Analytics': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googleanalytics.svg',
  Canva: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/canva.svg',
  'Google PageSpeed': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/pagespeedinsights.svg',
  'Google Maps': 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googlemaps.svg',
  Webflow: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/webflow.svg',
  WhatsApp: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/whatsapp.svg',
  Stripe: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/stripe.svg',
  Shopify: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/shopify.svg',
};

/* =========================
   Banderole full width (PC only)
========================= */
const ToolsMarqueeFullWidth = () => {
  const items = [
    { name: 'n8n', img: TOOL_LOGOS.n8n },
    { name: 'ChatGPT', img: TOOL_LOGOS.ChatGPT },
    { name: 'Gemini', img: TOOL_LOGOS.Gemini },
    { name: 'Claude', img: TOOL_LOGOS.Claude },
    { name: 'Supabase', img: TOOL_LOGOS.Supabase },
    { name: 'Notion', img: TOOL_LOGOS.Notion },
    { name: 'Google Sheets', img: TOOL_LOGOS['Google Sheets'] },
    { name: 'Gmail', img: TOOL_LOGOS.Gmail },
    { name: 'Google Analytics', img: TOOL_LOGOS['Google Analytics'] },
    { name: 'Google PageSpeed', img: TOOL_LOGOS['Google PageSpeed'] },
    { name: 'Google Maps', img: TOOL_LOGOS['Google Maps'] },
    { name: 'Webflow', img: TOOL_LOGOS.Webflow },
    { name: 'Canva', img: TOOL_LOGOS.Canva },
    { name: 'WhatsApp', img: TOOL_LOGOS.WhatsApp },
    { name: 'Stripe', img: TOOL_LOGOS.Stripe },
    { name: 'Shopify', img: TOOL_LOGOS.Shopify },
    { name: 'Hostinger', img: TOOL_LOGOS.Hostinger },
  ];

  const track = [...items, ...items];

  return (
    <section className="hidden lg:block">
      {/* ✅ full width même si le parent est en container */}
      <div className="relative w-screen left-1/2 -translate-x-1/2">
        <div className="px-4">
          <div className="text-center mb-5">
            <p className="text-sm font-semibold text-slate-600">
              Intégrations & automatisations avec vos outils préférés
            </p>
          </div>

          <div className="relative rounded-3xl border border-slate-200 bg-white/80 backdrop-blur overflow-hidden shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/95 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/95 to-transparent z-10" />

            <div className="py-6">
              <div className="marquee">
                <div className="marquee__track" aria-label="Outils compatibles">
                  {track.map((it, idx) => (
                    <div
                      key={`${it.name}-${idx}`}
                      className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-slate-200 bg-white shadow-sm mx-3"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 overflow-hidden flex items-center justify-center">
                        <img
                          src={it.img}
                          alt={`Logo ${it.name}`}
                          title={`Logo ${it.name} - Digitalova`}
                          className="w-8 h-8 object-contain"
                          loading="lazy"
                          decoding="async"
                          width="32"
                          height="32"
                          // ✅ évite "logo invisible" si ton CSS global applique des filtres
                          style={{ filter: 'none' }}
                        />
                      </div>
                      <span className="text-sm font-semibold text-slate-800 whitespace-nowrap">{it.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <style>{`
              .marquee { overflow: hidden; width: 100%; }
              .marquee__track {
                display: flex;
                align-items: center;
                width: max-content;
                will-change: transform;
                animation: marqueeScroll 26s linear infinite;
              }
              @keyframes marqueeScroll {
                from { transform: translateX(0); }
                to { transform: translateX(-50%); }
              }
              @media (prefers-reduced-motion: reduce) {
                .marquee__track { animation: none; }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================
   ✅ HERO MOBILE (NOUVEAU) — uniquement mobile
========================= */
const MobileHeroRedesign = () => {
  return (
    <div className="lg:hidden mt-10">
      <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200 bg-white shadow-2xl">
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-purple-200/70 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-pink-200/70 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white to-white/60" />

        <div className="relative p-5">
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm">
            <img
              alt="Aperçu d'un site web moderne"
              title="Aperçu d'un site web moderne - Digitalova"
              src="https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/IMagePourPortfoliog.webp"
              className="w-full h-auto object-cover"
              width="1200"
              height="800"
                    fetchPriority="high"
                    decoding="sync"
                    loading="eager"
                  />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 via-transparent to-purple-900/20 pointer-events-none" />

            <div className="absolute bottom-3 left-3 right-3">
              <div className="rounded-2xl bg-white/90 backdrop-blur border border-slate-200 px-4 py-3 shadow-sm">
                <div className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-extrabold tracking-wide text-slate-900 uppercase">
                      Digitalova • Mons
                    </p>
                    <p className="text-sm font-semibold text-slate-700 truncate">
                      Sites Web & Boutiques optimisés
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <div className="rounded-xl bg-slate-900 text-white px-3 py-1.5 text-xs font-extrabold shadow">
                      + Visibilité
                    </div>
                  </div>
                </div>

                <div className="mt-3 grid grid-cols-3 gap-2">
                  <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-slate-900" />
                      <p className="text-[11px] font-extrabold text-slate-900">Perf</p>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1">Rapide</p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-slate-900" />
                      <p className="text-[11px] font-extrabold text-slate-900">SEO</p>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1">Local</p>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white px-3 py-2">
                    <div className="flex items-center gap-2">
                      <MousePointerClick className="w-4 h-4 text-slate-900" />
                      <p className="text-[11px] font-extrabold text-slate-900">UX</p>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-1">Convertit</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const [showDecor, setShowDecor] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isMobile || reduceMotion) return;

    const run = () => setShowDecor(true);

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(run, { timeout: 1500 });
      return () => window.cancelIdleCallback(id);
    }

    const t = window.setTimeout(run, 1200);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const run = () => setShowFAQ(true);

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(run, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }

    const t = window.setTimeout(run, 1800);
    return () => window.clearTimeout(t);
  }, []);

  const belowFoldStyle = {
    contentVisibility: 'auto',
    containIntrinsicSize: '1px 900px',
  };

  const challenges = [
    {
      icon: <Search className="w-9 h-9 text-purple-300" />,
      problem: 'Invisible sur Google à Mons ?',
      solution: "Création d'un site optimisé SEO & fiche Google Business Profile",
    },
    {
      icon: <BarChart className="w-9 h-9 text-pink-300" />,
      problem: 'Votre site ne convertit pas ?',
      solution: 'Refonte du design et parcours client pensé pour la vente',
    },
    {
      icon: <Clock className="w-9 h-9 text-amber-300" />,
      problem: 'Trop de gestion administrative ?',
      solution: 'Automatisation IA et intégrations pour vous libérer du temps',
    },
  ];

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: 'Conception de Site Web sur Mesure',
      description:
        "Du site Web vitrine élégant à la boutique e-commerce performante pour vendre 24h/24, je conçois la solution sur-mesure qui s'adapte parfaitement à vos ambitions.",
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Gestion de ficheGoogle My Business',
      description:
        "Gestion complète de votre fiche Google. J'optimise votre référencement local pour attirer les clients qui cherchent vos services maintenant. Gain de temps : Je gère les avis et les posts pour vous. Résultat : Une présence pro et rassurante dès la première recherche.",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Optimisation SEO Avancée',
      description:
        "Une visibilité maximale sur Google pour attirer les bons clients : j'optimise votre site web et votre fiche GoogleMyBusiness pour qu'ils soient trouvés par ceux qui ont besoin de vous.",
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: 'Intégrations & Systèmes Intelligents',
      description:
        "De la constitution de votre base de données à l'envoi d'emails transactionnels, je connecte les meilleurs outils pour que vous restiez proche de vos clients.",
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Audit & Stratégie',
      description:
        'Nous analysons votre marché, vos concurrents et vos objectifs pour définir une stratégie digitale gagnante dès le départ.',
    },
    {
      number: '02',
      title: 'Design & Maquettage',
      description:
        "Je conçois une interface moderne et intuitive qui reflète votre identité de marque et guide vos visiteurs vers l'action.",
    },
    {
      number: '03',
      title: 'Développement & SEO',
      description:
        'Intégration technique propre, rapide et optimisée pour le référencement naturel (SEO) afin de plaire à Google.',
    },
    {
      number: '04',
      title: 'Lancement & Accompagnement',
      description:
        "Mise en ligne de votre site web sécurisé et après ? Je vous accompagne dans votre présence digitale dans l'intérêt de maximiser vos résultats.",
    },
  ];

  const featuredProjects = [
    {
      title: 'Site Vitrine pour un Restaurant Italien',
      category: 'Gastronomie',
      image:
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/Affiche_de_portfolio_siteweb_restaurant_italien_9_11zon.webp',
      tags: ['Site Vitrine', 'Réservation'],
      url: '/portfolio?project=digi-gustavo',
      seoTitle: 'Voir le projet Digi-Gustavo : Site vitrine restaurant à Mons',
    },
    {
      title: 'Site web pour un Cuisiniste à Mons',
      category: 'Artisanat & Design',
      image:
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/Affiche_de_portfolio_siteweb_cuisiniste_mons_6_11zon.webp',
      tags: ['Catalogue', 'Showroom 3D'],
      url: '/portfolio?project=digi-kitchen',
      seoTitle: 'Voir le projet Digi-Kitchen : Site catalogue pour cuisiniste',
    },
    {
      title: "Site internet d'une Agence de location à Mons",
      category: 'Automobile',
      image:
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/Affiche_de_portfolio_siteweb_agence_de_location_voiture_2_11zon%20(1).webp',
      tags: ['E-commerce', 'Booking'],
      url: '/portfolio?project=digi-location',
      seoTitle: 'Voir le projet Digi-Location : Site de réservation en ligne',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <>
      <div className="pt-20">
        {/* 1. HERO SECTION */}
        <section className="relative py-24 lg:py-32 overflow-hidden bg-white/50">
          <Suspense fallback={null}>{showDecor && <LazyBackgroundBlobs />}</Suspense>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.2]">
                  Création de Sites Web & Boutiques en Ligne à Mons
                  <br className="hidden lg:block" />
                </h1>

                <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  De la conception à la mise en ligne, je crée des sites web sur mesure à Mons qui captivent votre audience
                  et boostent votre croissance.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/contact" title="Aller à la page Contact - Digitalova">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white text-lg h-14 px-8 rounded-full shadow-xl transition-transform hover:scale-105"
                    >
                      <div className="cta-button">Obtenir un Devis</div>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>

                  <Link href="/portfolio" title="Aller à la page Portfolio - Digitalova">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto bg-slate-900 text-white border-2 border-slate-800 hover:border-slate-700 hover:bg-slate-800 text-lg h-14 px-8 rounded-full transition-transform hover:scale-105"
                    >
                      Voir le Portfolio
                    </Button>
                  </Link>
                </div>

                {/* ✅ HERO MOBILE (mobile only) */}
                <MobileHeroRedesign />
              </motion.div>

              <div className="relative hidden lg:block">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100 transform hover:rotate-1 transition-transform duration-500">
                  <img
                    alt="Ordinateur portable affichant un tableau de bord analytique moderne avec des graphiques de données"
                    className="w-full h-auto object-cover"
                    title="Taux de conversion en croissance grace à un site web optimisé"
                    src="https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/IMagePourPortfoliog.webp"
                    width="1200"
                    height="800"
                    decoding="sync"
                    fetchPriority="high"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-transparent pointer-events-none" />
                </div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3 border border-slate-100"
                >
                  <div className="bg-green-100 p-2 rounded-full">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-semibold uppercase">Croissance</p>
                    <p className="text-sm font-bold text-slate-900">+80% Visibilité</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* ✅ IMPORTANT: banderole ICI (hors du grid), PC only, full width */}
            <div className="mt-20">
              <ToolsMarqueeFullWidth />
            </div>
          </div>

          {/* Wave */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 -mb-[1px] translate-y-[1px]">
            <svg
              className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-slate-900"
              />
            </svg>
          </div>
        </section>

        {/* 2. CHALLENGES / SOLUTIONS */}
        <section className="py-24 relative bg-slate-900 text-white overflow-hidden" style={belowFoldStyle}>
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 right-0 w-[520px] h-[520px] bg-purple-600/10 rounded-full blur-[110px] transform translate-x-1/3 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-pink-600/10 rounded-full blur-[110px] transform -translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-18">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-extrabold mb-5 text-white"
              >
                Vos Problèmes,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Mes Solutions
                </span>
              </motion.h2>
              <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Identifions ce qui freine votre croissance digitale et mettons en place les leviers pour décoller.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {challenges.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -12 }}
                  className="bg-white/5 rounded-3xl p-10 shadow-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors relative overflow-hidden group"
                >
                  <div className="relative z-10">
                    <div className="mb-7 p-4 bg-white/5 rounded-2xl inline-block border border-white/10">
                      {item.icon}
                    </div>
                    <div className="space-y-5">
                      <div>
                        <p className="text-sm font-bold uppercase text-slate-400 tracking-wider mb-2">Le Problème</p>
                        <h3 className="text-xl font-extrabold text-white leading-tight">{item.problem}</h3>
                      </div>
                      <div className="h-px bg-white/10 w-full my-5" />
                      <div>
                        <p className="text-sm font-bold uppercase text-purple-300 tracking-wider mb-2">Ma Solution</p>
                        <p className="text-slate-200 font-medium text-base leading-relaxed">{item.solution}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 -mb-[1px] translate-y-[1px]">
            <svg
              className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-slate-50"
              />
            </svg>
          </div>
        </section>

        {/* 3. SERVICES */}
        <section className="py-20 relative bg-white/50" style={belowFoldStyle}>
          <Suspense fallback={null}>{showDecor && <LazyBackgroundBlobs />}</Suspense>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                Explorez <span className="text-black">mes Services de</span> Création Web
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Je vous propose des solutions complètes et sur mesure à Mons pour construire et propulser votre présence en
                ligne.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="rounded-2xl p-8 hover:shadow-2xl cursor-default group backdrop-blur-sm border border-white/10 bg-[#0F172A]"
                >
                  <div className="text-purple-200 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-50 group-hover:text-purple-200 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>

              <div className="text-center mt-16">
                <Link href="/services" title="Aller à la page Services - Digitalova">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-200 text-purple-900 hover:bg-purple-100 text-lg px-8 py-6 hover:text-purple-950 transition-all hover:scale-105 bg-purple-50"
                >
                  Découvrir les Solutions
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 -mb-[1px] translate-y-[1px]">
            <svg
              className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-slate-900"
              />
            </svg>
          </div>
        </section>

        {/* 4. MÉTHODE */}
        <section className="py-20 relative bg-slate-900 text-white overflow-hidden" style={belowFoldStyle}>
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[100px] transform -translate-x-1/3 translate-y-1/3" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Ma Méthode en{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  4 Étapes Claires
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Pas de jargon, pas de flou. Juste un processus structuré pour vous livrer un site web performant dans les
                temps.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <span className="text-5xl font-black text-white/5 absolute top-2 right-4 pointer-events-none select-none">
                    {step.number}
                  </span>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

              <div className="text-center mt-12">
                <Link href="/methode" title="Aller à la page Methode - Digitalova">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-200 text-lg px-8 py-6 font-bold shadow-lg shadow-purple-900/20"
                >
                  Voir ma méthode complète
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 -mb-[1px] translate-y-[1px]">
            <svg
              className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-gray-50"
              />
            </svg>
          </div>
        </section>

        {/* 5. PORTFOLIO */}
        <section className="py-24 relative bg-gray-50/50" style={belowFoldStyle}>
          <Suspense fallback={null}>{showDecor && <LazyBackgroundBlobs />}</Suspense>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
                  Mes Dernières{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    Réalisations
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Chaque projet est unique. Découvrez comment j&apos;aide mes clients à se démarquer avec des solutions web
                  performantes et élégantes.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {featuredProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2, duration: 0.7, type: 'spring', stiffness: 50 }}
                  whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.3 } }}
                >
                  <Link href={project.url} className="group block h-full" title={project.seoTitle}>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full bg-[#0F172A] border border-white/10 flex flex-col">
                      <div className="relative aspect-[3/2] overflow-hidden bg-slate-900">
                        <img
                          src={project.image}
                          alt={`Aperçu du site ${project.title}`}
                          title={project.seoTitle}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          decoding="async"
                          width="1200"
                          height="800"
                        />
                        <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <MousePointerClick className="w-4 h-4" />
                            Voir le projet
                          </div>
                        </div>
                      </div>

                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex justify-between items-start mb-2 gap-3">
                          <h3 className="text-xl font-bold text-slate-50 group-hover:text-purple-200 transition-colors">
                            {project.title}
                          </h3>
                          <span className="text-xs font-semibold text-purple-200 bg-white/5 px-2 py-1 rounded-md border border-white/10">
                            {project.category}
                          </span>
                        </div>
                        <div className="mt-auto pt-4 flex flex-wrap gap-2">
                          {project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-xs text-slate-200/90 bg-white/5 px-2 py-1 rounded border border-white/10"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/portfolio" title="Aller à la page Portfolio - Digitalova">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-white hover:bg-slate-800 hover:border-slate-600 px-8 py-6 text-lg font-semibold bg-slate-900 shadow-sm"
                >
                  Voir tous les projets
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ✅ 2) REMPLACE ta section OFFRES par celle-ci (entre Réalisations et CTA) */}
        <section className="py-24 relative bg-slate-900 text-white overflow-hidden" style={belowFoldStyle}>
          {/* ✅ BG SECTION = EXACTEMENT le “mood” du footer (blobs + grid) */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.85]">
            <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-purple-600/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-pink-600/10 blur-3xl" />
            <div className="absolute inset-0 opacity-[0.22]">
              <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
            </div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            {/* Header */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="text-center mb-14"
            >
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
                Découvrez mes{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Offres
                </span>
              </h2>

              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                3 offres, un seul objectif : votre rentabilité.
                <span className="block text-sm text-slate-400 mt-2">Régime particulier de franchise des petites entreprises - TVA non applicable.</span>
              </p>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              {/* Helper: item row */}
              {/** (on garde les croix, et on remplace les points par des flèches →) */}

              {/* ESSENTIEL */}
              <motion.article
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="relative rounded-[2.25rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_28px_90px_-70px_rgba(0,0,0,0.8)]"
              >
                {/* ✅ BG CARD = extrait du footer */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.9]">
                  <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-purple-600/10 blur-3xl" />
                  <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-pink-600/10 blur-3xl" />
                  <div className="absolute inset-0 opacity-[0.18]">
                    <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
                  </div>
                </div>

                <div className="relative p-8 flex flex-col h-full">
                  <div className="text-center">
                    <p className="text-sm font-bold text-slate-300">Site One Page</p>
                    <h3 className="text-2xl font-extrabold text-white mt-2">Pack Landing Pro</h3>
                    <p className="text-sm text-slate-300 mt-2">
                      Indépendant • Professionnel • Haute conversion — Une page unique conçue pour transformer vos visiteurs en clients.
                    </p>

                    <div className="mt-6">
                      <p className="text-sm text-slate-300">À partir de</p>
                      <div className="text-4xl font-black tracking-tight text-white">
                        1 397€
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 h-px bg-white/10" />

                  <ul className="mt-7 space-y-3 text-sm">
                    {[
                      "Site One Page orientée conversion",
                      "Référencement SEO basique",
                      "Formulaire, intégrations API simples",
                      "Audit de fiche d'établissement Google",
                      "Création d’un logo incluse",
                      "Livrable en 7 jours",
                    ].map((it, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-100">
                        <ArrowRight className="w-4 h-4 text-purple-200 mt-0.5 shrink-0" />
                        <span className="font-medium">{it}</span>
                      </li>
                    ))}

                    {[
                      "Branding complet (couleurs, réseaux…)",
                      "Photos business incluses",
                      "Gestion GMB complète",
                      "Hébergement et nom de domaine (1an)",
                    ].map((it, i) => (
                      <li key={`x-${i}`} className="flex items-start gap-3 text-sm text-slate-400/80">
                        <X className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                        <span className="line-through">{it}</span>
                      </li>
                    ))}
                  </ul>

                  {/* ✅ bouton centré */}
                  <div className="mt-auto pt-8 flex justify-center">
                    <Link href="/contact" className="w-full max-w-[240px]" title="Aller à la page Contact - Digitalova">
                      <Button className="w-full h-12 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-extrabold shadow">
                        Choisir cette offre
                      </Button>
                    </Link>
                  </div>
                  <p className="mt-4 text-xs text-slate-300 text-center">
                    Parfait pour les <span className="font-bold">indépendants</span> et <span className="font-bold">débutants</span>.
                  </p>
                </div>
              </motion.article>

              {/* CROISSANCE (mise en avant, sans “offre préférée…”) */}
              <motion.article
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.06 }}
                whileHover={{ y: -12 }}
                className="relative rounded-[2.6rem] overflow-hidden border border-white/20 bg-gradient-to-b from-white/10 via-white/5 to-white/5 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.9)]"
              >
                {/* ✅ BG CARD = extrait du footer */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.95]">
                  <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-purple-600/15 blur-3xl" />
                  <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-pink-600/15 blur-3xl" />
                  <div className="absolute inset-0 opacity-[0.22]">
                    <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
                  </div>
                </div>

                <div className="relative p-9 flex flex-col h-full">
                  <div className="text-center">
                    <p className="text-sm font-bold text-slate-200">Site vitrine / blog</p>
                    <h3 className="text-3xl font-extrabold text-white mt-2">Pack Business Pro</h3>
                    <p className="text-sm text-slate-200 mt-2">
                      Le standard d'excellence pour dominer votre marché local et asseoir votre autorité dans votre secteur.
                    </p>

                    <div className="mt-6">
                      <p className="text-sm text-slate-200">À partir de</p>
                      <div className="text-5xl font-black tracking-tight text-white">
                        2 997€
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 h-px bg-white/15" />

                  <ul className="mt-7 space-y-3 text-sm">
                    {[
                      "Site premium 3 à 6 pages (vitrine, blog…)",
                      "Référencement SEO avancée",
                      "Intégrations & API complexes",
                      "3 mois d’hébergement + domaine inclus",
                      "Refonte de la fiche d'établissement Google",
                      "Branding inclus (logo, couleurs, réseaux…)",
                      "−40% sur la gestion complète Google My Business (posts, réponses avis…)",
                      "Photos business incluses (menu, services, produits…)",
                    ].map((it, i) => (
                      <li key={i} className="flex items-start gap-3 text-white">
                        <ArrowRight className="w-4 h-4 text-pink-200 mt-0.5 shrink-0" />
                        <span className="font-medium">{it}</span>
                      </li>
                    ))}

                    {[
                      "Intégrations de paiement & boutiques e-commerce",
                      "Accompagnement marketing personnalisé",
                    ].map((it, i) => (
                      <li key={`x2-${i}`} className="flex items-start gap-3 text-sm text-slate-300/80">
                        <X className="w-4 h-4 text-slate-300 mt-0.5 shrink-0" />
                        <span className="line-through">{it}</span>
                      </li>
                    ))}
                  </ul>

                  {/* ✅ bouton centré */}
                  <div className="mt-auto pt-8 flex justify-center">
                    <Link href="/contact" className="w-full max-w-[240px]" title="Aller à la page Contact - Digitalova">
                      <Button className="w-full h-12 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-extrabold shadow">
                        Choisir Pack Business Pro
                      </Button>
                    </Link>
                  </div>

                  {/* ✅ petit texte (optionnel) */}
                  <p className="mt-4 text-xs text-slate-300 text-center">
                    Idéale pour les <span className="font-bold">entreprises</span> qui veulent de la <span className="font-bold">croissance</span>.
                  </p>
                </div>
              </motion.article>

              {/* BUSINESS (ajout de lignes pour égaliser) */}
              <motion.article
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.12 }}
                whileHover={{ y: -10 }}
                className="relative rounded-[2.25rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_28px_90px_-70px_rgba(0,0,0,0.8)]"
              >
                {/* ✅ BG CARD = extrait du footer */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.9]">
                  <div className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-purple-600/10 blur-3xl" />
                  <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] rounded-full bg-pink-600/10 blur-3xl" />
                  <div className="absolute inset-0 opacity-[0.18]">
                    <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
                  </div>
                </div>

                <div className="relative p-8 flex flex-col h-full">
                  <div className="text-center">
                    <p className="text-sm font-bold text-slate-300">Projet sur mesure</p>
                    <h3 className="text-2xl font-extrabold text-white mt-2">Pack Signature</h3>
                    <p className="text-sm text-slate-300 mt-2">
                      Vente en ligne, infrastructure sur-mesure et stratégie marketing avancée pour maximiser votre chiffre d'affaires.
                    </p>

                    <div className="mt-6">
                      <p className="text-sm text-slate-300">À partir de</p>
                      <div className="text-4xl font-black tracking-tight text-white">
                        4 997€
                      </div>
                    </div>
                  </div>

                  <div className="mt-7 h-px bg-white/10" />

                  <ul className="mt-7 space-y-3 text-sm">
                    {[
                      "Site sur mesure + boutique e-commerce",
                      "Référencement SEO avancée",
                      "Intégrations & API complexes",
                      "Hébergement + maintenance : 1 an inclus",
                      "Modifications complexes à prix réduit (évolutions)",
                      "Gestion de la fiche GMB : 3 mois inclus",
                      "Branding inclus + photos incluses",
                      "Intégrations de paiement & boutiques e-commerce",
                      "Accompagnement marketing personnalisé",
                      // ✅ lignes ajoutées pour égaliser visuellement
                      "Rédaction & publication d’articles de blog (3 mois)",
                    ].map((it, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-100">
                        <ArrowRight className="w-4 h-4 text-amber-200 mt-0.5 shrink-0" />
                        <span className="font-medium">{it}</span>
                      </li>
                    ))}
                  </ul>

                  {/* ✅ bouton centré */}
                  <div className="mt-auto pt-8 flex justify-center">
                    <Link href="/contact" className="w-full max-w-[240px]" title="Aller à la page Contact - Digitalova">
                      <Button className="w-full h-12 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-extrabold shadow">
                        Choisir l’excellence
                      </Button>
                    </Link>
                  </div>

                  <p className="mt-4 text-xs text-slate-300 text-center">
                    Conçu pour une vision <span className="font-bold">long terme</span> et business <span className="font-bold">e-commerce</span>.
                  </p>
                </div>
              </motion.article>
            </div>

            {/* ✅ Transition vers CTA : flèche animée + un peu d’espace */}
            <div className="mt-12 flex flex-col items-center gap-3">
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 backdrop-blur"
                aria-hidden="true"
              >
                <ArrowDown className="w-5 h-5 text-slate-100" />
              </motion.div>

              <p className="text-xs text-slate-400">
                Prochaine étape : on parle de votre projet !
              </p>
            </div>
          </div>

          {/* ✅ Wave bottom (comme tes sections dark) */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180 -mb-[1px] translate-y-[1px]">
            <svg
              className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[100px]"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-gray-50"
              />
            </svg>
          </div>
        </section>

        {/* 6. CTA */}
        <section className="pb-15 pt-0 relative bg-gray-50/50" style={belowFoldStyle}>
          <div className="container mx-auto px-4">
            <div className="text-center bg-slate-900 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl translate-y-1/2" />
              </div>

              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
                  Prêt à Lancer Votre{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    Projet
                  </span>{' '}
                  ?
                </h2>
                <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                  Ne laissez plus vos concurrents prendre l&apos;avantage. Recevez votre estimation gratuite et sans engagement
                  afin de démarrer votre transformation digitale dès maintenant.
                </p>
                <Link href="/contact" title="Aller à la page Contact - Digitalova">
                  <Button
                    size="lg"
                    className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-10 h-14 rounded-full shadow-xl transition-transform hover:scale-105 font-bold"
                  >
                    Demander Mon Devis Gratuit
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQ (lazy + idle) */}
        <section style={belowFoldStyle}>
          <Suspense fallback={null}>{showFAQ ? <LazyFAQSection /> : null}</Suspense>
        </section>
      </div>
    </>
  );
};

export default Home;