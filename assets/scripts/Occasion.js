var VEHICULE = VEHICULE || {};

(function(VEHICULE) {

    var Auto = VEHICULE.Auto;


    function afficheAutos() {

    this.elList = document.querySelector('[data-js-list-autos]');
   
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
    }    
     
    let Occasion = function(marque, modele, annee, image, prix,
        prixReduit, couleur, nbKm, transmission) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.image = image;
        this.prix = prix;
        this.prixReduit = prixReduit;
        this.couleur = couleur;
        this.nbKm = nbKm;
        this.transmission = transmission;
    }
    
    Occasion.prototype = Object.create(Auto.prototype);
    
    Occasion.prototype.constructor = Occasion;

    Occasion.prototype.afficheAutos = afficheAutos;

    VEHICULE.Occasion = Occasion;
 
})(VEHICULE);