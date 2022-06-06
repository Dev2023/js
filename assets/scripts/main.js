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
        if (option !== 0 && option == 'occasion') {
            let auto = [];
            //marque = [];
                       
            for (let i = 0; i < occasions.length; i++) {
                auto.push(occasions[i]);
                //break;
               
                for (let l = 1; l < auto.length; l++) {
                    marque = auto[i][0];
                    modele = auto[i][l], l++;
                    annee = auto[i][l], l++;
                    image = auto[i][l], l++;
                break;    
                }    
                
            }    
                
                console.log(marque);
                console.log(modele);
                /*for(let auto of occasions) {

                }*/
                //marque = occasions[i];//[i];
                //modele = occasions[i];//[i];
                //annee = occasions[i];//[i];
                //console.log(marque, modele, annee);
                document.write(image);
            //console.log(modele);
                console.log(annee);
             
            console.log(auto);
            
            //console.log(occasions);
        }
        else {
            console.log(neuves);
            console.log(option);
        }   
            
        //afficheAutos(); 
            
        

        
    })


})(VEHICULE);