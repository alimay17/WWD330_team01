// import { getJSON, getLocation } from './utilities.js';
import QuakesController from './QuakesController.js';
// const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

// function testGetQuakesForLocation() {
//     // call the getLocation function to get the lat/long

//     // use that information to build out the correct URL
//     const geoUrl = baseUrl + getLocation();// add location information here
//   // use the url to request the correct quakes 
//   //log out the quakes for now.
// }


let controller = new QuakesController("#quakeList");
controller.init();
//getQuakesForLocation();