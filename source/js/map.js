var map;
var image = "../img/map-pin.png";
var bigLat = 59.9387942;
var bigLng = 30.3200800;
var smallLat = 59.9387942;
var smallLng = 30.3230833;
var lat;
var lng;


function initMap() {
  if (window.matchMedia("(min-width: 1300px)").matches) {
    lat = bigLat;
    lng = bigLng;
  } else {
    lat = smallLat;
    lng = smallLng;
  }
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat, lng},
  zoom: 17
  });

    var marker = new google.maps.Marker({
      position: {lat:59.9387942, lng:30.3230833},
      map: map,
      animation: google.maps.Animation.DROP,
      icon: image
    });

  google.maps.event.addDomListener(window, "resize", function() {
    var latLng;
    if (window.matchMedia("(min-width: 1300px)").matches) {
      latLng = new google.maps.LatLng(bigLat,bigLng);
    } else {
      latLng = new google.maps.LatLng(smallLat,smallLng);
    }
    map.setCenter(latLng);
  });
}
