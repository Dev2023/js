(function(VEHICULE) {

    /* Objets */
    let Neuve = VEHICULE.Neuve,
        Auto = VEHICULE.Auto,
        Occasion = VEHICULE.Occasion

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

    elSel.addEventListener('change', function(e) {
        e.preventDefault(e);
        option = elSel.value;
                    
        if (option !== 0 && option == 'occasion') {

            for(let object of occasions ) {
                
                let marque = object[0], modele = object[1],  annee = object[2], image = object[3], prix = object[4],
                    prixReduit = object[5], couleur = object[6], nbKm = object[7], transmission = object[8]
                 
                new Occasion(marque, modele, annee, image, prix, prixReduit, couleur, nbKm, transmission).afficheAutos()
            }

        }                        
    })            
                 
})(VEHICULE);                
         
               
           
        
             
         
            
        

        
    

