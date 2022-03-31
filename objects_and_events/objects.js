let ninaInfo = {
  firstName: "Nina",
  lastName: "Tran",
  birthday: 1023,
  display: function(){
    console.log("First Name: " + ninaInfo.firstName);
  }
}

ninaInfo.display();

let button_nt = document.getElementById("nina-btn");

console.log(button_nt.innerHTML);

console.log(button_nt.className);
//console.log(button_nt.style);

button_nt.addEventListener("click",myFirstEventFunction);
button_nt.addEventListener("mouseover",function(){console.log("Moused-over!");});

function myFirstEventFunction(){
  let myElement = document.getElementById("nina-new-text");
  myElement.innerHTML = "did it!";
  myElement.style.fontSize = "26px";
}

button_nt.addEventListener("click",function(e){console.log(e)})