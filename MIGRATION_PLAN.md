# Plan de Migration Vite → Next.js (App Router)

## 📋 Vue d'ensemble

Migration complète du projet de Vite vers Next.js App Router pour l'hébergement sur Hostinger en tant qu'App Node.js.

---

## 🔄 Structure des Routes

### Routes actuelles (Vite/React Router) → Routes Next.js App Router

```
/                          → app/page.tsx
/services                  → app/services/page.tsx
/services/creation-site-web      → app/services/creation-site-web/page.tsx
/services/automatisation-ia      → app/services/automatisation-ia/page.tsx
/services/google-business        → app/services/google-business/page.tsx
/services/seo-referencement      → app/services/seo-referencement/page.tsx
/portfolio                 → app/portfolio/page.tsx
/methode                   → app/methode/page.tsx
/contact                   → app/contact/page.tsx
/nous-suivre               → app/nous-suivre/page.tsx
/mentions-legales          → app/mentions-legales/page.tsx
/rgpd                      → app/rgpd/page.tsx
/partenaires               → app/partenaires/page.tsx
```

---

## 📁 Nouveaux Fichiers à Créer

### 1. Structure de base Next.js
- `app/layout.tsx` - Layout racine avec Header, Footer, ScrollToTop, CallButton, CookieConsent
- `app/page.tsx` - Page d'accueil (migration de `src/pages/Home.jsx`)
- `app/globals.css` - Migration de `src/index.css`
- `app/favicon.ico` - Favicon (référencé depuis Supabase storage)

### 2. Pages principales
- `app/services/page.tsx`
- `app/portfolio/page.tsx`
- `app/methode/page.tsx`
- `app/contact/page.tsx`
- `app/nous-suivre/page.tsx`
- `app/mentions-legales/page.tsx`
- `app/rgpd/page.tsx`
- `app/partenaires/page.tsx`

### 3. Pages services
- `app/services/creation-site-web/page.tsx`
- `app/services/automatisation-ia/page.tsx`
- `app/services/google-business/page.tsx`
- `app/services/seo-referencement/page.tsx`

