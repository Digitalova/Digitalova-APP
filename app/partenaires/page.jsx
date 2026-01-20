'use client';

import React, { useMemo, useState, useEffect, useRef } from 'react';

import { motion } from 'framer-motion';
import {
  HeartHandshake as Handshake,
  Users,
  CheckCircle,
  Send,
  ShieldCheck,
  Clock,
  FileCheck,
  Gift,
  Trophy,
  Star,
  Sparkles,
  Megaphone,
  BadgeCheck,
} from 'lucide-react';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';
import { Loader2 } from 'lucide-react';
import BackgroundBlobs from '@/components/BackgroundBlobs';

const DARK = '#0F172A';
const LIGHT = '#F8FAFC';

const PROGRAM_TERMS_PDF =
  'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Docs/Condition_utilisation_programme_partenaire%20(1).pdf';

/* -------------------- Animations (premium, clean) -------------------- */
const ease = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.7, ease, delay },
});

const fadeDown = (delay = 0) => ({
  initial: { opacity: 0, y: -14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.22 },
  transition: { duration: 0.7, ease, delay },
});

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const hoverLift = {
  whileHover: { y: -8, scale: 1.01 },
  transition: { type: 'spring', stiffness: 260, damping: 18 },
};

const WaveDivider = ({ color = LIGHT, heightClass = 'h-[60px] md:h-[110px]' }) => (
  <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-none rotate-180 pointer-events-none">
    <svg
      className={`block w-[calc(100%+1.3px)] ${heightClass}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
        fill={color}
      />
    </svg>
  </div>
);

const DarkGlow = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute top-1/2 right-0 w-[560px] h-[560px] bg-purple-600/12 rounded-full blur-[110px] translate-x-1/3 -translate-y-1/2"
      animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.06, 1] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute bottom-0 left-0 w-[460px] h-[460px] bg-pink-600/10 rounded-full blur-[110px] -translate-x-1/3 translate-y-1/3"
      animate={{ opacity: [0.65, 0.95, 0.65], scale: [1, 1.05, 1] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute top-0 left-1/3 w-[420px] h-[420px] bg-indigo-600/8 rounded-full blur-[120px] -translate-y-1/2"
      animate={{ opacity: [0.55, 0.85, 0.55], scale: [1, 1.04, 1] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
);

/* -------------------- Page -------------------- */
const Partners = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });

  // ✅ RGPD / Legal checkboxes
  const [consents, setConsents] = useState({
    contactConsent: false, // RGPD: recontact
    termsAccepted: false,  // programme: conditions d'utilisation
  });

  const [formErrors, setFormErrors] = useState({
    contactConsent: '',
    termsAccepted: '',
  });

  const turnstileRef = useRef(null);

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

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleConsentChange = (e) => {
    const { name, checked } = e.target;
    setConsents((prev) => ({ ...prev, [name]: checked }));
    setFormErrors((prev) => ({ ...prev, [name]: '' })); // clear error on change
  };

  const validateLegal = () => {
    const nextErrors = { contactConsent: '', termsAccepted: '' };

    if (!consents.contactConsent) {
      nextErrors.contactConsent = 'Veuillez confirmer que vous acceptez d’être recontacté.';
    }
    if (!consents.termsAccepted) {
      nextErrors.termsAccepted = 'Veuillez accepter les Conditions d’utilisation du programme.';
    }

    setFormErrors(nextErrors);

    return !nextErrors.contactConsent && !nextErrors.termsAccepted;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/4df9b535-5d6b-4510-b78b-1afe0f028db0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'partenaires/page.jsx:170',message:'handleSubmit entry',data:{formData,consents,supabaseClient:!!supabase},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,C'})}).catch(()=>{});
    // #endregion

    // ✅ block submit if legal not accepted
    if (!validateLegal()) {
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/4df9b535-5d6b-4510-b78b-1afe0f028db0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'partenaires/page.jsx:175',message:'validation failed',data:{consents},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
      // #endregion
      toast({
        title: 'Action requise',
        description: 'Veuillez cocher les cases obligatoires (RGPD + Conditions du programme).',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    const insertData = {
      name: formData.name.trim(),
      company: formData.company?.trim() || '', // ✅ Optionnel - chaîne vide si non rempli
      email: formData.email.trim(),
      phone: formData.phone?.trim() || '', // ✅ Optionnel - chaîne vide si non rempli (contrainte NOT NULL en DB)
      message: formData.message.trim(),
      program: 'PARTENARIAT_ELITE',
      status: 'new',
      privacy_consent: !!consents.contactConsent,
      terms_accepted: !!consents.termsAccepted,
    };

    // #region agent log
    fetch('http://127.0.0.1:7242/ingest/4df9b535-5d6b-4510-b78b-1afe0f028db0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'partenaires/page.jsx:195',message:'before supabase insert',data:{insertData,supabaseUrl:supabase?.supabaseUrl||'undefined'},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,D'})}).catch(()=>{});
    // #endregion

    try {
      console.log('Inserting data:', JSON.stringify(insertData, null, 2));
      const { error, data } = await supabase.from('partner_applications').insert([insertData]);

      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/4df9b535-5d6b-4510-b78b-1afe0f028db0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'partenaires/page.jsx:209',message:'supabase insert response',data:{error:error?{message:error.message,code:error.code,details:error.details,hint:error.hint}:null,hasData:!!data},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,D'})}).catch(()=>{});
      // #endregion

      if (error) {
        console.error('Supabase insert error:', error);
        throw error;
      }

      toast({
        title: 'Candidature envoyée !',
        description: "Nous avons bien reçu votre demande d'adhésion au programme Élite.",
        variant: 'default',
        className: 'bg-green-50 border-green-200',
      });

      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
      setConsents({ contactConsent: false, termsAccepted: false });
      setFormErrors({ contactConsent: '', termsAccepted: '' });
    } catch (error) {
      console.error('Error submitting partnership:', error);
      // #region agent log
      fetch('http://127.0.0.1:7242/ingest/4df9b535-5d6b-4510-b78b-1afe0f028db0',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'partenaires/page.jsx:227',message:'catch block error',data:{error:error?.message,errorCode:error?.code,errorDetails:error?.details,errorHint:error?.hint,stack:error?.stack},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'A,B,D'})}).catch(()=>{});
      // #endregion
      toast({
        title: 'Erreur',
        description: error?.message ? `Erreur: ${error.message}` : 'Une erreur est survenue. Veuillez réessayer.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const tiers = useMemo(
    () => [
      { name: 'Lancement', rate: '17%', icon: <Star className="w-6 h-6 text-blue-500" />, desc: 'Taux boosté pour vos 3 premiers mois' },
      { name: 'Confirmé', rate: '15%', icon: <CheckCircle className="w-6 h-6 text-green-500" />, desc: "Taux standard après période d'essai" },
      { name: 'Expert', rate: '20%', icon: <Trophy className="w-6 h-6 text-purple-500" />, desc: 'Dès 5 projets apportés / an' },
      { name: 'Associé', rate: '25%', icon: <Users className="w-6 h-6 text-amber-500" />, desc: 'Partenaires stratégiques (+10 projets)' },
    ],
    []
  );

  const credits = useMemo(
    () => [
      { cost: 3, reward: 'Audit SEO Complet', desc: 'Analyse technique et sémantique offerte pour votre site', value: 'Valeur : 450€' },
      { cost: 5, reward: 'Automatisation N8N', desc: "Création d'un workflow sur mesure pour votre business", value: 'Valeur : 800€' },
      { cost: 10, reward: 'Landing Page', desc: "Création d'une page de vente haute conversion offerte", value: 'Valeur : 1500€' },
    ],
    []
  );

  return (
    <>

      {/* JSON-LD pour les données structurées */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://digitalova.be/partenaires#webpage",
        "url": "https://digitalova.be/partenaires",
        "name": "Programme Partenaires Élite - Digitalova Mons",
        "description": "Programme d'apporteur d'affaires pour services de création de sites web et marketing digital à Mons."
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "DIGITALOVA",
        "url": "https://digitalova.be/",
        "logo": "https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg",
        "image": "https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg",
        "telephone": "+32471586708",
        "email": "contact@digitalova.be",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mons",
          "postalCode": "7000",
          "addressCountry": "BE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 50.4542,
          "longitude": 3.9567
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "00:00",
            "closes": "23:59"
          }
        ]
      }
    ]) }}
      />

      <div className="pt-32 pb-0 bg-white">
        {/* SECTION 1 — HERO */}
        <section className="relative overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none opacity-70">
            <BackgroundBlobs />
          </div>

          <div className="container mx-auto px-4 relative z-10 py-10 md:py-14">
            <div className="max-w-4xl mx-auto text-center">
              <div>
                <span className="inline-block py-2 px-4 rounded-full bg-[#0F172A] text-white font-semibold text-sm mb-6 shadow-lg border border-slate-700">
                  Programme Partenaires Élite
                </span>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                  Rejoignez l&apos;élite Digitalova <br /> Jusqu&apos;à 25% de commission
                </h1>

                <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                  Un système de rémunération transparent, rapide et cumulable avec des services offerts pour votre propre activité.
                </p>

                <motion.div {...fadeUp(0.2)} className="flex justify-center gap-4">
                  <motion.a
                    href="#partner-form"
                    className="px-8 py-4 bg-[#0F172A] text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-xl hover:shadow-slate-900/30 flex items-center gap-2"
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                  >
                    <Handshake className="w-5 h-5" />
                    Devenir Partenaire
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>

          <WaveDivider color={DARK} />
        </section>

        {/* SECTION 2 — EXPLICATION PROGRAMME (SOMBRE) */}
        <section className="relative overflow-hidden py-20 text-white bg-[#0F172A]">
          <DarkGlow />

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-14">
                <motion.span
                  {...fadeUp(0)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-200 text-sm font-semibold"
                >
                  <Sparkles className="w-4 h-4 text-purple-300" />
                  Un programme gagnant-gagnant
                </motion.span>

                <motion.h2 {...fadeUp(0.08)} className="text-3xl md:text-4xl font-bold mt-6">
                  Développons Digitalova,{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">ensemble</span>
                </motion.h2>

                <motion.p {...fadeUp(0.15)} className="text-slate-300 max-w-3xl mx-auto mt-4 text-lg">
                  Le programme Partenaires aide la croissance de Digitalova… et récompense celles et ceux qui participent à cette croissance.
                  Le but : faire connaître et recommander Digitalova dans votre cercle perso/pro à toute personne qui a besoin d’un site web,
                  de SEO avancé ou d’automatisations. <strong className="text-white">Tout le monde peut participer.</strong>
                </motion.p>
              </div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                <motion.div variants={item} {...hoverLift} className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                  <div className="p-3 bg-white/10 rounded-xl w-fit mb-5">
                    <Megaphone className="w-6 h-6 text-purple-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Votre mission</h3>
                  <p className="text-slate-300">Vous recommandez Digitalova aux personnes qui ont un besoin réel. Vous mettez en relation, on s’occupe du reste.</p>
                </motion.div>

                <motion.div variants={item} {...hoverLift} className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                  <div className="p-3 bg-white/10 rounded-xl w-fit mb-5">
                    <Gift className="w-6 h-6 text-pink-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Vos récompenses</h3>
                  <p className="text-slate-300">Commission + Crédits Élite cumulables : gagnez de l’argent et échangez vos crédits contre des services.</p>
                </motion.div>

                <motion.div variants={item} {...hoverLift} className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                  <div className="p-3 bg-white/10 rounded-xl w-fit mb-5">
                    <BadgeCheck className="w-6 h-6 text-green-300" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Ouvert à tous</h3>
                  <p className="text-slate-300">Clients, indépendants, amis, étudiants… si vous connaissez quelqu’un qui a besoin, vous pouvez l’aider et être récompensé.</p>
                </motion.div>
              </motion.div>

              <div className="mt-10 flex justify-center">
                <motion.a
                  href="#partner-form"
                  className="px-8 py-4 bg-white text-slate-900 rounded-xl font-extrabold hover:bg-slate-100 transition-all shadow-xl flex items-center gap-2"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                >
                  <Send className="w-5 h-5" />
                  Rejoindre le programme
                </motion.a>
              </div>
            </div>
          </div>

          <WaveDivider color={LIGHT} />
        </section>

        {/* SECTION 3 — COMMISSIONS */}
        <section className="relative overflow-hidden bg-slate-50 py-20">
          <div className="absolute inset-0 pointer-events-none opacity-70">
            <BackgroundBlobs />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div {...fadeUp(0)} className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Les commissions</h2>
                <p className="text-slate-600">Plus vous performez, plus votre part augmente.</p>
              </motion.div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-4 gap-6"
              >
                {tiers.map((tier, idx) => (
                  <motion.div
                    key={idx}
                    variants={item}
                    {...hoverLift}
                    className="rounded-2xl p-6 border border-white/10 shadow-xl transition-all relative overflow-hidden group bg-[#0F172A]"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">{tier.icon}</div>
                    <div className="mb-4 p-3 bg-white/10 rounded-xl w-fit border border-white/10">{tier.icon}</div>
                    <h3 className="text-lg font-bold text-white/90 mb-1">{tier.name}</h3>
                    <div className="text-4xl font-extrabold text-white mb-3">{tier.rate}</div>
                    <p className="text-sm text-slate-200 leading-snug">{tier.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                {...fadeUp(0.12)}
                className="mt-8 bg-[#0F172A] rounded-xl p-4 text-center text-slate-200 text-sm border border-slate-700 flex items-center justify-center gap-2 shadow-lg"
              >
                <Gift className="w-4 h-4 text-pink-300" />
                <span>
                  <strong className="text-white">Bonus de performance :</strong> +2% supplémentaire si vous dépassez les 10 projets apportés.
                </span>
              </motion.div>
            </div>
          </div>

          <WaveDivider color={LIGHT} />
        </section>

        {/* SECTION 4 — CRÉDITS */}
        <section className="relative overflow-hidden text-white bg-[#0F172A] pt-14 pb-20 md:pt-16 md:pb-24">
          <DarkGlow />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div {...fadeUp(0)} className="text-center mb-12 md:mb-14">
              <span className="text-purple-300 font-bold tracking-wider uppercase text-sm mb-2 block">Système de Crédits</span>
              <h2 className="text-3xl font-bold mb-4">Échangez vos succès contre des services</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                En plus de vos commissions financières, chaque lead converti vous rapporte 1 Crédit Élite. Utilisez-les pour propulser votre
                propre business.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {credits.map((credit, idx) => (
                <motion.div
                  key={idx}
                  variants={item}
                  {...hoverLift}
                  className="bg-white rounded-2xl p-8 border border-slate-200 relative shadow-2xl"
                >
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                    {credit.cost} Crédits
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{credit.reward}</h3>
                    <p className="text-slate-600 text-sm mb-4">{credit.desc}</p>
                    <div className="text-purple-700 font-semibold bg-purple-100 py-2 rounded-lg text-sm">{credit.value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <WaveDivider color={LIGHT} />
        </section>

        {/* SECTION 5 — LÉGAL & PAIEMENT */}
        <section className="relative overflow-hidden bg-slate-50 py-20">
          <div className="absolute inset-0 pointer-events-none opacity-70">
            <BackgroundBlobs />
          </div>

          <div className="container mx-auto px-4 relative z-10 pb-10 md:pb-14">
            <motion.div {...fadeUp(0)} className="max-w-5xl mx-auto bg-[#0F172A] rounded-3xl p-7 md:p-10 shadow-2xl text-white relative overflow-hidden">
              <motion.div
                aria-hidden
                className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"
                animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.06, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-7 relative z-10"
              >
                <motion.div variants={item} className="flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="p-3 bg-white/10 rounded-xl mb-4">
                    <Clock className="w-6 h-6 text-green-300" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Paiement Rapide 72h</h3>
                  <p className="text-slate-300 text-sm">
                    Vos commissions sont versées sous 3 jours ouvrés dès réception de l&apos;acompte client. Pas d&apos;attente de fin de mois.
                  </p>
                </motion.div>

                <motion.div variants={item} className="flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="p-3 bg-white/10 rounded-xl mb-4">
                    <ShieldCheck className="w-6 h-6 text-blue-200" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Validité 6 Mois</h3>
                  <p className="text-slate-300 text-sm">
                    Une fois un lead déclaré, il vous est attribué pour 6 mois. Même si le projet traîne, votre commission est sécurisée.
                  </p>
                </motion.div>

                <motion.div variants={item} className="flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="p-3 bg-white/10 rounded-xl mb-4">
                    <FileCheck className="w-6 h-6 text-purple-200" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">100% Légal & Fiscal</h3>
                  <p className="text-slate-300 text-sm">
                    Facture (B2B) ou Fiche fiscale 281.50 (Particuliers belges). Nous gérons la conformité administrative pour vous.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <WaveDivider color={DARK} />
        </section>

        {/* SECTION 6 — FORMULAIRE */}
        <section id="partner-form" className="relative overflow-hidden py-20 text-white bg-[#0F172A]">
          <DarkGlow />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div {...fadeUp(0)} className="max-w-2xl mx-auto text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Postuler au programme</h2>
              <p className="text-slate-300">Remplissez ce formulaire pour activer votre compte Partenaire.</p>
            </motion.div>

            <motion.div {...fadeUp(0.08)} className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div {...fadeUp(0.05)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#1E293B]">Nom complet du partenaire *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#1E293B]/20 bg-[#0F172A] text-white placeholder:text-white/60 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#1E293B]">Entreprise (Facultatif)</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#1E293B]/20 bg-[#0F172A] text-white placeholder:text-white/60 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="Votre Société SRL"
                    />
                  </div>
                </motion.div>

                <motion.div {...fadeUp(0.08)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#1E293B]">Email professionnel *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#1E293B]/20 bg-[#0F172A] text-white placeholder:text-white/60 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="jean@exemple.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#1E293B]">Téléphone (Facultatif)</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#1E293B]/20 bg-[#0F172A] text-white placeholder:text-white/60 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                      placeholder="+32 470 00 00 00"
                    />
                  </div>
                </motion.div>

                <motion.div {...fadeUp(0.1)} className="space-y-2">
                  <label className="text-sm font-semibold text-[#1E293B]">Message ou Motivation *</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#1E293B]/20 bg-[#0F172A] text-white placeholder:text-white/60 focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                    placeholder="Présentez-vous brièvement..."
                  />
                </motion.div>

                {/* ✅ LIEN CONDITIONS + CASE OBLIGATOIRE */}
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm text-slate-700 font-semibold mb-1">Conditions d’utilisation</div>
                  <div className="text-xs text-slate-600 mb-3">
                    Consultez le PDF officiel du programme partenaire :
                    <a href={PROGRAM_TERMS_PDF}
                      target="_blank"
                      rel="noreferrer"
                      className="ml-1 underline font-semibold text-slate-900 hover:text-purple-700"
                     title="En savoir plus - Digitalova">
                      Ouvrir les Conditions (PDF)
                    </a>
                  </div>

                  <label className="flex items-start gap-3 text-sm text-slate-800">
                    <input
                      type="checkbox"
                      name="termsAccepted"
                      checked={consents.termsAccepted}
                      onChange={handleConsentChange}
                      className="mt-1 h-4 w-4 rounded border-slate-300"
                      required
                    />
                    <span>
                      J’ai lu et j’accepte les <a href={PROGRAM_TERMS_PDF} target="_blank" rel="noreferrer" className="underline font-semibold" title="En savoir plus - Digitalova">Conditions d’utilisation</a>{' '}
                      du Programme Partenaire Digitalova.
                    </span>
                  </label>
                  {formErrors.termsAccepted ? (
                    <div className="mt-2 text-xs text-red-600">{formErrors.termsAccepted}</div>
                  ) : null}
                </div>

                {/* ✅ RGPD: INFORMATION + CASE OBLIGATOIRE */}
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-sm text-slate-700 font-semibold mb-1">Protection des données (RGPD)</div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Les informations envoyées via ce formulaire sont traitées par <strong>Digitalova</strong> afin de répondre à votre demande
                    d’adhésion au Programme Partenaires. Vous pouvez exercer vos droits (accès, rectification, suppression) en nous contactant.
                  </p>

                  <label className="mt-3 flex items-start gap-3 text-sm text-slate-800">
                    <input
                      type="checkbox"
                      name="contactConsent"
                      checked={consents.contactConsent}
                      onChange={handleConsentChange}
                      className="mt-1 h-4 w-4 rounded border-slate-300"
                      required
                    />
                    <span>J’accepte que mes données soient utilisées pour être recontacté(e) au sujet du Programme Partenaires.</span>
                  </label>

                  {formErrors.contactConsent ? (
                    <div className="mt-2 text-xs text-red-600">{formErrors.contactConsent}</div>
                  ) : null}

                  <div className="mt-3 text-xs text-slate-500">
                    Contact RGPD :{' '}
                    <a href="mailto:contact@digitalova.be" className="underline font-semibold text-slate-700 hover:text-purple-700" title="En savoir plus - Digitalova">
                      contact@digitalova.be
                    </a>
                  </div>
                </div>

                <div className="flex justify-center py-4">
                  <div ref={turnstileRef}></div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#0F172A] text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18 }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer ma candidature
                    </>
                  )}
                </motion.button>

                <motion.div {...fadeUp(0.15)} className="text-xs text-slate-500 pt-2 text-center">
                  En envoyant ce formulaire, vous confirmez votre demande d’adhésion au programme et acceptez d’être recontacté par DIGITALOVA.
                </motion.div>
              </form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Partners;