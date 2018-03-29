//variable1 = nombre random entre 0 et 100
var nbRandom = Math.floor(Math.random() * 101)
//variable2 = le nombre proposé par l'utilisateur 
var nbSubmit = document.getElementById("nbSub")
//variable3 pour cible le texte du paragraphe 
var paragraphe = document.getElementById("paragraphe")
// pour visualiser le nombre généré dans la console 
console.log(nbRandom)
// pour déclencher la fonction quand tu cliques sur  jouer 
document.getElementById("submit").addEventListener("click", function (event) {
    //éviter le rechargement du formulaire 
    event.preventDefault()
    // attribuer la valeur de nombre soumis par l'utilisateur à la variable value 
    var value = nbSubmit.value
    // si aucun nombre soumis 
    if (value == ""){
        //afficher erreur + + couleur text et bordure rouge
        paragraphe.innerHTML = "Vous n'avez pas indiqué de nombre";
        document.getElementById("formulaire").style.borderColor = "red";
        return paragraphe.style.color = 'red';
    }
    //si la valeur du nombre soumis à l'utilisateur est supérieur à 100
    if (value > 100){
        //afficher erreur + + couleur text et bordure rouge
        paragraphe.innerHTML = value + " est supérieur à 100 !";
        document.getElementById("formulaire").style.borderColor = "red";
        return paragraphe.style.color = 'red';
    }
    //si la valeur du nombre soumis à l'utilisateur est inférieur à 0
    if (value < 0){
        //afficher erreur + + couleur text et bordure rouge
        paragraphe.innerHTML = value + " est inférieur à 0 !";
        document.getElementById("formulaire").style.borderColor = "red";
        return paragraphe.style.color = 'red';
    }
    //si la valeur du nombre soumis à l'utilisateur est supérieur au nombre à trouver 
    if (value > nbRandom){
        //afficher "c'est moins" + couleur text et bordure orange 
        paragraphe.innerHTML = value + " est trop <strong>grand</strong> !";
        document.getElementById("formulaire").style.borderColor = "orange";
        return paragraphe.style.color = 'orange';
    }
    //si la valeur du nombre soumis à l'utilisateur est inférieur au nombre à trouver 
    if (value < nbRandom){
        //sinon afficher "c'est plus" + couleur text et bordure orange 
        paragraphe.innerHTML = value + " est trop <strong>petit</strong>";
        document.getElementById("formulaire").style.borderColor = "orange";
        return paragraphe.style.color = 'orange';
    }
    //afficher c'est gagné + cacher bouton jouer et afficher bouton rejouer
    paragraphe.innerHTML = "Bien joué le nombre secret était bien " + nbRandom + " !";
    document.getElementById("refresh").style.visibility='visible';
    document.getElementById("submit").style.visibility='hidden';
    document.getElementById("formulaire").style.borderColor = "green";
    return paragraphe.style.color = 'green';
})
