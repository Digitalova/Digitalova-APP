# ⚡ Déploiement Rapide - Digitalova.be

## 🎯 Résumé en 5 étapes

### 1️⃣ Upload des fichiers
Via FTP/File Manager Hostinger, uploader :
- `app/`, `src/`, `lib/`, `public/`
- `next.config.js`, `package.json`, `package-lock.json`
- `jsconfig.json`, `tailwind.config.js`, `postcss.config.js`

### 2️⃣ Créer `.env` sur le serveur
```env
NEXT_PUBLIC_SUPABASE_URL=https://mzeisxseqdcxwgyjpajm.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16ZWlzeHNlcWRjeHdneWpwYWptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjAyMDkwOTAsImV4cCI6MjA3NTc4NTA5MH0._c59QJ0SlDBVZXCeNFrzDB-Y1rrEUjGYmv4p0xheJXM
NODE_ENV=production
PORT=3000
```

### 3️⃣ Installer et builder
```bash
npm install --production
npm run build
```

### 4️⃣ Démarrer l'application
Dans le panneau Hostinger → Node.js Applications → Démarrer

### 5️⃣ Vérifier
Visitez `https://digitalova.be` et testez toutes les pages.

---

📖 **Guide complet** : Voir `DEPLOIEMENT_HOSTINGER.md`
