let ninaele = document.getElementById('nina-new-text');

//ninaele.innerHTML = "THIS IS NEW";
//console.log(ninaele.innerHTML);

let ninaInfo = {
  firstName : "Nina",
  lastName: "Tran",
  birthdate: 1023,
  display: function(){console.log("Name is: " + this.firstName + " " + this.lastName)}
};

ninaInfo.display();

console.log(ninaInfo.firstName);
console.log("Last Name: " + ninaInfo.lastTran);
