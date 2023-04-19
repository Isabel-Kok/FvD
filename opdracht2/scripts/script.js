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
  let deLijst = document.querySelector("ul");
  let nieuweFilter = event.target.value;
  deLijst.className = "";
  deLijst.classList.add(nieuweFilter);
}


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
	
	autoplay: {
		 delay: 1000,
		disableOnInteraction: true,
	 },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


