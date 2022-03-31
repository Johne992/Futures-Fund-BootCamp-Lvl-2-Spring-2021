let ListFromWill = document.getElementById("WillsList");

console.log(ListFromWill);


ListFromWill.firstElementChild.style.fontWeight = "Bold";
ListFromWill.lastElementChild.style.color = "red";

let newItem = document.createElement("li");
let newText = document.createTextNode()
newItem.innerText = "My Kids";

list.appendChild(newItem);