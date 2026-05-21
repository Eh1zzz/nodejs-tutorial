import { name } from "ejs";

console.log("Hello World");
const a = 10;
const b = 20;
//returns value
console.log(a + b);

function mult(x, y) {
    return x * y;
}
console.log(mult(10, 20)); 

function power(b,p){
  return b ** p;
}

console.log(power(2,3));  

// let result = Math.min(a, b);
// console.log(result);

//Custom function (Arrow syntax)
const findMin = (a, b) => a < b ? a : b;
console.log(findMin(10, 20));  


//Write a js code to reserve your name and print the reversed name
const name = "Ehichioya";
const reversedName = name.split("").reverse().join("");
console.log(reversedName);

//write a js code to change the value of an array  
const arr = [1, 2, 3, 4, 5];
arr.push(6);
console.log(arr);

//write a js code to find the factorial of a number using the concept of recursion
function factorial(n){
  if(n === 0){
    return 1;
  }
  return n * factorial(n - 1);
}
console.log(factorial(5));