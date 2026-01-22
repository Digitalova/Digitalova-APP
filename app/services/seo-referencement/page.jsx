'use client';

import React from 'react';

import Link from 'next/link';
import {
  Search,
  ArrowRight,
  TrendingUp,
  Target,
  BarChart,
  FileText,
  Link2,
  Award,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import BackgroundBlobs from '@/components/BackgroundBlobs';

const HERO_IMAGE =
  'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/referencement-local-seo.webp';

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
        <Search
          className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`px-6 text-slate-300 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-5' : 'max-h-0'
        }`}
      >
        {faq.answer}
      </div>
    </motion.div>
  );
};

const SEOOptimization = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-300" />,
      title: 'Trafic Qualifié',
      description: 'Attirez des visiteurs qui recherchent activement vos produits ou services',
    },
    {
      icon: <Target className="w-8 h-8 text-green-300" />,
      title: 'Visibilité Durable',
      description: 'Résultats pérennes qui continuent de générer du trafic dans le temps',
    },
    {
      icon: <Award className="w-8 h-8 text-amber-300" />,
      title: 'Crédibilité Renforcée',
      description: 'Être en haut de Google inspire confiance et légitimité',
    },
    {
      icon: <BarChart className="w-8 h-8 text-pink-300" />,
      title: 'ROI Mesurable',
      description: 'Suivez précisément vos positions et conversions avec des rapports détaillés',
    },
  ];

  const seoProcess = [
    {
      icon: <Search className="w-10 h-10 text-purple-300" />,
      title: 'Audit SEO Complet',
      description:
        "Analyse technique approfondie de votre site pour identifier tous les points d'amélioration.",
      items: [
        'Analyse de la structure technique',
        'Audit de la vitesse de chargement',
        'Vérification du balisage sémantique',
        "Analyse de l'indexation Google",
        'Rapport détaillé avec priorités',
      ],
    },
    {
      icon: <Target className="w-10 h-10 text-pink-300" />,
      title: 'Recherche de Mots-Clés',
      description: 'Identification des requêtes stratégiques pour capter votre audience cible.',
      items: [
        'Analyse de la concurrence',
        'Étude des volumes de recherche',
        'Sélection de mots-clés rentables',
        "Analyse de l'intention de recherche",
        'Mapping sémantique complet',
      ],
    },
    {
      icon: <FileText className="w-10 h-10 text-amber-300" />,
      title: 'Optimisation On-Page',
      description:
        'Optimisation de chaque page pour maximiser sa pertinence et son potentiel de classement.',
      items: [
        'Optimisation des balises Title & Meta',
        'Structure Hn sémantique',
        'Optimisation du contenu',
        'Maillage interne stratégique',
        'Rich snippets et données structurées',
      ],
    },
    {
      icon: <Link2 className="w-10 h-10 text-green-300" />,
      title: 'Stratégie de Contenu',
      description: 'Création de contenu optimisé pour répondre aux questions de votre audience.',
      items: [
        'Calendrier éditorial SEO',
        'Rédaction optimisée',
        'Optimisation des images',
        'Stratégie de liens internes',
        'Mise à jour du contenu existant',
      ],
    },
  ];

  const stats = [
    { number: '93%', label: 'des expériences en ligne commencent par un moteur de recherche' },
    { number: '75%', label: 'des utilisateurs ne dépassent jamais la première page de résultats' },
    { number: '14.6%', label: 'taux de conversion moyen du SEO vs 1.7% pour la publicité traditionnelle' },
  ];

  const faqData = [
    {
      question: 'Combien de temps faut-il pour voir des résultats SEO ?',
      answer:
        'Les premiers effets apparaissent généralement après 3-4 mois. Les résultats significatifs (top 3 positions) nécessitent 6-12 mois selon la concurrence. Le SEO est un investissement à moyen-long terme, mais les résultats sont durables et font la différence.',
    },
    {
      question: 'Quelle est la différence entre SEO et SEA (Google Ads) ?',
      answer:
        "Le SEO (référencement naturel) génère du trafic gratuit et durable mais prend du temps et est moins controlable. Le SEA (publicité payante) donne des résultats immédiats mais coûte cher et s'arrête dès que vous cessez de payer. Le SEO est plus rentable sur le long terme.",
    },
    {
      question: 'Garantissez-vous la première position sur Google ?',
      answer:
        "Personne ne peut garantir la position #1 sur google (méfiez-vous de ceux qui le promettent). Je garantis des améliorations mesurables de vos positions et de votre trafic grâce à des stratégies éprouvées et conformes aux recommandations Google.",
    },
    {
      question: 'Le SEO fonctionne-t-il pour tous les secteurs ?',
      answer:
        "Oui ! Que vous soyez artisan, commerçant, professionnel libéral ou e-commerce, le SEO est efficace. La stratégie varie selon votre secteur, votre zone géographique et vos objectifs, mais les principes fondamentaux restent les mêmes. Présence google = SEO praticable",
    },
    {
      question: 'Que comprend votre prestation SEO ?',
      answer:
        'Audit initial complet, recherche de mots-clés, optimisations techniques, optimisation du contenu, création de contenu SEO, suivi mensuel des positions, rapports détaillés, analyse de votre place de marché ainsi que la concurence sectorielle et ajustements stratégiques continus.',
    },
    {
      question: 'Puis-je faire du SEO moi-même ?',
      answer:
        "C'est possible mais chronophage et technique. Le SEO demande des compétences en rédaction, technique web, analyse de données et veille constante des évolutions Google. Mon expertise vous fait gagner du temps et évite les erreurs coûteuses.",
    },
  ];

  return (
    <>

      {/* JSON-LD pour les données structurées */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Expertise SEO & Référencement Naturel",
        "serviceType": "SEO Optimization",
        "description": "Services de référencement naturel complets incluant audit technique, recherche de mots-clés et SEO local à Mons.",
        "provider": {
          "@type": "LocalBusiness",
          "name": "DIGITALOVA",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mons",
            "addressRegion": "Hainaut",
            "addressCountry": "BE"
          }
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Hainaut"
        }
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Combien de temps faut-il pour voir des résultats SEO ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Les premiers effets apparaissent généralement après 3-4 mois. Les résultats significatifs (top 3 positions) nécessitent 6-12 mois selon la concurrence."
            }
          },
          {
            "@type": "Question",
            "name": "Garantissez-vous la première position sur Google ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Personne ne peut garantir la position #1. DIGITALOVA garantit des améliorations mesurables de vos positions et de votre trafic grâce à des stratégies conformes aux recommandations Google."
            }
          }
        ]
      }
    ]) }}
      />

      <div className="pt-28 pb-20 bg-slate-50 min-h-screen relative overflow-hidden">
        <BackgroundBlobs />

        <div className="container mx-auto px-4 relative z-10">
          {/* =========================
              HERO
             ========================= */}
          <div className="mb-20 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <div className="text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 leading-[1.05]">
                  Propulsez votre site web au top des recherches Google
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Une stratégie SEO complète : audit technique, optimisation des pages, copywriting stratégique et suivi clair des
                  performances. Idéal pour capter des clients dans votre zone et faire connaitre votre activité avec Digitalova.
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
                      Demander un audit gratuit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>

                  <Link href="/services" title="Aller à la page Services - Digitalova">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto bg-white/80 text-slate-900 border-2 border-slate-200 hover:bg-slate-100 text-lg h-14 px-8 rounded-full transition-transform hover:scale-[1.03]"
                    >
                      Voir les services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </div>

              {/* Right */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-16 -right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-16 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl" />
                  </div>

                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    <img
                      src={HERO_IMAGE}
                      alt="Illustration SEO"
                      className="w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                      width="1600"
                      height="1000"
                     title="Illustration SEO" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/10 to-transparent" />
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Optimisation SEO</p>
                        <p className="text-xs text-slate-500">Audit • Mots-clés • Optimisation • copywriting • Reporting</p>
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
                  transition={{ delay: 0.33, duration: 0.5 }}
                  className="hidden md:flex absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 items-center gap-3"
                >
                  <div className="p-2 rounded-xl bg-purple-600">
                    <Search className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500">Focus</p>
                    <p className="text-sm font-semibold text-slate-900">Positions Google</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* =========================
              STATS
             ========================= */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: index * 0.08, duration: 0.45, ease: 'easeOut' }}
                whileHover={{ y: -6 }}
                className="bg-slate-900 p-8 rounded-3xl text-center border border-white/10 shadow-lg"
              >
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
                  {stat.number}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* =========================
              BENEFITS
             ========================= */}
          <div className="mb-20 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              {/* Image panel */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-4"
              >
                <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white h-full">
                  <div className="relative aspect-[4/5] bg-slate-100">
                    <img
                      src={HERO_IMAGE}
                      alt="Illustration référencement naturel"
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width="1200"
                      height="1500"
                     title="Illustration référencement naturel" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/85 backdrop-blur border border-slate-200 rounded-2xl p-4">
                      <p className="text-sm font-semibold text-slate-900">SEO = trafic durable</p>
                      <p className="text-xs text-slate-600">
                        Une stratégie propre, mesurable, et alignée sur votre business.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Benefits cards */}
              <div className="lg:col-span-8">
                <div className="grid md:grid-cols-2 gap-6">
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
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-2xl bg-white/5 border border-white/10">{benefit.icon}</div>
                          <div className="min-w-0">
                            {/* ✅ H3 -> H2 */}
                            <h2 className="text-lg font-extrabold text-white mb-2">{benefit.title}</h2>
                            <p className="text-slate-300 text-sm leading-relaxed">{benefit.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* local SEO léger */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: 0.12, duration: 0.45 }}
                  className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <p className="text-slate-700">
                    Besoin de renforcer votre visibilité locale (ex. <span className="font-semibold">Mons</span>) ? On
                    structure les pages et le contenu pour capter des recherches “près de moi”, sans sur-optimisation.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Process */}
          <div className="mb-20">
            {/* ✅ (déjà en H2) */}
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
              Ma Méthode SEO en 4 Étapes
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {seoProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.06 }}
                  whileHover={{ y: -6 }}
                  className="bg-[#0F172A] p-8 rounded-3xl border border-slate-700 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="mb-6">{step.icon}</div>

                  {/* (tu ne l'as pas demandé, donc je laisse ce titre en h3) */}
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>

                  <p className="text-slate-300 mb-6 leading-relaxed">{step.description}</p>

                  <ul className="space-y-2">
                    {step.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                        <TrendingUp className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FAQ */}
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

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-center bg-slate-900 rounded-3xl p-12 md:p-20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Prêt à Dominer Google ?</h2>
              <p className="text-xl text-slate-300 mb-10">
                Recevez un audit SEO gratuit de votre site et découvrez votre potentiel de croissance.
              </p>
              <Link href="/contact" title="Aller à la page Contact - Digitalova">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-10 h-14 rounded-full font-bold"
                >
                  Demander un audit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SEOOptimization;