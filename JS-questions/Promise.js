//todo Example 1

// let loading = false;
// const myPromise = new Promise((resolve, reject) => {
//   loading = true;
//   const success = Math.random() > 0.5;

//   if (success) {
//     resolve("Operation Successful !!🧠");
//   } else {
//     reject("Error ⚠️");
//   }
// });

// myPromise
// .then((result)=>{
//     console.log(result)  //Success
// })
// .catch((err)=>{
//    console.log(err)  //Error
// })
// .finally(()=>{
//     loading = false;  // Stop loading 🚫
//     console.log("Loading", loading)
// })

//todo Example 2

// Three Things You Can Do in .then()
// 🔄 Return another Promise (for async operations)
// 💎 Return a simple value (for sync operations)
// 💥 Throw an error

//? 🔄 Returning Another Promise:

// let getUser = new Promise((resolve, reject) => {
//   const user = {
//     name: "John Doe",
//     email: "jdoe@gmail.com",
//     password: "2345#",
//     permissions: ["db", "dev", "prod"],
//   };

//   resolve(user);
// });

// getUser
//   .then((user) => {
//     console.log(`Got User ${user.name}`);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Bangalore");
//       }, 2000);
//     });
//   })
//   .then((address) => {
//     console.log(`User address is ${address}`);
//   });

//?  Returning a Simple Value:

// getUser
//   .then((user) => {
//     console.log(`Got user ${user.name}`);
//     return user.email;
//   })
//   .then((email) => {
//     console.log(`User email is ${email}`);
//   });

//? 💥 Throwing an Error:

// getUser
// .then(function(user){
//     console.log(`Got the User ${user.name}`);
//     if(!user.permissions.includes("hr")){
//         throw new Error("You are not allowed to access HR Module 🚫")
//     }

//     return user.email;
// })
// .then((email)=>{
//     console.log( `the user email is ${email}`)
// })
// .catch((err)=>{
//    console.log(err) // 💥 Catch the error
// })

//? Rethrowing from .catch()

// let promise401 = new Promise((resolve, reject)=>{
//     reject(401)
// });

// promise401
// .catch((error)=>{
//     console.log(error)

//     if(error === 401 ){
//         console.log(`Rethrowing 401`);
//         throw error;
//     }else{
//        //handle other error here
//     }
// })
// .then((result)=>{
//         console.log(result)
// })
// .catch((error)=>{
//  console.log(`Handling ${error} here`)
// })

//?  .finally() Passes Through

// let primiseFinally = new Promise((resolve,reject)=>{
//     resolve("Testing Finally !!")
// })

// primiseFinally
// .finally(()=>{
//     console.log("Running Finally")
// })
// .then((result)=>{
//    console.log(result)
// })

//?  Multiple .then() ≠ Chaining
// Calling .then() multiple times on the same promise is NOT chaining:

// let promise = new Promise((resolve, reject) => {
//   resolve(10);
// });

// promise
// .then((value)=>{
//     console.log(value + 1)  // 11
// })

// promise
// .then(()=>{
//     console.log(Value + 2) // 12 (nit 13!)
// })

//Promise.all()

// const promise1 = Promise.resolve(33);
// const promise2 = Promise.resolve(44);
// const promise3 = Promise.resolve(55);

// Promise.all([promise1,promise2,promise3])
// .then((result)=>{
//     console.log(result)// array of all rsult
// })
// .catch((err)=>{
//     console.log(err)  //if any promise fails
// })

//========================================================================================

//todo 🎯 Practice Tasks

//? 🏃 Task 1: Create Basic Promises
//  Create a promise that resolves after 2 seconds with the message "Timer completed"

// let timerpromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Timer is completed ⏰");
//   }, 2000);
// });

// timerpromise
// .then((message) => console.log(message));  //Timer is completed ⏰




//? Task 2: Promise Chain
//Create a chain that multiplies a number by 2, then adds 10, then checks if result > 20

// let numberPromise = new Promise((resolve)=> resolve(5));

// numberPromise
// .then((num)=> num *2)   //10
// .then((num)=> num + 10) //20
// .then((num)=>{
//     if(num > 20){
//         return "number is greater than 20"
//     }else{
//         throw new Error(`Number is not greater than 20`)
//     }
// })
// .then((result)=> console.log(result))  // number is greater than 20
// .catch((error)=> console.log(error))   // Number is not greater than 20




//? Task 3: Handle Multiple Promises
//  Use Promise.all() to handle three API calls simultaneously

// let api1 = new Promise((resolve)=> setTimeout(()=> resolve("API 1 Data"), 1000));
// let api2 = new Promise(resolve => setTimeout(()=> resolve("API 2 Data"), 1400));
// let api3 = new Promise((resolve)=> setTimeout(()=> resolve('API 3 data'), 700));

// let api4 = new Promise((resolve, reject)=> setTimeout(()=> reject('API 4 data'), 700));

// Promise.all([api1, api2, api3, api4])
// .then((result)=>{
//     console.log("All API completed :" , result);   // All API completed : [ 'API 1 Data', 'API 2 Data', 'API 3 data', 'API 4 data' ]
// })
// .catch((err)=>{
//     console.log("One of the API is Failed :", err);  //One of the API is Failed : API 4 data
// })



//? Task 4: Error Handling
// Create a promise that randomly resolves or rejects, handle both cases

// let randomPromise = new Promise((resolve, reject) => {
//   let num = Math.random(); // 0.230683288
//   let randomNum = Math.floor(num * 100); //23

//   if (randomNum > 5) {
//     resolve(`👌 Success!! Random Number : ${randomNum}`);
//   } else {
//     reject(`❎ Failed!! Random Number: ${randomNum}`);
//   }
// });

// randomPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("Promise Completed");
//   });




//?  Task 5: Fetch Data Chain
// 🔐 Create a user authentication flow using promises


// function authenticateUser(username, password) {
//     return new Promise((resolve, reject) => {
//         if (username === "admin" && password === "password") {
//             resolve({ id: 1, username: "👤 admin", role: "🔧 administrator" });
//         } else {
//             reject("🚫 Invalid credentials");
//         }
//     });
// }

// function getUserPermissions(user) {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(["📖 read", "✍️ write", "🗑️ delete"]);
//         }, 1000);
//     });
// }

// function loadDashboard(user, permissions) {
//     return new Promise(resolve => {
//         resolve(`📊 Dashboard loaded for ${user.username} with permissions: ${permissions.join(", ")}`);
//     });
// }

// // 🚀 Usage
// authenticateUser("admin", "password")
//     .then(user => {
//         console.log("✅ User authenticated:", user.username);
//         return getUserPermissions(user);
//     })
//     .then(permissions => {
//         console.log("🔑 Permissions loaded:", permissions);
//         return loadDashboard({ username: "👤 admin" }, permissions);
//     })
//     .then(dashboard => {
//         console.log(dashboard);
//     })
//     .catch(error => {
//         console.log("🚨 Authentication failed:", error);
//     });








//?  Task 6: Promise Race
// ⏱️ Create a timeout mechanism using Promise.race()

function fetchTimeout(url, timeout=3000){
 let fetchPromise = new Promise((resolve, reject)=>{

    setTimeout(()=>{
        resolve(`Data from ${url}`)
    },2000)
 })

 let timeOutPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Request Timeout")
    }, timeout)
 })

 return Promise.race([fetchPromise, timeOutPromise])
}


fetchTimeout("https://api.example.com/data", 3000)
.then((data)=>{
    console.log(data)  //Data from https://api.example.com/data
})
.catch((error)=>{
   console.log("Error", error)
})
