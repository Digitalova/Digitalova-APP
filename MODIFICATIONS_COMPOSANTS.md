# 🔄 Modifications des Composants pour Next.js

## Header.jsx et Footer.jsx

### Modifications requises :

1. **Ajouter `'use client'` en première ligne**
2. **Remplacer les imports :**
   ```jsx
   // Avant
   import { Link, useLocation } from 'react-router-dom';
   
   // Après
   'use client';
   import Link from 'next/link';
   import { usePathname } from 'next/navigation';
   ```

3. **Remplacer `useLocation()` par `usePathname()` :**
   ```jsx
   // Avant
   const location = useLocation();
   const pathname = location.pathname;
   
   // Après
   const pathname = usePathname();
   ```

4. **Remplacer `to` par `href` dans tous les `<Link>` :**
   ```jsx
   // Avant
   <Link to="/services">Services</Link>
   
   // Après
   <Link href="/services">Services</Link>
   ```

5. **Dans Header.jsx ligne 161, convertir `<img>` en `next/image` (optionnel pour le logo) :**
   ```jsx
   // Avant
   <img src="..." alt="Logo" width={502} height={497} />
   
   // Après (optionnel, peut rester <img> pour les icônes)
   // Garder <img> pour les icônes si nécessaire
   ```

## Exemple de transformation Header.jsx

```jsx
// Lignes 1-2
'use client';

import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// ... autres imports

const Header = () => {
  // ... états
  
  // Ligne 17 : Remplacer
  const pathname = usePathname(); // Au lieu de useLocation()
  
  // Ligne 73 : Remplacer
  const isServicePath = pathname.startsWith('/services');
  const isSupportPath = ['/partenaires', '/nous-suivre'].includes(pathname);
  
  // Ligne 123 : Remplacer
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]); // Au lieu de [location.pathname]
  
  // Tous les <Link to="..."> deviennent <Link href="...">
  // Exemple ligne 155-170
  <Link href="/" className="..."> // Au lieu de to="/"
  
  // Ligne 177, 234, 342, 381, 404, 444, 465 : to → href
  // Ligne 180, 237, 345, 384, 407 : location.pathname → pathname
}

export default Header;
```

## Exemple de transformation Footer.jsx

```jsx
// Ligne 1
'use client';

import React, { useEffect, useId, useState } from 'react';
import Link from 'next/link';
// ... autres imports

const Footer = () => {
  // Tous les <Link to="..."> deviennent <Link href="...">
  // Exemples :
  // Ligne 126, 129, 132, 135, 138, 147, 150, 153, 156, 250, 253, 265, 268
  <Link href="/" className="..."> // Au lieu de to="/"
}

export default Footer;
```

## BackgroundBlobs.jsx

Ajouter `'use client'` en première ligne si le composant utilise des hooks ou des interactions.

## FAQSection.jsx

Ajouter `'use client'` en première ligne.

## Composants UI (src/components/ui/*.jsx)

Ajouter `'use client'` à tous les composants qui utilisent des hooks React ou des interactions utilisateur.
