# 📋 Résumé de la Migration Vite → Next.js

## ✅ Fichiers Créés/Modifiés (Complétés)

### Configuration
- ✅ `package.json` - Mis à jour avec Next.js 14, suppression Vite/React Router/React Helmet
- ✅ `next.config.js` - Configuration avec images et alias
- ✅ `tailwind.config.js` - Mis à jour pour app/
- ✅ `jsconfig.json` - Alias @ pour les imports

### Structure App Router
- ✅ `app/layout.tsx` - Layout principal avec metadata SEO, JSON-LD, Google Analytics
- ✅ `app/globals.css` - Migration de `src/index.css`

### Supabase
- ✅ `lib/supabase/client.js` - Client Supabase côté client
- ✅ `lib/supabase/server.js` - Client Supabase côté serveur

### Composants Adaptés
- ✅ `src/components/ScrollToTop.jsx` - Adapté pour Next.js (usePathname)
- ✅ `src/components/CallButton.jsx` - Ajouté 'use client'
- ✅ `src/components/CookieConsent.jsx` - Ajouté 'use client'

### Documentation
- ✅ `MIGRATION_PLAN.md` - Plan complet de migration
- ✅ `MODIFICATIONS_FICHIERS.md` - Détails des modifications par fichier
- ✅ `MODIFICATIONS_COMPOSANTS.md` - Guide pour adapter Header et Footer

---

## ⏳ À Faire (Étapes Restantes)

### 1. Adapter Header et Footer (PRIORITÉ)

**`src/components/Header.jsx` :**
- [ ] Ajouter `'use client'` en première ligne
- [ ] Remplacer `react-router-dom` par `next/link` et `usePathname`
- [ ] Remplacer tous les `to="/..."` par `href="/..."`
- [ ] Remplacer `location.pathname` par `pathname` (depuis `usePathname()`)

**`src/components/Footer.jsx` :**
- [ ] Ajouter `'use client'` en première ligne
- [ ] Remplacer `react-router-dom` par `next/link`
- [ ] Remplacer tous les `to="/..."` par `href="/..."`

**Voir `MODIFICATIONS_COMPOSANTS.md` pour les détails.**

### 2. Migrer les Pages vers app/

**Page d'accueil :**
- [ ] Créer `app/page.tsx` (migrer `src/pages/Home.jsx`)
- [ ] Ajouter `export const metadata` avec SEO local Mons
- [ ] Convertir `<img>` en `next/image` pour optimiser LCP
- [ ] Remplacer `react-router-dom` par `next/link`
- [ ] Supprimer `<Helmet>` (remplacé par metadata)

**Pages principales :**
- [ ] `app/services/page.tsx` (depuis `src/pages/Services.jsx`)
- [ ] `app/portfolio/page.tsx` (depuis `src/pages/Portfolio.jsx`)
- [ ] `app/methode/page.tsx` (depuis `src/pages/Method.jsx`)
- [ ] `app/contact/page.tsx` (depuis `src/pages/Contact.jsx`)
- [ ] `app/nous-suivre/page.tsx` (depuis `src/pages/Social.jsx`)
- [ ] `app/mentions-legales/page.tsx` (depuis `src/pages/Legal.jsx`)
- [ ] `app/rgpd/page.tsx` (depuis `src/pages/RGPD.jsx`)
- [ ] `app/partenaires/page.tsx` (depuis `src/pages/Partners.jsx`)

**Pages services :**
- [ ] `app/services/creation-site-web/page.tsx` (depuis `src/pages/services/WebDevelopment.jsx`)
- [ ] `app/services/automatisation-ia/page.tsx` (depuis `src/pages/services/AIAutomation.jsx`)
- [ ] `app/services/google-business/page.tsx` (depuis `src/pages/services/GoogleBusiness.jsx`)
- [ ] `app/services/seo-referencement/page.tsx` (depuis `src/pages/services/SEOOptimization.jsx`)

### 3. Adapter les Autres Composants

**Composants à marquer avec `'use client'` :**
- [ ] `src/components/BackgroundBlobs.jsx`
- [ ] `src/components/FAQSection.jsx`
- [ ] `src/components/WhatsAppButton.jsx`
- [ ] `src/components/WelcomeMessage.jsx`
- [ ] `src/components/CallToAction.jsx`
- [ ] Tous les composants UI (`src/components/ui/*.jsx`)

**Composants utilisant react-router-dom :**
- [ ] Remplacer tous les `Link` et `useNavigate` par Next.js équivalents

### 4. Context Supabase

**`src/contexts/SupabaseAuthContext.jsx` :**
- [ ] Ajouter `'use client'`
- [ ] Remplacer `customSupabaseClient` par `createSupabaseClient()` de `lib/supabase/client.js`

### 5. Variables d'Environnement

**Créer `.env.local` :**
```env
NEXT_PUBLIC_SUPABASE_URL=https://mzeisxseqdcxwgyjpajm.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 6. Metadata SEO

**Pour chaque page dans `app/`, ajouter :**

```jsx
export const metadata = {
  title: 'Titre | Digitalova - Agence Web à Mons',
  description: 'Description optimisée pour le SEO local à Mons',
  // ... autres options
};
```

**Exemples dans `MODIFICATIONS_FICHIERS.md`.**

### 7. Images (<img> → next/image)

**Pour optimiser le LCP :**
- [ ] Remplacer les `<img>` critiques par `next/image`
- [ ] Utiliser `priority={true}` pour les images LCP
- [ ] Utiliser `loading="lazy"` par défaut

**Exemples dans `MODIFICATIONS_FICHIERS.md`.**

### 8. Tests et Nettoyage

- [ ] Tester la navigation entre les pages
- [ ] Vérifier que les images se chargent correctement
- [ ] Tester le build : `npm run build`
- [ ] Vérifier le SEO (metadata, JSON-LD)
- [ ] Supprimer les fichiers Vite (après migration complète) :
  - `vite.config.js`
  - `index.html`
  - `src/main.jsx`
  - `src/App.jsx`
  - `plugins/` (plugins Vite spécifiques)

---

## 📝 Ordre de Migration Recommandé

1. ✅ Configuration de base (FAIT)
2. ✅ Layout principal (FAIT)
3. ⏳ **Adapter Header et Footer (NEXT)**
4. ⏳ Créer `app/page.tsx` (page d'accueil)
5. ⏳ Migrer les autres pages une par une
6. ⏳ Adapter les composants restants
7. ⏳ Tests et nettoyage

---

## 🔧 Commandes Utiles

```bash
# Installation des dépendances
npm install

# Développement
npm run dev

# Build de production
npm run build

# Démarrer en production
npm start

# Linter
npm run lint
```

---

## 📚 Documentation Référence

- `MIGRATION_PLAN.md` - Plan détaillé de migration
- `MODIFICATIONS_FICHIERS.md` - Détails des modifications par fichier
- `MODIFICATIONS_COMPOSANTS.md` - Guide pour Header et Footer

---

## ⚠️ Points d'Attention

1. **Images externes** : Configurées dans `next.config.js` avec `remotePatterns`
2. **Scripts externes** : Google Analytics dans `app/layout.tsx` avec `next/script`
3. **Composants interactifs** : Tous doivent avoir `'use client'`
4. **Metadata** : Utiliser `export const metadata` pour les pages serveur
5. **Navigation** : Utiliser `next/link` au lieu de `react-router-dom`
