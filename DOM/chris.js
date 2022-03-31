
console.log("Is there no alternative?");

let listchris = document.getElementById("thinkers");

listchris.firstElementChild.style.fontweight="Italic"
listchris.firstElementChild.style.color="Orange"

let newItem = document.createElement("LI");
newItem.innerText = "Max Stirner"

listchris.appendChild(newItem)