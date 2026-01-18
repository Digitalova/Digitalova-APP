# 🚀 Guide de Déploiement - Digitalova.be sur Hostinger

## 📋 Prérequis

- ✅ Compte Hostinger avec Node.js activé
- ✅ Domaine `digitalova.be` configuré sur Hostinger
- ✅ Accès SSH ou File Manager dans le panneau Hostinger
- ✅ Node.js 18+ disponible sur le serveur

---

## 🔧 Étape 1 : Préparation Locale

### 1.1 Vérifier que le build fonctionne

```bash
npm run build
```

Si le build réussit, vous êtes prêt pour le déploiement.

### 1.2 Créer un fichier `.env.production` (optionnel, pour référence)

```env
NEXT_PUBLIC_SUPABASE_URL=https://mzeisxseqdcxwgyjpajm.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16ZWlzeHNlcWRjeHdneWpwYWptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyMDkwOTAsImV4cCI6MjA3NTc4NTA5MH0._c59QJ0SlDBVZXCeNFrzDB-Y1rrEUjGYmv4p0xheJXM
NODE_ENV=production
PORT=3000
```

**⚠️ Ne pas commiter ce fichier !** Il sert uniquement de référence.

---

## 📤 Étape 2 : Upload des Fichiers sur Hostinger

### 2.1 Fichiers à uploader (via FTP/File Manager)

**✅ À uploader :**
```
app/                    (tous les fichiers)
src/                    (composants et lib)
lib/                    (si présent)
public/                 (assets statiques)
next.config.js
package.json
package-lock.json
jsconfig.json
tsconfig.json           (si présent)
tailwind.config.js
postcss.config.js
.gitignore
```

**❌ À NE PAS uploader :**
```
node_modules/           (sera installé sur le serveur)
.next/                 (sera généré lors du build)
.env.local            (créer directement sur le serveur)
.env                   (créer directement sur le serveur)
_old_vite_project/     (fichiers obsolètes)
.git/                  (dossier Git)
*.log                  (fichiers de logs)
```

### 2.2 Structure finale sur Hostinger

```
public_html/                    (ou le dossier racine indiqué par Hostinger)
├── app/
│   ├── layout.tsx
│   ├── page.jsx
│   ├── globals.css
│   └── [autres pages]/
├── src/
│   ├── components/
│   └── lib/
├── public/
├── next.config.js
├── package.json
├── jsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── .env                        (à créer sur le serveur)
```

---

## ⚙️ Étape 3 : Configuration sur Hostinger

### 3.1 Créer le fichier `.env` sur le serveur

**Via File Manager ou SSH**, créez un fichier `.env` à la racine du projet avec :

```env
NEXT_PUBLIC_SUPABASE_URL=https://mzeisxseqdcxwgyjpajm.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16ZWlzeHNlcWRjeHdneWpwYWptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyMDkwOTAsImV4cCI6MjA3NTc4NTA5MH0._c59QJ0SlDBVZXCeNFrzDB-Y1rrEUjGYmv4p0xheJXM
NODE_ENV=production
PORT=3000
```

**⚠️ Important :** Hostinger peut utiliser un port différent (ex: 8080, 3001). Vérifiez dans votre panneau d'administration Node.js le port assigné et ajustez `PORT` en conséquence.

### 3.2 Configuration via le Panneau Hostinger

#### Option A : Application Node.js (Recommandé)

1. **Accédez au panneau Hostinger** → **Node.js Applications**
2. **Créez une nouvelle application** :
   - **Nom** : `digitalova`
   - **Dossier racine** : `/` (ou le chemin vers votre projet)
   - **Version Node.js** : `18.x` ou `20.x`
   - **Point de démarrage** : `npm start`
   - **Port** : Notez le port assigné (ex: 3000, 8080)
3. **Variables d'environnement** :
   - Ajoutez les variables dans l'interface ou créez le fichier `.env` manuellement
4. **Démarrage automatique** : Activez si disponible

#### Option B : Via SSH (Si vous avez accès)

```bash
# 1. Se connecter au serveur
ssh votre-utilisateur@digitalova.be

# 2. Aller dans le dossier du projet
cd public_html  # ou le dossier indiqué par Hostinger

# 3. Installer les dépendances
npm install --production

# 4. Builder l'application
npm run build

# 5. Démarrer avec PM2 (si disponible)
pm2 start npm --name "digitalova" -- start
pm2 save
pm2 startup
```

---

## 🚀 Étape 4 : Installation et Build

### 4.1 Via le Panneau Hostinger (Node.js App)

1. Dans **Node.js Applications**, cliquez sur votre application
2. Cliquez sur **Terminal** ou **Console**
3. Exécutez les commandes suivantes :

```bash
# Installer les dépendances
npm install --production

# Builder l'application
npm run build
```

### 4.2 Vérifier le build

Le build doit se terminer avec :
```
✓ Compiled successfully
✓ Generating static pages (16/16)
```

### 4.3 Démarrer l'application

Dans le panneau Hostinger, démarrez l'application Node.js ou exécutez :

```bash
npm start
```

---

## 🌐 Étape 5 : Configuration du Domaine

### 5.1 Pointage du domaine

1. **Dans le panneau Hostinger** → **Domaines**
2. **Assurez-vous que `digitalova.be` pointe vers votre hébergement**
3. **DNS** : Vérifiez que les enregistrements DNS sont corrects :
   - `A` record pointant vers l'IP du serveur
   - `CNAME` pour `www.digitalova.be` si nécessaire

