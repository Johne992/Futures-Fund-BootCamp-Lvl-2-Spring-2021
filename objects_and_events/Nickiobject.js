let button_nt = document.getElementById("nicki-btn");
button_nt.addEventListener("click",function(e){console.log(e)});

button_nt.addEventListener("click",function(){
  button_nt.innerHTML = newbutton;

});

let nicki = document.getElementById('nicki-new-text');

//nicki.innerHTML = "THIS IS NEW";
//console.log(nicki.innerHTML);

let nickiInfo = {
  firstName : "Nicki",
  lastName: "Wilson",
  color: orchid,
  display: function(){
    console.log(this.firstName);
  }
};

nickiInfo.display();

console.log(nickiInfo.firstName);
console.log("Last Name: " + nickiInfo.Wilson);
