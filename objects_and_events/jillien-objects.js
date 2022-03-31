let jillrena = document.getElementById('jill-new-text');

jillrena.innerHTML = "Kool Beans!";

let jillInfo = {
 firstName: "Jillien",
 lastName: "Griffin",
 birthday: 8488 ,
 display: function(){
   console.log(this.lastName);
   console.log(this.birthday);
 }
};

jillInfo.display();

console.log(jillInfo.firstName);
console.log("Last Name: " + jillInfo.lastName);

 let button_jg = document.getElementById("jillien-btn");
button_jg.addEventListener("click",function(e){console.log(e)});

button_jg.addEventListener("click",function(){  button_jg.innerHTML = newbutton;

});
