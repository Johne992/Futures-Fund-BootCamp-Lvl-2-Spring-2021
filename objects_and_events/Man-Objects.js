let manJs = document.getElementById("new-from-js");
manJs.innerHTML = "Hello JS!";

let button_wm = document.getElementById("man-btn");


button_wm.addEventListener("click",function(){
  button_wm.innerHTML = "It's works!";
  manJs.innerHTML = "OMG!";
})





let manInfo = {
    firstName : "Man",
    lastName : "Wei",
    birthDay : "1230",
    display : function(){
      console.log(this.birthDay);

    }
};
manInfo.display();
console.log(manInfo.firstName);
console.log("last name: "+ manInfo.lastName);