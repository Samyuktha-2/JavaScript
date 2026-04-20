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

// const with objects - the reference is constant, not the value
const user = { name: "Bob" };
user.name = "Charlie"; // This works!
console.log("const user:", user);
