# 📝 Modifications de Fichiers - Migration Vite → Next.js

## ✅ Fichiers Déjà Créés/Modifiés

### Configuration
- ✅ `package.json` - Mis à jour avec Next.js et dépendances
- ✅ `next.config.js` - Créé avec configuration images et alias
- ✅ `tailwind.config.js` - Mis à jour pour inclure app/
- ✅ `jsconfig.json` - Créé pour l'alias @

### Structure App Router
- ✅ `app/globals.css` - Migration de `src/index.css`
- ✅ `lib/supabase/client.js` - Client Supabase côté client
- ✅ `lib/supabase/server.js` - Client Supabase côté serveur

---

## 📋 Fichiers à Créer

### 1. Layout Principal (`app/layout.tsx`)

Créer un nouveau fichier `app/layout.tsx` qui remplace `src/App.jsx` :

**Points clés :**
- Inclure Header, Footer, ScrollToTop, CallButton, CookieConsent
- Metadata globale avec JSON-LD (Organization, Website, LocalBusiness)
- Scripts Google Analytics
- Preconnects pour Supabase

### 2. Page d'Accueil (`app/page.tsx`)

Migrer `src/pages/Home.jsx` vers `app/page.tsx` :

**Modifications :**
- Remplacer `react-router-dom` par `next/link`
- Remplacer `<Helmet>` par `export const metadata`
- Convertir `<img>` en `next/image`
- Ajouter `'use client'` si nécessaire (composants interactifs)

### 3. Pages Principales

Créer les dossiers et fichiers suivants :
- `app/services/page.tsx` (depuis `src/pages/Services.jsx`)
- `app/portfolio/page.tsx` (depuis `src/pages/Portfolio.jsx`)
- `app/methode/page.tsx` (depuis `src/pages/Method.jsx`)
- `app/contact/page.tsx` (depuis `src/pages/Contact.jsx`)
- `app/nous-suivre/page.tsx` (depuis `src/pages/Social.jsx`)
- `app/mentions-legales/page.tsx` (depuis `src/pages/Legal.jsx`)
- `app/rgpd/page.tsx` (depuis `src/pages/RGPD.jsx`)
- `app/partenaires/page.tsx` (depuis `src/pages/Partners.jsx`)

### 4. Pages Services

Créer les dossiers et fichiers :
- `app/services/creation-site-web/page.tsx` (depuis `src/pages/services/WebDevelopment.jsx`)
- `app/services/automatisation-ia/page.tsx` (depuis `src/pages/services/AIAutomation.jsx`)
- `app/services/google-business/page.tsx` (depuis `src/pages/services/GoogleBusiness.jsx`)
- `app/services/seo-referencement/page.tsx` (depuis `src/pages/services/SEOOptimization.jsx`)

### 5. Composants Client

**Tous les composants utilisant des hooks ou interactions doivent avoir `'use client'` en première ligne :**

- `src/components/Header.jsx` - Ajouter `'use client'`, remplacer `Link` de react-router par `next/link`, `useLocation` par `usePathname` de Next.js
- `src/components/Footer.jsx` - Ajouter `'use client'`, remplacer `Link` par `next/link`
- `src/components/CallButton.jsx` - Ajouter `'use client'`
- `src/components/CookieConsent.jsx` - Ajouter `'use client'`
- `src/components/ScrollToTop.jsx` - Réécrire pour utiliser `usePathname()` de Next.js
- `src/components/FAQSection.jsx` - Ajouter `'use client'`
- `src/components/BackgroundBlobs.jsx` - Ajouter `'use client'`
- `src/components/WhatsAppButton.jsx` - Ajouter `'use client'`
- Tous les composants UI (`src/components/ui/*.jsx`)

### 6. Context Supabase

**`src/contexts/SupabaseAuthContext.jsx`** :
- Ajouter `'use client'`
- Remplacer `customSupabaseClient` par `createSupabaseClient()` de `lib/supabase/client.js`

### 7. Utilitaires

**`src/lib/customSupabaseClient.js`** :
- Supprimer ou adapter pour utiliser `lib/supabase/client.js`

---

## 🔄 Modifications par Type de Fichier

### A. Navigation (react-router-dom → next/link)

**Avant :**
```jsx
import { Link, useNavigate, useLocation } from 'react-router-dom';

<Link to="/services">Services</Link>
const navigate = useNavigate();
const location = useLocation();
```

**Après :**
```jsx
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

<Link href="/services">Services</Link>
const router = useRouter();
const pathname = usePathname();
```

### B. Images (<img> → next/image)

