// On selectionne la classe box dans le HTML
const box = document.querySelector(".box");

// On va récuperer le css de la classe box
const boxValue = window.getComputedStyle(box, null)

// Quand on va cliquer sur l'élément box, le code s'execute
box.addEventListener('click', function() {

    // Affiche une alerte sur le navigateur
    alert(`Class : box\n - Background-color : ${boxValue.getPropertyValue("Background-color")}\n - Color : ${boxValue.getPropertyValue("color")}\n - Height : ${boxValue.getPropertyValue("height")}\n - Width : ${boxValue.getPropertyValue("width")}\n - Display : ${boxValue.getPropertyValue("display")}\n - Display : ${boxValue.getPropertyValue("font-family")} (${boxValue.getPropertyValue("font-size")})\n`);
});


