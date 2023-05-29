"use strict";

console.log("Start of Mountain Info Page...");

const mountainDropdown = document.getElementById("mountainDropdown");
const mountainDetailsRow = document.getElementById("mountainDetailsRow");

// Page Loading
window.onload = function () {
  populateMountainDropdown();
};

function populateMountainDropdown() {
  mountainDropdown.innerHTML = '';

  for (let mountain of mountainsArray) {
    let newOption = new Option(mountain.name);
    mountainDropdown.appendChild(newOption);
  }
}

mountainDropdown.onchange = function () {
  const selectedMountain = mountainDropdown.value;
  displayMountainInfo(selectedMountain);
};

function displayMountainInfo(mountainName) {
  const selectedMountain = mountainsArray.find(mountain => mountain.name === mountainName);

  if (selectedMountain) {
    // Display the mountain information
    mountainDetailsRow.innerHTML = `
      <h3>${selectedMountain.name}</h3>
      <img src="${selectedMountain.image}" alt="${selectedMountain.name}">
      <p>Description: ${selectedMountain.desc}</p>
      <p>Elevation: ${selectedMountain.elevation}</p>
      <p>Effort: ${selectedMountain.effort}</p>
    `;
  } else {
    mountainDetailsRow.innerHTML = '';
  }
}


    