'use client';

import React, { useMemo, useState, Suspense } from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ExternalLink, ArrowRight, Star, Layers, MousePointerClick, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundBlobs from '@/components/BackgroundBlobs';

const PortfolioContent = () => {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const autoOpenProject = searchParams.get('project');
  const [selectedImage, setSelectedImage] = useState(null);

  // ✅ Search only
  const [query, setQuery] = useState('');

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

  const projects = [
    {
      slug: 'digi-gustavo',
      title: 'Site Vitrine pour un Restaurant Italien',
      subtitle: "Digi'Gustavo",
      category: 'Gastronomie',
      description: 'Expérience immersive avec présentation du menu, réservation en ligne et galerie de plats.',
      longDescription:
        "Un site web élégant conçu pour un restaurant italien de prestige. L'interface met en avant la richesse culinaire à travers des visuels haute définition. Le site intègre un système de réservation de table en temps réel, une carte interactive des plats avec filtrage par allergènes, et une section dédiée à l'histoire du chef et de son établissement.",
      tags: ['Luxe', 'Réservation', 'Menu Digital', 'Responsive Design', 'SEO Local'],
      url: 'https://digigustavo.digitalova.be/',
      images: [
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/Affiche_de_portfolio_siteweb_restaurant_italien_9_11zon.webp',
        "https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/digiEXTERNE/Digi'Gustavo/WebP/Restaurant_italien_Mons_sectionhero_27_11zon.webp",
        "https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/digiEXTERNE/Digi'Gustavo/WebP/aaa.webp",
        "https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/digiEXTERNE/Digi'Gustavo/WebP/Restaurant_italien_Mons_menu_26_11zon.webp",
        'https://horizons-cdn.hostinger.com/63fc4be4-0345-4e91-b9b7-ba4da148182f/13bb5f747b4d723d919c2086998c8249.png',
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/Restaurant_italien_Mons_info.png',
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/Restaurant_italien_Mons_reserv.png',
      ],
    },
    {
      slug: 'digi-location',
      title: "Site internet d'Agence de location",
      subtitle: 'Location de Voiture Premium',
      category: 'Automobile',
      description: 'Site élégant pour une agence de location de voitures de luxe, avec catalogue et réservation.',
      longDescription:
        "Une plateforme haut de gamme pour la location de véhicules de prestige. Le catalogue est entièrement filtrable par marque, type de véhicule et disponibilité. Chaque véhicule dispose d'une fiche détaillée avec caractéristiques techniques et photos. Le processus de demande de réservation est fluide et rapide.",
      tags: ['Luxe', 'Location', 'Catalogue', 'Booking System', 'UX Premium'],
      url: 'https://digilocation.digitalova.be/',
      images: [
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/Affiche_de_portfolio_siteweb_agence_de_location_voiture_2_11zon%20(1).webp',
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/Affiche_de_portfolio_siteweb_agence_de_location_voiture_2_11zon%20(1).webp',
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/agence-de_location_mons_vehicules.webp',
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/agence-de_location_mons_contact.webp',
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/agence-de_location_mons_sectionCTA.webp',
      ],
    },
    {
      slug: 'digi-kitchen',
      title: 'Site web pour un Cuisiniste à Mons',
      subtitle: 'Cuisiniste Expert',
      category: 'Artisanat & Design',
      description: 'Site pour un cuisiniste expert, présentant réalisations, services sur-mesure et showroom.',
      longDescription:
        "Une vitrine numérique moderne pour un artisan cuisiniste, conçue pour inspirer et convertir. Le site propose une galerie de réalisations filtrable par style (moderne, rustique, industriel), un outil de demande de devis détaillé pour qualifier les prospects, et une visite virtuelle du showroom pour inciter au déplacement.",
      tags: ['Cuisine', 'Sur-mesure', 'Showroom', 'Catalogue Filtrable', 'Génération de Leads'],
      url: 'https://digikitchen.digitalova.be/',
      images: [
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/Affiche_de_portfolio_siteweb_cuisiniste_mons_6_11zon.webp',
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/Cuisiniste_Mons_sectionhero_19_11zon.webp',
        "https://horizons-cdn.hostinger.com/63fc4be4-0345-4e91-b9b7-ba4da148182f/b5c6733a53e1ed3a4089c2bada59400f.png",
        "https://horizons-cdn.hostinger.com/63fc4be4-0345-4e91-b9b7-ba4da148182f/45eced3e5cc95fc9bdffb030c4c04551.png",
        "https://horizons-cdn.hostinger.com/63fc4be4-0345-4e91-b9b7-ba4da148182f/80384d7f767c0c61dba8fc757ff28397.png",
      ],
    },
     {
      slug: 'digi-comptabilité',
      title: "Site web d'un Cabinet de comptable du Hainaut",
      subtitle: "Cabinet d'Expertise Comptable",
      category: 'Finance',
      description: "Site institutionnel pour un cabinet d'expertise comptable, présentant les services et l'équipe.",
      longDescription:
        "Une solution web professionnelle pour une fiduciaire moderne. Le site structure clairement l'offre de services (comptabilité, fiscalité, conseil social), met en avant l'équipe pour humaniser la relation, et propose un accès rapide à l'espace client sécurisé.",
      tags: ['Expertise', 'B2B', 'Fiduciaire', 'Espace Client', 'Corporate Design'],
      url: 'digicomptabilité.digitalova.be',
      images: [
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/Affiche_de_portfolio_siteweb_Comptable_5_11zon.webp',
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/cabinet_comptable_sectionhero.png',
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/Cabinet_comptable_acceuil.png',
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/cabinet_comptable-sectioncta.png',
        'https://horizons-cdn.hostinger.com/63fc4be4-0345-4e91-b9b7-ba4da148182f/d98d9f0b7cb7b47ed592d4c2cd7c45b3.png',
        'https://horizons-cdn.hostinger.com/63fc4be4-0345-4e91-b9b7-ba4da148182f/a2255498a3e25f1a7edc500709707ef3.png',
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/Cabinet_comptable_footer.png',
      ],
    },
    {
      slug: 'digi-barber',
      title: "Site vitrine d'un Coiffeur à Mons",
      subtitle: 'Coiffeur & Barbier',
      category: 'Beauté & Soins',
      description: "Présentation des services et de l'ambiance d'un salon de coiffure et barbier, avec prise de RDV.",
      longDescription:
        "Un site web au design sombre et masculin, parfaitement aligné avec l'identité d'un barber shop moderne. Il intègre un module de prise de rendez-vous connecté au calendrier du salon, une présentation de l'équipe avec leurs spécialités, et une galerie Instagram intégrée pour montrer les dernières coupes tendances.",
      tags: ['Coiffeur', 'Barbier', 'Booking', 'Dark Mode', 'Instagram Feed'],
      url: 'https://palevioletred-opossum-497294.hostingersite.com/',
      images: [
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/Affiche_de_portfolio_siteweb_coiifeur_mons_4_11zon.webp',
        'https://horizons-cdn.hostinger.com/63fc4be4-0345-4e91-b9b7-ba4da148182f/4af248aede4cad698fb751a690724a06.png',
        'https://horizons-cdn.hostinger.com/63fc4be4-0345-4e91-b9b7-ba4da148182f/07736b01f9dc3504646acb63f9bdeac1.png',
        'https://horizons-cdn.hostinger.com/63fc4be4-0345-4e91-b9b7-ba4da148182f/68808061832eb565f27393d8f9c448b5.png',
        'https://horizons-cdn.hostinger.com/63fc4be4-0345-4e91-b9b7-ba4da148182f/2761c1c6e216e1fbd35077a606ad4671.png',
      ],
    },
    {
      slug: 'maitre-kamara',
      title: "Site internet d'un Avocat pénaliste (Mons Centre)",
      subtitle: 'Avocat Pénaliste',
      category: 'Droit & Justice',
      description: "Site sobre et professionnel pour un cabinet d'avocat spécialisé en droit pénal.",
      longDescription:
        "Un site vitrine institutionnel inspirant confiance, autorité et expertise. Il présente clairement les domaines d'intervention, l'équipe du cabinet, et offre de multiples points de contact sécurisés. Un blog juridique est intégré pour améliorer le référencement naturel et démontrer l'expertise du cabinet.",
      tags: ['Droit', 'Avocat', 'Conseil Juridique', 'Blog SEO', 'Institutionnel'],
      url: 'https://darkslategray-tapir-278660.hostingersite.com/',
      images: [
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/Affiche_de_portfolio_siteweb_Avocat_penaliste_3_11zon.webp',
        'https://horizons-cdn.hostinger.com/63fc4be4-0345-4e91-b9b7-ba4da148182f/2c7a906ebf243f5f8b8876f7eebd9e79.png',
        'https://horizons-cdn.hostinger.com/63fc4be4-0345-4e91-b9b7-ba4da148182f/b44e80059aa30072d4acc05303bb991d.png',
        'https://horizons-cdn.hostinger.com/63fc4be4-0345-4e91-b9b7-ba4da148182f/9d3578597dd0ac31feb9003d458aff64.png',
        'https://horizons-cdn.hostinger.com/63fc4be4-0345-4e91-b9b7-ba4da148182f/d2b7979abc49147817754d620a8231cd.png',
      ],
    },
   /* {
      slug: 'Laura Maths',
      title: "Site web d'une Professeure à Saint-Ghislain",
      subtitle: 'Professeure à Domicile',
      category: 'Éducation',
      description: 'Plateforme pour une professeure offrant des cours particuliers, avec planning et prise de contact.',
      longDescription:
        "Un site personnel rassurant et professionnel pour une enseignante indépendante. Il détaille la méthodologie pédagogique, affiche des témoignages vérifiés d'élèves et de parents pour la preuve sociale, et propose un formulaire de contact simplifié optimisé pour la prise de cours.",
      tags: ['Éducation', 'Cours Particuliers', 'Indépendant', 'Blog Éducatif', 'Formulaire Contact'],
      url: 'https://navajowhite-alpaca-531782.hostingersite.com/',
      images: [
        'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/Affiche_de_portfolio_siteweb_professeure_a_domicile_saint-ghislain_8_11zon.webp',
        'https://horizons-cdn.hostinger.com/63fc4be4-0345-4e91-b9b7-ba4da148182f/6d3b4e7da8ee3ef921068fd09560a9e2.png',
        'https://horizons-cdn.hostinger.com/63fc4be4-0345-4e91-b9b7-ba4da148182f/ac9e5b493370664bf4cfdcdd02b8cc81.png',
        'https://horizons-cdn.hostinger.com/63fc4be4-0345-4e91-b9b7-ba4da148182f/db718ce3a52bb70b00951917d5b987e0.png',
        'https://horizons-cdn.hostinger.com/63fc4be4-0345-4e91-b9b7-ba4da148182f/c833dfae2496a385323fae5c94b42509.png',
      ],
    },*/
  ];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return projects;
    return projects.filter((p) =>
      [p.title, p.subtitle, p.category, p.description, p.longDescription, ...(p.tags || [])]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }, [projects, query]);

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
            alt="Full screen project view"
            className="max-h-full max-w-full object-contain rounded-lg shadow-2xl select-none"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );

  /**
   * ✅ Card titles should be H3 (as requested)
   * ✅ Before click: affiche libre + text below (like your screenshot)
   */
  const ProjectCard = ({ project, index }) => {
    // Pour la première image (LCP), ne pas utiliser d'animation whileInView
    const isLCPImage = index === 0;
    
    return (
    <Dialog defaultOpen={project.slug === autoOpenProject}>
      <DialogTrigger asChild>
        {isLCPImage ? (
          <article className="group cursor-pointer rounded-[28px] border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] hover:border-white/20 transition-colors">
            {/* Affiche libre */}
            <div className="relative bg-black/10">
              <div className="aspect-[16/10] sm:aspect-[16/9] bg-black/10">
                <img
                  className="w-full h-full object-contain md:object-cover"
                  alt={`Aperçu du site ${project.title}`}
                  title={project.title}
                  src={project.images[0]}
                  loading="eager"
                  fetchPriority="high"
                  decoding="sync"
                  width="1600"
                  height="1000"
                />
            </div>
          </div>

          {/* Texte sous l’affiche */}
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
        </article>
        ) : (
          <motion.article
            variants={inViewCard}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="group cursor-pointer rounded-[28px] border border-white/10 bg-white/5 backdrop-blur overflow-hidden shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] hover:border-white/20 transition-colors"
          >
            {/* Affiche libre */}
            <div className="relative bg-black/10">
              <div className="aspect-[16/10] sm:aspect-[16/9] bg-black/10">
                <img
                  className="w-full h-full object-contain md:object-cover"
                  alt={`Aperçu du site ${project.title}`}
                  title={project.title}
                  src={project.images[0]}
                  loading={index < 2 ? 'eager' : 'lazy'}
                  fetchPriority="auto"
                  decoding="async"
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
          </motion.article>
        )}
      </DialogTrigger>

      {/* ✅ Modal */}
      <DialogContent className="sm:max-w-6xl overflow-hidden p-0 gap-0 bg-[#070B16] border border-white/10 shadow-2xl max-h-[95vh] flex flex-col">
        <div className="overflow-y-auto custom-scrollbar">
          {/* ✅ MOBILE: affiche en haut + texte dessous + 4 images verticales */}
          <div className="block lg:hidden">
            <div
              className="relative w-full bg-black/20 cursor-pointer"
              onClick={() => handleMockupClick(project.url)}
              role="button"
              tabIndex={0}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                title={project.title}
                className="w-full max-h-[52vh] object-contain bg-black/10"
                fetchPriority="high"
                decoding="sync"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>

            <div className="p-6 space-y-4">
              <span className="inline-flex px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white text-xs font-extrabold uppercase tracking-wider">
                {project.category}
              </span>

              <DialogTitle className="text-3xl font-extrabold tracking-tight text-white">
                {project.title}
              </DialogTitle>
              <p className="text-white/75 font-semibold text-lg">{project.subtitle}</p>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4" /> À propos du projet
                </h4>
                <DialogDescription className="text-slate-200/90 leading-relaxed">
                  {project.longDescription}
                </DialogDescription>
              </div>

              {project.images.length > 1 && (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-4">
                    Aperçu du site
                  </h4>

                  <div className="space-y-4">
                    {project.images.slice(1, 5).map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedImage(img)}
                        className="w-full rounded-2xl overflow-hidden border border-white/10 bg-black/20 hover:border-white/20 transition"
                        aria-label={`Ouvrir image ${idx + 1}`}
                      >
                        <img
                          src={img}
                          alt={`${project.title} - aperçu ${idx + 1}`}
                          className="w-full h-auto object-contain bg-black/10"
                          loading="lazy"
                          decoding="async"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-5">
                <h4 className="text-lg font-extrabold text-white">Voir le résultat live ?</h4>
                <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                  Explorez la maquette pour voir les animations et l’expérience utilisateur.
                </p>

                <div className="mt-4 flex flex-col gap-3">
                  <Button
                    onClick={() => handleMockupClick(project.url)}
                    className="w-full bg-white text-slate-900 hover:bg-slate-100 border-0 font-extrabold py-6 text-lg shadow-xl transition rounded-full"
                  >
                    Voir le site en ligne <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => setSelectedImage(project.images[0])}
                    className="w-full rounded-full border-white/20 text-white bg-white/5 hover:bg-white/10"
                  >
                    Ouvrir l’affiche en plein écran
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* ✅ DESKTOP: affiche en haut, puis photos en dessous en VERTICAL (plus à droite) */}
          <div className="hidden lg:block">
            {/* Affiche (inchangée) */}
            <div
              className="relative aspect-[16/8] bg-black/20 cursor-pointer group"
              onClick={() => handleMockupClick(project.url)}
              role="button"
              tabIndex={0}
            >
              <img
                src={project.images[0]}
                alt={project.title}
                title={project.title}
                className="w-full h-full object-contain md:object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                <div>
                  <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white text-xs font-extrabold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <DialogTitle className="mt-3 text-4xl font-extrabold tracking-tight text-white">
                    {project.title}
                  </DialogTitle>
                  <p className="mt-1 text-white/75 font-semibold text-lg">{project.subtitle}</p>
                </div>

                <div className="hidden sm:flex">
                  <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/15 text-white font-semibold flex items-center gap-2">
                    Visiter <ExternalLink className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Content + Images BELOW poster */}
            <div className="p-8 space-y-6">
              <div className="grid grid-cols-12 gap-6">
                {/* About */}
                <div className="col-span-5">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-3 flex items-center gap-2">
                      <Layers className="w-4 h-4" /> À propos du projet
                    </h4>
                    <DialogDescription className="text-slate-200/90 leading-relaxed">
                      {project.longDescription}
                    </DialogDescription>
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-3">
                      Tags & points clés
                    </h4>
                    <div className="flex flex-wrap gap-2">
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

                  <div className="mt-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6">
                    <h4 className="text-lg font-extrabold text-white">Voir le résultat live ?</h4>
                    <p className="mt-2 text-slate-300 text-sm leading-relaxed">
                      Explorez la maquette pour voir les animations et l’expérience utilisateur.
                    </p>

                    <div className="mt-4 flex flex-col gap-3">
                      <Button
                        onClick={() => handleMockupClick(project.url)}
                        className="w-full bg-white text-slate-900 hover:bg-slate-100 border-0 font-extrabold py-6 text-lg shadow-xl transition rounded-full"
                      >
                        Voir le site en ligne <ExternalLink className="ml-2 w-5 h-5" />
                      </Button>

                      <Button
                        variant="outline"
                        onClick={() => setSelectedImage(project.images[0])}
                        className="w-full rounded-full border-white/20 text-white bg-white/5 hover:bg-white/10"
                      >
                        Ouvrir l’affiche en plein écran
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                {/* ✅ Images verticales sous forme de colonne (mais SOUS l'affiche) */}
                <div className="col-span-7">
                  {project.images.length > 1 ? (
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-300 mb-4">
                        Aperçu du site
                      </h4>

                      <div className="space-y-5">
                        {project.images.slice(1).map((img, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => setSelectedImage(img)}
                            className="w-full rounded-2xl overflow-hidden border border-white/10 bg-black/20 hover:border-white/20 transition"
                            aria-label={`Ouvrir image ${idx + 1}`}
                          >
                            <img
                              src={img}
                              alt={`${project.title} - aperçu ${idx + 1}`}
                              className="w-full h-auto object-contain bg-black/10"
                              loading="lazy"
                              decoding="async"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
    );
  };

  // JSON-LD pour les données structurées (dynamique basé sur les projets)
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
      name: 'Projets Web réalisés par DIGITALOVA',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'CreativeWork',
          name: project.title,
          headline: project.subtitle,
          description: project.description,
          image: project.images[0],
          url: `https://digitalova.be/portfolio?project=${project.slug}`,
          creator: { '@id': 'https://digitalova.be/#organization' },
          keywords: project.tags.join(', '),
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': 'https://digitalova.be/portfolio/#breadcrumbs',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://digitalova.be/' },
        { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://digitalova.be/portfolio' },
      ],
    },
  ];

  return (
    <>
      {/* JSON-LD pour les données structurées */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />

      <div className="pt-28 pb-24 min-h-screen relative overflow-hidden bg-[#070B16]">
        <BackgroundBlobs />

        <div className="absolute inset-0 pointer-events-none opacity-[0.7]">
          <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-pink-600/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.22]">
            <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
          </div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* ✅ Headings structure */}
          <div className="text-center mb-10 md:mb-12">
            <motion.div initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              {/* H1 requested */}
              <h1 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-200 text-sm font-semibold mb-6">
                <Layers className="w-4 h-4" />
                Portfolio - Réalisations de Sites Web à Mons & alentours
              </h1>

              {/* H2 requested */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 text-white tracking-tight">
                Mes réalisations{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                  récentes
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Des projets concrets, pensés pour la conversion : design premium, structure claire et performances.
              </p>
            </motion.div>
          </div>

          {/* Search */}
          <div className="mb-10 md:mb-12">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Rechercher : restaurant, avocat, e-commerce, SEO…"
                  className="w-full h-12 pl-12 pr-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-white/15"
                />
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                <span>{filtered.length} projet(s)</span>
                <span className="hidden sm:inline-flex items-center gap-2">
                  <MousePointerClick className="w-4 h-4" />
                  Cliquez sur un projet pour la fiche complète
                </span>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filtered.map((project, index) => (
              <ProjectCard key={project.slug || index} project={project} index={index} />
            ))}
          </div>

          {/* CTA */}
          <motion.div
            variants={inViewCTA}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-20 md:mt-28"
          >
            <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-slate-950 text-white shadow-2xl">
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-purple-600/20 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-[520px] w-[520px] rounded-full bg-pink-600/20 blur-3xl" />
                <div className="absolute inset-0 opacity-[0.25]">
                  <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:52px_52px]" />
                </div>
              </div>

              <div className="relative p-10 sm:p-12 md:p-16 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                  Votre projet est le prochain sur cette liste ?
                </h2>
                <p className="text-lg sm:text-xl text-slate-200 mb-8 leading-relaxed max-w-3xl mx-auto">
                  Je transforme votre idée en un site rapide, design et pensé pour convertir. Parlons-en.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" title="Aller à la page Contact - Digitalova">
                    <Button className="h-14 px-10 rounded-full text-lg font-extrabold bg-white text-slate-900 hover:bg-slate-100 shadow-xl">
                      Démarrer mon projet
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link href="/services" title="Aller à la page Services - Digitalova">
                    <Button
                      variant="outline"
                      className="h-14 px-10 rounded-full text-lg font-extrabold border-white/30 text-white hover:bg-white/10"
                    >
                      Voir les services
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ✅ FAQ REMOVED */}
    </>
  );
};

const Portfolio = () => {
  return (
    <Suspense fallback={<div className="min-h-screen pt-20 flex items-center justify-center bg-[#070B16]"><div className="w-10 h-10 border-3 border-slate-100 border-t-purple-600 rounded-full animate-spin"></div></div>}>
      <PortfolioContent />
    </Suspense>
  );
};

export default Portfolio;