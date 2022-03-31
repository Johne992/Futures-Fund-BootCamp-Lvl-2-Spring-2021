document.getElementById("sagebody").onclick = function(){
  let name = document.getElementById("sagebody");
  if(name.style.color === 'pink'){
    name.style.color = "yellow";
  }else{
    name.style.color = "pink"
 };
}

document.getElementById("sagebody").style.animation = "mynewmove 4s 2";