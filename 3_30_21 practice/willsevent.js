// willparagraph1 (target)
//

//let changename = document.getElementById('willparagraph1');
//changename.innerHTML = 'Wills Paragraph';

document.getElementById("willparagraph1").onmouseover = function(){
	let name = document.getElementById("willparagraph1");
  //name.style.visibility = 'visible';
  //name.style.visibility = 'hidden';
  if(name.style.visibility){
    name.style.color = "black";
  }else{
    name.style.color = "black";    
  };
};

// maybe of help: https://www.educba.com/javascript-style-visibility/

 //mouse out , undo visibility function 
document.getElementById("willparagraph1").onmouseout = function(){
let name = document.getElementById("willparagraph1");
  if(name.style.visibility){
    name.style.color = "black";
  }else{
    name.style.color = "white";
  };
