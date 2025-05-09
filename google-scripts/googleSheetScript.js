/**
 * Script Google Apps pour recevoir les données du formulaire d'inscription
 * et les ajouter à la feuille Google Sheets
 */

// ID de la feuille Google Sheets (défini via les variables d'environnement)
// Cet ID doit correspondre à la valeur de NEXT_PUBLIC_SHEET_ID dans .env.local
const SHEET_ID = "1Z8613PFyR3iGWUk65vEFuFt379E8kursvg6M26wFkP8";

// Nom de la feuille où les données seront stockées
const SHEET_NAME = "Inscriptions";

/**
 * Point d'entrée pour les requêtes POST du serveur web
 * Cette fonction est appelée lorsque votre script est déployé en tant que service web
 */
function doPost(e) {
  try {
    // Récupérer les données envoyées depuis le formulaire
    const data = e.parameter;
    
    // Log des données reçues pour le débogage
    Logger.log("Données reçues: " + JSON.stringify(data));
    
    // Valider que toutes les données requises sont présentes
    if (!data.name || !data.email || !data.company || !data.title) {
      Logger.log("Erreur: Données manquantes");
      return ContentService
        .createTextOutput(JSON.stringify({ success: false, error: "Données manquantes" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Option 1: Utiliser le spreadsheet actif (celui où le script est attaché)
    let ss;
    try {
      ss = SpreadsheetApp.getActiveSpreadsheet();
      Logger.log("Utilisation du spreadsheet actif");
    } catch (error) {
      // Option 2: Si le script est autonome, ouvrir le spreadsheet par ID
      Logger.log("Tentative d'ouverture du spreadsheet par ID: " + error.toString());
      ss = SpreadsheetApp.openById(SHEET_ID);
    }
    
    let sheet = ss.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      Logger.log("Création d'une nouvelle feuille: " + SHEET_NAME);
      sheet = ss.insertSheet(SHEET_NAME);
      // Ajouter les en-têtes de colonne
      sheet.appendRow(["Timestamp", "Nom", "Email", "Entreprise", "Fonction"]);
      // Formater les en-têtes en gras
      sheet.getRange(1, 1, 1, 5).setFontWeight("bold");
      // Ajuster la largeur des colonnes
      sheet.autoResizeColumns(1, 5);
    }
    
    // Ajouter une nouvelle ligne avec les données du formulaire
    sheet.appendRow([
      new Date(), // Timestamp actuel
      data.name,
      data.email,
      data.company,
      data.title
    ]);
    
    Logger.log("Données enregistrées avec succès");
    
    // Renvoyer une réponse de succès
    return ContentService
      .createTextOutput(JSON.stringify({ success: true, message: "Inscription enregistrée avec succès" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Gérer les erreurs et renvoyer une réponse d'erreur
    Logger.log("Erreur: " + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Les fonctions ci-dessous sont exportées mais pas utilisées dans ce contexte
// Elles sont conservées pour le débogage et les tests manuels
 
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      status: "online",
      message: "Le service d'inscription est en ligne. Utilisez une requête POST pour soumettre des données."
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

 
function testScript() {
  // Simuler les données reçues d'un formulaire
  const testData = {
    parameter: {
      name: "Test Utilisateur",
      email: "test@example.com",
      company: "Entreprise Test",
      title: "Testeur",
      timestamp: new Date().toISOString()
    }
  };
  
  // Appeler la fonction doPost avec les données de test
  const result = doPost(testData);
  
  // Afficher le résultat dans les logs
  Logger.log(result.getContent());
}
