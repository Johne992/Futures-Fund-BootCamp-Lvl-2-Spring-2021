let sageele = document.getElementById ('sage-new-text')
sageele.innerHTML = "Sage Sage Sage"

let sageinfo = {
  firstname : "Sage",
  sign : "Capricorn",
  favoritecolor : "Yellow",
  display: function(){
    console.log(this.firstname);
    }
};

sageinfo.display();

/*console.log(sageinfo.firstname);
console.log("favoritecolor: " + sageinfo.signcapricorn)*/