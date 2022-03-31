let chrisfire = document.getElementById('chris-java-text');

chrisfire.innerHTML = "Now we do it like this" 

let chrisInfo = {
  firstName : "Chris ",
  lastName : "Medders, ",
  age : 34,
  codex : function(){
    console.log(chrisInfo.firstName + chrisInfo.lastName + "Audio Engineer")
  }
}

chrisInfo.codex();

