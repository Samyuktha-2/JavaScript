// Var (function-scoped)
var name = "Alice";
console.log("var name:", name);

//Let (Block-scoped, can be reassigned)
let age = 25;
console.log("let age:", age);
age = 26; // Reassignment is allowed
console.log("let age after reassignment:", age);

// Using const (block-scoped, cannot be reassigned)
const PI = 3.14159;
console.log("const PI:", PI);
//const prevents reassignment, NOT modification of content
const user = { name: "Sam" };
user.name = "John";  // This works
user = { name: "John" }; // error


// const with objects - the reference is constant, not the value
const user = { name: "Bob" };
user.name = "Charlie"; // This works!
console.log("const user:", user);


//Block scope example
if (true) {
  let blockScoped = "I only exist here";
  console.log(blockScoped); // Works
}
console.log(blockScoped); // ReferenceError!

//Function Scope example
function example() {
  if (true) {
    var functionScoped = "I exist in the whole function";
    let blockScoped = "I exist in the block only";
    console.log(blockScoped);
  }
  console.log(functionScoped); // Works!
  console.log(blockScoped); //Reference Error;
}

for(var i = 0; i < 3; i++){
  setTimeout(() => console.log("var i: ", i),10);   //prints all 3 3 3  --> this occurs only when setTimeout is used
  console.log(i);   //prints 0 1 2
}



for(let i = 0; i < 3; i++){
  setTimeout(() => console.log("let i: ",i), 10);
}
//prints 0 1 2
//Because var is function-scoped, all callbacks share the same variable, and by the time they execute, the loop has completed with value 3
