
//Array Example for Loops

let johnarray = ['j','h','n','o'];
console.log(johnarray[0]+johnarray[3]+johnarray[1]+johnarray[2]);
johnarray.pop(); // removes o
console.log(johnarray)
johnarray.pop(); // removes the n
console.log(johnarray)
johnarray.pop(); // removes the h
console.log(johnarray)
johnarray.push('o');
johnarray.push('h');
johnarray.push('n');
console.log(johnarray)
console.log(johnarray[0]+johnarray[1]+johnarray[2]+johnarray[3]);

//While Loop 
let i = 0;//we're making a random variable i that we're setting equal to 0
console.log(i);
console.log(i < 3);
// we're telling the computer that 'while' the variable i is less than 3 (the condition)
//while(i < 3){ 
//  console.log(3);
//}






let lolab = ['l','o','l','a','b'];

let k = lolab.length;
console.log(k);

while(k > 0){ 
  lolab.pop();
  console.log(lolab);
  
  //console.log('K is less than 0 ');
  //console.log(k < 0);
  k--;
  //console.log('K is equal to 0' + k);
}









let Manarray = ['M','a','n','w','e','i'];

let M = 0;

while(M < 5){ 
  Manarray.pop();
  Manarray.push('?');
  Manarray.shift();

  console.log(Manarray);
  
  //console.log('I is less than 3 ');
  //console.log(i < 3);
  M++
  //console.log('I is equal to ' + i);
}

let jillarray = ['j','l','i','l'];

let j = 0;

while(j < 4){ 
  jillarray.pop();
  console.log(jillarray);
  
  //console.log('J is less than 4 ');
  //console.log(j < 4);
  j++
  //console.log('I is equal to ' + j);
}