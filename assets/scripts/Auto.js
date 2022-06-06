var VEHICULE = VEHICULE || {};

(function() {

    // Méthodes publiques
    

    // Création du constructeur Auto
    let Auto = function() {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.prixReduit = prixReduit;
        this.prix = prix;
        this.nbKm = nbKm;
        this.transmission = transmission;
        this.couleur = couleur;
        this.image = image;
    }

    // Prototype et ensemble de methodes publics
    Auto.prototype = {
        constructor: Auto
    }

    // Affectation  et création de la clé Auto de l'object VEHICULE au const Auto
    VEHICULE.Auto = Auto;

 
})(VEHICULE); //moi