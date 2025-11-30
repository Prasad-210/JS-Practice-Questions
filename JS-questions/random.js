// normal

// let i = 0;

// for (i; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

//5 5 5 5 5

//? ✅ WHY THIS HAPPENS (Simple Explanation)
// let i = 0 is declared outside the loop → meaning the same single variable i is shared for all iterations.
// setTimeout runs after the loop finishes, not during.
// By the time callbacks run, the loop has incremented i to 5.
// All timeout callbacks read the final value (5) → so they print 5 five times.
// This is a classic interview question.

//? clousure
// let i = 0;

// for (i; i < 5; i++) {
//   (function (x) {
//     setTimeout(() => {
//       console.log(x);
//     }, 1000);
//   })(i);
// }

//0 1 2 3 4

//? HOW THIS WORKS
// (function(x){ ... })(i) is an IIFE (Immediately Invoked Function Expression).
// Each iteration calls the function with a different value of i.
// The parameter x becomes a separate copy stored in closure memory.
// When setTimeout runs, it uses x (not the outer i).
// So it prints:

//? ====================================================================================================================================

// function Person(){

// }
// console.log(Person.prototype)  //{}

// const obj = {};

// console.log(obj.__proto__)

// function Person(name){
//     this.name = name
// }

// Person.prototype.sayHi = function(){
//     console.log(`Hi ${this.name}`)
// }

// const c1 = new Person("Hitesh")
// c1.sayHi()

//=================

// function Car(brand){
//     this.brand = brand
// }

// Car.prototype.start = function(){
//   console.log(`${this.brand} started`)
// }

// const c1 = new Car("BMW")
// const c2 = new Car("TATA")

// c1.start()
// c2.start()

// Here:
// start() is created once in prototype
// All objects reuse the same function
// No memory duplication

//What is __proto__?

// const car= {};
// console.log(car.__proto__ === Object.prototype)

//===============================================================================

// Prototype inheritance means:
// ➡️ Objects can inherit methods and properties from another object.

// const animal = {
//     eat(){
//         console.log("Eating")
//     }

// };

// const dog = {
//     bark(){
//         console.log("Brk")
//     }
// }

// dog.__proto__ = animal;
// dog.eat();
// dog.bark();

// //================

// function User(name){
//   this.name = name;
// }

// User.prototype.login = function(){
//     console.log(`The User ${this.name} is Logged In`)
// }

// const u1 = new User("prasad")

// u1.login()

//? Question 1 — Solution
// Create a constructor function Animal and add a method using prototype

// function Animal(name){
//     this.name = name
// }

// Animal.prototype.speak = function(){
//     console.log(`The ${this.name} Speaks`)
// }

// const a1 = new Animal("Dog")
// const a2 = new Animal("Baffalo")

// a1.speak()  //The Dog Speaks
// a2.speak()  //The Baffalo Speaks

// ✅ Question 2 — Solution
// Check the prototype of the object

// const user = { name : 'Prasad'};

// console.log(user.__proto__); //[Object: null prototype] {}
// console.log(user.__proto__ === Object.prototype); //true

// ✅ Question 3 — Solution
// Add a property in prototype and access it

// function Car(){}

// Car.prototype.wheels = 4;

// const c1 = new Car();

// console.log(c1.wheels)  //4

// ✅ Question 4 — Solution
// Prove that methods are shared in the prototype
// Create constructor function User
// Add method greet() in prototype
// Create two objects: u1, u2
// Check if both objects share the same function instance

// function User(name) {
//   this.name = name;
// }

// User.prototype.greet = function () {
//   console.log(`Hell ${this.name}`);
// };

// const u1 = new User("Prasad");
// const u2 = new User("Vaibhav");

// console.log(u1.greet === u2.greet) //true






// ✅ Question 5 — Solution
// Show that prototype chain reaches null


// let x = {};

// console.log(x.__proto__); //// Object.prototype
// console.log(x.__proto__.__proto__); //null





// ✅ Question 6 — Solution
// Create an inheritance chain: Animal → Dog


// Parent constructor
// function Animal() {}

// Animal.prototype.eat = function () {
//     console.log("Eating 🍽️");
// };

// // Child constructor
// function Dog(name) {
//     this.name = name;
// }

// // Inherit prototype
// Dog.prototype = Object.create(Animal.prototype);

// // Fix constructor reference
// Dog.prototype.constructor = Dog;

// // Child method
// Dog.prototype.bark = function () {
//     console.log(this.name + " says: Bark 🐶");
// };

// // Testing
// const d1 = new Dog("Tommy");

// d1.eat();   // Inherited from Animal
// d1.bark();  // Own method






//✅ Question 7 — Solution
// Add method to prototype after object creation

// function Person(name){
//     this.name = name
// }

// const  p1 = new Person("Neeraj");

// Person.prototype.sayHi = function(){
//     console.log(`Hi , I am ${this.name}`)
// }

// p1.sayHi() // Hi, I am Neeraj







// ✅ Question 8 — Solution
// Differentiate own properties vs prototype properties using hasOwnProperty()

// function Student(){
//     this.name = "Prasad"  //own property
// }


// Student.prototype.city = "Pune";

// const s1 = new Student();

// console.log(s1.hasOwnProperty("name"));  // true (own property)
// console.log(s1.hasOwnProperty("city"));  // false (inherited)


// console.log(s1.name); //Prasad
// console.log(s1.city); //Pune





// ✅ Question 9 — Solution
// Using Object.create() to inherit properties


const father = {surname : "Jogi"};

const son = Object.create(father);
son.name = "Prasad";


console.log(son.name)  //own 
console.log(son.surname)  //Inherited from father

console.log(son.hasOwnProperty("surname"));  //false
console.log(son.__proto__ === father)
