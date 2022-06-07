(function(VEHICULE) {

    /* Objets */
    let Auto = VEHICULE.Auto,
        Neuve = VEHICULE.Neuve,
        Occasion = VEHICULE.Occasion;

    /* Véhicules */
    // neuves    : marque, modele, annee, image, prix, rabais, [couleurs]
    // occasions : marque, modele, annee, image, prix, rabais, couleur, nbKm, transmission

    let neuves = [
        ['Nissan', 'Leaf Plus SV', '2022', './assets/img/neuves/neuve-1.jpeg', 52329, 500, ['darkred', 'Grey', '#000000']],
        ['Kia', 'Rio LX+', '2022', './assets/img/neuves/neuve-2.jpeg', 20220, null, ['#000000', 'darkblue']],
        ['Dodge', 'Challenger', '2021', './assets/img/neuves/neuve-3.jpeg', 52265, 500, ['#232323', '#ff8c00', 'darkblue']],
    ];
    let occasions = [
        ['Kya', 'Forte', '2015', './assets/img/occasions/occasion-1.jpeg', 9298, 1000, '#161616', '116,252', 'Manuelle'],
        ['Nissan', 'Versa Note SV', '2018', './assets/img/occasions/occasion-2.jpeg', 12198, null, '#081326', '93,561', 'Automatique' ],
        ['Hyundai', 'Elantra', '2014', './assets/img/occasions/occasion-3.jpeg', 7898, null, '#8b0000', '93,991', 'Manuelle' ]
    ];

    //Recuperer les objects de le space
    let elForm = document.querySelector('form'),
        elSel = document.querySelector('select'),
        elList = document.querySelector('[data-js-list-autos]')
        
        console.log(elList);
    
    //Listener du select

    elSel.addEventListener('change', function() {
        option = elSel.value;
        let autos = [], marque = [], modele = [],
            annee = [], image = [], prix = [], prixReduit = [],
            nbKm = [], couleur = [], transmission = []; 
        
        if (option !== 0 && option == 'occasion') {

            for(let object of occasions ) {
              console.log(new Auto()); ;
            } 
            console.log(object[0])         
                    
            /*for (let i = 0; i < occasions.length; i++) {
                autos.push(occasions[i]);
                        
                for (let l = 0; l < autos.length; l++) {
                    console.log(i), i-1;
                    marque.push(autos[i][l]), l++;
                    modele.push(autos[i][l]), l++;
                    annee.push(autos[i][l]), l++;
                    image.push(autos[i][l]), l++;
                    prix.push(autos[i][l]), l++;
                    prixReduit.push(autos[i][l]), l++;
                    nbKm.push(autos[i][l]), l++;
                    couleur.push(autos[i][l]), l++;
                    transmission.push(autos[i][l]);
                }    
            }    
                console.log(marque);
                console.log(modele);
                console.log(annee);
                console.log(prix);
                console.log(image);
                console.log(prixReduit);
                console.log(nbKm);
                console.log(couleur);
                console.log(transmission);
                console.log(autos); 
            for (i = 0; i < marque.length; i++) {
                new Auto(marque[i], modele[i], annee[i], prix[i], image[i],
                    prixReduit[i], couleur[i], nbKm[i], transmission[i]).afficheAutos();
            }       
                
        }
        else if (option !== 0 && option == 'neuve') {
            for (let i = 0; i < neuves.length; i++) {
                autos.push(neuves[i]);
                        
                for (let l = 0; l < autos.length; l++) {
                    console.log(i), i-1;
                    marque.push(autos[i][l]), l++;
                    modele.push(autos[i][l]), l++;
                    annee.push(autos[i][l]), l++;
                    image.push(autos[i][l]), l++;
                    prix.push(autos[i][l]), l++;
                    prixReduit.push(autos[i][l]), l++;
                    //nbKm.push(autos[i][l]), l++;
                    couleur.push(autos[i][l]), l++;
                    //transmission.push(autos[i][l]);
                }    
            }    
                console.log(marque);
                console.log(modele);
                console.log(annee);
                console.log(prix);
                console.log(image);
                console.log(prixReduit);
                //console.log(nbKm);
                console.log(couleur);
                //console.log(transmission);
                console.log(neuves);*/

        }   
        
             
         
            
        

        
    })


})(VEHICULE);