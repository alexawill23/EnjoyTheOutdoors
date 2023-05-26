"use strict"; 

console.log("Start of Mountain Info Page... "); 

const mountainBtn = document.getElementById("mountainBtn"); 
const mountainDropdown = document.getElementById("mountainDropdown"); 



//Page Loading 
window.onload = function () {
}; 

function onMountainDropdown () { 
    mountainDropdown.innerHTML = ''; 

    if (mountainDropdown.selected){
        for(mountain of mountainsArray) {
            let newOption = new Option(mountain); 
            mountainDropdown.appendChild(newOption);
        }
    function onMountainDropdown (){
        const selectedMountain = mountainDropdown.ariaValueMax; 
        displayMountainInfo(selectedMountain); 

    }; 

    function displayMountainInfo(mountainName) { 
        const selectedMountain = mountainsArray.find(
            mountain => mountainsArray.name == mountainName); 

        if (selectedMountain) { 

        } 
    }
}
}
