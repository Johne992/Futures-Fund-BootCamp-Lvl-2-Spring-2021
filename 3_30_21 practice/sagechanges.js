console.log("Hey, I'm in sage changes");

document.getElementById("sagename").onclick = function(){
  let name = document.getElementById("sagename");
  if(name.style.color == 'yellow'){
    name.style.color = "black";
  }else{
    name.style.color = "yellow";
 };
}
