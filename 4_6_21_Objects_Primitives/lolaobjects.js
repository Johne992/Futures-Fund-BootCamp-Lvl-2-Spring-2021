function hello(){
  alert('Hello');
};

let hellotimeout = setTimeout(hello,7000);
clearTimeout(hellotimeout);

let ourObject = {};
let KalothaObject = {name: Kalotha};
let ourObject = Object.assign(ourObject,KalothaObject);



ourObject.lolab = "hello";

console.log(ourObject);

let kaothaObject = { lolab 333};
ourObject = Object.assign(ourObject, KalothaObject);
console.log(ourObject);