let tname = "Man-Wei";
console.log("Hello, " + tname)

function dwmyFunction() {
  let person = prompt("Please enter your name", "");
  if (person != null) {
    document.getElementById("testdw").innerHTML =
    "Hello " + person + "! How are you today?";
  }
}