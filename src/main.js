// Google API KEY = AIzaSyCSbUg4uB4qOCYnlMNg25JkcZcs8O4si0I

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { MapApi } from './maps-service';


// Create the script tag, set the appropriate attributes
let script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCSbUg4uB4qOCYnlMNg25JkcZcs8O4si0I&callback=initMap';
script.defer = true;
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function () {
  let portland = { lat: 45.5051, lng: -122.6750 };
  // eslint-disable-next-line
  let map = new google.maps.Map(document.getElementById('map'), { zoom: 10, center: portland  });
  return map
};
function initMap(lat, lng) {
  let location = { lat, lng };
  // eslint-disable-next-line
  let map = new google.maps.Map(document.getElementById('map'), { zoom: 11, center: location,  styles: [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#6b9a76'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}]
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}]
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}]
    }
  ] });
  return map
}
function addMarker(position, map) {
  // eslint-disable-next-line
  let marker = new google.maps.Marker({ position: position, map: map });

}

// Append the 'script' element to 'head'
document.head.appendChild(script);

$(document).ready(() => {
  // Button for Landing Page
  $("#enter").click(function () {
    $("#user-info").show();
    $("#safety").hide();
  });

  $("#user-input").submit(function (event) {
    event.preventDefault();
    const keyword = $("#keyword").val();
    const zipCode = parseInt($("#zip").val());
    const radius = $("#radius").val();
    $("#map").show();
    (async () => {
      
      let arr = [];
      let mapApi = new MapApi();
      let response = await mapApi.getLocation(zipCode, radius, keyword)
      // console.log("this is the real?", response);
      arr = response[0];
      let myMap = initMap(response[1], response[2]);
      // $("#output").empty();

      arr.forEach( async (location)  => {
        let businessInfo = await mapApi.getLocationDetails(location.place_id);
        $("#results").append(displayList(businessInfo));
       // console.log(location, "this is a location" );
        addMarker(location.geometry.location, myMap);
      })
      $("#results").empty();
    })();
    $("#output").show();
  });
  function displayList(businessInfo) {
    let { result: {name, formatted_address, formatted_phone_number}} = businessInfo;
    let printDisplay = `
    <div class="info">
    <h3>${name}</h3> 
    <h5>${formatted_address} </h4>
    <h4> <a href="tel:+${formatted_phone_number}">${formatted_phone_number}</a></h4>
    </div>`;
    return printDisplay;
  }
});
