// JavaScript Document
console.log("howdy");


// Stap 1.
var optionAll = document.querySelector("#filter-all");
var optionWater = document.querySelector("#filter-animalwater");
var optionLand = document.querySelector("#filter-animalland");
var optionPets = document.querySelector("#filter-animalpets");


// Stap 2.
optionAll.addEventListener("change", filterList);
optionWater.addEventListener("change", filterList);
optionLand.addEventListener("change", filterList);
optionPets.addEventListener("change", filterList);


// Stap 3.
function filterList(event){
  /* de ul opzoeken */
  let deLijst = document.querySelector("ul");
  let nieuweFilter = event.target.value;
  // verwijder de huidige class van de lijst
  deLijst.className = "";
  // voeg de nieuwe class toe aan de lijst
  // het event object bevat alle info van het event dat heeft plaatsgevonden
  // het target is het element dat het event heeft laten afgaan
  // in dit geval de radio button die gewijzigd is
  // de value van die radio button is de nieuwe class
  deLijst.classList.add(nieuweFilter);
}

