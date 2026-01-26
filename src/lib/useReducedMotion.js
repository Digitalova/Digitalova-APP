'use client';

import { useState, useEffect } from 'react';

/**
 * Hook pour détecter si on est sur mobile ou si l'utilisateur préfère réduire les mouvements
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      setIsMobile(mobile || reduceMotion);
    };

    checkMobile();

    const mobileQuery = window.matchMedia('(max-width: 768px)');
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    mobileQuery.addEventListener('change', checkMobile);
    motionQuery.addEventListener('change', checkMobile);

    return () => {
      mobileQuery.removeEventListener('change', checkMobile);
      motionQuery.removeEventListener('change', checkMobile);
    };
  }, []);

  return isMobile;
}

/**
 * Retourne les props d'animation optimisés
 * - Desktop : animation whileInView complète (au scroll)
 * - Mobile : animation d'entrée simple (fade-in uniquement, pas de translation)
 * 
 * IMPORTANT: Sur mobile, on NE DOIT PAS utiliser whileInView car ça cause le scintillement
 */
export function getScrollAnimationProps(isMobile, { 
  initial = { opacity: 0, y: 20 }, 
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  delay = 0 
} = {}) {
  if (isMobile) {
    // Mobile : animation d'entrée simple au montage (pas de whileInView)
    // On ignore les translations (x, y) pour éviter les décalages
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.4, delay: Math.min(delay, 0.3) },
    };
  }
  
  // Desktop : animation whileInView complète
  return {
    initial,
    whileInView: animate,
    viewport: { once: true, margin: '-80px' },
    transition: { ...transition, delay },
  };
}
