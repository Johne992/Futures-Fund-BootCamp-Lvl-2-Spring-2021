let changeName = document.getElementById('butterfly');
changeName.innerHTML = 'J Rena Griffin';

let a = document.getElementById("butterfly");

document.getElementById("butterfly").onclick = function(){
	let name = document.getElementById("butterfly");
  if(name.style.color === "#8905a3"){
    name.style.color = "black";
  }else{
    name.style.color = "navy";    
  };
};
console.log(name.style.color)