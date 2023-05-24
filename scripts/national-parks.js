"use strict";

console.log("Start of loading page...");

const locationRadio = document.getElementById("locationRadio");
const parkRadio = document.getElementById("parkRadio");
const searchBtn = document.getElementById("searchBtn");
const locationDropdown = document.getElementById("locationDropdown");

[
  // ... your national parks array data here
];

window.onload = function () {
  // Radio button wire up
  console.log("window loaded");
  locationRadio.addEventListener("change", onLocationRadioChange);
  parkRadio.addEventListener("change", onParkRadioChange);
  locationDropdown.addEventListener("change", onLocationDropdownChange);
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

// Location Dropdown Selection Changed
function onLocationDropdownChange() {
  const selectedLocation = locationDropdown.value;

  // Filter national parks based on the selected location
  const filteredParks = nationalParksArray.filter(park => park.location === selectedLocation);

  // Display the filtered parks
  displayFilteredParks(filteredParks);
}

function displayFilteredParks(parks) {
  // Clear previous results
  // ...

  // Display the filtered parks
  for (let park of parks) {
    // Render park information
    // ...
  }
}

// Rest of your code...

