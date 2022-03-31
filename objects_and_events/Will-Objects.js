let willele = document.getElementById ('testreplace');

willele.innerHTML = "testreplace";
console.log(willele.innerHTML);


let willinfo = {
  firstname : "William",
  Lastname : "Berrios",
  birthday : 102191,
  display: function(){console.log(willinfo.firstname)
  }
}
;

willinfo.display();



console.log(willinfo.firstname);
console.log("Berrios: " + willinfo.Lastname)

