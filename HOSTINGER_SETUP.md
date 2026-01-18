# 📋 Guide de Déploiement sur Hostinger

## ✅ Prérequis

- Compte Hostinger avec Node.js activé
- Accès SSH/FTP à votre compte
- Node.js 18+ installé sur le serveur Hostinger

## 🔧 Configuration sur Hostinger

### 1. Variables d'environnement

Dans le panneau Hostinger, créez un fichier `.env` (ou configurez via l'interface) avec :

```env
NEXT_PUBLIC_SUPABASE_URL=https://mzeisxseqdcxwgyjpajm.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16ZWlzeHNlcWRjeHdneWpwYWptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyMDkwOTAsImV4cCI6MjA3NTc4NTA5MH0._c59QJ0SlDBVZXCeNFrzDB-Y1rrEUjGYmv4p0xheJXM
NODE_ENV=production
PORT=3000
```

**Note** : Hostinger peut utiliser un port différent (ex: 8080). Vérifiez dans votre panneau d'administration.

### 2. Upload des fichiers

Via FTP/SSH, téléchargez tous les fichiers du projet **sauf** :
- `.next/` (sera généré lors du build)
- `node_modules/` (sera installé via npm install)
- `.env.local` (créez-le directement sur le serveur)

### 3. Installation des dépendances

Sur le serveur Hostinger, via SSH :

```bash
npm install --production
```

### 4. Build de l'application

```bash
npm run build
```

### 5. Démarrage du serveur

Hostinger utilise généralement un gestionnaire de processus (PM2) ou lance directement :

```bash
npm start
```

**Si Hostinger utilise un port spécifique**, modifiez le fichier `.env` avec :
```env
PORT=8080  # ou le port indiqué par Hostinger
```

## 📁 Structure des fichiers sur Hostinger

```
votre-domaine/
├── app/                  ✅ Uploader
├── lib/                  ✅ Uploader
├── public/               ✅ Uploader
├── src/                  ✅ Uploader (composants utilisés par app/)
├── next.config.js        ✅ Uploader
├── package.json          ✅ Uploader
├── package-lock.json     ✅ Uploader
├── jsconfig.json         ✅ Uploader
├── tsconfig.json         ✅ Uploader
├── tailwind.config.js    ✅ Uploader
├── postcss.config.js     ✅ Uploader
├── .env                  ⚠️ Créer sur le serveur (ne pas uploader depuis local)
└── .gitignore            ✅ Uploader
```

## ⚙️ Configuration Hostinger

### Option 1 : Application Node.js (Recommandé)

1. Dans le panneau Hostinger, allez dans **Node.js Applications**
2. Créez une nouvelle application Node.js
3. Point de démarrage : `npm start` ou `node_modules/.bin/next start`
4. Dossier racine : `/` (racine du projet)
5. Version Node.js : 18.x ou 20.x
6. Port : Vérifiez le port assigné par Hostinger

### Option 2 : Via SSH

Si vous avez accès SSH :

```bash
# Se connecter au serveur
ssh votre-utilisateur@votre-domaine.com

# Aller dans le dossier du projet
cd public_html  # ou le dossier indiqué par Hostinger

# Installer les dépendances
npm install --production

# Builder l'application
npm run build

# Démarrer avec PM2 (si disponible)
pm2 start npm --name "digitalova" -- start
pm2 save
pm2 startup
```

## 🔍 Vérifications après déploiement

1. **Toutes les pages fonctionnent** :
   - `/` (accueil)
   - `/services`
   - `/portfolio`
   - `/methode`
   - `/contact`
   - `/partenaires`
   - `/nous-suivre`
   - `/mentions-legales`
   - `/rgpd`
   - `/services/creation-site-web`
   - `/services/seo-referencement`
   - `/services/google-business`
   - `/services/automatisation-ia`

2. **Images et assets chargent correctement**
3. **Formulaire de contact fonctionne** (Supabase)
4. **Pas d'erreurs dans la console du navigateur**

## 🐛 Dépannage

### Port non configuré

Si vous obtenez une erreur de port, créez/modifiez `.env` :
```env
PORT=8080  # Remplacez par le port Hostinger
```

### Build échoue

Vérifiez :
- Version Node.js (doit être 18+)
- `npm install` s'est bien exécuté
- Tous les fichiers sont uploadés

### Erreurs 404

Vérifiez que :
- Tous les fichiers `page.jsx` sont présents
- La structure de dossiers `app/` est correcte
- `.next/` a été généré après le build

## 📞 Support

En cas de problème, vérifiez :
- Les logs dans le panneau Hostinger
- La console du navigateur
- Les logs Node.js via SSH
