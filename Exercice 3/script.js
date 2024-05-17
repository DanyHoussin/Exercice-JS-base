// On selectionne les classes box dans le HTML
const boxes = document.querySelectorAll(".box");


// Pour chaque élément avec la classe box...
boxes.forEach((box) => {

    // On ajoute un écouteur d'evenement a chaque fois qu'on clique sur l'élément box
    box.addEventListener('click', function() {
    
    // L'élément change de classe en boxRed
    box.classList.toggle("boxRed");
    });
});