**Avant :**
```jsx
<img 
  src="https://example.com/image.webp"
  alt="Description"
  width="1200"
  height="800"
  loading="lazy"
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
  priority={true} // Pour images LCP, sinon par défaut lazy
  className="w-full h-auto"
/>
```

### C. SEO (react-helmet → metadata Next.js)

**Avant :**
```jsx
import { Helmet } from 'react-helmet';

<Helmet>
  <title>Mon titre</title>
  <meta name="description" content="Ma description" />
</Helmet>
```

**Après (pour pages serveur) :**
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

**Pour pages client avec métadonnées dynamiques :**
```jsx
'use client';
import { useEffect } from 'react';

useEffect(() => {
  document.title = 'Mon titre | Digitalova';
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Ma description');
  }
}, []);
```

### D. ScrollToTop

**Avant (`src/components/ScrollToTop.jsx`) :**
```jsx
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
```

**Après :**
```jsx
'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTop = () => {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
```

---

## 📄 Exemples de Metadata SEO par Page

### app/page.tsx (Accueil)
```javascript
export const metadata = {
  title: 'Digitalova | Création de Sites Web & Automatisation IA à Mons',
  description: 'Agence web en Hainaut : création de sites vitrine, e-commerce, SEO et automatisations IA. Intervention à Mons et alentours. Devis gratuit.',
  alternates: {
    canonical: 'https://digitalova.be/',
    languages: {
      'fr-BE': 'https://digitalova.be/',
    },
  },
};
```

### app/services/page.tsx
```javascript
export const metadata = {
  title: 'Nos Services Web | Digitalova - Agence Web à Mons',
  description: 'Découvrez nos services de création de sites web, SEO, automatisation IA et Google Business Profile à Mons et dans le Hainaut.',
};
```

### app/services/creation-site-web/page.tsx
```javascript
export const metadata = {
  title: 'Création de Sites Web à Mons | Digitalova',
  description: 'Création de sites vitrine et e-commerce sur mesure à Mons. Design moderne, performance optimale, SEO intégré. Devis gratuit.',
};
```

### app/contact/page.tsx
```javascript
export const metadata = {
  title: 'Contact | Devis Gratuit - Digitalova Agence Web Mons',
  description: 'Contactez Digitalova pour votre projet web à Mons. Devis gratuit, consultation personnalisée. Réponse sous 24h.',
};
```

---

## 🗑️ Fichiers à Supprimer (après migration complète)

- `vite.config.js`
- `index.html`
- `src/main.jsx`
- `src/App.jsx`
- `plugins/` (plugins Vite spécifiques)
- `src/lib/customSupabaseClient.js` (remplacé par lib/supabase/client.js)

---

## 🔧 Variables d'Environnement

**Créer `.env.local` :**
```env
NEXT_PUBLIC_SUPABASE_URL=https://mzeisxseqdcxwgyjpajm.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16ZWlzeHNlcWRjeHdneWpwYWptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyMDkwOTAsImV4cCI6MjA3NTc4NTA5MH0._c59QJ0SlDBVZXCeNFrzDB-Y1rrEUjGYmv4p0xheJXM
```

**Note :** Les variables doivent commencer par `NEXT_PUBLIC_` pour être accessibles côté client.

---

## 📦 Ordre de Migration Recommandé

1. ✅ Configuration (package.json, next.config.js, tailwind.config.js)
2. ✅ Structure de base (app/globals.css, lib/supabase/)
3. ⏳ Layout principal (app/layout.tsx)
4. ⏳ Composants de base (Header, Footer, ScrollToTop avec adaptations)
5. ⏳ Page d'accueil (app/page.tsx)
6. ⏳ Pages principales une par une
7. ⏳ Pages de services
8. ⏳ Tests et ajustements finaux

---

## ⚠️ Points d'Attention

1. **Images externes** : Configurées dans `next.config.js` avec `remotePatterns`
2. **Scripts externes** : Google Analytics doit être chargé dans `app/layout.tsx` avec `next/script`
3. **Lazy loading** : Remplacer `React.lazy()` par `dynamic()` de Next.js si nécessaire
4. **Composants interactifs** : Tous doivent avoir `'use client'` en première ligne
5. **Metadata dynamique** : Utiliser `useEffect` + `document.title` pour les pages client, ou `generateMetadata` pour les pages serveur

---

## 📚 Ressources

- [Next.js App Router Documentation](https://nextjs.org/docs/app)
- [Next.js Image Optimization](https://nextjs.org/docs/pages/api-reference/components/image)
- [Supabase with Next.js](https://supabase.com/docs/guides/auth/auth-helpers/nextjs)
