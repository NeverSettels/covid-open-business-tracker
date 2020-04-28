// Google API KEY = AIzaSyCSbUg4uB4qOCYnlMNg25JkcZcs8O4si0I

import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { MapApi } from './maps-service';


// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCSbUg4uB4qOCYnlMNg25JkcZcs8O4si0I&callback=initMap';
script.defer = true;
script.async = true;

// Attach your callback function to the `window` object
window.initMap = function() {
    var portland = {lat: 45.5051, lng: -122.6750};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 10, center: portland});
    return map
};
function initMap(){
    var portland = {lat: 45.5051, lng: -122.6750};
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 10, center: portland});
    return map  
}
function addMarker(lat,lng,map){
  var marker = new google.maps.Marker({position: {lat: lat, lng: lng}, map: map});

}


// Append the 'script' element to 'head'
document.head.appendChild(script);

// function initMap() {

// }
$(document).ready(() => {
  // Button for Landing Page
  $("#enter").click(function() {
    $("#user-info").show();
    $("#safety").hide();
  });

  (async () => {
    let mapApi = new MapApi();
    const response = await mapApi.getBuisnesses();
    console.log("response", response);

    // code for user to "submit" form PSEUDOCODE
    $("#user-input").submit(function(event) {
      event.preventDefault();
      const zipCode = parseInt($("#zip").val());
      const miles = parseInt($("#miles").val());
      let myMap = initMap();
      addMarker(45.505,-122.2354,myMap);
      $("#output").show();
 
    });
  })();
});


// let result = getBusinesses(zipCode, miles);
      // result list of 25 in an array: 
      // name path: results[0].name 
      // address path: results[0].vicinity
      // phone number path: ?? do we need to include the phone number as a param in our API call?
      // pin location for map option path: results[0].geometry.location.lat & results[0].geometry.lng 
      // place id location for map: results[0].place_id
      // Create the script tag, set the appropriate attributes
      // let script = document.createElement('script');
      // script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCSbUg4uB4qOCYnlMNg25JkcZcs8O4si0I&callback=initMap';
      // script.defer = true;
      // script.async = true;

      // // Attach your callback function to the `window` object
      // window.initMap = function() {
      //   // JS API is loaded and available
      // };

      // // Append the 'script' element to 'head'
      // document.head.appendChild(script);