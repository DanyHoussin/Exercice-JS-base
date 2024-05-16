
// On selectionne toutes les id box dans le HTML
const boxes = document.querySelectorAll("#box");

// On selectionne l'élemenet Body dans le HTML
const body = document.body;

// Pour chaque element avec l'id box, 
boxes.forEach(box=>{

    // On ajoute un écouteur d'evenement a chaque fois qu'on clique sur l'element box
    box.addEventListener('click', function() {
        // On va vérifier si la classe active est présent sur l'element box
        const isActive = box.classList.contains('active');
        
        // On va recuperer le style css sur l'élement sur lequel on va cliqué
        const boxesCSS = window.getComputedStyle(box);

        // On va récuerer la valeur de la couleur de fond (element box)
        const cssValue = boxesCSS.getPropertyValue("background-color");

        // On va selectionner l'élemenet p de l'element box
        const element = box.querySelector("p");

        // On va selectionner la classe logo (enfant de l'element box)
        const logo = box.querySelector(".logo");

        // Si l'élement box est actif, 
        if(isActive){
            // On va supprimer tout les styles
            box.style.boxShadow = "";
            box.style.transform = "";
            box.style.backgroundColor = "";
            element.style.display = "";
            element.style.opacity = "";
            logo.style.transform = "translate(0px, 10px)";
            box.style.borderRadius = "";
            document.querySelector("#wrapper").style.setProperty("background-color", "rgb(197, 197, 197)");

        } else {

            // On va appliqué les elements sur le body les élements qu'on a récupéré
            document.querySelector("#wrapper").style.setProperty("background-color", cssValue);
            box.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset";
            box.style.transform = "scale(110%)";
            box.style.backgroundColor = "";

            // Permet de définir une durée avant l'execution du code
            setTimeout(() => {
                element.style.opacity = "100%";
              }, "500"); // En milliseconde
            logo.style.transform = "translate(0px, -20px) rotate(360deg)";
            box.style.borderRadius = "10%";
        }

        // on va ajouter ou supprimer la class active a l'element box pour changer son état
        box.classList.toggle('active');
});

});

