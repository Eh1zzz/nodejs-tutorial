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
