
// On selectionne la classe greenbox dans le HTML ainsi que pour les autres box
const greenbox = document.querySelector(".greenbox");
const redbox = document.querySelector(".redbox");
const yellowbox = document.querySelector(".yellowbox");
const bluebox = document.querySelector(".bluebox");
let box = document.querySelector(".box");

greenbox.addEventListener('click', function() {
    box.style.setProperty('Background-color', window.getComputedStyle(greenbox, null).getPropertyValue("Background-color"));
    box.innerHTML = window.getComputedStyle(greenbox, null).getPropertyValue("Background-color");
});

redbox.addEventListener('click', function() {
    box.style.setProperty('Background-color', window.getComputedStyle(redbox, null).getPropertyValue("Background-color"));
    box.innerHTML = window.getComputedStyle(redbox, null).getPropertyValue("Background-color");

});

yellowbox.addEventListener('click', function() {
    box.style.setProperty('Background-color', window.getComputedStyle(yellowbox, null).getPropertyValue("Background-color"));
    box.innerHTML = window.getComputedStyle(yellowbox, null).getPropertyValue("Background-color");

});

bluebox.addEventListener('click', function() {
    box.style.setProperty('Background-color', window.getComputedStyle(bluebox, null).getPropertyValue("Background-color"));
    box.innerHTML = window.getComputedStyle(bluebox, null).getPropertyValue("Background-color");

});

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {

    box.addEventListener('click', function() {

        box.style.setProperty('Background-color', window.getComputedStyle(bluebox, null).getPropertyValue("Background-color"));
        box.innerHTML = window.getComputedStyle(bluebox, null).getPropertyValue("Background-color");
});
});