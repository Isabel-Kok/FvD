// JavaScript Document
console.log("howdy");

var autoplayIsOn = true;


var optionAll = document.querySelector("#filter-all");
var optionWater = document.querySelector("#filter-wateranimal");
var optionLand = document.querySelector("#filter-landanimals");
var optionPets = document.querySelector("#filter-pets");


optionAll.addEventListener("change", filterList);
optionWater.addEventListener("change", filterList);
optionLand.addEventListener("change", filterList);
optionPets.addEventListener("change", filterList);


function filterList(event){
  let deLijst = document.querySelector("section");
  let nieuweFilter = event.target.value;
  deLijst.className = "";
  deLijst.classList.add(nieuweFilter);
}

var playpauseButton = document.querySelector("main>button");

playpauseButton.addEventListener("click", playpause);

function playpause(){
  if(autoplayIsOn) {
    swiper.autoplay = false;
    // swiper.autoplay.stop();
    autoplayIsOn = false;
    console.log("stop");
  } else {
    // swiper.autoplay = 1000;
    swiper.autoplay.start();
    autoplayIsOn = true;
    console.log("start");
  }
  
}


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
	
	autoplay: {
		delay: 1000,
		disableOnInteraction: false,
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

  scrollbar:false,
  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});