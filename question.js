// console.log("Hello World");
// console.warn("Hello world");
// alert("hello world");

// ***********************
// 2. JavaScript Program to Add Two Numbers
// ***********************
// function add(x = 0, y = 0) {
//   return x + y;
// }

// let sum = (num1, num2) => {
//   let total = num1 + num2;
//   console.log(total);
// };

// function add(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   console.log(total);
// }
// console.log(add([2, 3]));

// ********************
//3. JavaScript Program to Calculate the Area of a Triangle
// ********************

// function input(base, height) {
//   return `Area of triangle is ${base * height * 0.5}`;
// }

// let info = (base, height) => {
//   let areaOfTriangle = `${base * height * 0.5}`;
//   console.log(`Area of triangle is ${areaOfTriangle}`);
// };

// ********************
//4.JavaScript Program to Find the Square Root
// ********************
// function squareRoot(num) {
//   let sqrt = Math.sqrt(num);
//   return `Square root of ${num} is ${sqrt}`;
// }

// ********************
// 5. Javascript Program to Generate a Random Number
// ********************
// function random() {
//   let randomNum = Math.ceil(Math.random() * 10);
//   return randomNum
// }

// ********************
// 6. Javascript Program to Check if a number is Positive, Negative, or Zero
// ********************
// function number(num) {
//   if (num === 0) {
//     return `${num} is Zero`;
//   } else if (num > 0) {
//     return `${num} is a positive number`;
//   } else if (num < 0) {
//     return `${num} is a negative number`;
//   }
// }

// ********************
// 7. Javascript Program to Check if a Number is Odd or Even
// ********************
// function number(num){
//   if(num % 2 === 0){
//     return `${num} is an Even Number`
//   } else{
//     return `${num} is an Odd Number`
//   }
// }

// ********************
// 8.  JavaScript Program to Find the Largest Among Three Numbers
// ********************
// function number(a, b, c) {
//   if (a > b && a > c) {
//     return `${a}`;
//   }
//    else if (b > a && b > c) {
//     return `${b}`;
//   }
//    else if (c > a && c > b) {
//     return `${c}`;
//   }
// }

// ********************
// 9. JavaScript Program to Check Prime Number
// ********************
function isPrime(num) {
  if (num === 1 || num === 0) {
    return `${num} is not a prime number`;
  }
  for (let i = num - 1; i > 1; i--) {
   if (num % i === 0) {
      return `${num} is not a prime number`;
    }
  }
  return `${num} is a prime number`;
}