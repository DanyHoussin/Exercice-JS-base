// On selectionne les classes box dans le HTML
const boxes = document.querySelectorAll(".box");


// Pour chaque element avec la classe box...
boxes.forEach((box) => {

    // On ajoute un écouteur d'evenement a chaque fois qu'on clique sur l'element box
    box.addEventListener('click', function() {

        // Si la valeur de la propriété "backgorund-color" de l'element box est égal à "rgb(7, 134, 0)", alors...
        if(window.getComputedStyle(box, null).getPropertyValue("background-color") == "rgb(7, 134, 0)"){

            // On applique les propriétés css dans l'element box
            box.style.setProperty('background-color', "rgb(134, 0, 0)");
            box.style.setProperty('transform', "scale(90%) rotate(360deg)");
        } else {
            box.style.setProperty('background-color', "rgb(7, 134, 0)");
            box.style.setProperty('transform', "scale(100%) rotate(0deg)");
        }
});
});