var map;
var image = "../img/map-pin.png";
var lat;
var lng;


function initMap() {
  if (window.matchMedia("(min-width: 1300px)").matches) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat:59.9387942, lng:30.3200800},
      zoom: 17
      });
    }
    else {
      map = new google.maps.Map(document.getElementById('map'), {
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
