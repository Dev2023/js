var VEHICULE = VEHICULE || {};

(function(VEHICULE) {

    var Auto = VEHICULE.Auto;

    function afficheAutos() {

        console.log(this.couleurs)

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
                            <span >${this.prixReduit} $</span>
                            <span class="auto__original-price">${this.prix} $</span>
                        </h4>` 
                        :
                        `<h4 class="auto__price">${this.prix} $</h4>`
                    }
                    <div class="auto__colors">
                        <h4 class="auto__color">Couleurs :</h4>
                        <div class="auto__colors-wrapper">`;

    this.couleurs.map(function(couleur) {
        autoDOM += `<div class="auto__color-pellet" style="background-color: ${couleur}"></div>`;
    }).join('');

    autoDOM += `        </div>
                    </div>
                </div>
            </article>`;
    
        this.elList.insertAdjacentHTML('beforeend', autoDOM);
    }    

    let Neuve = function(marque, modele, annee, image, prix,
        prixReduit, couleurs) {
        this.marque = marque;
        this.modele = modele;
        this.annee = annee;
        this.image = image;
        this.prix = prix;
        this.prixReduit = prixReduit;
        this.couleurs = couleurs;
        
    }

    Neuve.prototype = Object.create(Auto.prototype);

    Neuve.prototype.constructor = Neuve;

    Neuve.prototype.afficheAutos = afficheAutos;

    VEHICULE.Neuve = Neuve;
 
})(VEHICULE);