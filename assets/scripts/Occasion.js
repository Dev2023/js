var VEHICULE = VEHICULE || {};

(function(VEHICULE) {

    let Auto = VEHICULE.Auto;

    // Methodes publiques


    // Affichage
    function afficheAutos() {
        this.elList = document.querySelector('[data-js-list-autos]')    
    
        let autoDOM = `
                <article class="auto">
                    <div class="auto__img-wrapper">
                        <img src="${this.image}" class="auto__img">
                    </div>
                    <div class="auto__text-wrapper">
                        <h2 class="auto__brand">${this.marque}</h2>
                        <h3 class="auto__model">${this.modele}</h3>
                        <p class="auto__year">${this.annee}</p>
                        ${this.prixReduit ?
                            `<h4 class="auto__price">
                                <span>${this.prixReduit} $</span>
                                <span class="auto__original-price">${this.prix} $</span>
                            </h4>` 
                            :
                            `<h4 class="auto__price">${this.prix} $</h4>`
                        }
                        <div class="auto__colors">
                            <h4 class="auto__color">Couleur :</h4>
                            <div class="auto__color-pellet" style="background-color: ${this.couleur}"></div>
                        </div>
                        <p class="auto__km">${this.nbKm} km</p>
                        <p class="auto__transmission">${this.transmission}</p>
                    </div>
                </article>`;
        this.elList.insertAdjacentHTML('beforeend', autoDOM);
        console.log(this.elList.autoDom);
    }

    // Constructeur Occasion 
let Occasion = function(marque, modele, annee, image, 
        prix, prixReduit, couleur, nbKm, transmission) {
    Auto.call(this, marque, modele, annee, image, 
        prix, prixReduit, couleur, nbKm, transmission);                    

}

// Heritage du constructeur de Auto 
Occasion.prototype = Object.create(Auto.prototype);

// Initialisation du constructeur de Occasion pour qu'il pointe sur le prototype Occasion
Occasion.prototype.constructor = Occasion;

//Ensemble de methodes pub dans le prototype ajoutés aux meth heritées
Occasion.prototype.afficheAutos = afficheAutos;

// Afectation de la cle Occasion de l'objet VEHICULE au constructeur Occasion
VEHICULE.Occasion = Occasion;
 
})(VEHICULE);