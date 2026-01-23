'use client';

import React from 'react';

import Link from 'next/link';
import {
  Bot,
  ArrowRight,
  Zap,
  Clock,
  TrendingUp,
  MessageSquare,
  Workflow,
  Brain,
  Sparkles,
  ShieldCheck,
  Wand2,
  Cpu,
  Mail,
  ListChecks,
  Sheet,
  BadgeCheck,
  AlertTriangle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import BackgroundBlobs from '@/components/BackgroundBlobs';

const HERO_IMAGE =
  'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/AutoN8N.webp';

/**
 * ✅ Vrais logos (SVG) via CDN (Simple Icons)
 */
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
   FAQ Item
========================= */
const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="bg-[#0F172A] rounded-xl overflow-hidden border border-slate-700"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
      >
        <h3 className="text-base font-semibold text-slate-100 pr-4">{faq.question}</h3>
        <Bot
          className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''
            }`}
        />
      </button>

      <div
        className={`px-6 text-slate-300 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'
          }`}
      >
        {faq.answer}
      </div>
    </motion.div>
  );
};

/* =========================
   Infinite Marquee
========================= */
const ToolsMarquee = () => {
  const items = [
    { name: 'n8n', img: TOOL_LOGOS.n8n },
    { name: 'ChatGPT', img: TOOL_LOGOS.ChatGPT },
    { name: 'Gemini', img: TOOL_LOGOS.Gemini },
    { name: 'Claude', img: TOOL_LOGOS.Claude },
    { name: 'Supabase', img: TOOL_LOGOS.Supabase },
    { name: 'Notion', img: TOOL_LOGOS.Notion },
    { name: 'Google Sheets', img: TOOL_LOGOS['Google Sheets'] },
    { name: 'Gmail', img: TOOL_LOGOS.Gmail },
    { name: 'Hostinger', img: TOOL_LOGOS.Hostinger },
    { name: 'Google Analytics', img: TOOL_LOGOS['Google Analytics'] },
    { name: 'Canva', img: TOOL_LOGOS.Canva },
    { name: 'Google PageSpeed', img: TOOL_LOGOS['Google PageSpeed'] },
    { name: 'Google Maps', img: TOOL_LOGOS['Google Maps'] },
    { name: 'Webflow', img: TOOL_LOGOS.Webflow },
    { name: 'WhatsApp', img: TOOL_LOGOS.WhatsApp },
    { name: 'Stripe', img: TOOL_LOGOS.Stripe },
    { name: 'Shopify', img: TOOL_LOGOS.Shopify },
  ];

  const track = [...items, ...items];

  return (
    <section className="mb-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-sm font-semibold text-slate-600">
            Intégrations & automatisations avec vos outils préférés
          </p>
        </div>

        <div className="relative rounded-3xl border border-slate-200 bg-white/70 backdrop-blur overflow-hidden shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/95 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/95 to-transparent z-10" />

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
                        className="w-7 h-7 object-contain"
                        loading="lazy"
                        decoding="async"
                        width="28"
                        height="28"
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-800 whitespace-nowrap">
                      {it.name}
                    </span>
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
              animation: marqueeScroll 22s linear infinite;
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
    </section>
  );
};

/* =========================
   Agent IA Example Section
========================= */
const AgentExample = () => {
  const steps = [
    {
      icon: <Mail className="w-6 h-6 text-purple-300" />,
      title: '1) Lecture & compréhension des emails',
      desc: "L’agent IA analyse chaque retour client (positif, neutre, plainte, bug, demande de remboursement…).",
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-amber-300" />,
      title: '2) Détection des cas “cruciaux”',
      desc: "Il repère les signaux forts : problème sévère, expérience négative, risque d’avis public, urgence, client VIP.",
    },
    {
      icon: <Sheet className="w-6 h-6 text-green-300" />,
      title: '3) Liste claire dans Google Sheets / Notion',
      desc: "Il crée automatiquement une liste des emails qui méritent une réponse humaine, avec résumé + priorité + recommandation.",
    },
    {
      icon: <BadgeCheck className="w-6 h-6 text-pink-300" />,
      title: '4) Réponse auto aux retours non prioritaires',
      desc: "Les retours positifs/non urgents reçoivent une réponse polie et personnalisée, pour garder un excellent contact client.",
    },
  ];

  const mockRows = [
    { priority: 'Haute', subject: 'Produit arrivé cassé', action: 'Réponse humaine + remplacement', tag: 'SAV / Urgent' },
    { priority: 'Haute', subject: 'Bug bloquant après mise à jour', action: 'Escalade technique + suivi', tag: 'Bug / Critique' },
    { priority: 'Moyenne', subject: 'Question sur la garantie', action: 'Réponse auto (template + variables)', tag: 'Info' },
    { priority: 'Basse', subject: 'Super produit, merci !', action: 'Réponse auto (remerciement)', tag: 'Avis positif' },
  ];

  return (
    <section className="mb-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-3xl md:text-4xl font-bold text-slate-900"
          >
            Exemple concret d&apos;agent IA : tri intelligent des retours clients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: 0.08, duration: 0.45 }}
            className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            Vous recevez beaucoup d’emails : la plupart sont juste positifs, mais certains cachent un vrai problème.
            L’IA lit tout, priorise, et vous laisse uniquement ce qui nécessite une réponse humaine.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Steps */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-[#0F172A] rounded-3xl border border-slate-700 shadow-sm overflow-hidden"
          >
            <div className="h-1.5 bg-gradient-to-r from-purple-600 to-pink-600" />
            <div className="p-7 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                  <ListChecks className="w-5 h-5 text-slate-100" />
                </div>
                <p className="text-sm font-semibold text-slate-200">Ce que fait l’agent (sans vous spammer)</p>
              </div>

              <div className="space-y-4">
                {steps.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06, duration: 0.35 }}
                    className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-extrabold">{s.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed mt-1">{s.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-slate-200 font-semibold flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-purple-300" />
                  Résultat : vous répondez seulement quand c&apos;est important
                </p>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  Et l’agent maintient une excellente image de marque en répondant automatiquement aux retours non critiques.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Mock preview (NEW LAYOUT) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="rounded-3xl border border-slate-200 bg-white/80 backdrop-blur shadow-sm overflow-hidden"
          >
            <div className="p-7 md:p-8">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Aperçu de la “liste” générée</p>
                  <p className="text-xs text-slate-500">(Google Sheets / Notion / Airtable — au choix)</p>
                </div>

                <div className="flex flex-wrap gap-2 sm:justify-end">
                  <span className="text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full whitespace-nowrap">
                    Tri + priorisation
                  </span>
                  <span className="text-xs font-semibold text-slate-700 bg-white border border-slate-200 px-3 py-1 rounded-full whitespace-nowrap">
                    Gmail → IA → Sheets / Notion
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
                {/* ✅ Desktop/Table */}
                <div className="hidden md:block overflow-x-auto">
                  <table className="w-full min-w-[820px] border-collapse">
                    <thead>
                      <tr className="text-xs font-bold text-slate-600 bg-slate-50 border-b border-slate-200">
                        <th className="text-left px-4 py-3 w-[140px]">Priorité</th>
                        <th className="text-left px-4 py-3">Sujet</th>
                        <th className="text-left px-4 py-3 w-[280px]">Action</th>
                        <th className="text-left px-4 py-3 w-[180px]">Tag</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockRows.map((r, idx) => (
                        <tr
                          key={idx}
                          className="text-sm text-slate-800 border-b border-slate-100 last:border-b-0 align-top"
                        >
                          <td className="px-4 py-3">
                            <span
                              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${r.priority === 'Haute'
                                  ? 'bg-rose-50 text-rose-700 border-rose-200'
                                  : r.priority === 'Moyenne'
                                    ? 'bg-amber-50 text-amber-700 border-amber-200'
                                    : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                }`}
                            >
                              {r.priority}
                            </span>
                          </td>

                          <td className="px-4 py-3 font-semibold break-words">{r.subject}</td>

                          <td className="px-4 py-3 text-slate-600 break-words">{r.action}</td>

                          <td className="px-4 py-3">
                            <span className="inline-flex text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-1 rounded-full whitespace-nowrap">
                              {r.tag}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* ✅ Mobile/Cards */}
                <div className="md:hidden p-4 space-y-3">
                  {mockRows.map((r, idx) => (
                    <div key={idx} className="rounded-2xl border border-slate-200 bg-white p-4">
                      <div className="flex items-start justify-between gap-3">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border whitespace-nowrap ${r.priority === 'Haute'
                              ? 'bg-rose-50 text-rose-700 border-rose-200'
                              : r.priority === 'Moyenne'
                                ? 'bg-amber-50 text-amber-700 border-amber-200'
                                : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            }`}
                        >
                          {r.priority}
                        </span>

                        <span className="inline-flex text-[11px] font-semibold text-slate-700 bg-slate-100 border border-slate-200 px-2 py-1 rounded-full whitespace-nowrap">
                          {r.tag}
                        </span>
                      </div>

                      <p className="mt-3 text-sm font-extrabold text-slate-900 leading-snug">{r.subject}</p>
                      <p className="mt-1 text-sm text-slate-600 leading-relaxed">{r.action}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer: CTA + Stats (NEW) */}
              <div className="mt-6 grid lg:grid-cols-5 gap-4 items-stretch">
                <div className="lg:col-span-2">
                  <Link href="/contact" className="block h-full" title="Aller à la page Contact - Digitalova">
                    <Button className="w-full h-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-4 rounded-2xl font-extrabold text-base shadow-sm">
                      Je veux cet agent
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                <div className="lg:col-span-3 grid sm:grid-cols-3 gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-xs font-bold uppercase text-slate-500">Temps gagné</p>
                    <p className="text-lg font-extrabold text-slate-900 mt-1">-70% tri</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-xs font-bold uppercase text-slate-500">Réponses</p>
                    <p className="text-lg font-extrabold text-slate-900 mt-1">24/7</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-xs font-bold uppercase text-slate-500">Qualité</p>
                    <p className="text-lg font-extrabold text-slate-900 mt-1">Priorités claires</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* =========================
   Page
========================= */
const AIAutomation = () => {
  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-purple-300" />,
      title: 'Gain de Temps Massif',
      description: "Automatisez les tâches répétitives et récupérez des heures chaque semaine.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-300" />,
      title: 'Productivité Boostée',
      description: 'Processus plus fluides, moins d’erreurs, une équipe plus efficace.',
    },
    {
      icon: <Brain className="w-8 h-8 text-pink-300" />,
      title: 'IA utile (pas gadget)',
      description: 'Agents IA orientés action : qualification, réponses, tri, synthèse, routage.',
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-300" />,
      title: 'ROI Rapide',
      description: 'Impact mesurable : vitesse de traitement, conversions, satisfaction client.',
    },
  ];

  const useCases = [
    {
      title: 'Chatbot Intelligent',
      description:
        'Assistant disponible 24/7 pour répondre, qualifier les prospects et déclencher des actions (RDV, devis, tickets).',
      icon: <MessageSquare className="w-10 h-10 text-purple-300" />,
      features: ['Réponses instantanées', 'Qualification de leads', 'Prise de RDV', 'Multilingue'],
    },
    {
      title: 'Workflows Automatisés',
      description:
        'Connectez vos outils (CRM, email, calendrier, spreadsheets, base de données) et automatisez sans friction.',
      icon: <Workflow className="w-10 h-10 text-pink-300" />,
      features: ['Synchronisation', 'Emails automatiques', 'Lead routing', 'Rapports'],
    },
    {
      title: 'Agent de Prospection IA',
      description:
        'Système qui structure la prospection : enrichissement, scoring, messages personnalisés et suivi.',
      icon: <Brain className="w-10 h-10 text-amber-300" />,
      features: ['Recherche', 'Scoring', 'Messages personnalisés', 'Suivi intelligent'],
    },
  ];

  const faqData = [
    {
      question: "Qu'est-ce que l'automatisation IA peut faire pour mon entreprise ?",
      answer:
        "Emails, qualification, support client, synchronisation d’outils, création de rapports, tri de demandes… Tout ce qui est répétitif, structuré, ou basé sur des règles peut être automatisé (avec ou sans IA).",
    },
    {
      question: 'Ai-je besoin de compétences techniques ?',
      answer:
        "Non. Je configure, je documente et je vous forme. L’objectif : que vous soyez autonome, et que tout soit stable.",
    },
    {
      question: "Combien de temps faut-il pour mettre en place l'automatisation ?",
      answer:
        "Selon la complexité : quelques jours pour un chatbot simple, 1 à 3 semaines pour des workflows complets et connectés.",
    },
    {
      question: "Quel est le coût de l'automatisation IA ?",
      answer:
        "Ça dépend du périmètre. Un setup simple démarre autour de 800€. Des systèmes plus complets (IA + intégrations + reporting) se situent souvent entre 2000€ et 5000€.",
    },
    {
      question: 'Mes données sont-elles sécurisées ?',
      answer:
        'Oui : solutions conformes RGPD, contrôle des accès, bonnes pratiques de sécurité et journalisation si nécessaire.',
    },
    {
      question: "Puis-je intégrer l'IA avec mes outils actuels ?",
      answer:
        'Oui : CRM, email, calendrier, e-commerce, réseaux sociaux, bases de données… on connecte ce que vous utilisez déjà.',
    },
  ];

  return (
    <>

      {/* JSON-LD pour les données structurées */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': 'https://digitalova.be/services/automatisation-ia/#service',
        name: 'Automatisation IA',
        provider: { '@id': 'https://digitalova.be/#organization' },
        description: 'Optimisation du CA et des processus via l\'Intelligence Artificielle.'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': 'https://digitalova.be/services/automatisation-ia/#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://digitalova.be/' },
          { '@type': 'ListItem', position: 2, name: 'IA', item: 'https://digitalova.be/services/automatisation-ia' },
        ],
      }
    ]) }}
      />

      <div className="pt-28 pb-20 bg-slate-50 min-h-screen relative overflow-hidden">
        <BackgroundBlobs />

        <div className="container mx-auto px-4 relative z-10">
          {/* HERO */}
          <div className="mb-20 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/85 backdrop-blur border border-slate-200 text-slate-800 font-semibold text-sm mb-6 shadow-sm">
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 leading-[1.05]">
                  Création de Workflow automatisé & Agent{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">
                    IA
                  </span>
                </h1>

                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Chatbots, workflows et agents IA pour traiter plus vite, répondre mieux, et déclencher automatiquement
                  les actions qui font avancer votre activité.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.45 }}
                  className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link href="/contact" title="Aller à la page Contact - Digitalova">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white text-lg h-14 px-8 rounded-full shadow-xl transition-transform hover:scale-[1.03]"
                    >
                      Demander une démo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <img
                      src={HERO_IMAGE}
                      alt="Illustration automatisation IA"
                      className="w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      width="1600"
                      height="1000"
                     title="Illustration automatisation IA" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/10 to-transparent" />
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Orchestration & intégrations</p>
                        <p className="text-xs text-slate-500">Gmail • Sheets • Notion • Supabase • Webhooks</p>
                      </div>
                      <span className="text-xs font-semibold text-purple-700 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                        DIGITALOVA
                      </span>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="hidden md:flex absolute -bottom-6 left-6 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 items-center gap-3"
                >
                  <div className="p-2 rounded-xl bg-slate-900">
                    <Wand2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500">Workflow</p>
                    <p className="text-sm font-semibold text-slate-900">Déclenchements automatiques</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.33, duration: 0.5 }}
                  className="hidden md:flex absolute -top-6 right-6 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 items-center gap-3"
                >
                  <div className="p-2 rounded-xl bg-purple-600">
                    <ShieldCheck className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500">Fiabilité</p>
                    <p className="text-sm font-semibold text-slate-900">Logs & contrôle</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Marquee */}
          <ToolsMarquee />

          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.08, duration: 0.45, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-slate-700 bg-[#0F172A] shadow-sm hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="h-1.5 bg-gradient-to-r from-purple-600 to-pink-600" />
                <div className="p-6">
                  <div className="mb-4 p-3 rounded-2xl bg-white/5 border border-white/10 inline-flex">
                    {benefit.icon}
                  </div>

                  <h2 className="text-lg font-extrabold text-white mb-2">{benefit.title}</h2>

                  <p className="text-slate-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Agent Example */}
          <AgentExample />

          {/* Use Cases */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
              Solutions d&apos;Automatisation IA
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: index * 0.08, duration: 0.45, ease: 'easeOut' }}
                  whileHover={{ y: -8 }}
                  className="bg-[#0F172A] p-8 rounded-3xl border border-slate-700 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 inline-flex">
                      {useCase.icon}
                    </div>
                    <span className="text-xs font-semibold text-slate-200 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      IA + Automatisation
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{useCase.description}</p>

                  <ul className="space-y-2">
                    {useCase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-slate-300">
                        <Zap className="w-4 h-4 text-purple-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ✅ CTA (PLACÉ AVANT FAQ) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center bg-slate-900 rounded-3xl p-12 md:p-20 relative overflow-hidden mb-20"
          >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Prêt à Automatiser Votre Business ?
              </h2>
              <p className="text-xl text-slate-300 mb-10">
                Discutons de vos processus et découvrez comment l&apos;IA peut transformer votre quotidien.
              </p>
              <Link href="/contact" title="Aller à la page Contact - Digitalova">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-10 h-14 rounded-full font-bold"
                >
                  Demander une Démo Gratuite
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* ✅ FAQ (MAINTENANT APRÈS CTA) */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
              Questions Fréquentes
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {faqData.map((faq, index) => (
                <FAQItem key={index} faq={faq} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAutomation;