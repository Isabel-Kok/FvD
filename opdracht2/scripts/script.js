// JavaScript Document
console.log("howdy");


var optionAll = document.querySelector("#filter-all");
var optionWater = document.querySelector("#filter-wateranimal");
var optionLand = document.querySelector("#filter-landanimals");
var optionPets = document.querySelector("#filter-pets");


optionAll.addEventListener("change", filterList);
optionWater.addEventListener("change", filterList);
optionLand.addEventListener("change", filterList);
optionPets.addEventListener("change", filterList);


function filterList(event){
  let deLijst = document.querySelector("div");
  let nieuweFilter = event.target.value;
  deLijst.className = "";
  deLijst.classList.add(nieuweFilter);
}




