
// On récupère l'élément colorBox qui est le carré qui va changer de couleur
const colorBox = document.querySelector(".colorBox");

// On récupère l'élément box qui sera les 4 carré de couleur
const boxes = document.querySelectorAll("#box");

// Pour chaque élément box, on applique le code suivant
boxes.forEach((box) => {

    // A chaque fois qu'on clique sur la box
    box.addEventListener('click', function() {

        // L'élément box
        colorBox.style.setProperty('Background-color', window.getComputedStyle(box, null).getPropertyValue("Background-color"));
        colorBox.innerHTML = window.getComputedStyle(box, null).getPropertyValue("Background-color");
    });
});