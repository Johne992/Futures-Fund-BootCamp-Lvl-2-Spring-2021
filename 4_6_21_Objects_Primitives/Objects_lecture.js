
let msg ="futures fund"; //make a variable msg that contains the string futures fund
let copy = msg ; // make a variable copy that contains the same value as the variable msg
console.log(msg, copy); // 

msg="walls project";
console.log(msg, copy);

let pizza = {
  topping: 'pepperoni'
};

console.log(pizza);

let pizzaCopy = pizza;
pizza.topping = "cheese";

console.log("pizzacopy",pizzaCopy,"pizza",pizza);

let a = {};
let b = a;

console.log(a == b);

b = {};

console.log(a == b); 

var x = { name: "John" };
var y = { name: "John" };

let z = x;

console.log(x == z);
console.log(x == y);
console.log(z == y); 

var car = "Fiat"; //variable containing a string string (primitive data type)
var car = {type:"Fiat", model:500, color:"white"}; //variable referring to an object
var cars = ['Fiat',500,'White'];
var mycar = cars[0];
var myothercar = car.type;
console.log(mycar == myothercar);
console.log(car.model == cars[1]);

var dinner = {entree:"ketchup grits", side: "eggs", desert: "brownies"}; //this creates an object and dinner refers to that object
var supper = dinner; //this creates supper and supper refers to the same object dinner refers too
var supper = Object.assign({},dinner); //this copies the object dinner refers to and lets supper refer to that new object
var supper = {entree2:"ketchup crawfish", side2: "potato salad", desert2: "coolwhip"};
let bestdinner = Object.assign(dinner,supper); 

let breakfast = {day:"sunday", menu:{entree:"shrimp", side:"toast"} };

let breakfast2 = Object.assign({}, breakfast);
breakfast.menu.side = "Biscuits";
breakfast.day = "Monday";
