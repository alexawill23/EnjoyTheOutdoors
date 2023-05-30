"use strict";

console.log("Start of Mountain Info Page...");

const mountainDropdown = document.getElementById("mountainDropdown");
const mountainDetailsRow = document.getElementById("mountainDetailsRow");

// Page Loading
window.onload = function () {
  populateMountainDropdown();
};
//Inputting mountainData array information inside of dropdown 
function populateMountainDropdown() {
  mountainDropdown.innerHTML = '';
  console.log("populating the mountain dropdown..."); 

  for (let mountain of mountainsArray) { 
    let newOption = new Option(mountain.name); //only allows the name to appear and not rest of information 
    mountainDropdown.appendChild(newOption);
  }
}
//When mountain is selected from dropdown a value will appear 
mountainDropdown.onchange = function () {
  const selectedMountain = mountainDropdown.value;
  displayMountainInfo(selectedMountain);
};

function displayMountainInfo(mountainName) {
  const selectedMountain = mountainsArray.find(mountain => mountain.name === mountainName);

  if (selectedMountain) {
    // Displays the mountain information (easier way than in national-parks.js)
    mountainDetailsRow.innerHTML = `
    <div class="card">
      <h3>${selectedMountain.name}</h3>
      <img class="card-image" img src="images" alt="${selectedMountain.name}">
      <div class="card-content">
      <p>Description: ${selectedMountain.desc}</p>
      <p>Elevation: ${selectedMountain.elevation}</p>
      <p>Effort: ${selectedMountain.effort}</p>
      </div>
      </div>
    `;
  } else {
    mountainDetailsRow.innerHTML = '';
  }
}


    