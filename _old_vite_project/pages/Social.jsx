import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { Star, Send, Briefcase } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { supabase } from '@/lib/customSupabaseClient';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQSection';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import { Link } from 'react-router-dom';

/* ========= VRAIS ICONES (SVG) ========= */
const InstagramIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient id="ig_grad" x1="0" y1="24" x2="24" y2="0">
        <stop offset="0%" stopColor="#F58529" />
        <stop offset="50%" stopColor="#DD2A7B" />
        <stop offset="100%" stopColor="#515BD4" />
      </linearGradient>
    </defs>
    <path
      fill="url(#ig_grad)"
      d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4z"
    />
    <path
      fill="url(#ig_grad)"
      d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2.1A2.9 2.9 0 1 0 12 15a2.9 2.9 0 0 0 0-5.9z"
    />
    <circle cx="17.5" cy="6.5" r="1.1" fill="url(#ig_grad)" />
  </svg>
);

const FacebookIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      fill="#1877F2"
      d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06C2 17.08 5.657 21.23 10.438 22v-7.02H7.898v-2.92h2.54V9.845c0-2.522 1.492-3.915 3.777-3.915 1.094 0 2.238.197 2.238.197v2.475H15.19c-1.243 0-1.63.776-1.63 1.571v1.887h2.773l-.443 2.92H13.56V22C18.343 21.23 22 17.08 22 12.06Z"
    />
  </svg>
);

const TikTokIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#25F4EE"
      d="M14.5 3c.6 1.7 2 3 3.8 3.3v2.3c-1.4 0-2.7-.4-3.8-1.2v6.3c0 2.8-2.2 5-5 5s-5-2.2-5-5 2.2-5 5-5c.3 0 .6 0 .9.1v2.5c-.3-.1-.6-.2-.9-.2-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5V3h2.5Z"
      opacity=".85"
    />
    <path
      fill="#FE2C55"
      d="M13.8 3v10.7c0 2.8-2.2 5-5 5-1.7 0-3.2-.8-4.1-2.1.9.6 1.9 1 3.1 1 2.8 0 5-2.2 5-5V3h1Z"
      opacity=".85"
    />
    <path
      fill="#FFFFFF"
      d="M14.8 3c.7 1.7 2.1 3 3.8 3.3v1.2c-1.5-.1-2.8-.7-3.8-1.6V13.7c0 2.8-2.2 5-5 5-1 0-2-.3-2.8-.9.6.2 1.2.3 1.8.3 2.8 0 5-2.2 5-5V3h1Z"
      opacity=".55"
    />
  </svg>
);

