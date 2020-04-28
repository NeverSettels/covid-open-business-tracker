import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { MapApi } from './maps-service';

// Create the script tag, set the appropriate attributes
// var script = document.createElement('script');
// script.src = (`https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&callback=initMap`);
// script.defer = true;
// script.async = true;

// Attach your callback function to the `window` object
// window.initMap = function() {
  //   let options = {
  //     zoom : 8,
  //     center: {lat:45.5051, lng: -122.6750} // lng must be negative (portland, or)
  //   }

  //   //new map:
  //   let map = new google.maps.Map(document.getElementById('map'), options);
    
  //   //add marker:
  //   let marker = new google.maps.Marker({//
  //     position: {lat: 45.5853 , lng: -122.7645}
  //   });
  // }

// Append the 'script' element to 'head'
///document.head.appendChild(script);

$(document).ready(() => {
  // Button for Landing Page
  $("#enter").click(function() {
    $("#user-info").show();
    $("#safety").hide();
  });

  (async () => {
    let mapApi = new MapApi();
    const response = await mapApi.getBuisnesses();
    console.log(response);

    // code for user to "submit" form PSEUDOCODE
    $("#user-input").submit(function(event) {
      event.preventDefault();
      const zipCode = parseInt($("#zip").val());
      const miles = parseInt($("#miles").val());

      console.log(zipCode, miles)
      // let result = getBusinesses(zipCode, miles);
      // result list of 25 in an array: 
      // name path: array[0].name 
      // address path: array[0].vicinity
      // phone number path: ?? do we need to include the phone number as a param in our API call?
      // pin location for map option path: array[0].geometry.location.lat & array[0].geometry.lng 
      
      $("#output").show('<p>SOMETHING</p>'); 

      // Map and output functionality
    });
  })();
  
});