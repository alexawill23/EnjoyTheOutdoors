"use strict";

console.log("Start of loading page...");

const locationRadio = document.getElementById("locationRadio");
const parkRadio = document.getElementById("parkRadio");
const searchBtn = document.getElementById("searchBtn");
const locationDropdown = document.getElementById("locationDropdown");

window.onload = function () {
  // Radio button wire up
  console.log("window loaded");
  locationRadio.addEventListener("change", onLocationRadioChange);
  parkRadio.addEventListener("change", onParkRadioChange);
};

// Location Radio is Clicked
function onLocationRadioChange() {
  locationDropdown.innerHTML = '';

  if (locationRadio.checked) {
    for (let location of locationsArray) {
      let newOption = new Option(location);
      locationDropdown.appendChild(newOption);
    }
    locationDropdown.style.display = 'block';
  } else {
    locationDropdown.style.display = 'none';
  }
}

// Park Radio is Clicked
function onParkRadioChange() {
    locationDropdown.style.display = 'none';
  }

  //Location Dropdown Selection Change 
  function onLocationDropdownChange(){
    const selectedLocation = locationDropdown.ariaValueMax; 
    const filterParks = nationalParksArray.filter(park => park.LocationName === selectedLocation);
    displayFilterParks(filterParks);  
  }


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
