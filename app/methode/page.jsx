'use client';

import React from 'react';

import Link from 'next/link';
import {
  Search,
  Target,
  MonitorX,
  Lightbulb,
  ListChecks,
  ArrowRight,
  XCircle,
  CheckCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import BackgroundBlobs from '@/components/BackgroundBlobs';

/* -----------------------------
   Cards
------------------------------ */
const StepCard = ({ icon, number, title, content, objective }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="rounded-2xl p-8 flex flex-col md:flex-row items-start gap-8
               border border-white/10 bg-white/5 backdrop-blur
               shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)]"
  >
    <div className="flex-shrink-0 text-center md:text-left">
      <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-white/15 text-white">
        {icon}
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 rounded-full bg-pink-700 text-white font-bold text-sm">
          {number}
        </span>
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-bold mb-3 text-white">{title}</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">{content}</p>
      <p className="font-semibold text-purple-200 italic">🎯 Objectif : {objective}</p>
    </div>
  </motion.div>
);

const SolutionCard = ({ problem, solution, impact }) => (
  <div className="space-y-3">
    <p className="flex items-start gap-3 text-lg">
      <span className="text-pink-300 mt-1">🔸</span>{' '}
      <span className="font-semibold text-white">{problem}</span>
    </p>
    <p className="pl-8 flex items-start gap-3 text-purple-200">
      <ArrowRight size={20} className="mt-1 flex-shrink-0" /> {solution}
    </p>
    <p className="pl-8 flex items-start gap-3 text-green-300">
      <CheckCircle size={20} className="mt-1 flex-shrink-0" />{' '}
      <span className="font-bold">Impact :</span> {impact}
    </p>
  </div>
);