/*const WhatsAppIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#25D366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z" />
    <path
      fill="#FFFFFF"
      d="M17.4 14.6c-.3.8-1.6 1.5-2.2 1.6-.6.1-1.3.2-2.1-.1-.5-.2-1.2-.4-2.1-.8-3.7-1.6-6.1-5.3-6.3-5.6-.2-.3-1.5-2-.1-3.8.7-.9 1.4-.9 1.7-.9h.5c.1 0 .4 0 .6.5.2.6.8 2.1.9 2.2.1.2.1.4 0 .6l-.3.6c-.1.2-.2.4-.3.5-.1.1-.3.3-.1.6.2.3.9 1.6 2 2.6 1.4 1.2 2.5 1.6 2.9 1.8.3.1.5.1.7-.1l.9-1.1c.2-.2.4-.2.7-.1.3.1 2 .9 2.4 1.1.4.2.6.3.7.5.1.1.1.9-.2 1.7z"
    />
  </svg>
);

/* ✅ LinkedIn */
const LinkedInIcon = ({ className = 'w-10 h-10' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#0A66C2"
      d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.475-.9 1.637-1.852 3.369-1.852 3.6 0 4.264 2.369 4.264 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z"
    />
  </svg>
);

const GoogleIcon = ({ className = 'w-7 h-7' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#EA4335"
      d="M12 10.2v3.9h5.4c-.2 1.3-1.6 3.8-5.4 3.8-3.3 0-6-2.7-6-5.9S8.7 6.1 12 6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.6 14.6 2.5 12 2.5 6.9 2.5 2.8 6.6 2.8 12S6.9 21.5 12 21.5c5.7 0 9.5-4 9.5-9.6 0-.7-.1-1.2-.2-1.7H12z"
    />
    <path fill="#34A853" d="M3.9 7.6l3.2 2.3C7.9 8 9.8 6.1 12 6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.6 14.6 2.5 12 2.5 8.2 2.5 4.9 4.7 3.9 7.6z" opacity=".35" />
    <path fill="#FBBC05" d="M12 21.5c2.6 0 4.7-.9 6.3-2.4l-2.9-2.2c-.8.6-1.8 1-3.4 1-2.6 0-4.8-1.7-5.6-4.1l-3.3 2.6c1.3 3 4.3 5.1 8.9 5.1z" opacity=".7" />
    <path fill="#4285F4" d="M21.3 10.3H12v3.9h5.4c-.3 1.7-1.5 2.9-3.1 3.7l2.9 2.2c1.7-1.6 2.7-4 2.7-7.1 0-.7-.1-1.2-.2-1.7z" />
  </svg>
);

/* ========= ANIMS ========= */
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const ReviewForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const turnstileRef = useRef(null);

  // ✅ RGPD
  const [privacyConsent, setPrivacyConsent] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.turnstile && turnstileRef.current) {
        window.turnstile.render(turnstileRef.current, {
          sitekey: '0x4AAAAAACJYRS0Pfd1Nn_0i',
          theme: 'dark',
        });
      }
    };

    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ RGPD obligatoire
    if (!privacyConsent) {
      toast({
        variant: 'destructive',
        title: 'Consentement requis',
        description: 'Veuillez accepter la politique de confidentialité pour envoyer votre avis.',
      });
      return;
    }

    const turnstileResponse = window.turnstile ? window.turnstile.getResponse() : null;
    if (!turnstileResponse) {
      toast({
        variant: 'destructive',
        title: 'Vérification requise',
        description: 'Veuillez valider le captcha avant d’envoyer.',
      });
      return;
    }

    if (rating === 0 || !name || !email || !comment) {
      toast({
        variant: 'destructive',
        title: 'Champs requis',
        description: 'Veuillez remplir tous les champs et donner une note.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('reviews').insert([
        {
          name,
          email,
          rating,
          comment,
          is_approved: false,
          privacy_consent: privacyConsent,
        },
      ]);

      if (error) throw error;

      toast({
        title: 'Avis envoyé !',
        description: 'Merci pour votre retour. Votre avis sera publié après modération.',
      });

      setName('');
      setEmail('');
      setRating(0);
      setComment('');
      setPrivacyConsent(false);

      if (window.turnstile) window.turnstile.reset();
    } catch (error) {
      console.error('Error submitting review:', error);
      toast({
        variant: 'destructive',
        title: 'Erreur',
        description: "Une erreur est survenue lors de l'envoi de votre avis. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <label htmlFor="name" className="text-slate-300 font-medium ml-1">
          Votre nom ou entreprise
        </label>
        <Input
          id="name"
          type="text"
          placeholder="Ex: John Doe ou Digitalova"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-slate-300 font-medium ml-1">
          Votre email
        </label>
        <Input
          id="email"
          type="email"
          placeholder="Ex: contact@exemple.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500"
          required
        />
      </div>

      <div className="space-y-2">
        <label className="text-slate-300 font-medium ml-1">Votre note</label>
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-8 h-8 cursor-pointer transition-colors ${
                hoverRating >= star || rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-slate-600'
              }`}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              onClick={() => setRating(star)}
            />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="comment" className="text-slate-300 font-medium ml-1">
          Votre avis
        </label>
        <Textarea
          id="comment"
          placeholder="Partagez votre expérience avec nous..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 min-h-[120px] focus:border-purple-500 focus:ring-purple-500"
          required
        />

        {/* ✅ Turnstile (inchangé) */}
        <div className="flex justify-center pt-2 pb-1">
          <div ref={turnstileRef} />
        </div>
      </div>

      {/* ✅ RGPD obligatoire */}
      <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-2">
        <div className="flex items-start gap-3">
          <Checkbox
            id="privacy_consent_review"
            checked={privacyConsent}
            onCheckedChange={(checked) => setPrivacyConsent(!!checked)}
            className="mt-1 border-white/50 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
          />
          <label htmlFor="privacy_consent_review" className="text-sm text-slate-200 leading-relaxed cursor-pointer">
            <span className="font-semibold text-white">J’accepte la politique de confidentialité</span> et je comprends que
            mes données sont utilisées pour traiter et modérer mon avis.{' '}
            <Link to="/mentions-legales" className="text-purple-300 hover:text-purple-200 underline">
              En savoir plus (RGPD)
            </Link>
            <span className="text-pink-300 font-semibold"> *</span>
          </label>
        </div>

        <p className="text-xs text-slate-400 leading-relaxed">
          <span className="text-slate-300 font-semibold">Finalité :</span> publication/modération d’avis •{' '}
          <span className="text-slate-300 font-semibold">Durée :</span> le temps nécessaire à la gestion des avis •{' '}
          <span className="text-slate-300 font-semibold">Droits :</span> accès/suppression (contact@digitalova.be).
        </p>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-white text-slate-900 hover:bg-slate-100 font-bold text-lg py-6 h-14 rounded-full shadow-xl transition-transform hover:scale-[1.02]"
      >
        {isSubmitting ? (
          'Envoi en cours...'
        ) : (
          <>
            Envoyer mon avis <Send className="ml-2 w-5 h-5" />
          </>
        )}
      </Button>
    </form>
  );
};

const Social = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      handle: 'Digitalova • Mons',
      description: "Pour suivre l'évolution de l’agence, les projets, études de cas et actus pro.",
      url: 'https://www.linkedin.com/company/digitalova-mons/',
      icon: <LinkedInIcon className="w-10 h-10" />,
      colorClass: 'bg-gradient-to-br from-sky-700/90 to-blue-600/90 text-white',
      seoTitle: 'Suivre Digitalova sur LinkedIn - Agence Web & IA à Mons',
    },
    {
      name: 'Instagram',
      handle: '@digitalova.be',
      description: "Pour l'inspiration visuelle, les coulisses de mes projets et des annonces exclusives.",
      url: 'https://www.instagram.com/digitalova.be',
      icon: <InstagramIcon className="w-10 h-10" />,
      colorClass: 'bg-gradient-to-br from-pink-500/90 to-orange-500/90 text-white',
      seoTitle: "S'abonner à l'Instagram de Digitalova - Webdesign et inspiration à Mons",
    },
    {
      name: 'Facebook',
      handle: 'DigitalovaBE',
      description: "Pour suivre les actualités de l'agence, les articles de blog et interagir avec la communauté.",
      url: 'https://www.facebook.com/DigitalovaBE?locale=fr_FR',
      icon: <FacebookIcon className="w-10 h-10" />,
      colorClass: 'bg-gradient-to-br from-blue-700/90 to-blue-500/90 text-white',
      seoTitle: 'Rejoindre la communauté Facebook Digitalova - Agence Web Belgique',
    },
    {
      name: 'TikTok',
      handle: '@digitalova.be',
      description: 'Pour des contenus courts, des astuces rapides et un aperçu dynamique de mon travail.',
      url: 'https://www.tiktok.com/@digitalova.be?is_from_webapp=1&sender_device=pc',
      icon: <TikTokIcon className="w-10 h-10" />,
      colorClass: 'bg-black text-white border border-white/10 shadow-xl shadow-cyan-500/10 hover:shadow-cyan-500/20',
      seoTitle: 'Voir les astuces web et tutos sur le TikTok de Digitalova',
    },
    /*{
      name: 'WhatsApp',
      handle: '+32 471 58 67 08',
      description: 'Pour un contact direct, rapide et efficace afin de discuter de votre projet sans attendre.',
      url: 'https://wa.me/32471586708',
      icon: <WhatsAppIcon className="w-10 h-10" />,
      colorClass: 'bg-[#0B3B2A] text-white border border-white/10 shadow-lg shadow-green-500/15',
      seoTitle: 'Contacter Digitalova directement sur WhatsApp pour un projet web',
    },*/
  ];

  return (
    <>
      <Helmet>
        {/* Configuration de base */}
        <html lang="fr-BE" />
        <title>Soutenir DIGITALOVA | Réseaux sociaux & Avis clients</title>
        <meta
          name="description"
          content="Suivez DIGITALOVA sur LinkedIn, Instagram, Facebook, TikTok et WhatsApp. Laissez un avis Google ou un avis directement sur le site : votre soutien booste notre visibilité locale à Mons et en Hainaut."
        />
        <link rel="canonical" href="https://digitalova.be/nous-suivre" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />

        {/* SEO Local (Géo-tagging pour Mons) */}
        <meta name="geo.region" content="BE-WHT" />
        <meta name="geo.placename" content="Mons" />
        <meta name="geo.position" content="50.4542;3.9567" />
        <meta name="ICBM" content="50.4542, 3.9567" />

        {/* Open Graph (Optimisation pour WhatsApp, Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://digitalova.be/nous-suivre" />
        <meta property="og:title" content="Rejoignez la Communauté DIGITALOVA | Avis & Réseaux" />
        <meta
          property="og:description"
          content="Découvrez les coulisses de l'agence, nos astuces web et laissez votre avis pour soutenir l'entrepreneuriat à Mons."
        />
        <meta property="og:image" content="https://digitalova.be/og-image-social.jpg" />
        <meta property="og:locale" content="fr_BE" />
        <meta property="og:site_name" content="Digitalova" />

        {/* Twitter / X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soutenir DIGITALOVA à Mons" />
        <meta name="twitter:description" content="Suivez l'agence et laissez votre avis sur nos solutions Web & IA." />
        <meta name="twitter:image" content="https://digitalova.be/og-image-social.jpg" />

        {/* Thème Mobile (Barre de navigation) */}
        <meta name="theme-color" content="#0F172A" />

        {/* Données Structurées JSON-LD (Lien entre ton site et tes réseaux) */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            '@id': 'https://digitalova.be/nous-suivre#service',
            name: 'DIGITALOVA',
            url: 'https://digitalova.be',
            logo: 'https://digitalova.be/logo.png',
            sameAs: [
              'https://www.linkedin.com/company/digitalova-mons/',
              'https://www.instagram.com/digitalova.be',
              'https://www.facebook.com/DigitalovaBE',
              'https://www.tiktok.com/@digitalova.be',
              'https://wa.me/32471586708',
            ],
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Mons',
              addressRegion: 'Hainaut',
              addressCountry: 'BE',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+32 471 58 67 08',
              contactType: 'customer service',
              availableLanguage: 'French',
            },
          })}
        </script>
      </Helmet>

      <div className="pt-32 pb-20 bg-slate-50 relative overflow-hidden">
        <BackgroundBlobs />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h1 variants={fadeUp} initial="hidden" animate="show" className="text-5xl md:text-6xl font-bold mb-6 text-black">
              Rejoignez la Communauté <span className="gradient-text">DIGITALOVA</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Suivez-moi sur mes réseaux pour découvrir les coulisses, des astuces web, et mes dernières créations.
            </motion.p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.08 }}
            className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                href={social.url}
                title={social.seoTitle}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col p-8 rounded-2xl hover:shadow-2xl ${social.colorClass} transition-shadow cursor-pointer`}
              >
                <div className="flex items-center gap-4 mb-4">
                  {social.icon}
                  <div>
                    <h2 className="text-2xl font-bold">{social.name}</h2>
                    <p className="text-sm opacity-80 font-medium">{social.handle}</p>
                  </div>
                </div>
                <p className="opacity-90 mt-2 flex-grow font-medium">{social.description}</p>
              </motion.a>
            ))}
          </motion.div>

          <div className="max-w-5xl mx-auto mt-16 md:mt-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl translate-y-1/2"></div>
              </div>

              <div className="relative z-10 text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                  Votre{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Avis</span>{' '}
                  Compte Énormément
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                  Votre retour est ma meilleure récompense et aide d'autres personnes à faire le bon choix.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch relative z-10">
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm h-full flex flex-col"
                >
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-3 text-white">
                      <GoogleIcon className="w-7 h-7" /> Laisser un avis sur Google
                    </h3>
                    <p className="text-slate-300 mb-5 leading-relaxed">
                      C&apos;est le moyen le plus efficace pour soutenir mon activité et améliorer ma visibilité locale.
                      Un grand merci !
                    </p>

                    <a href="https://g.page/r/Cdfk326zr4htEBM/review" target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 h-14 rounded-full text-white shadow-lg">
                        Évaluer sur Google
                      </Button>
                    </a>
                  </div>

                  <motion.div
                    className="mt-5 flex justify-center"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <img
                      src="https://horizons-cdn.hostinger.com/63fc4be4-0345-4e91-b9b7-ba4da148182f/d298dc6aa082ae2e336c4d18c3d2bee6.png"
                      alt="Scanner le QR Code pour laisser un avis Google sur Digitalova"
                      className="w-full max-w-[220px] rounded-xl shadow-lg border-4 border-white/20"
                      loading="lazy"
                    />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className="bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-sm h-full"
                >
                  <h3 className="text-2xl font-bold mb-6 text-white">Ou laissez un avis ici</h3>
                  <ReviewForm />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55 }}
                className="mt-10 pt-7 border-t border-white/10 text-center relative z-10"
              >
                <p className="text-slate-400 text-sm mb-3">Vous êtes un professionnel satisfait ?</p>
                <motion.div whileHover={{ scale: 1.02 }} className="inline-flex">
                  <Link
                    to="/partenaires"
                    className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-bold hover:underline transition-all"
                    title="Rejoindre le programme partenaire"
                  >
                    <Briefcase className="w-5 h-5" />
                    Devenez apporteur d&apos;affaires et gagnez des commissions
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <FAQSection />
    </>
  );
};

export default Social;