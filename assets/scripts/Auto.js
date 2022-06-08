var VEHICULE = VEHICULE || {};

(function() {

// Méthodes publiques


 // Création du constructeur Auto
 var Auto = function(marque, modele, annee, image, prix, prixReduit, nbKm, transmission, couleur) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.prixReduit = prixReduit;
    this.prix = prix;
    this.nbKm = nbKm;
    this.transmission = transmission;
    this.couleur = couleur;
    this.image = image;
    this.elList;
}
    Auto.prototype = {
        constructor: Auto
    }
    
    VEHICULE.Auto = Auto;

})(VEHICULE);