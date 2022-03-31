document.getElementById("dw3").addEventListener("mouseover", function()
{document.body.style.backgroundColor = '#e6f2ff';
 document.body.style.color = "red"});

document.getElementById("fname").addEventListener("change", myFunction);

function myFunction() {
  var x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function myFunction(val) {
  alert("The input has now been changed");
}

document.getElementById("DSean").addEventListener("onclick", function()
{document.body.style.color = "red"});