const Method = () => {
  const problemsList = [
    'Absence de site web ou site obsolète',
    'Design non responsive ou trop lent',
    "Absence d'appels à l'action clairs",
    'Parcours client compliqué',
    'Manque de visibilité sur Google',
    'Réseaux sociaux inexistants ou mal gérés',
    'Processus manuels chronophages',
  ];

  return (
    <>

      {/* JSON-LD pour les données structurées */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "HowTo",
              "name": "Comment créer un site web performant à Mons avec Digitalova",
              "description": "Suivez les 5 étapes de la méthode Digitalova pour réussir votre transformation digitale.",
              "totalTime": "P30D",
              "supply": ["Contenu textuel", "Identité visuelle"],
              "tool": ["React", "SEO", "Google Business Profile"],
              "step": [
                {
                  "@type": "HowToStep",
                  "url": "https://digitalova.be/methode",
                  "name": "Analyse de l'entreprise",
                  "text": "Étude du secteur, des valeurs et de la clientèle cible pour aligner la stratégie digitale.",
                  "position": 1
                },
                {
                  "@type": "HowToStep",
                  "url": "https://digitalova.be/methode",
                  "name": "Audit concurrentiel",
                  "text": "Analyse du positionnement par rapport aux concurrents locaux à Mons.",
                  "position": 2
                },
                {
                  "@type": "HowToStep",
                  "url": "https://digitalova.be/methode",
                  "name": "Diagnostic de présence",
                  "text": "Identification des freins à la croissance (site lent, manque de SEO, etc.).",
                  "position": 3
                },
                {
                  "@type": "HowToStep",
                  "url": "https://digitalova.be/methode",
                  "name": "Déploiement de solutions",
                  "text": "Création du site web, optimisation Google Business et mise en place d'automatisations.",
                  "position": 4
                },
                {
                  "@type": "HowToStep",
                  "url": "https://digitalova.be/methode",
                  "name": "Plan d'action et suivi",
                  "text": "Suivi continu des résultats et ajustements pour une croissance durable.",
                  "position": 5
                }
              ]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://digitalova.be/" },
                { "@type": "ListItem", "position": 2, "name": "Méthode", "item": "https://digitalova.be/methode" }
              ]
            }
          ]) }}
      />

      <div className="pt-32 pb-24 min-h-screen relative overflow-hidden bg-[#070B16]">
        <BackgroundBlobs />

        <div className="absolute inset-0 pointer-events-none opacity-[0.7]">
          <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-pink-600/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.22]">
            <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white tracking-tight">
              Votre Projet Web <span className="text-white">en 5 Étapes</span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Chaque entreprise est unique et mérite une stratégie personnalisée. Mon approche consiste en un audit
              complet suivi d&apos;un plan d&apos;action concret pour maximiser votre visibilité et convertir plus de
              clients à Mons et en Belgique.
            </p>
          </div>

          <div className="space-y-12">
            <StepCard
              icon={<Search size={48} />}
              number="1"
              title="Analyse Approfondie de Votre Entreprise"
              content="Je commence par comprendre votre ADN : votre secteur, vos valeurs, vos produits/services. J'étudie votre marché et votre clientèle cible pour adapter la stratégie digitale à leurs attentes."
              objective="Poser les bases d'une stratégie alignée avec votre réalité business."
            />

            <StepCard
              icon={<Target size={48} />}
              number="2"
              title="Audit de Positionnement Concurrentiel"
              content="J'évalue votre place sur le marché par rapport à vos concurrents. J'analyse leur présence en ligne (sites, réseaux sociaux, SEO) et j'identifie vos forces ainsi que les opportunités de différenciation."
              objective="Comprendre comment vous démarquer et capter l'attention de votre audience."
            />

            {/* STEP 3 */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)]">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-shrink-0 text-center md:text-left">
                    <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-white/15 text-white">
                      <MonitorX size={48} />
                      <span className="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 rounded-full bg-pink-700 text-white font-bold text-sm">
                        3
                      </span>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-white">Diagnostic de Présence En Ligne</h2>
                    <p className="text-slate-300 mb-6">Je détecte les freins à votre croissance digitale :</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {problemsList.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 text-slate-200/90">
                          <XCircle size={20} className="text-red-400 mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <p className="font-semibold text-purple-200 italic mt-6">
                      🎯 Objectif : Identifier précisément ce qui vous fait perdre des clients potentiels ET du temps
                      précieux.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* STEP 4 */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="rounded-2xl p-8 border border-white/10 bg-white/5 backdrop-blur shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)]">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  <div className="flex-shrink-0 text-center md:text-left">
                    <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-white/15 text-white">
                      <Lightbulb size={48} />
                      <span className="absolute -top-2 -right-2 flex items-center justify-center w-8 h-8 rounded-full bg-pink-700 text-white font-bold text-sm">
                        4
                      </span>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4 text-white">Solutions Concrètes Pour Votre Croissance</h2>
                    <p className="text-slate-300 mb-6">
                      Je transforme chaque problème identifié en opportunité de croissance grâce à mes solutions :
                    </p>

                    <div className="space-y-6 text-slate-200/90">
                      <SolutionCard
                        problem="Vous êtes invisible en ligne ?"
                        solution="Je crée votre site web professionnel (vitrine, e-commerce, blog)."
                        impact="Crédibilité accrue + nouveaux clients qui vous trouvent 24/7 à Mons."
                      />
                      <SolutionCard
                        problem="Vous n'apparaissez pas dans les recherches locales ?"
                        solution="J'optimise et gère votre Google Business Profile."
                        impact="Vous apparaissez en tête quand vos clients cherchent vos services à proximité."
                      />
                      <SolutionCard
                        problem="Votre site existe mais ne convertit pas ?"
                        solution="Je le refonds avec des CTA clairs et un parcours client optimisé."
                        impact="Plus de visiteurs deviennent des clients payants."
                      />
                      <SolutionCard
                        problem="Vous perdez du temps avec les prises de RDV ?"
                        solution="Je crée une interface de réservation automatisée."
                        impact="Gain de 5-10h/semaine + moins de rendez-vous manqués."
                      />
                      <SolutionCard
                        problem="Vos réseaux sociaux sont à l'abandon ?"
                        solution="Je prends en charge votre community management."
                        impact="Visibilité accrue + communauté engagée = plus de ventes."
                      />
                      <SolutionCard
                        problem="Vous êtes submergé par les tâches administratives ?"
                        solution="Je développe des automatisations sur mesure."
                        impact="Vous récupérez du temps pour votre cœur de métier."
                      />
                    </div>

                    <p className="font-semibold text-purple-200 italic mt-6">
                      🎯 Objectif : Chaque solution que je propose résout UN problème concret qui bloque votre
                      croissance.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <StepCard
              icon={<ListChecks size={48} />}
              number="5"
              title="Plan d'Action Personnalisé & Suivi Continu"
              content="Je vous présente un plan d'action priorisé pour un impact maximal. Je mets en œuvre les solutions et assure un suivi régulier des résultats (trafic, clients, référencement) avec des ajustements continus."
              objective="Vous accompagner dans la durée pour une croissance durable et mesurable."
            />
          </div>

          {/* CTA */}
          <div className="mt-20 text-center rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl border border-white/10 bg-slate-950">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white tracking-tight">
                Prêt à Transformer Vos Défis En{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Opportunités
                </span>{' '}
                ?
              </h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                Je ne vends pas de services génériques. J&apos;identifie VOS freins à la croissance et je vous propose
                LES solutions qui feront vraiment décoller votre business.
              </p>

              <Link href="/contact" title="Aller à la page Contact - Digitalova">
                <Button
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-10 h-14 rounded-full shadow-xl transition-transform hover:scale-105 font-bold"
                >
                  Demander Mon Audit Gratuit
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>

              <p className="mt-4 text-slate-400 text-sm">Premier diagnostic offert - Sans engagement</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Method;