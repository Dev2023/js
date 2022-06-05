(function(MEN) {

    let Personne = MEN.Personne,
        Etudiant = MEN.Etudiant,
        Professeur = MEN.Professeur

    /**
     * Récupère les objets stockés dans l'objet MON_ESPACE_NOM (MEN)
     */
    let elForm = document.querySelector('form'),
        elInputNom = elForm.nom,
        elInputPrenom = elForm.prenom,
        elInputECours = elForm.ecours,
        elSelect = elForm.statut,
        //elResult = document.querySelector('[data-js-result]'),
        elDetails = document.querySelectorAll('[data-js-details]'),
        elBtn = elForm.querySelector('button'),
        checkedOption = 'etudiant',
        cours = elInputECours
        //console.log(elResult.insertAdjacentHTML('beforeend', "hola"));
   
    elSelect.addEventListener('change', function() {
        checkedOption = elSelect.value;

        for (i = 0, l = elDetails.length; i < l; i++) { //pour la performance
            let dataset = elDetails[i].dataset.jsDetails;

            console.log(dataset)

            if (checkedOption == dataset) {
                if (elDetails[i].classList.contains('hidden')) elDetails[i].classList.remove('hidden')
            }
            else {
                elDetails[i].classList.add('hidden')
            }
        }
    })

    elBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let prenom = elInputPrenom.value,
        nom = elInputNom.value
    

    if (checkedOption == 'etudiant')
        cours = elInputECours.value;
        new Etudiant(prenom, nom, cours).afficheDetails();
        
    })   

})(MON_ESPACE_NOM);