# Guide de déploiement mis à jour du script Google Apps Script

Ce guide vous explique comment déployer correctement le script Google Apps Script pour que votre formulaire d'inscription envoie les données à Google Sheets.

## Problèmes identifiés et solutions

Nous avons identifié plusieurs problèmes potentiels qui peuvent empêcher les données d'être enregistrées dans votre Google Sheet:

1. **Script commenté ou désactivé**: Le script était entièrement commenté dans le fichier, il a été décommenté.
2. **Erreur de syntaxe**: Une parenthèse mal placée a été corrigée.
3. **Autorisations insuffisantes**: Le script a besoin des bonnes autorisations pour accéder à la feuille de calcul.
4. **Erreur d'URL**: L'URL du script dans le composant React contenait une duplication.

## Étape 1 : Accéder à l'éditeur de script Apps Script

1. Ouvrez votre feuille Google Sheets (`https://docs.google.com/spreadsheets/d/1Z8613PFyR3iGWUk65vEFuFt379E8kursvg6M26wFkP8/edit`)
2. Dans la barre de menu, cliquez sur **Extensions** > **Apps Script**
3. Un nouvel onglet s'ouvrira avec l'éditeur de script Google Apps Script

## Étape 2 : Créer le script corrigé

1. Dans l'éditeur, supprimez tout le contenu existant
2. Copiez-collez tout le code du fichier `googleSheetScript.js` que nous avons mis à jour
3. Cliquez sur **Fichier** > **Enregistrer** pour sauvegarder le script

## Étape 3 : Attacher le script à votre feuille (IMPORTANT)

Cette étape est cruciale pour que le script puisse accéder à votre Google Sheet:

1. Dans l'éditeur Apps Script, cliquez sur le menu **Projet** puis sur **Paramètres**
2. Vérifiez que le script est bien lié à votre spreadsheet. Si ce n'est pas le cas, vous devrez:
   - Copier l'ID de votre spreadsheet dans la constante `SHEET_ID` du script
   - Changer la méthode d'accès pour utiliser `SpreadsheetApp.openById(SHEET_ID)` au lieu de `getActiveSpreadsheet()`

## Étape 4 : Tester le script

1. Dans l'éditeur, sélectionnez la fonction `testScript` dans le menu déroulant en haut
2. Cliquez sur le bouton **Exécuter** (l'icône de lecture ▶️)
3. Acceptez toutes les autorisations demandées
4. Vérifiez les logs (menu **Affichage** > **Logs**) pour voir si l'exécution a réussi
5. Vérifiez votre Google Sheet pour confirmer qu'une nouvelle feuille "Inscriptions" a été créée avec une ligne de test

## Étape 5 : Déployer le script en tant que service web

1. Dans l'éditeur de script, cliquez sur **Déployer** > **Nouveau déploiement**
2. Pour le type de déploiement, sélectionnez **Application web**
3. Configurez les options:
   - Description: "Service d'inscription Engage Paris"
   - Exécuter en tant que: "Moi" (votre compte Google)
   - Qui a accès: "Tous, même anonyme" (pour que votre formulaire public puisse y accéder)
4. Cliquez sur **Déployer**
5. Google générera une URL sous la forme `https://script.google.com/macros/s/VOTRE_ID_DE_DEPLOIEMENT/exec`
6. Vérifiez que l'ID généré correspond à celui que vous utilisez dans votre application React

## Étape 6 : Vérifier la configuration React

1. Dans votre application React, assurez-vous que l'URL du script est correcte:
   ```typescript
   const scriptUrl = "https://script.google.com/macros/s/AKfycbygDKLlaYvWRXXNPnp__aAuNDfbn-_BPyThok59RrZ6HvHDgChjw5bV997lcsgpJa1x/exec";
   ```
2. Testez le formulaire en soumettant des données de test
3. Vérifiez votre Google Sheet pour voir si les données sont correctement enregistrées

## Dépannage avancé

Si les données ne sont toujours pas reçues après ces étapes:

1. **Vérifiez les logs de script**:
   - Après avoir soumis le formulaire, ouvrez l'éditeur Apps Script
   - Allez dans **Affichage** > **Execution log** pour voir les erreurs
   
2. **Testez l'URL du script directement**:
   - Ouvrez l'URL du script déployé dans un navigateur
   - Vous devriez voir un message indiquant que le service est en ligne
   
3. **Vérifiez les paramètres de sécurité**:
   - Dans l'éditeur Apps Script, allez dans **Paramètres du projet**
   - Assurez-vous que "Exécuter en tant que" est défini sur votre compte
   - Si vous avez récemment modifié le script, vous devrez peut-être créer un nouveau déploiement

4. **Problèmes de CORS**:
   - Notre implémentation utilise `mode: 'no-cors'` ce qui fait que les réponses d'erreur du script ne sont pas visibles dans la console
   - Pour déboguer, vous pouvez temporairement modifier le script pour qu'il accepte les requêtes CORS

## Ressources supplémentaires

- [Documentation officielle de Google Apps Script](https://developers.google.com/apps-script/guides/web)
- [Dépannage des déploiements Apps Script](https://developers.google.com/apps-script/guides/web#debugging)
- [Guide pour les autorisations d'Apps Script](https://developers.google.com/apps-script/guides/services/authorization) 