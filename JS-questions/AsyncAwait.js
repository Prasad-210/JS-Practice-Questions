//todo  Basic Syntax: Async word

// async function myFunction(){
//  return "Hello World !!";
// }

// const myArrowAsyncFunction  = async()=>{
//   return "Hello Arrow function"
// }

// const obj = {
//     async myMethod(){
//         return "Hello John"
//     }
// }

// async function foo() {
//     return Promise.resolve(101);
// }

//  This function returns a Promise that resolves to 101
// console.log(foo()); // Promise { <resolved>: 101 }

// const myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("I am resolved promise");
//   }, 1000);
// });

// async function handlePromise() {
//   const result = await myPromise;
//   console.log(result);   // "I am resolved promise" (after 1 second)
// }

// handlePromise()   // function calling is very Improtant...

//===================================================================================================

// async function tacklePromise() {
//     console.log("Before await");
//     const result = await foo(); // Function pauses here
//     console.log("After await:", result);
// }

// console.log("I am after tacklePromise()");
// tacklePromise();
// console.log("I continue executing");

// Output order:
// "I am after tacklePromise()"
// "Before await"
// "I continue executing"
// "After await: 101" (when Promise resolves)

//todo Error Handling

//? Basic Error Handling:

// async function handleErrors() {
//   try {
//     const result = await resikyOperation();
//     console.log(result);
//   } catch (err) {
//     console.log("An error occured  ", err);
//   }
// }


//? Complete Example:

// const errorPromise = new Promise((resolve, reject)=>{
//     reject("Error Occured !!")
// });

// async function handleErrorPromise(){
//     try{

//         const result = await errorPromise;
//         console.log(result)

//     }catch(error){
//             console.log("Caught Error ", error)
//     }
// }

// handleErrorPromise()    // Outputs: "Caught error: Error Occured!"