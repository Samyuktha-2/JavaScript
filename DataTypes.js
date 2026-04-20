2 types of Data Types

--> Primitive Types (Immutable, stored by value)
--> Non-Primitive Types (Mutable, stored by reference)


Primitive Types  -  7 Types 
Number 
String	 
Boolean 
undefined	 
null	 
Symbol (ES6)
BigInt	 

//string
const template2 = `${greeting}, ${name}`; //backtick for variables

// Number - integers and decimals
const age = 25;
const price = 19.99;
const negative = -10;
const infinity = Infinity;
const notANumber = NaN;

// Boolean - true or false
const isActive = true;
const isLoggedIn = false;

// Undefined - declared but not assigned
let user;
console.log(user); // undefined

// Null - intentionally empty
const data = null;

// Symbol - unique identifier (ES6)
//creates a unique and immutable value
const id = Symbol("userId");
const user = {
  name: "Sam",
  [id]: 123,
  age: 20
};
const user1 = {
    name: "Mithu",
    [id]: 124
};
console.log(user);   //{ name: 'Sam', age: 20, [Symbol(userId)]: 123 }
console.log(user1);  //{ name: 'Mithu', [Symbol(userId)]: 124 }

console.log(user1[id]);  //124

// BigInt - large integers (ES2020)
const huge = 9007199254740991n;

Non-Primitive Types  -  3 Types
Object
Array
Function

//object
let user = {
  name: "Sam",
  age: 21
};

//array
let arr = [1, 2, 3];

//functions
function greet() {
  console.log("Hi");
}


Primitive → Stored by VALUE
let a = 10;
let b = a;

b = 20;

console.log(a); // 10

Non-Primitive → Stored by REFERENCE
let obj1 = { name: "Sam" };
let obj2 = obj1;

obj2.name = "John";

console.log(obj1.name); // John
