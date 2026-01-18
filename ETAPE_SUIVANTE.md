# 📋 Prochaines Étapes - Migration Vite → Next.js

## ✅ Ce qui a été complété

### Configuration ✅
- ✅ `package.json` - Next.js 14 configuré
- ✅ `next.config.js` - Configuration images et alias
- ✅ `tailwind.config.js` - Mis à jour pour app/
- ✅ `jsconfig.json` - Alias @ configuré

### Structure Next.js ✅
- ✅ `app/layout.tsx` - Layout avec metadata SEO, JSON-LD, Google Analytics
- ✅ `app/globals.css` - CSS migré

### Supabase ✅
- ✅ `lib/supabase/client.js` - Client côté client
- ✅ `lib/supabase/server.js` - Client côté serveur

### Composants Adaptés ✅
- ✅ `src/components/Header.jsx` - **COMPLÈTEMENT ADAPTÉ** pour Next.js
  - Ajouté `'use client'`
  - Remplacé `react-router-dom` par `next/link`
  - Remplacé `useLocation()` par `usePathname()`
  - Tous les `to="/..."` remplacés par `href="/..."`
  - Tous les `location.pathname` remplacés par `pathname`

- ✅ `src/components/Footer.jsx` - **COMPLÈTEMENT ADAPTÉ** pour Next.js
  - Ajouté `'use client'`
  - Remplacé `react-router-dom` par `next/link`
  - Tous les `to="/..."` remplacés par `href="/..."`

- ✅ `src/components/ScrollToTop.jsx` - Adapté pour Next.js
- ✅ `src/components/CallButton.jsx` - Ajouté `'use client'`
- ✅ `src/components/CookieConsent.jsx` - Ajouté `'use client'`
- ✅ `src/components/BackgroundBlobs.jsx` - Ajouté `'use client'`

---

## ⏳ Prochaine Étape : Créer app/page.tsx

### Instructions pour migrer `src/pages/Home.jsx` → `app/page.tsx`

**Le fichier `Home.jsx` fait 1196 lignes. Voici les modifications à faire :**

#### 1. **Ajouter `'use client'` en première ligne**
```jsx
'use client';

import React, { Suspense, useEffect, useState } from 'react';
// ... autres imports
```

#### 2. **Supprimer les imports inutiles :**
```jsx
// ❌ À supprimer
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

// ✅ À remplacer par
import Link from 'next/link';
```

#### 3. **Supprimer le bloc `<Helmet>` (lignes 377-427)**
Le `<Helmet>` n'est plus nécessaire car les metadata sont dans `app/layout.tsx`.
Mais vous pouvez ajouter des metadata spécifiques à la page d'accueil :

**Créer un nouveau fichier `app/page.tsx` avec metadata :**
```jsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Digitalova | Création de Sites Web & Automatisation IA à Mons',
  description: 'Agence web en Hainaut : création de sites vitrine, e-commerce, SEO et automatisations IA. Intervention à Mons et alentours. Devis gratuit.',
  alternates: {
    canonical: 'https://digitalova.be/',
  },
};

// Le composant Home sera importé ici
'use client';
// ... reste du code
```

#### 4. **Remplacer tous les `<Link to="...">` par `<Link href="...">`**
- Ligne 453 : `<Link to="/contact">` → `<Link href="/contact">`
- Ligne 463 : `<Link to="/portfolio">` → `<Link href="/portfolio">`
- Ligne 655 : `<Link to="/services">` → `<Link href="/services">`
- Ligne 733 : `<Link to="/methode">` → `<Link href="/methode">`
- Ligne 791 : `<Link to={project.url}>` → `<Link href={project.url}>`
- Ligne 839 : `<Link to="/portfolio">` → `<Link href="/portfolio">`
- Ligne 955, 1031, 1102 : `<Link to="/contact">` → `<Link href="/contact">`
- Ligne 1173 : `<Link to="/contact">` → `<Link href="/contact">`

#### 5. **Convertir les images `<img>` en `next/image` (optionnel mais recommandé)**
- Ligne 162 : Image dans MobileHeroRedesign
- Ligne 485 : Image hero principale (LCP) - **IMPORTANT pour optimiser LCP**

**Exemple de conversion :**
```jsx
// Avant
<img
  src="https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/IMagePourPortfoliog.webp"
  alt="Description"
  width="1200"
  height="800"
  decoding="sync"
  fetchPriority="high"
/>

// Après
import Image from 'next/image';

<Image
  src="https://mzeisxseqdcxwgyjpajm.supabase.co/storage/v1/object/public/Brand/WebP/IMagePourPortfoliog.webp"
  alt="Description"
  width={1200}
  height={800}
  priority={true} // Pour images LCP
  className="w-full h-auto object-cover"
/>
```

#### 6. **Structure finale `app/page.tsx`**

**Option A : Métadonnées séparées (recommandé pour Next.js 14)**
```jsx
import type { Metadata } from 'next';
import Home from '@/components/HomeClient'; // Composant client séparé

export const metadata: Metadata = {
  title: 'Digitalova | Création de Sites Web & Automatisation IA à Mons',
  description: 'Agence web en Hainaut : création de sites vitrine, e-commerce, SEO et automatisations IA.',
};

export default function Page() {
  return <Home />;
}
```

**Option B : Tout dans un fichier (si nécessaire)**
```jsx
'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Pour optimiser LCP
// ... autres imports

// ... tous les composants intermédiaires (ToolsMarqueeFullWidth, MobileHeroRedesign, etc.)

const Home = () => {
  // ... tout le code existant de Home.jsx
  // MAIS :
  // - Supprimer le bloc <Helmet>
  // - Remplacer tous les <Link to> par <Link href>
  // - Optionnel : convertir les images en next/image
};

export default Home;
```

---

## 📝 Checklist pour app/page.tsx

- [ ] Copier le contenu de `src/pages/Home.jsx`
- [ ] Ajouter `'use client'` en première ligne
- [ ] Remplacer `react-router-dom` par `next/link`
- [ ] Remplacer tous les `to="/..."` par `href="/..."`
- [ ] Supprimer le bloc `<Helmet>` (lignes 377-427)
- [ ] Ajouter `export const metadata` (si séparé du composant client)
- [ ] (Optionnel) Convertir les images `<img>` en `next/image`
- [ ] Tester la page (`npm run dev`)

---

## 🔧 Commandes pour tester

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Vérifier les erreurs
npm run lint

# Build de production
npm run build
```

---

## ⚠️ Important

1. **Les images externes** sont déjà configurées dans `next.config.js`
2. **Les metadata globales** sont dans `app/layout.tsx`
3. **Le JSON-LD** est dans `app/layout.tsx` (plus besoin dans chaque page)
4. **Header et Footer** sont déjà adaptés et fonctionnels

---

## 📚 Fichiers de référence

- `MIGRATION_PLAN.md` - Plan complet de migration
- `MODIFICATIONS_FICHIERS.md` - Détails des modifications
- `MODIFICATIONS_COMPOSANTS.md` - Guide pour les composants
- `RESUME_MIGRATION.md` - Résumé et checklist
