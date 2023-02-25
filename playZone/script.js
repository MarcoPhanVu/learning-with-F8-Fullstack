// ---------------------NAME SEARCHING START---------------------

allSmallContainer = document.querySelectorAll(".result");

const topLeft = document.querySelector("[data-result-1]");

topLeft.innerHTML = "received?";

listNameOnly = [
    "Andy",
    "Becker",
    "Clark",
    "Tony",
    "Mason",
    "Newman",
    "Cassey",
    "Kathy",
    "Conal",
    "Dylan",
    "Egan",
    "Ellie",
    "Ethan",
    "Jack",
    "Vivian"
];

listNameFull = [
    "Andy Becker",
    "Cooper Douglas",
    "Egan Friedrich",
    "George Hans",
    "Iglesias Johnson",
    "Kathy Lockhart",
    "Mason Newman",
    "Vivian Cassey",
    "Bruce Wayne",
    "Guardian Glock",
    "Heckler Kock",
    "Robin Nelson"
];

function findName(targetName, listName, method) {
    if (method == "name only") {
        for (let i = 0; i < listName.length; i++) {
            if (listName[i] == targetName) {
                console.log(listName[i] + " is the name that you are looking for");
                console.log("at index: " + i);
            }
        }
    }
}

// findName("Vivian", listNameOnly, "name only");

// function myFunction() {
//     var x = document.createElement("SELECT");
//     x.setAttribute("id", "mySelect");
//     document.body.appendChild(x);
  
//     var z = document.createElement("option");
//     z.setAttribute("value", "volvocar");
//     var t = document.createTextNode("Volvo");
//     z.appendChild(t);
//     document.getElementById("mySelect").appendChild(z);
// }

// ---------------------NAME SEARCHING END---------------------



// ---------------------ANIMATION START---------------------
const rightPanel = document.querySelector("#rightPanel");
const buttonBox = document.getElementById("button-box");


function createSubContainer() {
    let newSubC = document.createElement("div");
    newSubC.className = "sub-container";

    let currentPosition = rightPanel.childElementCount + 1; //Plus 1 because we haven't add that newSub to the DOM yet
    newSubC.innerHTML = currentPosition;
    newSubC.setAttribute(`position-${currentPosition}`, "");
    rightPanel.appendChild(newSubC);

    createButtonToDel(newSubC, rightPanel);
}

function createButtonToDel(target, fromParent) {
    let newButton = document.createElement("button");
    console.log(newButton);
    newButton.setAttribute("button-destination", target.innerHTML);
    newButton.innerHTML = "Remove " + (target.innerHTML);

    buttonBox.appendChild(newButton);

    newButton.addEventListener("click", () => {
        if (target) {
            fromParent.removeChild(target);
        }
    });
}
// ---------------------ANIMATION END-----------------------


// This shit worked
// allSmallContainer.forEach(result => {
//     result.innerHTML = "received";
// })