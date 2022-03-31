let DWash3 = document.getElementById("DSean");

console.log(DWash3.innerHTML);

let dwfavBooks = {
  RaceWorkandLeadership: "Thomas, Roberts",
  HowToRaiseAnAdult: "LythcottHaims, Julie",
  ThePowerofGenerationalWealth: "Grant, Gerald",
  BraveNotPerfect: "Saujani, Reshma"
}

for(keys in dwfavBooks) {
  console.log(keys)
}

document.getElementById('dw3').addEventListener("click", function(){document.getElementById('msg').innerHTML = 'cross my fingers that it works!'});
