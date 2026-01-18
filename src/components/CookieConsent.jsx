'use client';

import React, { useEffect, useState } from "react";
import { X, Cookie } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent) return;

    // Affiche uniquement après scroll (ex: 160px)
    const onScroll = () => {
      if (window.scrollY > 160) {
        setShowBanner(true);
        window.removeEventListener("scroll", onScroll);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const handleClose = () => {
    localStorage.setItem("cookieConsent", "dismissed");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 28, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-20 left-2 right-2 sm:bottom-4 sm:left-auto sm:right-4 z-[70]"
        >
          <div
            className="
              bg-white/95 backdrop-blur border border-gray-200 shadow-lg rounded-full
              flex items-center gap-2
              px-2.5 py-1.5
              sm:px-3.5 sm:py-2
              sm:max-w-xl
            "
          >
            {/* Icon (plus petit sur mobile) */}
            <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-100 shrink-0">
              <Cookie className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-700" />
            </div>

            {/* Texte (très compact sur mobile) */}
            <p className="text-[11px] sm:text-sm text-gray-700 leading-tight flex-1">
              <span className="hidden sm:inline">
                Ce site utilise des cookies essentiels et analytiques.
              </span>
              <span className="sm:hidden">Cookies essentiels.</span>
              <a
                href="/rgpd"
                className="ml-2 font-semibold underline underline-offset-2 text-slate-900 hover:text-purple-700"
              >
                RGPD
              </a>
            </p>

            {/* Bouton accept (plus petit sur mobile) */}
            <button
              onClick={handleAccept}
              className="
                shrink-0 rounded-full font-bold text-white hover:shadow-md transition
                text-[11px] px-2.5 py-1.5
                sm:text-sm sm:px-4 sm:py-2
              "
              style={{ backgroundColor: "#0F172A" }}
            >
              OK
            </button>

            {/* Close */}
            <button
              onClick={handleClose}
              className="
                shrink-0 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition
                p-1.5 sm:p-2
              "
              aria-label="Fermer"
              title="Fermer"
            >
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
