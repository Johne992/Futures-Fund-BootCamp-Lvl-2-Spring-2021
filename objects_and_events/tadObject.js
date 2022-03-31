// change the loudness of my name
let changeName = document.getElementById('tadName');
changeName.innerHTML = 'TAD DALLAS';


// change some color of my name
let a = document.getElementById("tadName");
a.onclick = 
function(){
	let name = document.getElementById("tadName");
  if(name.style.color === "white"){
    name.style.color = "black";
  }else{
    name.style.color = "white";    
  };
};





// add two numbers together
let n = document.getElementById("n");
let m = document.getElementById("m");
let addSum = document.getElementById("sum");

n.addEventListener("input", add);
m.addEventListener("input", add);

function add() {
  let one = parseFloat(n.value) || 0;
  let two = parseFloat(m.value) || 0;
  addSum.innerHTML = "Your sum is: " + (one+two);
}

