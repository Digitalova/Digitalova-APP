'use client';

import React from 'react';

import Link from 'next/link';
import { Globe, ArrowRight, CheckCircle, Palette, Zap, Shield, Smartphone, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import BackgroundBlobs from '@/components/BackgroundBlobs';

const HERO_IMAGE =
  'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/IMagePourPortfoliog.webp';

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="bg-[#0F172A] rounded-xl overflow-hidden border border-slate-700"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left"
        aria-expanded={isOpen}
        aria-label={`Ouvrir la question : ${faq.question}`}
        title={faq.question}
      >
        {/* ✅ H3 -> H2 */}
        <h3 className="text-base font-semibold text-slate-100 pr-4">{faq.question}</h3>
        <CheckCircle
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

const WebDevelopment = () => {
  const benefits = [
    {
      icon: <Palette className="w-8 h-8 text-purple-300" />,
      title: 'Design Sur Mesure',
      description: 'Interface unique qui reflète parfaitement votre identité de marque',
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-300" />,
      title: 'Axé sur la conversion',
      description: 'Site web axé sur la conversion avec un parcours client simplifié',
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-300" />,
      title: 'Présence en ligne',
      description: 'Votre vitrine disponible 24h/24 qui converti à votre place',
    },
    {
      icon: <Shield className="w-8 h-8 text-green-300" />,
      title: 'Sécurité Renforcée',
      description: 'Protection maximale de vos données et de celles de vos clients selon RGPD',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Découverte & Stratégie',
      description: 'Analyse approfondie de vos besoins, objectifs et marché pour définir la stratégie parfaite.',
    },
    {
      step: '02',
      title: 'Design & Prototypage',
      description: 'Création de maquettes interactives pour visualiser votre futur site avant développement.',
    },
    {
      step: '03',
      title: 'Développement',
      description: 'Intégration technique avec les dernières technologies pour un site moderne et performant.',
    },
    {
      step: '04',
      title: 'Tests & Lancement',
      description: 'Vérification complète, optimisations finales et mise en ligne de votre site.',
    },
  ];

  const portfolioProjects = [
    {
      title: 'Site Vitrine pour un Restaurant Italien',
      category: 'Gastronomie',
      image:
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/Affiche_de_portfolio_siteweb_restaurant_italien_9_11zon.webp',
      url: '/portfolio?project=digi-gustavo',
      seoTitle: 'Voir le projet Digi-Gustavo : site vitrine restaurant italien',
    },
    {
      title: 'Site web pour un Cuisiniste à Mons',
      category: 'Artisanat',
      image:
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/Affiche_de_portfolio_siteweb_cuisiniste_mons_6_11zon.webp',
      url: '/portfolio?project=digi-kitchen',
      seoTitle: 'Voir le projet Digi-Kitchen : site web cuisiniste à Mons',
    },
    {
      title: "Site d'Agence de location",
      category: 'Automobile',
      image:
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/Affiche_de_portfolio_siteweb_agence_de_location_voiture_2_11zon%20(1).webp',
      url: '/portfolio?project=digi-location',
      seoTitle: 'Voir le projet Digi-Location : site agence de location',
    },
  ];

  const faqData = [
    {
      question: 'Combien de temps faut-il pour créer un site web ?',
      answer:
        "Un site vitrine classique prend généralement 1 à 2 semaines, tandis qu'un site e-commerce ou une plateforme complexe nécessite 2 à 6 semaines. Je vous fournis un planning précis dès le début du projet.",
    },
    {
      question: "Quel est le coût d'un site web professionnel ?",
      answer:
        "Les tarifs varient selon la complexité. Une landing page commence à seulement 997€, un site vitrine démarre à partir de 2497€, tandis qu'un e-commerce se situe entre 3997€ et 10000€. Je vous propose toujours une solution adapté à votre problématique.",
    },
    {
      question: 'Le site sera-t-il optimisé pour les mobiles ?',
      answer:
        "Absolument ! Tous mes sites sont 100% responsive et optimisés pour offrir une expérience parfaite sur mobile ( avec souvent quelques différences technique) et ordinateurs. C'est un standard incontournable aujourd'hui avec envrion 80% du trafic qui provinet des appareils mobiles",
    },
    {
      question: 'Comment se passe la livraison du site internet ?',
      answer:
        "Une fois le projet réalisé, 2 choix sont possibles : j'héberge le projet via mes solutions d'hébergement tout en vous délèguant l'accés, ou je vous transfère le code complet afin de le publier de votre coté (déconseillé si vous n'etes pas à l'aise avec le numérique).",
    },
    {
      question: 'Proposez-vous de la maintenance après la mise en ligne ?',
      answer:
        'Oui, je propose des forfaits de maintenance mensuels incluant l\'hébergement, la gestion des bases de données, la sécurité et le support technique. Vous pouvez aussi opter pour des interventions ponctuelles comme l\'ajout de contenu, modification des offres ou encore l\'ajout de vos promotions de la semaine.',
    },
    {
      question: 'Mon site sera-t-il bien référencé sur Google ?',
      answer:
        "Tous mes sites sont construits selon les meilleures pratiques SEO : structure technique optimisée, vitesse de chargement, balisage sémantique, JSON LD et des campagnes d'avis clients (accompagnement). Pour aller plus loin, je propose une offre SEO avancée dédiée à votre marché.",
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
        '@id': 'https://digitalova.be/services/creation-site-web/#service',
        name: 'Création de Site Web',
        serviceType: 'Web Development',
        provider: { '@id': 'https://digitalova.be/#organization' },
        description: 'Création de sites internet vitrines et e-commerce sur mesure à Mons.',
        offers: {
          '@type': 'Offer',
          price: '997.00',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock'
        },
        areaServed: { '@type': 'City', name: 'Mons' }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        '@id': 'https://digitalova.be/services/creation-site-web/#breadcrumbs',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://digitalova.be/' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://digitalova.be/services' },
          { '@type': 'ListItem', position: 3, name: 'Création Web', item: 'https://digitalova.be/services/creation-site-web' },
        ],
      }
    ]) }}
      />

      <div className="pt-28 pb-20 bg-slate-50 min-h-screen relative overflow-hidden">
        <BackgroundBlobs />

        <div className="container mx-auto px-4 relative z-10">
          {/* 1) HERO */}
          <div className="mb-16 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left */}
              <motion.div
                initial={{ opacity: 0, x: -18 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="text-center lg:text-left"
              >
                <motion.h1
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className="text-4xl md:text-6xl font-extrabold mb-6 text-slate-900 leading-[1.05]"
                >
                  Conçeption de site internet pour les entreprises à Mons
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.12, duration: 0.45 }}
                  className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                >
                  Vous avez besoin d'un site vitrine qui présente votre business, ou d'une boutique e-commerce pour diffuser vos produits sur le web ? Je conçois des plateformes sur mesure pensées pour la conversion : vitesse, expérience utilisateur simplifié, SEO local
                  (Mons & Hainaut) et branding de qualité.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.45 }}
                  className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <Link href="/contact" title="Demander un devis gratuit" aria-label="Demander un devis gratuit">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white text-lg h-14 px-8 rounded-full shadow-xl transition-transform hover:scale-[1.03]"
                      title="Demander un devis gratuit"
                    >
                      Demander un devis gratuit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>

                  <Link href="/portfolio" title="Voir des exemples" aria-label="Portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto bg-white/80 text-slate-900 border-2 border-slate-200 hover:bg-slate-100 text-lg h-14 px-8 rounded-full transition-transform hover:scale-[1.03]"
                      title="Voir des exemples"
                    >
                      Voir des exemples
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              {/* Right */}
              <motion.div
                initial={{ opacity: 0, x: 18 }}
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
                      alt="Aperçu d'un site web moderne créé par Digitalova"
                      title="Aperçu d'un site web moderne créé par Digitalova"
                      className="w-full h-full object-cover"
                      loading="eager"
                      decoding="async"
                      width="1600"
                      height="1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/10 to-transparent" />
                  </div>

                  <div className="p-5 md:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Création de site web à Mons</p>
                        <p className="text-xs text-slate-500">Design • SEO • Performance • Conversion</p>
                      </div>
                      <span className="text-xs font-semibold text-purple-700 bg-purple-50 border border-purple-100 px-3 py-1 rounded-full">
                        DIGITALOVA
                      </span>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.33, duration: 0.5 }}
                  className="hidden md:flex absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 items-center gap-3"
                >
                  <div className="p-2 rounded-xl bg-purple-600">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-slate-500">SEO local</p>
                    <p className="text-sm font-semibold text-slate-900">Visibilité à Mons</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* 2) Exemples de Réalisations */}
          <div className="mb-20 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Exemples de Réalisations</h2>
              <p className="text-xl text-slate-600">Découvrez quelques sites web que j&apos;ai créés pour des clients types à Mons</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {portfolioProjects.map((project, index) => (
                <Link key={index} href={project.url} aria-label={project.seoTitle} title="En savoir plus - Digitalova">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="group bg-[#0F172A] rounded-2xl overflow-hidden border border-slate-700 shadow-lg hover:shadow-2xl transition-all"
                  >
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <img
                        src={project.image}
                        alt={`Aperçu : ${project.title}`}
                        title={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                        width="1200"
                        height="800"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="bg-white text-slate-900 px-4 py-2 rounded-full font-semibold text-sm">
                          Voir le projet
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold text-purple-400 uppercase tracking-wide">{project.category}</span>
                      {/* ✅ H3 -> H2 */}
                      <h3 className="text-lg font-bold text-white mt-2 group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/portfolio" title="Voir tous les projets" aria-label="Voir tous les projets">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-700 text-slate-900 hover:bg-slate-100 px-8 py-6 text-lg font-semibold bg-white"
                  title="Voir tous les projets"
                >
                  Voir tous les projets
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* 3) Pourquoi choisir Digitalova ? */}
          <div className="mb-20 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Pourquoi choisir Digitalova ?</h2>
              <p className="text-xl text-slate-600">Un site premium, rapide et pensé pour convertir.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ delay: index * 0.08, duration: 0.45, ease: 'easeOut' }}
                  whileHover={{ y: -6 }}
                  className="rounded-3xl border border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all overflow-hidden"
                >
                  <div className="h-1.5 bg-gradient-to-r from-purple-600 to-pink-600" />
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-slate-900/95 border border-slate-800">
                        {React.cloneElement(benefit.icon, { className: benefit.icon.props.className + ' !text-white' })}
                      </div>
                      <div className="min-w-0">
                        {/* ✅ H3 -> H2 */}
                        <h3 className="text-lg font-extrabold text-slate-900 mb-2">{benefit.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                        <p className="mt-3 text-xs text-slate-500">
                          Pensé pour des entreprises avec qui cherchent la croissance
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-slate-700">
                Vous ciblez la ville de  <span className="font-semibold">Mons</span> ? Je structure vos pages (titres, contenus, vitesse,
                balisage) pour renforcer la pertinence locale !
              </p>
            </motion.div>
          </div>

          {/* 4) Mon Processus de Création */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mb-20 bg-slate-900 rounded-3xl p-10 md:p-16 max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Mon Processus de Création</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="text-5xl font-black text-white/5 mb-4">{item.step}</div>
                  {/* ✅ (cohérent) H3 -> H2 */}
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 5) CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mb-20 text-center bg-slate-900 rounded-3xl p-12 md:p-20 relative overflow-hidden max-w-6xl mx-auto"
          >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Prêt à Lancer Votre Site Web ?</h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Discutons de votre projet et recevez un devis personnalisé gratuit sous 24h.
              </p>
              <Link href="/contact" title="Demander un devis gratuit" aria-label="Demander un devis gratuit">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-10 h-14 rounded-full shadow-xl font-bold"
                  title="Demander un devis gratuit"
                >
                  Demander un Devis Gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* 6) Questions Fréquentes */}
          <div className="mb-10 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">Questions Fréquentes</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {faqData.map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebDevelopment;