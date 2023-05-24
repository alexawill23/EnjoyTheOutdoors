"use strict";

console.log("Start of loading page...");

const locationRadio = document.getElementById("locationRadio");
const parkRadio = document.getElementById("parkRadio");
const searchBtn = document.getElementById("searchBtn");
const locationDropdown = document.getElementById("locationDropdown");
const parkDropdown = document.getElementById("parkDropdown"); 
const nationalParksArray = [
  // Start of National Parks Array Data 
];
const parkDetailsContainer = document.getElementById("parkDetailsContainer");
const locationDetailsContainer = document.getElementById("locationDetailsContainer"); 

window.onload = function () {
  // Radio button wire up
  console.log("window loaded");
  locationRadio.addEventListener("change", onLocationRadioChange);
  parkRadio.addEventListener("change", onParkRadioChange);
  locationDropdown.addEventListener("change", onLocationDropdownChange);
  parkDropdown.addEventListener("change", onParkDropdownChange); 
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
  parkDetailsContainer.innerHTML = ''; // Clear park details when radio changes
}

// Park Radio is Clicked
function onParkRadioChange() {
  locationDropdown.style.display = 'none';
  parkDetailsContainer.innerHTML = ''; // Clear park details when radio changes
}

// Location Dropdown Selection Changed
function onLocationDropdownChange() {
  const selectedLocation = locationDropdown.value;

  // Filter national parks based on the selected location
  const filteredParks = nationalParksArray.filter(park => nationalParksArray.LocationName === selectedLocation);

  // Display the filtered parks
  displayFilteredParks(filteredParks);
}

function displayFilteredParks(parks) {
  parkDetailsContainer.innerHTML = ''; // Clear previous park details

  // Display the filtered parks
  for (let park of parks) {
    const parkDetails = document.createElement("div");
    parkDetails.classList.add("park-details");

    const parkName = document.createElement("h3");
    parkName.textContent = park.name;

    const parkDescription = document.createElement("p");
    parkDescription.textContent = park.description;

    parkDetails.appendChild(parkName);
    parkDetails.appendChild(parkDescription);
    parkDetailsContainer.appendChild(parkDetails);
  }
}; 

function onParkDropdownChange() {

}

// Rest of your code...