### 4. Configuration
- `next.config.js` - Configuration Next.js
- `next.config.mjs` (si nécessaire)
- `.env.local` (template pour les variables d'environnement)

### 5. Utilitaires Supabase
- `lib/supabase/client.js` - Client Supabase côté client (Next.js)
- `lib/supabase/server.js` - Client Supabase côté serveur (Next.js)

---

## 🔧 Modifications de Fichiers Existants

### package.json

**À supprimer :**
- `vite` et plugins Vite
- `react-router-dom`
- `react-helmet`

**À ajouter :**
- `next` (^14.x)
- `react` et `react-dom` (compatibles Next.js 14)
- `@supabase/auth-helpers-nextjs`
- `@supabase/supabase-js` (mise à jour si nécessaire)

**Scripts à modifier :**
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

### tailwind.config.js

**À modifier :**
```js
content: [
  './app/**/*.{js,jsx,ts,tsx}',
  './components/**/*.{js,jsx,ts,tsx}',
  './src/**/*.{js,jsx,ts,tsx}',
]
```

---

## 🔄 Conversions de Composants

### 1. Navigation (react-router-dom → next/link)

**Avant :**
```jsx
import { Link } from 'react-router-dom';
<Link to="/services">Services</Link>
```

**Après :**
```jsx
import Link from 'next/link';
<Link href="/services">Services</Link>
```

**Fichiers concernés :**
- `src/components/Header.jsx`
- Toutes les pages dans `src/pages/`
- Composants utilisant `<Link>` ou `useNavigate()`

### 2. Images (<img> → next/image)

**Avant :**
```jsx
<img 
  src="https://example.com/image.webp"
  alt="Description"
  width="1200"
  height="800"
/>
```

**Après :**
```jsx
import Image from 'next/image';

<Image
  src="https://example.com/image.webp"
  alt="Description"
  width={1200}
  height={800}
  priority={true} // pour images LCP
/>
```

**Fichiers concernés :**
- `src/pages/Home.jsx`
- `src/pages/Portfolio.jsx`
- `src/pages/services/*.jsx`
- Tous les composants utilisant `<img>`

### 3. SEO (react-helmet → metadata Next.js)

**Avant :**
```jsx
import { Helmet } from 'react-helmet';

<Helmet>
  <title>Mon titre</title>
  <meta name="description" content="Ma description" />
</Helmet>
```

**Après :**
```jsx
export const metadata = {
  title: 'Mon titre | Digitalova - Agence Web à Mons',
  description: 'Ma description optimisée pour le SEO local à Mons',
  openGraph: {
    title: 'Mon titre',
    description: 'Ma description',
    url: 'https://digitalova.be',
    siteName: 'Digitalova',
    locale: 'fr_BE',
    type: 'website',
  },
};
```

**Fichiers concernés :**
- Toutes les pages dans `src/pages/`
- Toutes les pages de services

### 4. Scripts et Meta Tags Globaux

**Avant :**
Dans `src/App.jsx` avec `<Helmet>`.

**Après :**
Dans `app/layout.tsx` avec `metadata` et JSON-LD via `<script>` dans le layout.

---

## 🔐 Configuration Supabase

### Variables d'environnement

**Créer `.env.local` :**
```env
NEXT_PUBLIC_SUPABASE_URL=https://mzeisxseqdcxwgyjpajm.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Client Supabase

**Créer `lib/supabase/client.js` :**
```js
import { createClient } from '@supabase/supabase-js';

export const createSupabaseClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
};
```

**Créer `lib/supabase/server.js` :**
```js
import { createServerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export const createSupabaseServerClient = async () => {
  const cookieStore = await cookies();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );
};
```

### Context Supabase

**Modifier `src/contexts/SupabaseAuthContext.jsx` :**
- Utiliser `createSupabaseClient()` au lieu de `customSupabaseClient`
- Adapter pour Next.js (composant client avec `'use client'`)

---

## 📄 Metadata SEO par Page

### app/page.tsx (Accueil)
```js
export const metadata = {
  title: 'Digitalova | Création de Sites Web & Automatisation IA à Mons',
  description: 'Agence web en Hainaut : création de sites vitrine, e-commerce, SEO et automatisations IA. Intervention à Mons et alentours. Devis gratuit.',
};
```

### app/services/page.tsx
```js
export const metadata = {
  title: 'Nos Services Web | Digitalova - Agence Web à Mons',
  description: 'Découvrez nos services de création de sites web, SEO, automatisation IA et Google Business Profile à Mons et dans le Hainaut.',
};
```

### app/services/creation-site-web/page.tsx
```js
export const metadata = {
  title: 'Création de Sites Web à Mons | Digitalova',
  description: 'Création de sites vitrine et e-commerce sur mesure à Mons. Design moderne, performance optimale, SEO intégré. Devis gratuit.',
};
```

### app/services/automatisation-ia/page.tsx
```js
export const metadata = {
  title: 'Automatisation IA à Mons | Chatbots & Workflows - Digitalova',
  description: 'Automatisez vos processus avec l\'IA à Mons : chatbots, workflows n8n, intégrations CRM. Gain de temps et efficacité garantis.',
};
```

### app/services/google-business/page.tsx
```js
export const metadata = {
  title: 'Google Business Profile à Mons | Optimisation Locale - Digitalova',
  description: 'Optimisez votre présence locale sur Google à Mons. Gestion de votre Google Business Profile, avis clients, visibilité locale.',
};
```

### app/services/seo-referencement/page.tsx
```js
export const metadata = {
  title: 'SEO & Référencement à Mons | Optimisation Web - Digitalova',
  description: 'Référencement naturel (SEO) à Mons et dans le Hainaut. Optimisation technique, contenu, backlinks. Augmentez votre visibilité sur Google.',
};
```

### app/portfolio/page.tsx
```js
export const metadata = {
  title: 'Portfolio | Réalisations Web à Mons - Digitalova',
  description: 'Découvrez nos réalisations de sites web à Mons : sites vitrine, e-commerce, projets sur mesure. Exemples concrets de notre expertise.',
};
```

### app/methode/page.tsx
```js
export const metadata = {
  title: 'Notre Méthode de Création Web | Digitalova Mons',
  description: 'Processus de création de sites web à Mons : découverte, design, développement, SEO, maintenance. Méthode éprouvée pour votre réussite.',
};
```

### app/contact/page.tsx
```js
export const metadata = {
  title: 'Contact | Devis Gratuit - Digitalova Agence Web Mons',
  description: 'Contactez Digitalova pour votre projet web à Mons. Devis gratuit, consultation personnalisée. Réponse sous 24h.',
};
```

### app/nous-suivre/page.tsx
```js
export const metadata = {
  title: 'Suivez-nous | Réseaux Sociaux Digitalova Mons',
  description: 'Suivez Digitalova sur Instagram, Facebook, TikTok et WhatsApp. Actualités, conseils web et inspirations à Mons.',
};
```

### app/mentions-legales/page.tsx
```js
export const metadata = {
  title: 'Mentions Légales | Digitalova',
  description: 'Mentions légales de Digitalova - Agence web à Mons.',
};
```

### app/rgpd/page.tsx
```js
export const metadata = {
  title: 'RGPD | Politique de Confidentialité - Digitalova',
  description: 'Politique de confidentialité et conformité RGPD de Digitalova - Agence web à Mons.',
};
```

### app/partenaires/page.tsx
```js
export const metadata = {
  title: 'Devenir Partenaire | Programme de Partenariat Digitalova',
  description: 'Devenez partenaire de Digitalova et gagnez jusqu\'à 25% de commission. Programme de partenariat pour professionnels à Mons.',
};
```

---

## 🎨 Composants à Adapter

### Composants avec 'use client'
Tous les composants utilisant des hooks React ou des interactions doivent avoir `'use client'` en première ligne :

- `src/components/Header.jsx`
- `src/components/CallButton.jsx`
- `src/components/CookieConsent.jsx`
- `src/components/FAQSection.jsx`
- `src/components/ScrollToTop.jsx`
- `src/components/WhatsAppButton.jsx`
- Toutes les pages (sauf layout.tsx qui reste serveur)
- Composants UI (button, dialog, etc.)

### Layout Principal (app/layout.tsx)
- Inclut Header, Footer, ScrollToTop, CallButton, CookieConsent
- Contient les JSON-LD structurés (Organization, Website, LocalBusiness)
- Meta tags globaux (geo, alternates, theme-color)
- Favicon et preconnects

---

## 🗑️ Fichiers à Supprimer/Conserver

### À supprimer :
- `vite.config.js`
- `index.html`
- `src/main.jsx`
- `src/App.jsx`
- `plugins/` (plugins Vite spécifiques)

### À conserver :
- `src/components/` (à adapter)
- `src/lib/utils.js`
- `tailwind.config.js` (à modifier)
- `postcss.config.js`
- `public/` (robots.txt, sitemap.xml, llms.txt)

---

## 🚀 Étapes de Migration

1. **Installation des dépendances Next.js**
2. **Création de la structure app/**
3. **Migration du layout principal**
4. **Migration des pages une par une**
5. **Conversion des composants (Link, Image)**
6. **Configuration Supabase**
7. **Ajout des metadata SEO**
8. **Tests et ajustements**

---

## ⚠️ Points d'Attention

1. **Images externes (Supabase)** : Configurer `next.config.js` avec `images.remotePatterns` pour autoriser les images depuis Supabase
2. **Scripts externes** : Google Analytics, Turnstile doivent être chargés dans le layout ou via `next/script`
3. **Lazy loading** : Remplacer `React.lazy()` par `dynamic()` de Next.js si nécessaire
4. **ScrollToTop** : Utiliser `usePathname()` et `useEffect()` de Next.js
5. **Animations Framer Motion** : Ajouter `'use client'` aux composants qui les utilisent

---

## 📝 Checklist de Migration

- [ ] package.json mis à jour
- [ ] next.config.js créé
- [ ] Structure app/ créée
- [ ] Layout principal migré
- [ ] Toutes les pages migrées
- [ ] Composants convertis (Link, Image)
- [ ] Supabase configuré
- [ ] Metadata SEO ajoutée à toutes les pages
- [ ] Variables d'environnement configurées
- [ ] Tests de navigation
- [ ] Tests de build (`npm run build`)
- [ ] Vérification du SEO
