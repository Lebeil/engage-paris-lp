# Configuration de l'environnement

Ce dossier contient les configurations et variables d'environnement nécessaires pour le projet Engage Paris.

## Fichier `env.js`

Le fichier `env.js` centralise les variables d'environnement utilisées dans l'application. Il contient principalement:

- `GOOGLE_SCRIPT_ID`: L'identifiant de déploiement du script Google Apps Script
- `SHEET_ID`: L'identifiant de la feuille Google Sheets
- `GOOGLE_SCRIPT_URL`: L'URL complète du script Google Apps (générée automatiquement)

## Modification des variables

Pour modifier les variables d'environnement:

1. Ouvrez le fichier `config/env.js`
2. Modifiez les valeurs selon vos besoins
3. Enregistrez le fichier

## Sécurité

**Attention**: Dans un environnement de production réel, il serait préférable de:

1. Utiliser un véritable fichier `.env` qui n'est pas commité dans le repo
2. Utiliser les variables d'environnement de votre hébergeur
3. S'assurer que les IDs sensibles ne sont pas exposés dans le code source

Ce fichier de configuration est fourni pour simplifier le développement et la démonstration. 