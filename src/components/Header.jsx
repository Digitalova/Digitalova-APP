'use client';

import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, HeartHandshake as Handshake, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const ease = [0.23, 1, 0.32, 1];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const pathname = usePathname();

  // ✅ refs pour éviter re-renders + re-attach scroll listener
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  // ✅ items memo (évite recréation à chaque render)
  const navItems = useMemo(
    () => [{ name: 'Accueil', path: '/', title: "Retour à l'accueil - Digitalova Agence Web Mons" }],
    []
  );

  const servicesDropdownItems = useMemo(
    () => [
      { name: 'Toutes les Solutions', path: '/services', title: "Vue d'ensemble de toutes nos solutions web" },
      { name: 'Création de Sites Web', path: '/services/creation-site-web', title: 'Sites vitrine & e-commerce sur mesure' },
      { name: 'SEO & Référencement Web', path: '/services/seo-referencement', title: 'Optimisation pour les moteurs de recherche' },
      { name: 'Google Business Profile', path: '/services/google-business', title: 'Gestion de votre présence locale sur Google' },
      { name: 'Automatisation IA', path: '/services/automatisation-ia', title: 'Chatbots et workflows intelligents' },
    ],
    []
  );

  const otherNavItems = useMemo(
    () => [
      { name: 'Portfolio', path: '/portfolio', title: 'Découvrez mes réalisations de sites web à Mons' },
      { name: 'Ma Méthode', path: '/methode', title: 'Mon processus de création de site internet, SEO & Automatisation' },
      { name: 'Contact', path: '/contact', title: 'Contactez-moi pour lancer votre projet digital' },
      { name: 'Blog', path: '/blog', title: 'Articles SEO et conseils web pour booster votre visibilité à Mons' },
    ],
    []
  );

  const supportDropdownItems = useMemo(
    () => [
      {
        name: 'Devenir Partenaire',
        path: '/partenaires',
        title: "Gagnez jusqu'à 25% de commission",
        icon: <Handshake className="w-5 h-5 text-purple-600" />,
      },
      {
        name: "Soutenir l'agence",
        path: '/nous-suivre',
        title: 'Suivez-nous sur les réseaux sociaux',
        icon: <Heart className="w-5 h-5 text-pink-500" />,
      },
    ],
    []
  );

  // ✅ Mobile : tous les services avec "Toutes les Solutions" en premier
  const mobileServicesItems = useMemo(() => {
    const allServices = [...servicesDropdownItems];
    // Mettre "Toutes les Solutions" en premier pour mobile
    const toutesLesSolutions = allServices.find((it) => it.path === '/services');
    const autresServices = allServices.filter((it) => it.path !== '/services');
    return toutesLesSolutions ? [toutesLesSolutions, ...autresServices] : autresServices;
  }, [servicesDropdownItems]);

  const isServicePath = pathname.startsWith('/services');
  const isSupportPath = ['/partenaires', '/nous-suivre'].includes(pathname);

  const closeMobile = useCallback(() => setIsMobileMenuOpen(false), []);

  // ✅ Lock scroll body
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // ✅ Scroll performant (1 seul listener, throttle via rAF)
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (!tickingRef.current) {
        tickingRef.current = true;

        requestAnimationFrame(() => {
          const scrolled = y > 10;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

          const last = lastScrollYRef.current;
          const visible = !(y > last && y > 50);
          setIsVisible((prev) => (prev !== visible ? visible : prev));

          lastScrollYRef.current = y;
          tickingRef.current = false;
        });
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ✅ reset dropdowns quand on ferme le menu mobile
  useEffect(() => {
    if (!isMobileMenuOpen) {
      setIsServicesOpen(false);
      setIsSupportOpen(false);
    }
  }, [isMobileMenuOpen]);

  // ✅ ferme le menu mobile quand on change de route
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // ✅ Animations "GPU-friendly" pour éviter le lag (pas de height:auto)
  const dropdownVariants = {
    closed: { opacity: 0, scaleY: 0.96, y: -4, transition: { duration: 0.16, ease } },
    open: { opacity: 1, scaleY: 1, y: 0, transition: { duration: 0.18, ease } },
  };

  const toggleServices = useCallback(() => {
    setIsServicesOpen((v) => !v);
    // optionnel: fermer l'autre pour éviter double paint
    setIsSupportOpen(false);
  }, []);

  const toggleSupport = useCallback(() => {
    setIsSupportOpen((v) => !v);
    setIsServicesOpen(false);
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -110 }}
      transition={{ duration: 0.2, ease }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? 'bg-slate-600/50 border-slate-500/20 md:backdrop-blur-3xl md:shadow-xl py-3'
          : 'bg-slate-500/30 border-white/10 md:backdrop-blur-xl py-5'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-3 group relative z-50"
            title="Retour à la page d'accueil Digitalova"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img
              src="https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/LogoDIGITALOVAico.ico"
              alt="Logo Digitalova"
              title="Logo Digitalova - Agence Web" 
              width={502}
              height={497}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="h-12 md:h-14 w-auto transition-transform hover:scale-105 drop-shadow-sm"
            />
          </Link>

          {/* Desktop Navigation (inchangé) */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full border border-white/30 shadow-sm ring-1 ring-white/40">
            {navItems.map((item) => (
              <React.Fragment key={item.path}>
                <Link
                  href={item.path}
                  title={item.title}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:text-purple-900 hover:bg-white/40 ${
                    pathname === item.path ? 'text-purple-800 bg-white/60 font-bold shadow-sm' : 'text-slate-800'
                  }`}
                >
                  {item.name}
                </Link>
                <div className="h-4 w-[1px] bg-black/80 mx-1"></div>
              </React.Fragment>
            ))}

            {/* Services Dropdown Desktop */}
            <div className="relative" onMouseEnter={() => setIsServicesOpen(true)} onMouseLeave={() => setIsServicesOpen(false)}>
              <button
                type="button"
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:text-purple-900 hover:bg-white/40 flex items-center gap-1 ${
                  isServicePath ? 'text-purple-800 bg-white/60 font-bold shadow-sm' : 'text-slate-800'
                }`}
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 left-0 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 py-3 min-w-[280px] overflow-hidden"
                  >
                    {servicesDropdownItems.map((item, index) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        title={item.title}
                        className="block px-5 py-3 hover:bg-purple-50 transition-colors group"
                      >
                        <div>
                          <div className="text-sm font-semibold text-slate-900 group-hover:text-purple-700">{item.name}</div>
                          <div className="text-xs text-slate-500">{item.title}</div>
                        </div>

                        {index < servicesDropdownItems.length - 1 && <div className="h-px bg-slate-200 mt-2" />}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {otherNavItems.map((item) => (
              <React.Fragment key={item.path}>
                <div className="h-4 w-[1px] bg-black/80 mx-1"></div>
                <Link
                  href={item.path}
                  title={item.title}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:text-purple-900 hover:bg-white/40 ${
                    pathname === item.path ? 'text-purple-800 bg-white/60 font-bold shadow-sm' : 'text-slate-800'
                  }`}
                >
                  {item.name}
                </Link>
              </React.Fragment>
            ))}

            {/* Support Dropdown Desktop */}
            <div className="h-4 w-[1px] bg-black/80 mx-1"></div>
            <div className="relative" onMouseEnter={() => setIsSupportOpen(true)} onMouseLeave={() => setIsSupportOpen(false)}>
              <button
                type="button"
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:text-purple-900 hover:bg-white/40 flex items-center gap-1 ${
                  isSupportPath ? 'text-purple-800 bg-white/60 font-bold shadow-sm' : 'text-slate-800'
                }`}
              >
                Soutenir Digitalova
                <ChevronDown className={`w-4 h-4 transition-transform ${isSupportOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isSupportOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 right-0 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200 py-3 min-w-[300px] overflow-hidden"
                  >
                    {supportDropdownItems.map((item, index) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        title={item.title}
                        className="block px-5 py-3 hover:bg-purple-50 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="p-2 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors">
                            {item.icon}
                          </span>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 group-hover:text-purple-700">{item.name}</div>
                            <div className="text-xs text-slate-500">{item.title}</div>
                          </div>
                        </div>
                        {index < supportDropdownItems.length - 1 && <div className="h-px bg-slate-200 mt-2" />}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="hidden md:block">
            <Link href="/contact" title="Remplir le formualaire de devis gratuit - Digitalova Agence Web Mons">
              <Button className="bg-slate-900/90 hover:bg-slate-900 backdrop-blur-sm text-white rounded-full px-6 shadow-xl shadow-purple-900/10 transition-all hover:scale-105 border border-white/10">
                Devis Gratuit
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="md:hidden flex flex-col items-center justify-center w-12 h-12 bg-slate-900 rounded-xl shadow-xl space-y-1.5 z-[100] touch-manipulation"
            style={{ touchAction: 'manipulation' }}
            aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMobileMenuOpen ? (
              <div className="relative w-6 h-6">
                <div className="absolute top-1/2 left-0 w-6 h-0.5 bg-white rotate-45"></div>
                <div className="absolute top-1/2 left-0 w-6 h-0.5 bg-white -rotate-45"></div>
              </div>
            ) : (
              <>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
                <div className="w-6 h-0.5 bg-white"></div>
              </>
            )}
          </button>
        </div>

        {/* =========================
            ✅ MOBILE MENU (FAST DROPDOWNS)
           ========================= */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.18, ease }}
              className="fixed top-[70px] left-0 right-0 p-4 md:hidden z-40 max-h-[calc(100vh-70px)] overflow-y-auto"
              style={{ willChange: 'transform, opacity' }}
            >
              {/* ✅ blur mobile très léger (et pas sur les sous menus) */}
              <div className="bg-white/95 rounded-3xl p-6 border border-white/40 shadow-2xl">
                {/* 1) Accueil */}
                {navItems.map((item) => (
                  <React.Fragment key={item.path}>
                    <Link
                      href={item.path}
                      onClick={closeMobile}
                      className={`block py-4 px-5 rounded-2xl text-lg font-semibold mb-1 transition-all ${
                        pathname === item.path ? 'text-purple-900 bg-purple-100/80' : 'text-slate-800 hover:bg-slate-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                    <div className="mx-5 h-px bg-purple-300/30 my-2"></div>
                  </React.Fragment>
                ))}

                {/* 2) ✅ Solutions */}
                <button
                  type="button"
                  onClick={toggleServices}
                  className={`w-full flex items-center justify-between py-4 px-5 rounded-2xl text-lg font-semibold transition-all touch-manipulation ${
                    isServicePath ? 'text-purple-900 bg-purple-100/80' : 'text-slate-800 hover:bg-slate-100'
                  }`}
                  style={{ touchAction: 'manipulation' }}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isServicesOpen && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={dropdownVariants}
                      className="origin-top transform-gpu"
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <div className="mt-2 mb-3 rounded-2xl border border-slate-200 bg-white">
                        {mobileServicesItems.map((item, idx) => (
                          <React.Fragment key={item.path}>
                            <Link
                              href={item.path}
                              onClick={closeMobile}
                              className={`block py-3 px-5 text-sm font-semibold transition-all hover:bg-purple-50 ${
                                pathname === item.path ? 'text-purple-900' : 'text-slate-700'
                              }`}
                            >
                              {item.name}
                              <div className="text-xs text-slate-500 font-medium mt-0.5">{item.title}</div>
                            </Link>
                            {idx < mobileServicesItems.length - 1 && <div className="mx-5 h-px bg-slate-200/70" />}
                          </React.Fragment>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mx-5 h-px bg-purple-300/30 my-2"></div>

                {/* 3) Portfolio / Ma Méthode / Contact */}
                {otherNavItems.map((item, index) => (
                  <React.Fragment key={item.path}>
                    <Link
                      href={item.path}
                      onClick={closeMobile}
                      className={`block py-4 px-5 rounded-2xl text-lg font-semibold mb-1 transition-all ${
                        pathname === item.path ? 'text-purple-900 bg-purple-100/80' : 'text-slate-800 hover:bg-slate-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                    {index < otherNavItems.length - 1 && <div className="mx-5 h-px bg-purple-300/30 my-2"></div>}
                  </React.Fragment>
                ))}

                <div className="mx-5 h-px bg-purple-300/30 my-2"></div>

                {/* 4) ✅ Soutenir Digitalova */}
                <button
                  type="button"
                  onClick={toggleSupport}
                  className={`w-full flex items-center justify-between py-4 px-5 rounded-2xl text-lg font-semibold transition-all touch-manipulation ${
                    isSupportPath ? 'text-purple-900 bg-purple-100/80' : 'text-slate-800 hover:bg-slate-100'
                  }`}
                  style={{ touchAction: 'manipulation' }}
                >
                  <span>Soutenir Digitalova</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${isSupportOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isSupportOpen && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={dropdownVariants}
                      className="origin-top transform-gpu"
                      style={{ willChange: 'transform, opacity' }}
                    >
                      <div className="mt-2 mb-3 rounded-2xl border border-slate-200 bg-white">
                        {supportDropdownItems.map((item, idx) => (
                          <React.Fragment key={item.path}>
                            <Link
                              href={item.path}
                              onClick={closeMobile}
                              className="block py-3 px-5 rounded-xl text-sm font-semibold transition-all text-slate-700 hover:bg-purple-50 flex items-center gap-3"
                            >
                              <span className="p-1.5 bg-purple-50 rounded-lg">{item.icon}</span>
                              <div>
                                <div className="text-slate-900">{item.name}</div>
                                <div className="text-xs text-slate-500 font-medium">{item.title}</div>
                              </div>
                            </Link>
                            {idx < supportDropdownItems.length - 1 && <div className="mx-5 h-px bg-slate-200/70" />}
                          </React.Fragment>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="h-px bg-slate-200/50 my-4"></div>

                <Link href="/contact" onClick={closeMobile}>
                  <Button className="w-full bg-slate-900 text-white py-7 rounded-2xl text-lg font-bold shadow-xl">
                    Demander un Devis
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;