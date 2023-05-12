// JavaScript Document
console.log("howdy");





////////////
// SWIPER //
////////////


// variabele om de swiper in op te slaan
var swiper;


// swiper aanzetten
function startSwiper() {
  // SWIPER INITIALISEREN
  swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    
    autoplay: {
      delay: 2000,
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
  
    scrollbar:false
  });


  // ALS DE GEBRUIKER OP NEXT OF PREV KLIKT
  const nextButton = swiper.navigation.nextEl[0];
  const prevButton = swiper.navigation.prevEl[0];
  // DE SLIDER STOPPEN --> en PLAY/PAUSE BUTTON UPDATEN
  nextButton.addEventListener("click", stop);
  prevButton.addEventListener("click", stop);
}



// ALS DE GEBRUIKER OP DE PLAY/PAUSE BUTTON DRUKT
var playpauseButton = document.querySelector("main>button");

playpauseButton.addEventListener("click", playpause);

function playpause(){
  // als autoplay gepauzeerd is
  if(swiper.autoplay.running) {
    // autoplay stoppen
    stop();
  }
  // anders
  else {
    // autoplay herstarten
    play(); 
  }
}

// SWIPER HERSTARTEN
function play() {
  // autoplay weer aanzetten
  swiper.autoplay.start();
  // tekst veranderen in play
  playpauseButton.innerHTML = "pauze"
}

// SWIPER STOPPEN
function stop() {
  // autoplay pauzeren
  swiper.autoplay.stop();
  // tekst veranderen in play
  playpauseButton.innerHTML = "play"
}


// SWIPER AANZETTEN NA HET LADEN VAN PAGINA
startSwiper();





/////////////
// FILTERS //
/////////////

// filters opzoeken
var optionAll = document.querySelector("#filter-all");
var optionWater = document.querySelector("#filter-wateranimal");
var optionLand = document.querySelector("#filter-landanimals");
var optionPets = document.querySelector("#filter-pets");
// slodes opzoeken --> dat zijn er meer --> in een array
var slides = document.querySelectorAll("section div div div");


// filters naar kliks laten luisteren
optionAll.addEventListener("change", filterList);
optionWater.addEventListener("change", filterList);
optionLand.addEventListener("change", filterList);
optionPets.addEventListener("change", filterList);


// slides filteren
// en de swiper herstarten
function filterList(event){

  let nieuweFilter = event.target.value;

  // als all is gekozen
  if(nieuweFilter == "all") {
    // alle slides aanzetten
    slides.forEach(slide => {
      slide.classList.add("swiper-slide");
    });
  }
  
  // als ander filter gekozen
  else {
    slides.forEach(slide => {
      // slides die matchen tonen
      if (slide.classList.contains(nieuweFilter)) {
        slide.classList.add("swiper-slide");
      }
      // slides die niet matchen verbergen
      else {
        slide.classList.remove("swiper-slide");
      }
    });
  }

  // swiper resetten
  // swiper stoppen
  swiper.destroy();
  // en weer starten
  startSwiper();
  // button tekst updaten
  play();
}