### 5.2 Configuration Next.js pour le domaine

Le fichier `next.config.js` est déjà configuré. Si vous devez ajouter un domaine personnalisé, ajoutez :

```js
const nextConfig = {
  // ... configuration existante
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Domain',
            value: 'digitalova.be',
          },
        ],
      },
    ];
  },
};
```

---

## ✅ Étape 6 : Vérifications Post-Déploiement

### 6.1 Tester toutes les pages

Visitez et vérifiez que chaque page fonctionne :

- ✅ `https://digitalova.be/` (accueil)
- ✅ `https://digitalova.be/services`
- ✅ `https://digitalova.be/portfolio`
- ✅ `https://digitalova.be/methode`
- ✅ `https://digitalova.be/contact`
- ✅ `https://digitalova.be/partenaires`
- ✅ `https://digitalova.be/nous-suivre`
- ✅ `https://digitalova.be/mentions-legales`
- ✅ `https://digitalova.be/rgpd`
- ✅ `https://digitalova.be/services/creation-site-web`
- ✅ `https://digitalova.be/services/seo-referencement`
- ✅ `https://digitalova.be/services/google-business`
- ✅ `https://digitalova.be/services/automatisation-ia`

### 6.2 Vérifier les fonctionnalités

- ✅ **Images** : Toutes les images se chargent correctement
- ✅ **Formulaires** : Le formulaire de contact fonctionne (Supabase)
- ✅ **Navigation** : Tous les liens fonctionnent
- ✅ **SEO** : Les métadonnées sont présentes (inspecter le code source)
- ✅ **Console** : Aucune erreur JavaScript dans la console du navigateur

### 6.3 Performance

- ✅ **Lighthouse** : Testez avec Google Lighthouse
- ✅ **Vitesse** : Les pages se chargent rapidement
- ✅ **Mobile** : Le site est responsive

---

## 🐛 Dépannage

### Erreur : Port non configuré

**Symptôme** : L'application ne démarre pas ou erreur de port.

**Solution** :
1. Vérifiez le port assigné dans le panneau Hostinger Node.js
2. Modifiez `.env` :
   ```env
   PORT=8080  # Remplacez par le port Hostinger
   ```
3. Redémarrez l'application

### Erreur : Build échoue

**Symptôme** : `npm run build` échoue.

**Solutions** :
- Vérifiez la version Node.js (doit être 18+)
- Vérifiez que `npm install` s'est bien exécuté
- Vérifiez que tous les fichiers sont uploadés
- Consultez les logs d'erreur dans le terminal

### Erreur : 404 sur les pages

**Symptôme** : Les pages retournent 404.

**Solutions** :
- Vérifiez que le dossier `.next/` a été généré après le build
- Vérifiez que tous les fichiers `page.jsx` sont présents
- Vérifiez la structure des dossiers `app/`
- Redémarrez l'application Node.js

### Erreur : Variables d'environnement non trouvées

**Symptôme** : Erreurs Supabase ou variables non définies.

**Solutions** :
- Vérifiez que le fichier `.env` existe à la racine
- Vérifiez que les variables commencent par `NEXT_PUBLIC_` pour le client
- Redémarrez l'application après modification de `.env`

### Erreur : Images ne se chargent pas

**Symptôme** : Les images Supabase ne s'affichent pas.

**Solutions** :
- Vérifiez que `next.config.js` contient les `remotePatterns` pour Supabase
- Vérifiez que les URLs d'images sont correctes
- Vérifiez la console du navigateur pour les erreurs CORS

---

## 🔄 Mises à Jour Futures

### Pour mettre à jour le site

1. **Modifiez les fichiers localement**
2. **Testez avec `npm run dev`**
3. **Build local** : `npm run build` (vérifier qu'il fonctionne)
4. **Upload uniquement les fichiers modifiés** sur Hostinger
5. **Sur le serveur** :
   ```bash
   npm install --production  # Si de nouvelles dépendances
   npm run build
   # Redémarrer l'application
   ```

### Script de déploiement automatique (optionnel)

Si vous utilisez Git, vous pouvez configurer un déploiement automatique via GitHub Actions ou un hook Git sur Hostinger.

---

## 📞 Support

### Logs à consulter

1. **Panneau Hostinger** → **Node.js Applications** → **Logs**
2. **Console du navigateur** (F12) pour les erreurs client
3. **SSH** : `pm2 logs digitalova` (si PM2 est utilisé)

### Contacts

- **Hostinger Support** : Via le panneau d'administration
- **Documentation Next.js** : https://nextjs.org/docs/deployment

---

## ✅ Checklist Finale

- [ ] Tous les fichiers sont uploadés
- [ ] Le fichier `.env` est créé avec les bonnes variables
- [ ] `npm install` s'est exécuté sans erreur
- [ ] `npm run build` s'est exécuté avec succès
- [ ] L'application Node.js est démarrée
- [ ] Le domaine `digitalova.be` pointe vers le serveur
- [ ] Toutes les pages fonctionnent
- [ ] Les formulaires fonctionnent (Supabase)
- [ ] Les images se chargent correctement
- [ ] Aucune erreur dans la console du navigateur
- [ ] Le site est accessible en HTTPS

---

**🎉 Félicitations ! Votre site Digitalova est maintenant en ligne sur digitalova.be !**
