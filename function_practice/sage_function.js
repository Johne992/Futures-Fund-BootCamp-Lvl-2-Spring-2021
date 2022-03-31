let currentYear = 2021

let newYear;
function nextYear(current_year){
  newYear = current_year + 1;
  return newYear;
}

console.log(nextYear(2021) );

let yearWorldends
yearWorldends = nextYear(3023);
console.log("Yyear world ends: " + yearWorldends(3023));



function sage_greeting(){
  let his_name = "Will";
  console.log("Whats Goodie" + his_name);

  his_name = window.prompt("Sage");

}
sage_greeting();

let mynumber = 7;

function sage_quickmaths(multiplier1, multiplier2){
  let answer = multiplier1  * multiplier2;
  console.log(answer)
}

sage_mulitplier(9,10);