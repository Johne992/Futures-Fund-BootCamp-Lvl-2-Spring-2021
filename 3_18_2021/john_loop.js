let johnarray = ['j','h','n','o'];

let i = 0;

while(i < 3){ 
  johnarray.pop();
  console.log(johnarray);
  
  //console.log('I is less than 3 ');
  //console.log(i < 3);
  i++
  //console.log('I is equal to ' + i);
}

for(i = 0; i < 3; i++){
  johnarray.pop();
  console.log(johnarray);
} //the array is empty after this

johnarray = ['j','h','n','o']; //this reloads the array 

for(i = johnarray.length; i > 0; i--){
  johnarray.pop();
  console.log(johnarray);
}//the array is empty after this

johnarray = ['j','h','n','o']; //this reloads the array 

for(i = johnarray.length-1; i >= 0; i--){
  console.log(johnarray[i]);
}//the array is empty after this