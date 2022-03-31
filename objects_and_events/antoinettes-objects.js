let antoinetteele = document.getElementById('Antoinette');

//antoinetteele.innerHTML = "THIS IS NEW";
//console.log(antoinetteele.innerHTML);

let antoinetteInfo = {
  myFirstName : "Antoinette",
  myLastName : "Peterson",
  favoriteColor : "Blue",
  display: function(){
    console.log(this.myLastName);
  }

};

antoinetteInfo.display();

console.log(antoinetteInfo.myFirstName);
console.log(antoinetteInfo.favoriteColor);
