'use client';

import React from 'react';

import Link from 'next/link';
import {
  MapPin,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Phone,
  Shield,
  Sparkles,
  LineChart,
  MessageSquare,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import { useIsMobile, getScrollAnimationProps } from '@/lib/useReducedMotion';

const HERO_IMAGE =
  'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/1637335605565.webp';

const FAQItem = ({ faq, isMobile }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <motion.div
      {...getScrollAnimationProps(isMobile, {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
        delay: 0,
      })}
      className="bg-[#0F172A] rounded-xl overflow-hidden border border-slate-700"
    >
      <button onClick={() => setIsOpen(!isOpen)} className="w-full px-6 py-5 flex items-center justify-between text-left">
        <h3 className="text-base font-semibold text-slate-100 pr-4">{faq.question}</h3>
        <Star
          className={`w-5 h-5 text-amber-400 flex-shrink-0 transition-transform duration-300 ${
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

const GoogleBusiness = () => {
  const isMobile = useIsMobile();
  const benefits = [
    {
      icon: <MapPin className="w-8 h-8 text-purple-300" />,
      title: 'Visibilité Maximale',
      description: 'Apparaissez sur Google Maps et dans les résultats locaux au bon moment.',
    },
    {
      icon: <Phone className="w-8 h-8 text-green-300" />,
      title: "Plus d'Appels",
      description: 'Générez davantage de contacts directs (appels, itinéraires, messages).',
    },
    {
      icon: <Users className="w-8 h-8 text-pink-300" />,
      title: 'Trafic en Magasin',
      description: 'Convertissez les recherches locales en visites et rendez-vous.',
    },
    {
      icon: <Star className="w-8 h-8 text-amber-300" />,
      title: 'Réputation Solide',
      description: 'Collectez et gérez vos avis pour renforcer la confiance.',
    },
  ];

  const services = [
    {
      title: 'Optimisation Complète',
      description: 'Audit, configuration et optimisation de votre fiche Google Business pour maximiser votre présence.',
      items: [
        'Audit de votre fiche actuelle',
        'Optimisation des informations',
        'Choix des catégories stratégiques',
        'Ajout de photos (et/ou visuels pro)',
        'Définition des horaires, services & attributs',
      ],
    },
    {
      title: 'Stratégie de Mots-Clés',
      description: 'Intégration des requêtes locales utiles (sans bourrage) pour améliorer votre visibilité.',
      items: [
        'Analyse de la concurrence locale',
        'Recherche de mots-clés géolocalisés',
        'Optimisation de la description',
        'Intégration sémantique (services / zones)',
        'Suivi des performances et ajustements',
      ],
    },
    {
      title: 'Gestion des Avis',
      description: 'Système + process pour obtenir plus d’avis et répondre de façon pro (même en cas d’avis négatif).',
      items: [
        "Mise en place d'un système de collecte d'avis",
        'Réponses personnalisées aux avis',
        'Stratégie de gestion de crise',
        'QR code / lien court / relances',
        'Analyse de la satisfaction client',
      ],
    },
    {
      title: 'Publications Régulières',
      description: 'Posts & actualités pour garder la fiche active (Google adore les fiches vivantes).',
      items: [
        'Posts hebdomadaires optimisés',
        "Annonces d'événements et promotions",
        'Photos et vidéos attractives',
        "Actualités de l'entreprise",
        'Calendrier éditorial personnalisé',
      ],
    },
  ];

  // Chiffres (apport de valeur) — rédigés de façon générale pour éviter des promesses “magiques”
  const stats = [
    { number: '2×', label: 'à 3× plus de chances d’être considéré “fiable” avec une fiche complète et à jour' },
    { number: '+30%', label: "d'actions possibles (appels, itinéraires, visites) quand photos & infos sont optimisées" },
    { number: '24h', label: 'fenêtre fréquente entre une recherche locale et une action (appel / visite / itinéraire)' },
  ];

  const valueAdds = [
    {
      icon: <LineChart className="w-6 h-6 text-purple-300" />,
      title: 'Mesure & pilotage',
      text: 'Suivi des appels, itinéraires, clics site, messages + rapport clair pour décider quoi améliorer.',
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-pink-300" />,
      title: 'Réponses qui convertissent',
      text: "Réponses aux avis (positifs & négatifs) + script simple pour transformer l'avis en rendez-vous.",
    },
    {
      icon: <Shield className="w-6 h-6 text-green-300" />,
      title: 'Sécurité & cohérence',
      text: 'Infos cohérentes partout (site, annuaires, réseaux) pour éviter les signaux contradictoires.',
    },
  ];

  const faqData = [
    {
      question: 'Pourquoi Google Business Profile est-il si important ?',
      answer:
        "C’est souvent la première chose que les clients voient : votre note, vos avis, vos horaires, vos photos et le bouton “Appeler”. Une fiche optimisée peut générer un flux régulier de contacts (appels, messages, itinéraires) sans pub.",
    },
    {
      question: 'Combien de temps faut-il pour voir des résultats ?',
      answer:
        "Les premiers effets apparaissent généralement sous 2 à 4 semaines après l’optimisation. La progression se renforce sur 2 à 3 mois avec des avis, des publications régulières et des ajustements.",
    },
    {
      question: 'Que comprend la gestion mensuelle ?',
      answer:
        'Optimisation continue, publications, réponses aux avis, ajout de photos, suivi des statistiques, rapport mensuel et actions prioritaires selon les résultats.',
    },
    {
      question: 'Puis-je gérer ma fiche moi-même après ?',
      answer:
        "Oui. Je vous forme et je vous laisse une checklist simple. Vous pouvez continuer en autonomie ou garder un accompagnement si vous voulez rester constant.",
    },
    {
      question: "Comment obtenir plus d'avis clients ?",
      answer:
        "Mise en place d’un système simple et automatisable : lien court, QR code, relance post-prestation + scripts adaptés pour demander un avis au bon moment.",
    },
    {
      question: "Que faire en cas d'avis négatif ?",
      answer:
        "Réponse rapide, factuelle et constructive + procédure interne. Bien gérés, les avis négatifs peuvent renforcer la crédibilité et rassurer les futurs clients.",
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
        '@id': 'https://digitalova.be/services/google-business/#service',
        name: 'Gestion Google My Business',
        description: 'Optimisation SEO local et gestion de réputation à Mons.',
        provider: { '@id': 'https://digitalova.be/#organization' }
      }
    ]) }}
      />

      <div className="pt-28 pb-20 min-h-screen relative overflow-hidden bg-[#070B16]">
        <BackgroundBlobs />

        <div className="absolute inset-0 pointer-events-none opacity-[0.7]">
          <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-pink-600/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.22]">
            <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* =========================
              HERO (redesign + image + zéro “texte sur texte”)
             ========================= */}
          <div className="mb-20 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="text-center lg:text-left"
              >
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white leading-[1.05]">
                  La fiche{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                    Google
                  </span>{' '}
                  qui transforme les recherches en clients
                </h1>

                <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Avant même votre site, votre fiche Google Business est souvent votre première impression :
                  note, avis, photos, horaires, bouton “Appeler”, itinéraire… Une fiche optimisée = plus d’actions locales comme des
                  appels, messages et visites.
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
                      className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 text-lg h-14 px-8 rounded-full shadow-xl transition-transform hover:scale-[1.03]"
                    >
                      Demander un audit gratuit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>

                  <Link href="/portfolio" title="Aller à la page Portfolio - Digitalova">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto bg-white/5 text-white border-2 border-white/20 hover:bg-white/10 text-lg h-14 px-8 rounded-full transition-transform hover:scale-[1.03]"
                    >
                      Voir des résultats
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-500/20">
                  <div className="relative aspect-[16/10] bg-slate-100">
                    <img
                      src={HERO_IMAGE}
                      alt="Illustration de la gestion de fiche d'établissement Google Business par l'agence web Digitalova Mons"
                      className="w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                      fetchPriority="high"
                      width="1600"
                      height="1000"
                     title="Illustration Google Business Profile" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/10 to-transparent" />
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-white">Optimisation de la fiche</p>
                        <p className="text-xs text-slate-400">
                          Catégories • services • photos • avis • posts • suivi
                        </p>
                      </div>
                      <span className="text-xs font-semibold text-purple-200 bg-purple-500/20 border border-purple-500/30 px-3 py-1 rounded-full">
                        DIGITALOVA
                      </span>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="hidden md:flex absolute -bottom-6 left-6 bg-white/10 backdrop-blur rounded-2xl shadow-xl border border-white/10 p-4 items-center gap-3"
                >
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.33, duration: 0.5 }}
                  className="hidden md:flex absolute -top-6 right-6 bg-white/10 backdrop-blur rounded-2xl shadow-xl border border-white/10 p-4 items-center gap-3"
                >
                  <div className="p-2 rounded-xl bg-purple-600">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-400">Confiance</p>
                    <p className="text-sm font-semibold text-white">Avis & note</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* =========================
              STATS (apport de valeur)
             ========================= */}
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                {...getScrollAnimationProps(isMobile, {
                  initial: { opacity: 0, y: 14 },
                  animate: { opacity: 1, y: 0 },
                  delay: index * 0.08,
                })}
                whileHover={!isMobile ? { y: -6 } : undefined}
                className="bg-slate-900 p-8 rounded-3xl text-center border border-white/10 shadow-lg transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-500/20"
              >
                <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-3">
                  {stat.number}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Petit bloc “Pourquoi la fiche est critique” */}
          <motion.div
            {...getScrollAnimationProps(isMobile, {
              initial: { opacity: 0, y: 14 },
              animate: { opacity: 1, y: 0 },
              delay: 0,
            })}
            className="mb-20 rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8 shadow-sm max-w-6xl mx-auto transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-xl hover:border-purple-500/20"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-2xl bg-white/10">
                  <MapPin className="w-6 h-6 text-purple-300" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-extrabold text-white">
                    La fiche Google = votre meilleur levier local “gratuit”
                  </h2>
                  <p className="text-slate-300 mt-1">
                    Une fiche complète, active et cohérente aide Google à comprendre votre activité et à vous afficher
                    sur Maps quand des clients cherchent vos services autour de <span className="font-semibold">Mons</span>.
                  </p>
                </div>
              </div>

              <div className="md:ml-auto flex flex-wrap gap-3">
                <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-slate-200">
                  Catégories optimisées
                </span>
                <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-slate-200">
                  Photos & services
                </span>
                <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-slate-200">
                  Avis & réponses
                </span>
                <span className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-slate-200">
                  Posts réguliers
                </span>
              </div>
            </div>
          </motion.div>

          {/* =========================
              BENEFITS (design varié + micro-animations)
             ========================= */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                {...getScrollAnimationProps(isMobile, {
                  initial: { opacity: 0, y: 18 },
                  animate: { opacity: 1, y: 0 },
                  delay: index * 0.08,
                })}
                whileHover={!isMobile ? { y: -6 } : undefined}
                className="rounded-3xl border border-slate-700 bg-[#0F172A] shadow-sm overflow-hidden transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-xl hover:border-purple-500/20"
              >
                <div className="h-1.5 bg-gradient-to-r from-purple-600 to-pink-600" />
                <div className="p-6">
                  <div className="mb-4 p-3 rounded-2xl bg-white/5 border border-white/10 inline-flex">{benefit.icon}</div>
                  <h3 className="text-lg font-extrabold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Valeur ajoutée (3 points) */}
          <div className="mb-20 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {valueAdds.map((v, i) => (
                <motion.div
                  key={i}
                  {...getScrollAnimationProps(isMobile, {
                    initial: { opacity: 0, y: 18 },
                    animate: { opacity: 1, y: 0 },
                    delay: i * 0.08,
                  })}
                  whileHover={!isMobile ? { y: -6 } : undefined}
                  className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 shadow-sm transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-lg hover:border-purple-500/20"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-2xl bg-white/10">{v.icon}</div>
                    <h3 className="text-base font-extrabold text-white">{v.title}</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{v.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* =========================
              SERVICES
             ========================= */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
              Mes Prestations Google Business
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  {...getScrollAnimationProps(isMobile, {
                    initial: { opacity: 0, y: 18 },
                    animate: { opacity: 1, y: 0 },
                    delay: index * 0.06,
                  })}
                  whileHover={!isMobile ? { y: -6 } : undefined}
                  className="bg-[#0F172A] p-8 rounded-3xl border border-slate-700 shadow-sm transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-xl hover:border-purple-500/20"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                        <Shield className="w-4 h-4 text-purple-400 mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* =========================
              CTA
             ========================= */}
          <motion.div
            {...getScrollAnimationProps(isMobile, {
              initial: { opacity: 0, y: 18 },
              animate: { opacity: 1, y: 0 },
              delay: 0,
            })}
            className="mb-20 text-center bg-white/5 border border-white/10 backdrop-blur rounded-3xl p-12 md:p-20 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Prêt à booster votre visibilité locale ?</h2>
              <p className="text-xl text-slate-300 mb-10">
                Recevez un audit gratuit de votre fiche Google Business + un plan d’actions priorisé (photos, catégories,
                avis, posts, cohérence).
              </p>
              <Link href="/contact" title="Aller à la page Contact - Digitalova">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-10 h-14 rounded-full font-bold"
                >
                  Demander un Audit Gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4 text-purple-300" />
                  Plus d’actions (appels / itinéraires)
                </span>
                <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <Star className="w-4 h-4 text-amber-300" />
                  Réputation & avis maîtrisés
                </span>
                <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                  <MapPin className="w-4 h-4 text-pink-300" />
                  SEO local (Mons & alentours)
                </span>
              </div>
            </div>
          </motion.div>

          {/* =========================
              FAQ
             ========================= */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Questions Fréquentes</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {faqData.map((faq, index) => (
                <FAQItem key={index} faq={faq} isMobile={isMobile} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleBusiness;