'use client';

import React, { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUpRight, ChevronUp, HeartHandshake, Heart } from 'lucide-react';
import BackgroundBlobs from '@/components/BackgroundBlobs';

/* ---------- ICONES ---------- */
const FacebookBrandIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path
      fill="#1877F2"
      d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.43c0-3.02 1.792-4.688 4.533-4.688 1.312 0 2.686.236 2.686.236v2.963h-1.514c-1.49 0-1.954.93-1.954 1.885v2.247h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"
    />
  </svg>
);

const InstagramBrandIcon = ({ gradientId, ...props }) => (
  <svg {...props} viewBox="0 0 24 24">
    <defs>
      <linearGradient id={gradientId} x1="1" y1="23" x2="23" y2="1">
        <stop stopColor="#F58529" />
        <stop offset="0.3" stopColor="#DD2A7B" />
        <stop offset="0.6" stopColor="#8134AF" />
        <stop offset="1" stopColor="#515BD4" />
      </linearGradient>
    </defs>
    <path
      fill={`url(#${gradientId})`}
      d="M12 2.2c3.2 0 3.6 0 4.9.07 1.17.06 1.8.25 2.22.41.56.22.96.49 1.38.91.42.42.69.82.91 1.38.16.42.35 1.05.41 2.22.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.17-.25 1.8-.41 2.22-.22.56-.49.96-.91 1.38-.42.42-.82.69-1.38.91-.42.16-1.05.35-2.22.41-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.17-.06-1.8-.25-2.22-.41-.56-.22-.96-.49-1.38-.91-.42-.42-.69-.82-.91-1.38-.16-.42-.35-1.05-.41-2.22C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.17.25-1.8.41-2.22.22-.56.49-.96.91-1.38.42-.42.82-.69 1.38-.91.42-.16 1.05-.35 2.22-.41C8.4 2.2 8.8 2.2 12 2.2Z"
    />
  </svg>
);

const WhatsAppBrandIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path
      fill="#25D366"
      d="M20.52 3.48A11.91 11.91 0 0 0 12.04 0C5.43 0 .06 5.37.06 11.98c0 2.11.55 4.18 1.6 6.01L0 24l6.18-1.62a11.93 11.93 0 0 0 5.86 1.49h.01c6.61 0 11.98-5.37 11.98-11.98 0-3.2-1.25-6.21-3.51-8.41Z"
    />
  </svg>
);

const TikTokBrandIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24">
    <path
      fill="#25F4EE"
      d="M15.3 3.1c.4 2.4 2.1 4 4.5 4.2v2.5c-1.5 0-2.9-.5-4-1.3v6.3c0 3.3-2.7 6-6 6s-6-2.7-6-6 2.7-6 6-6c.4 0 .8 0 1.2.1v2.8c-.4-.1-.8-.2-1.2-.2-1.8 0-3.2 1.4-3.2 3.2s1.4 3.2 3.2 3.2 3.2-1.4 3.2-3.2V1.6h2.3Z"
    />
  </svg>
);

/* ✅ LinkedIn */
const LinkedInBrandIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#0A66C2"
      d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.475-.9 1.637-1.852 3.369-1.852 3.6 0 4.264 2.369 4.264 5.455v6.288zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.56V9h3.554v11.452z"
    />
  </svg>
);

/* ---------- BACK TO TOP ---------- */
const BackToTop = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Retourner en haut de la page"
      className={`fixed bottom-6 right-6 z-[60] rounded-full border border-white/15 shadow-xl transition-all ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } bg-white`}
      style={{ width: 46, height: 46 }}
    >
      <ChevronUp className="w-5 h-5 text-slate-900 mx-auto" />
    </button>
  );
};

/* ---------- FOOTER ---------- */
const Footer = () => {
  const uid = useId();
  const igGradientId = `ig-${uid.replaceAll(':', '')}`;

  return (
    <>
      <footer className="relative overflow-hidden bg-[#070B16]">
        <BackgroundBlobs />

        <div className="absolute inset-0 pointer-events-none opacity-[0.7]">
          <div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-[520px] h-[520px] rounded-full bg-pink-600/10 blur-3xl" />
          <div className="absolute inset-0 opacity-[0.22]">
            <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 py-14 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
            {/* COL 1 - INFO AGENCE */}
            <div>
              <img
                src="https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/LogoDIGITALOVAico.ico"
                alt="Digitalova"
                title='Logo Digitalova - Agence Web'
                className="h-10 w-auto"
              />
              <p className="mt-4 text-sm text-slate-300">
                Agence web freelance à Mons. Création de sites, SEO local & automatisation IA.
              </p>
              <p className="mt-4 text-sm text-slate-300">
                 Appels : 09h30–20h00 <br />
                 Messages : 24h/24 • 7j/7
                
              </p>
            </div>

            {/* COL 2 – NAVIGATION & SERVICES */}
            <div className="grid grid-cols-1 gap-8">
              <div>
                <p className="text-lg font-bold text-white mb-4">Navigation</p>
                <nav className="space-y-2 text-sm">
                  <Link href="/" title="Retour à l'accueil - Digitalova Agence Web Mons" className="block text-slate-300 hover:text-purple-300 transition-colors">
                    Accueil
                  </Link>
                  <Link href="/services" title="Voir la page sur les solutions de Digitalova - Agence Web " className="block text-slate-300 hover:text-purple-300 transition-colors">
                    Solutions
                  </Link>
                  <Link href="/portfolio" title="Voir le portfolio de Digitalova - Agence Web " className="block text-slate-300 hover:text-purple-300 transition-colors">
                    Portfolio
                  </Link>
                  <Link href="/methode" title="Voir la page sur la méthode de Digitalova - Agence Web " className="block text-slate-300 hover:text-purple-300 transition-colors">
                    Notre Méthode
                  </Link>
                  <Link href="/contact" title="Voir la page de contact de Digitalova - Agence Web" className="block text-slate-300 hover:text-purple-300 transition-colors">
                    Contact
                  </Link>
                </nav>
              </div>

              <div>
                <p className="text-sm font-bold text-purple-200 uppercase tracking-wider mb-4">Nos Services</p>
                <nav className="space-y-2 text-sm">
                  <Link href="/services/creation-site-web" title="Voir la page sur la solution de Création de Site Internet à Mons" className="block text-slate-300 hover:text-purple-300 transition-colors">
                    Création de Site Web
                  </Link>
                  <Link href="/services/google-business" title="Voir la page sur lagestion de la fiche d'établissement Google My Business" className="block text-slate-300 hover:text-purple-300 transition-colors">
                    Google My Business
                  </Link>
                  <Link href="/services/seo-referencement" title="Voir la page sur la solutionSEO & Référencement" className="block text-slate-300 hover:text-purple-300 transition-colors">
                    SEO & Référencement
                  </Link>
                  <Link href="/services/automatisation-ia" title="Voir la page sur la solution d'Automatisation IA" className="block text-slate-300 hover:text-purple-300 transition-colors">
                    Automatisation IA
                  </Link>
                </nav>
              </div>
            </div>

            {/* COL 3 – CONTACT */}
            <div>
              <p className="text-lg font-bold text-white mb-4">Contact</p>
              <div className="space-y-3 text-sm text-slate-300">
                <p className="flex items-center gap-2">
                  <Mail size={16} /> contact@digitalova.be
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={16} /> +32 471 58 67 08
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={16} /> Mons, Belgique
                </p>
                <div className="pt-2">
                  <a
                    href="/sitemap.xml" title="Voir le sitemap de Digitalova - Agence Web"
                    className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors text-xs"
                  >
                    Sitemap.xml <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* COL 4 – SUIVRE */}
            <div>
              <p className="text-lg font-bold text-white mb-4">Suivre DIGITALOVA</p>

              {/* ✅ Réseaux avec icônes */}
              <div className="flex flex-wrap gap-3 mt-2">
                <a
                  href="https://www.linkedin.com/company/digitalova-mons/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all shadow-sm"
                  aria-label="Suivre Digitalova sur LinkedIn"
                  title="Visiter le profil LinkedIn de Digitalova - Agence Web"
                >
                  <LinkedInBrandIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://www.facebook.com/DigitalovaBE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all shadow-sm"
                  aria-label="Suivre Digitalova sur Facebook"
                  title="Visiter le profil Facebook de Digitalova - Agence Web"
                >
                  <FacebookBrandIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://instagram.com/digitalova.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all shadow-sm"
                  aria-label="Suivre Digitalova sur Instagram"
                  title="Visiter le profil Instagram de Digitalova - Agence Web"
                >
                  <InstagramBrandIcon gradientId={igGradientId} className="w-5 h-5" />
                </a>

                <a
                  href="https://wa.me/32471586708"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all shadow-sm"
                  aria-label="Contacter Digitalova sur WhatsApp"
                  title="Contacter Digitalova sur WhatsApp"
                >
                  <WhatsAppBrandIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://www.tiktok.com/@digitalova.be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all shadow-sm"
                  aria-label="Suivre Digitalova sur TikTok"
                  title="Visiter le profil TikTok de Digitalova - Agence Web"
                >
                  <TikTokBrandIcon className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 space-y-2 text-sm">
                <Link href="/partenaires" title="Voir la page sur les partenaires de Digitalova - Agence Web" className="flex items-center gap-2 text-purple-200 hover:text-purple-100 transition-colors">
                  <HeartHandshake className="w-4 h-4" /> Devenir Partenaire
                </Link>
                <Link href="/nous-suivre" title="Voir la page sur la façon de nous suivre de Digitalova - Agence Web" className="flex items-center gap-2 text-slate-300 hover:text-purple-300 transition-colors">
                  <Heart className="w-4 h-4" /> Nous suivre
                </Link>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-10 pt-6 border-t border-white/10 text-xs text-slate-400 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p>© 2026 DIGITALOVA</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="inline-flex items-center">TVA : BE1028.668.667</span>
              <Link href="/mentions-legales" title="Voir la page sur les mentions légales de Digitalova - Agence Web" className="hover:text-purple-300 transition-colors">
                Mentions légales
              </Link>
              <Link href="/rgpd" title="Voir la page sur le RGPD de Digitalova - Agence Web" className="hover:text-purple-300 transition-colors">
                RGPD
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <BackToTop />
    </>
  );
};

export default Footer;
