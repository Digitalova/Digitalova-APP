'use client';

import React, { useMemo, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import { projects } from './projects-data';

const PortfolioContent = () => {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter((p) =>
      [p.title, p.subtitle, p.category, p.description, p.longDescription, ...(p.tags || [])]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  const inViewCard = {
    hidden: { opacity: 0, y: 16, scale: 0.985 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const inViewCTA = {
    hidden: { opacity: 0, y: 18, scale: 0.985 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  /**
   * ✅ Card avec lien vers la page dédiée du projet
   */
  const ProjectCard = ({ project, index }) => {
    const isLCPImage = index === 0;
    
    const cardContent = (
      <>
        {/* Affiche libre */}
        <div className="relative bg-black/10">
          <div className="aspect-[16/10] sm:aspect-[16/9] bg-black/10">
            <img
              className="w-full h-full object-contain md:object-cover"
              alt={`Aperçu du site ${project.title}`}
              title={project.title}
              src={project.images[0]}
              loading={isLCPImage ? 'eager' : (index < 2 ? 'eager' : 'lazy')}
              fetchPriority={isLCPImage ? 'high' : 'auto'}
              decoding={isLCPImage ? 'sync' : 'async'}
              width="1600"
              height="1000"
            />
          </div>
        </div>

        {/* Texte sous l'affiche */}
        <div className="p-6 sm:p-7">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {project.title}
          </h3>
          <p className="mt-2 text-slate-300 font-semibold text-lg">{project.subtitle}</p>

          <div className="mt-4 border-l-2 border-purple-500/40 pl-4">
            <p className="text-slate-200/90 leading-relaxed">{project.description}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-200 text-xs font-semibold uppercase tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </>
    );
    
    return (
      <Link href={`/portfolio/${project.slug}`} title={`Voir le projet ${project.title}`}>
        {isLCPImage ? (
          <article className="group cursor-pointer rounded-[28px] border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500/20">
            {cardContent}
          </article>
        ) : (
          <motion.article
            variants={inViewCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="group cursor-pointer rounded-[28px] border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500/20"
          >
            {cardContent}
          </motion.article>
        )}
      </Link>
    );
  };

  // JSON-LD pour les données structurées
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      '@id': 'https://digitalova.be/portfolio#webpage',
      url: 'https://digitalova.be/portfolio',
      name: 'Portfolio de réalisations digitales - DIGITALOVA',
      isPartOf: { '@id': 'https://digitalova.be/#website' },
      description: 'Liste des projets de création de sites web et solutions digitales réalisés par DIGITALOVA pour des entreprises à Mons et en Belgique.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      '@id': 'https://digitalova.be/portfolio/#projectlist',
      name: "Projets de Sites Web réalisés par l'agence DIGITALOVA",
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          headline: project.subtitle,
          description: project.description,
          image: project.images[0],
          url: `https://digitalova.be/portfolio/${project.slug}`,
          author: { '@id': 'https://digitalova.be/#organization' },
          creator: { '@id': 'https://digitalova.be/#organization' },
        },
      })),
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-sm md:text-base font-medium uppercase tracking-widest text-slate-400 mb-3">
              Portfolio - Réalisations de Sites Web à Mons & alentours
            </h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
              Mes réalisations récentes
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Découvrez le portfolio Digitalova, agence spécialisée dans la création de sites web professionnels à Mons et en Belgique. Sites vitrines et e-commerce conçus pour les entreprises souhaitant développer leur visibilité et leurs performances en ligne.
            </p>
          </div>

          {/* Barre de recherche */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Rechercher un projet..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:border-purple-500/50 transition-colors"
              />
            </div>
          </div>

          {/* Grille des projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filtered.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          {/* Message si aucun résultat */}
          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-slate-400 text-lg">Aucun projet trouvé pour "{query}"</p>
            </div>
          )}

          {/* CTA */}
          <motion.div
            variants={inViewCTA}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-16"
          >
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-white/5 backdrop-blur shadow-2xl transition-all duration-500 hover:shadow-purple-500/20 hover:border-purple-500/20">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-purple-600/20 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-pink-600/20 blur-3xl" />
              </div>

              <div className="relative p-10 md:p-14 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-white">
                  Un projet en tête ?
                </h2>
                <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
                  Discutons ensemble de votre projet web pour développer votre présence en ligne.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" title="Contact Digitalova">
                    <Button className="h-14 px-10 rounded-full text-lg font-extrabold bg-white text-slate-900 hover:bg-slate-100 shadow-xl">
                      Discuter de mon projet
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default function Portfolio() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#070B16]" />}>
      <PortfolioContent />
    </Suspense>
  );
}
