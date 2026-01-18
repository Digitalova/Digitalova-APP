#!/bin/bash

# Script de déploiement rapide pour Hostinger
# Usage: ./deploy-hostinger.sh

echo "🚀 Déploiement Digitalova sur Hostinger"
echo "========================================"
echo ""

# Vérifier que le build fonctionne localement
echo "📦 Vérification du build local..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Le build a échoué. Corrigez les erreurs avant de déployer."
    exit 1
fi

echo "✅ Build réussi !"
echo ""

# Liste des fichiers à uploader
echo "📤 Fichiers à uploader sur Hostinger :"
echo ""
echo "Dossiers :"
echo "  - app/"
echo "  - src/"
echo "  - lib/ (si présent)"
echo "  - public/"
echo ""
echo "Fichiers :"
echo "  - next.config.js"
echo "  - package.json"
echo "  - package-lock.json"
echo "  - jsconfig.json"
echo "  - tsconfig.json (si présent)"
echo "  - tailwind.config.js"
echo "  - postcss.config.js"
echo "  - .gitignore"
echo ""
echo "❌ À NE PAS uploader :"
echo "  - node_modules/"
echo "  - .next/"
echo "  - .env ou .env.local"
echo "  - _old_vite_project/"
echo "  - .git/"
echo ""
echo "📝 Sur le serveur Hostinger, exécutez :"
echo "  1. npm install --production"
echo "  2. npm run build"
echo "  3. Créer le fichier .env avec les variables d'environnement"
echo "  4. npm start"
echo ""
echo "📖 Consultez DEPLOIEMENT_HOSTINGER.md pour les instructions détaillées."
