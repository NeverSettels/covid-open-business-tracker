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
  // Button for user to "submit" form
  $("#user-input").submit(function(event) {
    event.prevntDefault();
    const zipCode = parseInt($("#zip").val());
    const miles = parseInt($("#miles").val());
  

    // console.log(zipCode);
    (async () => {
      let mapApi = new MapApi();
      const response = await mapApi.getBuisnesses();
      console.log(response);
    })();
  });
});