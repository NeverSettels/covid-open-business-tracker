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
  let map = new google.maps.Map(document.getElementById('map'), { zoom: 10, center: portland });
  return map
};
function initMap() {
  let portland = { lat: 45.5051, lng: -122.6750 };
  // eslint-disable-next-line
  let map = new google.maps.Map(document.getElementById('map'), { zoom: 10, center: portland });
  return map
}
function addMarker(position, map) {
  // eslint-disable-next-line
  let marker = new google.maps.Marker({ position: position, map: map });

}


// Append the 'script' element to 'head'
document.head.appendChild(script);

// function initMap() {

// }
$(document).ready(() => {
  // Button for Landing Page
  $("#enter").click(function () {
    $("#user-info").show();
    $("#safety").hide();
  });

  let arr = [];

  (async () => {
    let mapApi = new MapApi();
    const response = await mapApi.getBuisnesses();
    arr = response;
  })();
  // code for user to "submit" form PSEUDOCODE
  $("#user-input").submit(function (event) {
    //(async () => {
    event.preventDefault();
    const zipCode = parseInt($("#zip").val());
    const miles = parseInt($("#miles").val());
    let myMap = initMap();
    arr.forEach(location => {
      console.log(location.geometry.location);
      addMarker(location.geometry.location, myMap);
    })


    //addMarker(45.505, -122.2354, myMap);
    $("#output").show();
    // })();
  });
});