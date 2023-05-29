"use strict";
console.log("Start of loading page...");
const locationRadio = document.getElementById("locationRadio");
const parkRadio = document.getElementById("parkRadio");
const stateDropdown = document.getElementById("stateDropdown");
const parkDropdown = document.getElementById("parkDropdown");
// variables for card  information
 const stateDetailsRow = document.getElementById("stateDetailsRow"); 
const parkDetailsRow = document.getElementById("parkDetailsRow"); 

  window.onload = function () {
  // Radio button wire up
  console.log("window loaded");
  locationRadio.onchange = onLocationRadioChange; 
  parkRadio.onchange = onParkRadioChange; 

  hideStateDetails(); 
  hideStateDropdown (); 
  hideParkDetails(); 
  hideParkDropdown(); 
  
  stateDropdown.onchange = onStateDropdownChange; 
  parkDropdown.onchange = onParkDropdownChange; 
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
    parkDropdown.style.display = 'none'; 
  } else {
    stateDropdown.style.display = 'none';
  }
}

// Park Radio is Clicked
function onParkRadioChange() {
  parkDropdown.innerHTML = ''; 
  if (parkRadio.checked) { 
    for (let park of parkTypesArray) {
      let newOption = new Option (park); 
      parkDropdown.appendChild(newOption); 
      }
    parkDropdown.style.display = 'block'; 
    stateDropdown.style.display = 'none'; 
  } else {  
    parkDropdown.style.display = 'none'; 
  }
}

// Location Dropdown Selection Change
function onStateDropdownChange() {
  let selectedLocation = stateDropdown.value;
  if (selectedLocation === "") {
    hideStateDetails();
  } else {
    let selectedParks = nationalParksArray.filter(park => park.State === selectedLocation);

    parkDetailsRow.innerHTML = "";
    stateDetailsRow.innerHTML = ""; //clears out previously selected cards 
    if (selectedParks.length > 0) {
      for (let park of selectedParks) {
        let card = createParkCard(park);
        stateDetailsRow.appendChild(card);
      }
      showStateDetails();
    } else {
      hideStateDetails();
    }
  }
}
// Park Dropdown Selection Change 
function onParkDropdownChange() { 
  let selectedParkType = parkDropdown.value; 
  const selectedParks = nationalParksArray.filter(park => park.LocationName.includes(selectedParkType)); 
  if (selectedParkType === ""){ 
    hideParkDetails();
  } else { 
    stateDetailsRow.innerHTML = ""; 
    parkDetailsRow.innerHTML = ""; //clears out previous card data

    if (selectedParks.length > 0) {
      for(let park of selectedParks) { 
        let card = createParkCard(park); 
        parkDetailsRow.appendChild(card); 
      }
      showParkDetails(); 
    } else {
      hideParkDetails(); 
    }
  }
}

  
    
      
//Creating Cards for Park Details 
function createParkCard(park) {
  let divCol = document.createElement("div");
  divCol.className = "col-6 mt-4";

  let divCard = document.createElement("div");
  divCard.className = "card";
  divCol.appendChild(divCard);

  let divHeader = document.createElement("div");
  divHeader.className = "card-header";
  divHeader.innerHTML = park.LocationName;
  divCard.appendChild(divHeader);

  let divCardBody = document.createElement("div");
  divCardBody.className = "card-body";
  divCard.appendChild(divCardBody);

  let unOrderedList = document.createElement("ul");
  unOrderedList.className = "card-list";
  divCardBody.appendChild(unOrderedList);

  let listId = document.createElement("li");
  listId.className = "parkId";
  listId.innerHTML = "ID: " + park.LocationID;
  unOrderedList.appendChild(listId);

  let liAddress = document.createElement("li"); 
  liAddress.className = "parkAddress"; 
  liAddress.innerHTML = "Address: " + park.Address
  unOrderedList.appendChild(liAddress); 

  let cityList = document.createElement("li");
  cityList.className = "cityPark";
  cityList.innerHTML = "City: " + park.City;
  unOrderedList.appendChild(cityList);

  let stateList = document.createElement("li"); 
  stateList.className = "statePark"; 
  stateList.innerHTML = "State: " + park.State; 
  unOrderedList.appendChild(stateList); 

  let liZipCode = document.createElement("li");
  liZipCode.className = "zipCodePark";
  liZipCode.innerHTML = "ZipCode: " + park.ZipCode; 
  unOrderedList.appendChild(liZipCode); 

  let phoneList = document.createElement("li"); 
  phoneList.className = "parkPhone"; 
  phoneList.innerHTML = "Phone: " + park.Phone; 
  unOrderedList.appendChild(phoneList); 

  let faxList = document.createElement("li"); 
  faxList.className = "parkFax"; 
  faxList.innerHTML = "Fax: " + park.Fax; 
  unOrderedList.appendChild(faxList); 


  return divCol; 
}


  





function hideStateDetails() {
  stateDetailsRow.style.display = 'none';

}

function showStateDetails () {
stateDetailsRow.style.display = 'block'; 
}
   
    function hideStateDropdown (){
// Hide the state dropdown here
stateDropdown.style.display = 'none';
   } 

   function showParkDetails() {
    //Show park detail elements here 
    parkDetailsRow.style.display = 'block'; 
   }
    
   function hideParkDetails() {
// Hide the park detail elements here
parkDetailsRow.style.display = 'none';
    }
    
    function hideParkDropdown() {
// Hide the park dropdown here
parkDropdown.style.display = 'none';
    }

  
   