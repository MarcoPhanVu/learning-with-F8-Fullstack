allSmallContainer = document.querySelectorAll(".result");

const topLeft = document.querySelector("[data-result-1]");

topLeft.innerHTML = "received?";

console.log(topLeft);


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
    console.log(method);
    if (method == "name only") {
        console.log("reached?");
        for (let i = 0; i < listName.length; i++) {
            if (listName[i] == targetName) {
                console.log(listName[i] + " is the name that you are looking for");
                console.log("at index: " + i);
            }
        }
    }
}

findName("Vivian", listNameOnly, "name only");

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

// This shit worked
// allSmallContainer.forEach(result => {
//     result.innerHTML = "received";
// })