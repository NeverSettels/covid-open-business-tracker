import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { MapApi } from './maps-service';

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
      debugger;

      let info = 'ChIJJ3SpfQsLlVQRkYXR9ua5Nhw';
      let info1 = 'ChIJfzyszwGolVQRDABWw2vPDYs'
      // let result = getBusinesses(zipCode, miles);
      // result list of 25 in an array: 
      // name path: results[0].name 
      // address path: results[0].vicinity
      // phone number path: ?? do we need to include the phone number as a param in our API call?
      // pin location for map option path: results[0].geometry.location.lat & results[0].geometry.lng 
      // place id location for map: results[0].place_id
     
      
      $("#output").show(`<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:${info},${info1}&key=AIzaSyCSbUg4uB4qOCYnlMNg25JkcZcs8O4si0I" allowfullscreen></iframe>`); 
    });
  })();
});