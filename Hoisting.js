//What is Hoisting?
//JavaScript moves variable declarations to the top of their scope before execution

//var hoisting
console.log(x);  //undefined
var x = 10;
console.log(x); // 10
//var declaration are hoisted and intialised with undefined

// let/var hoisting
console.log(y);  //error
let y = 20;
//let and const are hoisted but NOT initialized. Accessing them before declaration throws a ReferenceError. This period is called the Temporal Dead Zone (TDZ).
