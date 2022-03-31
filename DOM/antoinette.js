console.log("Antoinette's Flavors List");

let aplist = document.getElementById("Flavors");

console.log(aplist);

aplist.firstElementChild.style.fontWeight = "bold";
aplist.lastElementChild.style.color = "red";

let flavorItem = document.createElement("APL");
flavorItem.innerText = "Pineapple"
aplist.appendChild(flavorItem);
