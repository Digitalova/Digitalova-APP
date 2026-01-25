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
  HeartHandshake,
  Gift,
  Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';

// ✅ Lazy-load (évite de charger ces composants dès le premier paint)
const LazyBackgroundBlobs = React.lazy(() => import('@/components/BackgroundBlobs'));
const LazyFAQSection = React.lazy(() => import('@/components/FAQSection'));

/* =========================
   Logos outils avec couleurs de marque
========================= */
const TOOL_LOGOS = {
  n8n: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/n8n.svg', color: '#EA4B71' },
  ChatGPT: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/openai.svg', color: '#412991' },
  Gemini: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googlegemini.svg', color: '#4285F4' },
  NodeJS: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/nodedotjs.svg', color: '#339933' },
  React: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/react.svg', color: '#61DAFB', lightBg: true },
  Claude: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/anthropic.svg', color: '#D97757' },
  Supabase: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/supabase.svg', color: '#3FCF8E' },
  Notion: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/notion.svg', color: '#000000' },
  'Google Sheets': { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googlesheets.svg', color: '#34A853' },
  Gmail: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/gmail.svg', color: '#EA4335' },
  Hostinger: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/hostinger.svg', color: '#673DE6' },
  'Google Analytics': { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googleanalytics.svg', color: '#E37400' },
  Canva: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/canva.svg', color: '#00C4CC' },
  'Google PageSpeed': { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/pagespeedinsights.svg', color: '#4285F4' },
  'Google Maps': { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/googlemaps.svg', color: '#4285F4' },
  Webflow: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/webflow.svg', color: '#146EF5' },
  'WhatsApp Business': { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/whatsapp.svg', color: '#25D366' },
  Stripe: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/stripe.svg', color: '#635BFF' },
  Shopify: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/shopify.svg', color: '#7AB55C' },
  Framer: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/framer.svg', color: '#0055FF' },
  Cloudflare: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/cloudflare.svg', color: '#F38020' },
  LinkedIn: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg', color: '#0A66C2' },
  Calendly: { url: 'https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/calendly.svg', color: '#006BFF' },
};

/* =========================
   Banderole full width (PC only)
========================= */
const ToolsMarqueeFullWidth = () => {
  const items = [
    { name: 'n8n', img: TOOL_LOGOS.n8n.url, color: TOOL_LOGOS.n8n.color },
    { name: 'ChatGPT', img: TOOL_LOGOS.ChatGPT.url, color: TOOL_LOGOS.ChatGPT.color },
    { name: 'Gemini', img: TOOL_LOGOS.Gemini.url, color: TOOL_LOGOS.Gemini.color },
    { name: 'React', img: TOOL_LOGOS.React.url, color: TOOL_LOGOS.React.color, lightBg: TOOL_LOGOS.React.lightBg },
    { name: 'Claude', img: TOOL_LOGOS.Claude.url, color: TOOL_LOGOS.Claude.color },
    { name: 'Supabase', img: TOOL_LOGOS.Supabase.url, color: TOOL_LOGOS.Supabase.color },
    { name: 'Notion', img: TOOL_LOGOS.Notion.url, color: TOOL_LOGOS.Notion.color },
    { name: 'Google Sheets', img: TOOL_LOGOS['Google Sheets'].url, color: TOOL_LOGOS['Google Sheets'].color },
    { name: 'Node.js', img: TOOL_LOGOS.NodeJS.url, color: TOOL_LOGOS.NodeJS.color },
    { name: 'Gmail', img: TOOL_LOGOS.Gmail.url, color: TOOL_LOGOS.Gmail.color },
    { name: 'Google Analytics', img: TOOL_LOGOS['Google Analytics'].url, color: TOOL_LOGOS['Google Analytics'].color },
    { name: 'Google PageSpeed', img: TOOL_LOGOS['Google PageSpeed'].url, color: TOOL_LOGOS['Google PageSpeed'].color },
    { name: 'Google Maps', img: TOOL_LOGOS['Google Maps'].url, color: TOOL_LOGOS['Google Maps'].color },
    { name: 'Webflow', img: TOOL_LOGOS.Webflow.url, color: TOOL_LOGOS.Webflow.color },
    { name: 'Framer', img: TOOL_LOGOS.Framer.url, color: TOOL_LOGOS.Framer.color },
    { name: 'Canva', img: TOOL_LOGOS.Canva.url, color: TOOL_LOGOS.Canva.color },
    { name: 'WhatsApp Business', img: TOOL_LOGOS['WhatsApp Business'].url, color: TOOL_LOGOS['WhatsApp Business'].color },
    { name: 'Stripe', img: TOOL_LOGOS.Stripe.url, color: TOOL_LOGOS.Stripe.color },
    { name: 'Shopify', img: TOOL_LOGOS.Shopify.url, color: TOOL_LOGOS.Shopify.color },
    { name: 'Cloudflare', img: TOOL_LOGOS.Cloudflare.url, color: TOOL_LOGOS.Cloudflare.color },
    { name: 'LinkedIn', img: TOOL_LOGOS.LinkedIn.url, color: TOOL_LOGOS.LinkedIn.color },
    { name: 'Calendly', img: TOOL_LOGOS.Calendly.url, color: TOOL_LOGOS.Calendly.color },
    { name: 'Hostinger', img: TOOL_LOGOS.Hostinger.url, color: TOOL_LOGOS.Hostinger.color },
  ];

  const track = [...items, ...items];

  return (
    <section className="hidden lg:block">
      {/* ✅ full width même si le parent est en container */}
      <div className="relative w-screen left-1/2 -translate-x-1/2">
          <div className="px-4">
          <div className="text-center mb-5">
            <p className="text-sm font-semibold text-slate-300">
              Des solutions digitales avec vos outils préférés
            </p>
          </div>

          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#070B16]/95 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#070B16]/95 to-transparent z-10" />

            <div className="py-4">
              <div className="marquee">
                <div className="marquee__track" aria-label="Outils compatibles">
                  {track.map((it, idx) => (
                    <div
                      key={`${it.name}-${idx}`}
                      className="flex items-center gap-2.5 px-4 py-2 rounded-xl border border-white/10 bg-white/5 shadow-sm mx-2.5"
                    >
                      <div 
                        className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center shadow-sm transition-transform duration-200 hover:scale-110"
                        style={{ backgroundColor: it.lightBg ? '#0f172a' : it.color }}
                      >
                        <img
                          src={it.img}
                          alt={`Logo ${it.name}`}
                          title={`Logo ${it.name} - Digitalova`}
                          className="w-5 h-5 object-contain"
                          style={{ filter: it.lightBg 
                            ? 'invert(83%) sepia(26%) saturate(1095%) hue-rotate(152deg) brightness(103%) contrast(96%)' 
                            : 'brightness(0) invert(1)' 
                          }}
                          loading="lazy"
                          decoding="async"
                          width="20"
                          height="20"
                        />
                      </div>
                      <span className="text-xs font-semibold text-slate-200 whitespace-nowrap">{it.name}</span>
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
                animation: marqueeScroll 14s linear infinite;
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
    <div className="lg:hidden mt-14">
      {/* Design créatif - Cadre asymétrique */}
      <div className="relative">
        {/* Accent vertical coloré */}
        <div className="absolute -left-4 top-8 bottom-8 w-1 rounded-full bg-gradient-to-b from-purple-500 via-pink-500 to-purple-500" />
        
        {/* Cercle décoratif flottant */}
        <div className="absolute -top-6 right-8 w-20 h-20 rounded-full border border-purple-500/20 bg-purple-500/5 blur-sm" />
        <div className="absolute -bottom-4 left-12 w-14 h-14 rounded-full border border-pink-500/20 bg-pink-500/5 blur-sm" />

        {/* Image avec effet de perspective */}
        <div className="relative ml-3">
          <div className="relative rounded-[1.75rem] overflow-hidden shadow-[0_25px_80px_-30px_rgba(139,92,246,0.3)]">
            <img
              alt="Aperçu des réalisations de sites web Digitalova"
              title="Sites web modernes - Digitalova"
              src="https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/IMagePourPortfoliog.webp"
              className="w-full h-auto object-cover"
              width="1200"
              height="800"
              fetchPriority="high"
              decoding="sync"
              loading="eager"
            />
            {/* Overlay avec dégradé créatif */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 via-transparent to-pink-900/20 pointer-events-none" />
            
            {/* Ligne lumineuse en bas */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
          </div>

          {/* Badge créatif - style "pill" moderne */}
          <div className="absolute -bottom-5 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-900 shadow-xl shadow-purple-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold">+80% visibilité</span>
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
      title: 'Conception de Site Internet sur Mesure',
      description:
        "Du site Web vitrine élégant à la boutique e-commerce performante pour vendre 24h/24, je conçois la solution digitale sur-mesure qui s'adapte parfaitement à vos ambitions.",
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: 'Gestion de fiche Google My Business',
      description:
        "Gestion complète de votre fiche d'établissement Google. J'optimise la fiche pour attirer les clients qui cherchent vos services maintenant. Gain de temps : Je gère les avis google et les posts pour vous.",
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: 'Optimisation SEO Avancée',
      description:
        "Une visibilité maximale sur Google pour attirer les bons clients : j'optimise le SEO de votre site web et votre fiche GoogleMyBusiness pour qu'ils soient trouvés par ceux qui ont le plus besoin de vous.",
    },
    {
      icon: <Bot className="w-12 h-12" />,
      title: 'Intégrations & Systèmes Intelligents',
      description:
        "De la constitution de votre base de données à l'envoi d'emails transactionnels, je connecte les meilleurs outils pour que vous restiez proche de vos clients. Le tout automatisé pour vous libérer du temps.",
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Audit & Stratégie',
      description:
        "J'analyse votre marché, vos concurrents et vos objectifs pour définir une stratégie digitale gagnante dès le départ.",
    },
    {
      number: '02',
      title: 'Design & Maquettage',
      description:
        "Je conçois une maquette de votre site intenet avec une interface moderne et intuitive qui reflète votre identité de marque et guide vos visiteurs vers l'action.",
    },
    {
      number: '03',
      title: 'Développement & SEO',
      description:
        'Personnalisation, conception technique, rédaction du contenu et optimisisation pour le référencement naturel (SEO) afin de vous placer dans les premiers résultats et gagner en visibilité.',
    },
    {
      number: '04',
      title: 'Lancement & Accompagnement',
      description:
        "Mise en ligne de votre site web sécurisé et après ? Je vous accompagne dans votre présence digitale dans l'intérêt de faire grandir votre activité.",
    },
  ];

  const featuredProjects = [
    {
      title: 'Site internet Vitrine pour un Restaurant',
      category: 'Gastronomie',
      image:
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/Affiche_de_portfolio_siteweb_restaurant_italien_9_11zon.webp',
      tags: ['Site Vitrine', 'Réservation', 'Mons'],
      url: '/portfolio?project=digi-gustavo',
      seoTitle: 'Voir le projet Digi-Gustavo : Site vitrine restaurant',
    },
    {
      title: 'Site web pour un Cuisiniste à Mons',
      category: 'Artisanat',
      image:
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/Affiche_de_portfolio_siteweb_cuisiniste_mons_6_11zon.webp',
      tags: ['Catalogue', 'Showroom 3D', 'local'],
      url: '/portfolio?project=digi-kitchen',
      seoTitle: 'Voir le projet Digi-Kitchen : Site web catalogue pour cuisiniste à Mons',
    },
    {
      title: "Site internet d'une Agence de location de voiture",
      category: 'Automobile',
      image:
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/Affiche_de_portfolio_siteweb_agence_de_location_voiture_2_11zon%20(1).webp',
      tags: ['Location', 'Booking', 'Hainaut'],
      url: '/portfolio?project=digi-location',
      seoTitle: 'Voir le projet Digi-Location Hainaut : Site internet de réservation en ligne',
    },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <>
      <div className="pt-20 relative bg-[#070B16] overflow-hidden">
        <Suspense fallback={null}>{showDecor && <LazyBackgroundBlobs />}</Suspense>

        <div className="absolute inset-0 pointer-events-none opacity-[0.7]">
          <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-pink-600/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.22]">
            <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
          </div>
        </div>

        {/* 1. HERO SECTION — Premium & Sobre */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Ligne décorative subtile */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          <div className="container mx-auto px-4 relative z-10 py-20 lg:py-28">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Contenu texte */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-6 text-center lg:text-left"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold tracking-tight text-white mb-8 leading-[1.1]">
                  Création de{' '}
                  <span className="relative inline-block">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-purple-300 to-pink-200">
                      sites internet 
                    </span>
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-gradient-to-r from-purple-400/50 to-pink-400/50" />
                  </span>
                  <br className="hidden sm:block" />
                  {' '}sur mesure
                </h1>

                <p className="text-lg lg:text-xl text-slate-400 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
                  De la conception à la mise en ligne, je crée des sites web qui captivent votre audience et convertissent vos visiteurs en clients.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link href="/contact" title="Aller à la page Contact - Digitalova">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-white hover:bg-white/90 text-slate-900 text-base font-semibold h-13 px-7 rounded-xl shadow-lg shadow-white/10 transition-all duration-300 hover:shadow-xl hover:shadow-white/20"
                    >
                      <span className="cta-button">Demander un devis</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>

                  <Link href="/portfolio" title="Aller à la page Portfolio - Digitalova">
                    <Button
                      size="lg"
                      variant="ghost"
                      className="w-full sm:w-auto text-white/80 hover:text-white hover:bg-white/[0.05] text-base font-medium h-13 px-7 rounded-xl border border-white/[0.08] transition-all duration-300"
                    >
                      Voir mes réalisations
                    </Button>
                  </Link>
                </div>

                {/* ✅ HERO MOBILE (mobile only) */}
                <MobileHeroRedesign />
              </motion.div>

              {/* Image avec effet premium */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-6 relative hidden lg:block"
              >
                {/* Cadre extérieur subtil */}
                <div className="relative group">
                  {/* Glow effect derrière l'image - animé au hover */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/15 via-transparent to-pink-500/15 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Cercles décoratifs animés */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-white/[0.05] opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full border border-purple-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 group-hover:scale-110" />
                  
                  {/* Container image principal */}
                  <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-slate-900/50 shadow-2xl shadow-black/40 transition-all duration-500 group-hover:shadow-purple-500/10 group-hover:border-white/[0.12]">
                    <motion.img
                      alt="Image de plusieurs sites internet réalisés par l'agence web Digitalova Mons"
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      title="Sites web modernes créés par Digitalova"
                      src="https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/IMagePourPortfoliog.webp"
                      width="1200"
                      height="800"
                      decoding="async"
                      fetchPriority="high"
                      loading="eager"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.5 }}
                    />
                    {/* Overlay subtil avec effet au hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-purple-900/5 pointer-events-none transition-opacity duration-500 group-hover:opacity-70" />
                    
                    {/* Reflet lumineux qui se déplace au hover */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  </div>

                  {/* Badge flottant — discret */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute -bottom-3 -left-3 xl:-left-6"
                  >
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/[0.08]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="text-xs text-slate-300 font-medium">+80% visibilité</span>
                    </div>
                  </motion.div>

                  {/* Indicateur discret en haut à droite */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="absolute -top-3 -right-3 xl:-right-6"
                  >
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-white/[0.08]">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs text-slate-400 font-medium">Mons</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Séparateur élégant avant la banderole */}
            <div className="mt-20 lg:mt-24 mb-8">
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span className="text-xs text-slate-500 font-medium uppercase tracking-widest">Outils</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
            </div>

            {/* ✅ Banderole d'outils */}
            <ToolsMarqueeFullWidth />
          </div>
        </section>

        {/* 2. CHALLENGES / SOLUTIONS */}
        <section className="py-24 relative text-white overflow-hidden" style={belowFoldStyle}>

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
                Identifions les éléments qui freinent votre croissance digitale et mettons en place les leviers pour décoller.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10 mt-14">
              {challenges.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -12 }}
                  className="bg-white/5 rounded-3xl p-10 shadow-xl border border-white/10 backdrop-blur-sm transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500/20 relative overflow-hidden group"
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

        </section>

        {/* 3. SERVICES */}
        <section className="py-20 relative" style={belowFoldStyle}>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={itemVariants}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Decouvrez <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">mes solutions </span>digitales
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
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
                  className="rounded-2xl p-8 cursor-default group backdrop-blur-sm border border-white/10 bg-[#0F172A] transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500/20"
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
                  className="border-2 border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 transition-all hover:scale-105 bg-white/5"
                >
                  Découvrir les Solutions
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>

        </section>

        {/* 4. MÉTHODE */}
        <section className="py-20 relative text-white overflow-hidden" style={belowFoldStyle}>

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
                Voici un aperçu de ma méthode de création web pour vous livrer un site web performant qui convient à vos besoins
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
                  className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500/20 group"
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

        </section>

        {/* 5. PORTFOLIO */}
        <section className="py-24 relative" style={belowFoldStyle}>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Mes Dernières{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                    Réalisations Web
                  </span>
                </h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                 Découvrez comment j&apos;aide mes clients à Mons à se démarquer avec la création d'un site internet qui présente leur activité de manière claire et efficace.
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
                    <div className="relative rounded-2xl overflow-hidden shadow-lg h-full bg-[#0F172A] border border-white/10 flex flex-col transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500/20">
                      <div className="relative aspect-[3/2] overflow-hidden bg-slate-900">
                        <img
                          src={project.image}
                          alt={`Aperçu d'un site internet : ${project.title} Projet créé par l'agence web Digitalova Mons`}
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
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold bg-white/5 shadow-sm"
                >
                  Voir tous les projets
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ✅ 2) REMPLACE ta section OFFRES par celle-ci (entre Réalisations et CTA) */}
        <section className="py-24 relative text-white overflow-hidden" style={belowFoldStyle}>
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
                className="relative rounded-[2.25rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_28px_90px_-70px_rgba(0,0,0,0.8)] transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500/20"
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
                      <div className="text-3xl font-black tracking-tight text-white">
                        Sur devis
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
                className="relative rounded-[2.6rem] overflow-hidden border border-white/20 bg-gradient-to-b from-white/10 via-white/5 to-white/5 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.9)] transition-all duration-500 hover:shadow-purple-500/25 hover:border-purple-500/30"
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
                      <div className="text-4xl font-black tracking-tight text-white">
                        Sur devis
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
                className="relative rounded-[2.25rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_28px_90px_-70px_rgba(0,0,0,0.8)] transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500/20"
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
                      <div className="text-3xl font-black tracking-tight text-white">
                        Sur devis
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

        </section>

        {/* 6. CTA */}
        <section className="pb-15 pt-0 relative" style={belowFoldStyle}>
          <div className="container mx-auto px-4">
            <div className="text-center bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-500/20 group">
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
                  Ne laissez plus vos concurrents prendre l&apos;avantage. Remplissez le formulaire de contact et réalisons ensemble votre futur site internet selon vos besoins.
                </p>
                <Link href="/contact" title="Aller à la page Contact - Digitalova">
                  <Button
                    size="lg"
                    className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-10 h-14 rounded-full shadow-xl transition-transform hover:scale-105 font-bold"
                  >
                    Remplir le formulaire
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 7. PROGRAMME PARTENAIRES */}
        <section className="py-20 relative text-white overflow-hidden" style={belowFoldStyle}>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="max-w-5xl mx-auto bg-gradient-to-br from-purple-900/20 via-slate-900/40 to-pink-900/20 rounded-[2.5rem] p-8 md:p-12 border border-white/10 backdrop-blur-sm shadow-2xl relative overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-500/20 group"
            >
              {/* Décoration de fond */}
              <div className="absolute inset-0 pointer-events-none opacity-60">
                <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-purple-600/15 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-pink-600/15 blur-3xl" />
              </div>

              <div className="relative z-10">
                {/* En-tête */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                        <HeartHandshake className="w-6 h-6 text-purple-300" />
                      </div>
                      <span className="text-sm font-bold text-purple-300 uppercase tracking-wider">
                        Programme Partenaires
                      </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                      Gagnez jusqu&apos;à{' '}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                        25% de commission
                      </span>
                    </h2>
                    
                    <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                      Recommandez Digitalova à votre entourage et soyez récompensé pour chaque client apporté. 
                      Un système transparent, rapide et ouvert à tous.
                    </p>
                  </div>

                  {/* CTA */}
                  <div className="flex-shrink-0">
                    <Link href="/partenaires" title="Découvrir le programme partenaires - Digitalova">
                      <Button
                        size="lg"
                        className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 h-14 rounded-full shadow-xl transition-transform hover:scale-105 font-bold flex items-center gap-2"
                      >
                        <HeartHandshake className="w-5 h-5" />
                        Devenir Partenaire
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Avantages clés */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-lg hover:border-purple-500/20"
                  >
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <Gift className="w-5 h-5 text-green-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Commissions + Crédits</h3>
                      <p className="text-sm text-slate-400">Argent + services offerts pour votre activité</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-lg hover:border-purple-500/20"
                  >
                    <div className="p-2 bg-blue-500/20 rounded-lg">
                      <Clock className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Paiement en 72h</h3>
                      <p className="text-sm text-slate-400">Dès réception de l&apos;acompte client</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-lg hover:border-purple-500/20"
                  >
                    <div className="p-2 bg-amber-500/20 rounded-lg">
                      <Users className="w-5 h-5 text-amber-300" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">Ouvert à tous</h3>
                      <p className="text-sm text-slate-400">Clients, indépendants, amis, étudiants…</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 8. FAQ (lazy + idle) */}
        <section style={belowFoldStyle}>
          <Suspense fallback={null}>{showFAQ ? <LazyFAQSection /> : null}</Suspense>
        </section>
      </div>
    </>
  );
};

export default Home;