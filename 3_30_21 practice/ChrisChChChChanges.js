


document.getElementById("specific").onmouseover = function(){
  let subtext = document.getElementById("specific"); 
  if(subtext.style.textShadow == 'black 4px 4px 5px'){
    subtext.style.textShadow = '8px 8px 10px black';
  }
  else{
    subtext.style.textShadow = '4px 4px 5px black'; };   
}