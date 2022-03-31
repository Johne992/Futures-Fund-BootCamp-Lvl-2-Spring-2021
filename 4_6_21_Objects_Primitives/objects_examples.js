function hi(){
  alert('Hi');
};

let hitimeout = setTimeout(hi,5000);
clearTimeout(hitimeout);


let ourObject = {};
let johnObject = {name:"John"};
ourObject = Object.assign(ourObject,johnObject);
console.log(ourObject);



ourObject.myKey = "hello";

console.log(ourObject);

let ninaObject = { myKey: 444};
ourObject = Object.assign(ourObject, ninaObject);
console.log(ourObject);