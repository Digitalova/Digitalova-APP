'use client';

import { useState, useEffect } from 'react';

/**
 * Hook pour détecter si on est sur mobile
 * Sur mobile : animations d'entrée simplifiées, pas de whileInView
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
 * - Desktop : animation whileInView complète
 * - Mobile : animation d'entrée simple (fade-in), pas de whileInView
 */
export function getScrollAnimationProps(isMobile, { 
  initial = { opacity: 0, y: 20 }, 
  animate = { opacity: 1, y: 0 },
  transition = { duration: 0.5 },
  delay = 0 
} = {}) {
  if (isMobile) {
    // Mobile : animation d'entrée simple, pas de whileInView
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.3, delay: delay * 0.5 },
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

/**
 * Composant wrapper pour simplifier l'usage
 */
export const mobileSimpleTransition = { duration: 0.3 };
export const desktopTransition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };
