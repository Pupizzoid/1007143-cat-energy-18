// Карта

var map;
var image = "../img/map-pin.png";
var lat;
var lng;


function initMap() {
  if (window.matchMedia("(min-width: 1300px)").matches) {
    map = new google.maps.Map(document.getElementById("map"), {
      center: {lat:59.9387942, lng:30.3200800},
      zoom: 17
      });
    }
    else {
      map = new google.maps.Map(document.getElementById("map"), {
      center: {lat:59.9387942, lng:30.3230833},
      zoom: 17
      });
    }

    var marker = new google.maps.Marker({
      position: {lat:59.9387942, lng:30.3230833},
      map: map,
      animation: google.maps.Animation.DROP,
      icon: image
    });
}

// Навигация

var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});


// Слайдер

var buttonBefore = document.querySelector(".example__before");
var buttonAfter = document.querySelector(".example__after");
var progress = document.querySelector(".example__image-wrapper");

buttonBefore.addEventListener("click", function() {
  if (progress.classList.contains("example__image-wrapper--show")) {
  progress.classList.remove("example__image-wrapper--show");
}
});

buttonAfter.addEventListener("click", function () {
if (!progress.classList.contains("example__image-wrapper--show")) {
  progress.classList.add("example__image-wrapper--show");
}
});
