"use strict";
console.log("Start of loading page...");
const locationRadio = document.getElementById("locationRadio");
const parkRadio = document.getElementById("parkRadio");
const stateDropdown = document.getElementById("stateDropdown");
const parkDropdown = document.getElementById("parkDropdown");
// variables for card on state dropdown 
const nationalParkLocationName = document.getElementById("nationalParkLocationName"); 
const nationalParkDetails = document.getElementById("nationalParkDetails"); 
const nationalParkAddress = document.getElementById("nationalParkAddress"); 
const nationalParkState = document.getElementById("nationalParkState"); 
const nationalParkZipCode = document.getElementById("nationalParkZipCode"); 
const nationalParkPhone = document.getElementById("nationalParkPhone"); 
const nationalParkFax = document.getElementById("nationalParkFax"); 

  window.onload = function () {
  // Radio button wire up
  console.log("window loaded");
  locationRadio.onchange = onLocationRadioChange; 
  parkRadio.onchange = onParkRadioChange; 
};
// Location Radio is Clicked
function onLocationRadioChange() {
  stateDropdown.innerHTML = '';
  if (locationRadio.checked) {
    for (let location of locationsArray) {
      let newOption = new Option(location);
      stateDropdown.appendChild(newOption);
    }
    stateDropdown.style.display = 'block';
  } else {
    stateDropdown.style.display = 'none';
  }
}
// Park Radio is Clicked
function onParkRadioChange() {
    stateDropdown.style.display = 'none';
  } 
  //Location Dropdown Selection Change
  function onStateDropdownChange(){
    const selectedLocation = stateDropdown.value;
    const filterParks = nationalParksArray.filter(park => park.LocationName === selectedLocation);
    displayFilterParks(filterParks);
  };
  function displayFilterParks(parks) {
    for (let park of nationalParksArray) {
        park == nationalParksArray.state;
        console.log(filterParks);
    };
  };  



// function onLocationRadioChange(){
//     let currentLocation = locationsArray.value
//     if(currentLocation == ""){
//         hideParkDropdown();
//     } else {
//         hideLocationDropdown();
//     }
// }
// populateLocationDropdown(locationsArray);
//};
// function controlRadioClick(){
//     if (locationRadio.changed){
//         locationsArray.style.display = 'block';
//     } else if (parkRadio.changed){
//         locationsArray.style.display = 'none';
//     };
// }
// onParkRadioChange ()
//     let currentPark = parkTypesArray.value
// locationRadio.addEventListener('click', controlRadioClick);
// parkRadio.addEventListener('click', controlRadioClick);
// function shuffleStates(){
// for (let state of nationalParksArray ){
//     state == nationalParksArray.state;
// }
// };
// //when Park Type Radio is Clicked
// function parkRadioClicked (){
// }
// function shuffleParks(){
// }



