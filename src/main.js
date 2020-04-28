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

      console.log(zipCode, miles);
      // let result = getBusinesses(zipCode, miles);
      // result list of 25 in an array: 
      // name path: array[0].name 
      // address path: array[0].vicinity
      // phone number path: ?? do we need to include the phone number as a param in our API call?
      // pin location for map option path: array[0].geometry.location.lat & array[0].geometry.lng 
      
      $("#output").show('<p>SOMETHING</p>'); 
    });
  })();
});