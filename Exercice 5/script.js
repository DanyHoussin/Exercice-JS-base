
// On récupère l'élément valeur en franc
let francs = document.querySelector(".valeurFranc");

// On crée une fonction permettant de donner la conversion de l'euro en franc
function myFunction() {
    // On récupère l'élément textarea (input text) ainsi que ca valeur
    let valeurEuro = document.querySelector(".valeur").value;

    // Si la valeur de l'input text est un float alors...
    if(!isNaN(parseFloat(valeurEuro))){

        // On applique la conversion avec un produit en croix
        result = valeurEuro*6.55957;

        // On affiche le résultat avec une limite de 2 chiffre max après la virgule
        francs.innerHTML = result.toFixed(2) + " francs";
    } else {

        // Si la valeur n'est pas un float, alors...
        francs.innerHTML = "Vous devez saisir une valeur numérique !";
    }
};
