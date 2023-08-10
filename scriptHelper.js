// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    if(testInput === "") {
        return "Empty";
    } else if(isNaN(testInput)) {
        return "Not a Number";
    } else if(isNaN(testInput) === false){
        return "Is a Number";
    };
   //window.alert("String message")
   // Displays dialog box with message and an "OK" button to close the box.
   //TODO #1 Make a dialog box that pops up if user doesn't enter 1) all the info 2) info that isn't a string or NaN
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let launchStatus = document.getElementById("launchStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let pilotStatus = document.getElementById("pilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
        window.alert("All fields are required!");
        
    } else if(validateInput(pilot) === "Is a Number"  || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        window.alert("Please enter valid information");

    } else {
        if (fuelLevel <10000 && cargoLevel >10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "#C7254E";
            list.style.visibility = "visible";
    
        } else if (fuelLevel >= 10000 && cargoLevel >10000) {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "#C7254E";
            list.style.visibility = "visible";
    
        } else if (fuelLevel <10000 && cargoLevel <=10000) {
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch"
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "#C7254E";
            list.style.visibility = "visible";
    
        } else {
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            launchStatus.style.color = "#419F6A";
            list.style.visibility = "visible";
        }
    
        }
    };

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
};

function pickPlanet(planets) {
    let randomPlanet = planets[Math.floor(Math.random() * planets.length)];
    return randomPlanet;
};

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
