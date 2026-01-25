'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Send, Clock, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/lib/customSupabaseClient';
import { motion } from 'framer-motion';
import FAQSection from '@/components/FAQSection';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import Link from 'next/link';

const CALENDLY_URL = 'https://calendly.com/admin-digitalova/30min';

const Contact = () => {
  const turnstileRef = useRef(null);
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    company_number: '',
    email: '',
    phone: '',
    project_type: '',
    budget: '',
    message: '',
    wants_meeting: false,
    privacy_consent: false, // obligatoire
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // ✅ Turnstile (inchangé)
    const scriptId = 'cf-turnstile';
    if (document.getElementById(scriptId)) return;

    const script = document.createElement('script');
    script.id = scriptId;
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
      // optionnel: si tu veux cleanup (souvent ok de laisser)
      // if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  const projectTypes = [
    'Site One Page (Landing Pro)',
    'Site Vitrine (Business Pro)',
    'Site internet complexe (Signature)',
    'Boutique E-commerce (Signature)',
    'Gestion de fiche Google My Business',
    'Gestion & optimisation avancée du SEO',
    "Outils d'Automatisation & Interfaces sur Mesure",
    'Autre (projet sur mesure)',
  ];

  const budgets = [
    'Moins de 500 € (SEO/GMB uniquement)',
    '1 300€ - 2 500 €',
    '2 500 € - 5 000 €',
    '5 000 € - 10 000 €',
    'Plus de 10 000 €',
    'Je ne sais pas',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked) => {
    setFormData((prev) => ({ ...prev, wants_meeting: !!checked }));
  };

  const handlePrivacyConsent = (checked) => {
    setFormData((prev) => ({ ...prev, privacy_consent: !!checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.privacy_consent) {
      toast({
        variant: 'destructive',
        title: 'Consentement requis',
        description: 'Veuillez accepter la politique de confidentialité pour envoyer le formulaire.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from('contacts').insert([formData]);

      if (error) {
        console.error('Supabase error:', error);
        toast({
          variant: 'destructive',
          title: "Erreur lors de l'envoi",
          description: `Une erreur est survenue: ${error.message}. Veuillez réessayer.`,
        });
      } else {
        toast({
          title: 'Message envoyé avec succès !',
          description: 'Merci pour votre message. Je vous répondrai dans les plus brefs délais.',
        });

        setFormData({
          name: '',
          company_number: '',
          email: '',
          phone: '',
          project_type: '',
          budget: '',
          message: '',
          wants_meeting: false,
          privacy_consent: false,
        });
      }
    } catch (err) {
      console.error('Caught an unexpected error:', err);
      toast({
        variant: 'destructive',
        title: 'Erreur inattendue',
        description: 'Une erreur inattendue est survenue. Veuillez me contacter directement.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* JSON-LD pour les données structurées */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
          {
            '@context': 'https://schema.org',
            '@type': 'ContactPage',
            '@id': 'https://digitalova.be/contact#contactpage',
            url: 'https://digitalova.be/contact',
            name: 'Contactez DIGITALOVA à Mons',
            description: 'Formulaire de contact et demande de devis gratuit 24/7 pour services web et marketing à Mons.',
            inLanguage: 'fr-BE',
          },
          {
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            '@id': 'https://digitalova.be/#organization',
            name: 'DIGITALOVA',
            url: 'https://digitalova.be/',
            logo: 'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg',
            image: 'https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/IMagePourPortfoliog.jpeg',
            telephone: '+32471586708',
            email: 'contact@digitalova.be',
            priceRange: '€€',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Mons',
              postalCode: '7000',
              addressCountry: 'BE',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 50.4542,
              longitude: 3.9567,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '00:00',
                closes: '23:59',
              },
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+32471586708',
              contactType: 'customer support',
              availableLanguage: ['French', 'English'],
              hoursAvailable: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:30',
                  closes: '20:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Saturday', 'Sunday'],
                  opens: '13:30',
                  closes: '18:00',
                },
              ],
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            '@id': 'https://digitalova.be/contact#breadcrumbs',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://digitalova.be/' },
              { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://digitalova.be/contact' },
            ],
          },
        ]) }}
      />

      <div className="pt-32 pb-20 min-h-screen relative overflow-hidden bg-[#070B16]">
        <BackgroundBlobs />

        <div className="absolute inset-0 pointer-events-none opacity-[0.7]">
          <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-pink-600/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.22]">
            <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Parlons de Votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">Projet</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Contactez Digitalova pour votre projet de création de site web, référencement SEO ou optimisation Google Business en Belgique.
            Demandez un devis gratuit pour un site vitrine, e-commerce ou une solution digitale sur mesure, avec réponse rapide garantie.
            </p>
          </div>

          {/* ✅ Formulaire */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden mb-10 border border-white/10 transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500/20"
          >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl translate-y-1/2"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-slate-300 font-medium ml-1">
                    Nom & Prénom *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company_number" className="text-slate-300 font-medium ml-1">
                    N° d'entreprise (si applicable)
                  </label>
                  <Input
                    id="company_number"
                    name="company_number"
                    type="text"
                    placeholder="BE 0123.456.789"
                    value={formData.company_number}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-slate-300 font-medium ml-1">
                    Adresse Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="votre.email@exemple.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-slate-300 font-medium ml-1">
                    Téléphone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+32 470 12 34 56"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="project_type" className="text-slate-300 font-medium ml-1">
                    Type de projet *
                  </label>
                  <select
                    id="project_type"
                    name="project_type"
                    required
                    value={formData.project_type}
                    onChange={handleChange}
                    className="w-full h-10 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 [&>option]:text-black"
                  >
                    <option value="" disabled>
                      Sélectionnez un type de projet
                    </option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="budget" className="text-slate-300 font-medium ml-1">
                    Budget estimé *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full h-10 rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 [&>option]:text-black"
                  >
                    <option value="" disabled>
                      Sélectionnez une fourchette de budget
                    </option>
                    {budgets.map((budget) => (
                      <option key={budget} value={budget}>
                        {budget}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center space-x-2 bg-white/5 p-4 rounded-xl border border-white/10">
                <Checkbox
                  id="wants_meeting"
                  checked={formData.wants_meeting}
                  onCheckedChange={handleCheckboxChange}
                  className="border-white/50 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                />
                <label
                  htmlFor="wants_meeting"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white cursor-pointer select-none"
                >
                  Rendez-vous en physique / Rencontre
                </label>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-slate-300 font-medium ml-1">
                  Votre message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Décrivez votre projet, vos objectifs, vos inspirations..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 min-h-[150px] focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              {/* ✅ RGPD */}
              <div className="space-y-3 bg-white/5 p-4 rounded-xl border border-white/10">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="privacy_consent"
                    checked={formData.privacy_consent}
                    onCheckedChange={handlePrivacyConsent}
                    className="mt-1 border-white/50 data-[state=checked]:bg-purple-500 data-[state=checked]:border-purple-500"
                  />
                  <label htmlFor="privacy_consent" className="text-sm text-slate-200 leading-relaxed cursor-pointer">
                    <span className="font-semibold text-white">J'accepte la politique de confidentialité</span> et je
                    comprends que mes données seront utilisées pour répondre à ma demande.{' '}
                    <Link href="/mentions-legales" className="text-purple-300 hover:text-purple-200 underline" title="Aller à la page Mentions Legales - Digitalova">
                      En savoir plus (RGPD)
                    </Link>
                    <span className="text-pink-300 font-semibold"> *</span>
                  </label>
                </div>
              </div>

              <div className="text-center">
                <div className="flex justify-center py-4">
                  <div ref={turnstileRef}></div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="bg-white text-slate-900 hover:bg-slate-100 font-bold text-lg px-10 h-14 rounded-full shadow-xl transition-transform hover:scale-105 w-full md:w-auto"
                >
                  {isSubmitting ? (
                    <>Envoi en cours...</>
                  ) : (
                    <>
                      Envoyer ma demande
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>

          {/* ✅ Bouton Calendly uniquement (aucun script chargé) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="rounded-[2.25rem] border border-white/10 bg-white/5 backdrop-blur shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] p-8 text-center transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500/20">
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Réserver un appel pour discuter de votre projet
              </h2>
              <p className="text-slate-300 mt-3 max-w-xl mx-auto">
                Choisissez directement un créneau d'appel via mon agenda en ligne.
              </p>

              <div className="mt-6">
                <a href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-8 h-14 font-bold bg-white text-slate-900 hover:bg-slate-100 transition-transform hover:scale-105 shadow-lg"
                 title="Choisir un créneau d'appel avec Digitalova sur Calendly">
                  Ouvrir Calendly
                </a>
              </div>
            </div>
          </motion.div>

          {/* ✅ Cards */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] p-6 flex flex-col items-center min-w-[280px] flex-1 transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500/20">
              <div className="bg-purple-500/20 p-3 rounded-full mb-4">
                <Clock className="w-6 h-6 text-purple-300" />
              </div>
              <h2 className="font-bold text-white mb-2">Horaires d'Appel</h2>
              <p className="text-slate-300 text-sm">Semaine : 09h30 - 20h00</p>
              <p className="text-slate-300 text-sm">Week-end : 13h30 - 18h00</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] p-6 flex flex-col items-center min-w-[280px] flex-1 transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500/20">
              <div className="bg-pink-500/20 p-3 rounded-full mb-4">
                <MessageSquare className="w-6 h-6 text-pink-300" />
              </div>
              <h2 className="font-bold text-white mb-2">Disponibilité 24/7</h2>
              <p className="text-slate-300 text-sm text-center">
                Disponible à tout moment via message ou email. <br />
                Réponse rapide garantie.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur shadow-[0_25px_90px_-70px_rgba(0,0,0,0.80)] p-6 flex flex-col items-center min-w-[280px] flex-1 transition-all duration-500 hover:shadow-purple-500/20 hover:shadow-2xl hover:border-purple-500/20">
              <div className="bg-blue-500/20 p-3 rounded-full mb-4">
                <Phone className="w-6 h-6 text-blue-300" />
              </div>
              <h2 className="font-bold text-white mb-2">Contact Direct</h2>
              <p className="text-slate-300 text-sm">+32 471 58 67 08</p>
              <p className="text-slate-300 text-sm">contact@digitalova.be</p>
            </div>
          </motion.div>

          {/* FAQ */}
          <div className="mt-20">
            <FAQSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
