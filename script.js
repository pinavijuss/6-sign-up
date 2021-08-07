console.log("Im here");

// Paspaudus mygtuka isjungsime forma
// paselectinti mygtuka
// uzdeti jam click event'a
// event'as: klases pridejimas kuri paslepia forma

const closeButton = document.querySelector('.close');
const container = document.querySelector('.container');
closeButton.addEventListener("click", function () {
    container.classList.add('hidden');
});