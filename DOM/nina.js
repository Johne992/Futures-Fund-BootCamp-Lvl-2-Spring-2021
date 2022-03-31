console.log("I'm in nina's script");

let list = document.getElementById("shopping-list");

list.firstElementChild.style.fontWeight = "bold";
list.lastElementChild.style.color = "gray";

let newItem = document.createElement("LI");
let newText = document.createTextNode("Eggs");

newItem.appendChild();

list.appendChild(newItem);

