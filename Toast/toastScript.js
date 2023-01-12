let textArea0 = document.querySelector("#textKeepingZone");

function checkForText() {
    console.log(textArea0);
} 

textArea0.addEventListener("input", (ev) => {
    console.log(ev.target.value);
})