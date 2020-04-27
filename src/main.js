import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { MapApi } from './maps-service-service';



$(document).ready(() => {
  (async () => {
    let mapApi = new MapApi();
    const response = await mapApi.getBuisnesses()
    console.log(response);
  })()
});