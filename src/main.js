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
function initMap(lat, lng) {
  let location = { lat, lng };
  // eslint-disable-next-line
  let map = new google.maps.Map(document.getElementById('map'), { zoom: 11, center: location });
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

  // code for user to "submit" form PSEUDOCODE
  $("#user-input").submit(function (event) {
    event.preventDefault();
    const keyword = $("#keyword").val();
    const zipCode = parseInt($("#zip").val());
    const radius = $("#radius").val();

    (async () => {
      let arr = [];
      let mapApi = new MapApi();
      let response = await mapApi.getLocation(zipCode, radius, keyword)
      console.log("this is the real?", response);

      arr = response[0];
      let myMap = initMap(response[1], response[2]);
      arr.forEach(location => {
        $("#output").append(`<div class="text-center">${displayList(location)}</div>`);
        console.log(location);
        addMarker(location.geometry.location, myMap);
      })
    })();
    $("#output").show();
  });
  function displayList(location) {
    const printDisplay = `${location.name}`;
    console.log (location);
    return printDisplay;
  }
});


// let result = getBusinesses(zipCode, miles);
      // result list of 25 in an array: 
      // name path: results[0].name 
      // address path: results[0].vicinity
      // phone number path: ?? do we need to include the phone number as a param in our API call?
      // pin location for map option path: results[0].geometry.location.lat & results[0].geometry.lng 
      // place id location for map: results[0].place_id
      
///
  // $("#user-input").submit(function (event) {
  //   //(async () => {
  //   event.preventDefault();
  //   const zipCode = parseInt($("#zip").val());
  //   const miles = parseInt($("#miles").val());
  //   (async () => {
  //     let arr = [];
  //     let mapApi = new MapApi();
  //     let response = await mapApi.getLocation(zipCode, miles)
  //     console.log("this is the real?", response);

  //     arr = response[0];
  //     let myMap = initMap(response[1], response[2]);
  //     arr.forEach(location => {
  //       $("#output").append(`<div class="text-center">${displayList(location)}</div>`);
  //       console.log(location);
  //       addMarker(location.geometry.location, myMap);
  //     })
  //   })();



  //   //addMarker(45.505, -122.2354, myMap);
  //   $("#output").show();
  //   // })();
  // });