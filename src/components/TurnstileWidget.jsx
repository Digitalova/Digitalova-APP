'use client';

import React, { useEffect, useRef, useState } from 'react';

/**
 * Composant Turnstile anti-spam de Cloudflare
 * Évite les erreurs d'hydratation React en ne rendant qu'après le montage client
 */
const TurnstileWidget = ({ 
  sitekey = '0x4AAAAAACJYRS0Pfd1Nn_0i', 
  theme = 'dark',
  onSuccess,
  className = ''
}) => {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // Marquer comme monté uniquement côté client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const scriptId = 'cf-turnstile-script';
    let script = document.getElementById(scriptId);

    const renderWidget = () => {
      if (window.turnstile && containerRef.current && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey,
          theme,
          callback: onSuccess,
        });
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.onload = renderWidget;
      document.body.appendChild(script);
    } else if (window.turnstile) {
      renderWidget();
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (e) {
          // Ignore cleanup errors
        }
        widgetIdRef.current = null;
      }
    };
  }, [isMounted, sitekey, theme, onSuccess]);

  // Ne rien rendre côté serveur pour éviter les erreurs d'hydratation
  if (!isMounted) {
    return <div className={`h-[65px] ${className}`} />;
  }

  return <div ref={containerRef} className={className} />;
};

// Fonction utilitaire pour obtenir la réponse Turnstile
export const getTurnstileResponse = () => {
  if (typeof window !== 'undefined' && window.turnstile) {
    return window.turnstile.getResponse();
  }
  return null;
};

// Fonction utilitaire pour réinitialiser Turnstile
export const resetTurnstile = () => {
  if (typeof window !== 'undefined' && window.turnstile) {
    window.turnstile.reset();
  }
};

export default TurnstileWidget;
