let button_nt = document.getElementById("nina-btn");
button_nt.addEventListener("click",function(e){console.log(e)});

button_nt.addEventListener("click",function(){
  button_nt.innerHTML = newbutton;

});

let ninaele = document.getElementById('nina-new-text');

//ninaele.innerHTML = "THIS IS NEW";
//console.log(ninaele.innerHTML);

let ninaInfo = {
  firstName : "Nina",
  lastName: "Tran",
  birthdate: 1023,
  display: function(){
    console.log(this.firstName);
  }
};

ninaInfo.display();

console.log(ninaInfo.firstName);
console.log("Last Name: " + ninaInfo.lastTran);
