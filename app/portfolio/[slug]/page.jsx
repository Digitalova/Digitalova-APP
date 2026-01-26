'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ExternalLink, ArrowRight, ArrowLeft, Layers, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import { projects, getProjectBySlug } from '../projects-data';
import { useIsMobile, getScrollAnimationProps } from '@/lib/useReducedMotion';

export default function ProjectPage({ params }) {
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(null);
  const isMobile = useIsMobile();
  
  const project = getProjectBySlug(params.slug);
  
  if (!project) {
    notFound();
  }

  const handleMockupClick = (url) => {
    if (!url) {
      toast({ title: "🚧 Ce projet n'est pas encore en ligne." });
      return;
    }
    toast({
      title: '🚧 Maquette de démonstration',
      description: "Ce site est une maquette pour vous donner un aperçu. Il n'est pas entièrement fonctionnel.",
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const Lightbox = ({ image, onClose }) => (
    <AnimatePresence>
      {image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <button
            className="absolute top-4 right-4 z-[110] p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            onClick={onClose}
          >
            <X className="w-8 h-8" />
            <span className="sr-only">Fermer</span>
          </button>

          <motion.img
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            src={image}
            alt="Image du site web en plein écran"
            className="max-h-full max-w-full object-contain rounded-lg shadow-2xl select-none"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="overflow-x-hidden">
      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />

      <div className="min-h-screen bg-[#070B16] pt-24 pb-20 relative overflow-hidden">
        <BackgroundBlobs />

        <div className="absolute inset-0 pointer-events-none opacity-[0.7] overflow-hidden">
          <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-pink-600/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Retour au portfolio */}
          <motion.div
            {...getScrollAnimationProps(isMobile, {
              initial: { opacity: 0, y: 10 },
              animate: { opacity: 1, y: 0 },
              delay: 0,
            })}
            className="mb-8 mt-4"
          >
            <Link 
              href="/portfolio" 
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 hover:border-white/25 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Retour au portfolio</span>
            </Link>
          </motion.div>

          {/* Affiche principale */}
          <motion.div
            {...getScrollAnimationProps(isMobile, {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              delay: 0,
            })}
            className={`relative rounded-3xl overflow-hidden ${project.url ? 'cursor-pointer' : ''} group`}
            onClick={() => project.url && handleMockupClick(project.url)}
          >
            <img
              src={project.images[0]}
              alt={project.title}
              title={project.title}
              className="w-full h-auto object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white text-xs font-extrabold uppercase tracking-wider">
                  {project.category}
                </span>
                <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                  {project.title}
                </h1>
                <p className="mt-1 text-white/75 font-semibold text-lg">{project.subtitle}</p>
              </div>

              {project.url && (
                <div className="hidden sm:flex">
                  <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white font-semibold flex items-center gap-2">
                    Visiter <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Contenu - Desktop: À propos à gauche, Tags à droite */}
          <div className="mt-10 space-y-8">
            {/* Première rangée: À propos + Tags côte à côte sur desktop */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* À propos */}
              <motion.div
                {...getScrollAnimationProps(isMobile, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  delay: 0.1,
                })}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h2 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> À propos du projet
                </h2>
                <p className="text-slate-200/90 leading-relaxed">
                  {project.longDescription}
                </p>
              </motion.div>

              {/* Tags + Bouton */}
              <motion.div
                {...getScrollAnimationProps(isMobile, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  delay: 0.2,
                })}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col"
              >
                <div className="flex-1">
                  <h2 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-3">
                    Tags & points clés
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-black/20 border border-white/10 text-slate-200 rounded-full text-sm font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Boutons */}
                <div className="flex flex-col gap-3 mt-auto pt-4 border-t border-white/10">
                  {project.url && (
                    <Button
                      onClick={() => handleMockupClick(project.url)}
                      className="w-full bg-white text-slate-900 hover:bg-slate-100 border-0 font-extrabold py-5 shadow-xl transition rounded-full"
                    >
                      Voir le site en ligne <ExternalLink className="ml-2 w-5 h-5" />
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => setSelectedImage(project.images[0])}
                    className="w-full rounded-full border-white/20 text-white bg-white/5 hover:bg-white/10"
                  >
                    Ouvrir l'affiche en plein écran
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Deuxième rangée: Images en grille 2x2 sur desktop */}
            {project.images.length > 1 && (
              <motion.div
                {...getScrollAnimationProps(isMobile, {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  delay: 0.3,
                })}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h2 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-4">
                  Aperçu du site
                </h2>
                {/* Grille 1 colonne sur mobile, 2 colonnes sur desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  {project.images.slice(1).map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImage(img)}
                      className="w-full rounded-2xl overflow-hidden border border-white/10 bg-black/20 hover:border-purple-500/30 transition-all duration-300"
                      aria-label={`Ouvrir image ${idx + 1}`}
                    >
                      <img
                        src={img}
                        alt={`${project.title} - aperçu ${idx + 1}`}
                        className="w-full h-auto object-contain bg-black/10"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
