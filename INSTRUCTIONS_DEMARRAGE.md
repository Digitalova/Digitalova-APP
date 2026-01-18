# 🚀 Instructions de Démarrage - Next.js

## ⚠️ IMPORTANT : Arrêter Vite d'abord !

Le serveur **Vite** tourne encore. Vous devez :

### 1. Arrêter Vite immédiatement

Dans le terminal où vous voyez les erreurs, appuyez sur :
```
Ctrl + C
```

### 2. Lancer Next.js

```powershell
npm run dev
```

### 3. Vérifier que Next.js démarre

Vous devriez voir dans le terminal :
```
▲ Next.js 14.x.x
- Local:        http://localhost:3000
- Ready in XXX ms
```

❌ **PAS** :
```
VITE v4.x.x  ready in XXX ms
```

## 📋 Si ça ne fonctionne pas

### Nettoyer les caches :

```powershell
# Supprimer le cache Next.js
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue

# Supprimer le cache Vite (ne devrait plus être utilisé)
Remove-Item -Recurse -Force node_modules/.vite -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules/.cache -ErrorAction SilentlyContinue

# Lancer Next.js
npm run dev
```

### Vérifier le processus sur le port 3000 :

```powershell
netstat -ano | findstr :3000
```

Si un processus utilise le port, fermez-le ou changez le port dans `package.json` :

```json
{
  "scripts": {
    "dev": "next dev -p 3001"
  }
}
```

## ✅ Vérifications

Une fois Next.js lancé :
1. ✅ Le terminal affiche "Next.js" (pas "VITE")
2. ✅ Le navigateur charge correctement
3. ✅ Pas d'erreurs 404 pour les fichiers CSS Vite
4. ✅ La page d'accueil s'affiche complètement

## 📝 Note

Le fichier `index.html` a été renommé en `index.html.backup` car Next.js n'utilise pas ce fichier (il génère le HTML automatiquement).
