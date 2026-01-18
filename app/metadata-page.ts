// Metadata pour la page d'accueil
// Note: Pour les composants clients ('use client'), on ne peut pas exporter metadata directement
// Les metadata sont déjà définies dans app/layout.tsx pour la page d'accueil
// Cette page est documentaire - les metadata sont dans layout.tsx

import type { Metadata } from 'next';

// Les metadata pour la page d'accueil sont dans app/layout.tsx
// car app/page.jsx est un composant client ('use client')
// 
// Si vous voulez des metadata spécifiques à la page d'accueil,
// vous pouvez les ajouter dans layout.tsx dans la section metadata

export const homeMetadata: Metadata = {
  title: 'Création de Sites Web à Mons - DIGITALOVA',
  description: "Besoin d'un site web ? Je crée votre site internet, blog ou boutique en ligne. Design adapté aux mobiles et gestion simplifiée. Devis gratuit sans engagement à Mons.",
  alternates: {
    canonical: 'https://digitalova.be/',
  },
};
