//todo ================= Q1: Remove duplicates from an array ================================

// Problem:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]
// ⚡ Key idea → Remove repeated values and keep only unique ones.

//? Solution 1: Using Set (ES6, most common)

// function removerDuplicates(arr){
//   return [...new Set(arr)]
// }

// new Set(arr) → stores only unique values.
// [...set] → converts set back to array.

// console.log(removerDuplicates([1, 2, 2, 3, 4, 4, 5])); //[ 1, 2, 3, 4, 5 ]

//?-----------------------------------------------------------------------------------------------------------------------------

//? Solution 2: Using filter + indexOf

// function removerDuplicates(arr){

//   return arr.filter((value,index)=> arr.indexOf(value) === index)

// }

// console.log(removerDuplicates([1, 2, 2, 3, 4, 4, 5])); //[ 1, 2, 3, 4, 5 ]

//todo ==================== Q2: Find the intersection of two arrays ================================

// Problem:
// Given two arrays, return the elements that appear in both.
// Example:
// Input: arr1 = [1, 2, 2, 3, 4], arr2 = [2, 2, 3, 5]
// Output: [2, 2, 3] (if duplicates considered)
// Or [2, 3] (if only unique values).
// 👉 Interviewers sometimes clarify whether duplicates should be included or not.

//? Solution 1: Using filter + includes

// function intersection(arr1, arr2){
//     return arr1.filter((num)=> arr2.includes(num))
// }

// For each element in arr1, check if it exists in arr2.
// If yes → keep it.

// console.log(intersection([1, 2, 2, 3, 4], [2, 2, 3, 5]));  // [ 2, 2, 3 ]

//?-----------------------------------------------------------------------------------------------------------------------------

//? Solution 2: Using Set
// function intersection(arr1,arr2){
//     const set1 = new Set(arr1);
//     const set2 = new Set(arr2);
//     return [...set1].filter((num)=> set2.has(num))
// }

// console.log(intersection([1, 2, 2, 3, 4], [2, 2, 3, 5]));  // [ 2, 3 ]

//?-----------------------------------------------------------------------------------------------------------------------------

//todo ============== Q3: Find the union of two arrays ========================================

// Problem:
// Given two arrays, return their union (all unique elements from both).
// Example:
// Input: arr1 = [1, 2, 2, 3], arr2 = [2, 3, 4, 5]
// Output: [1, 2, 3, 4, 5]

//? Solution 1: Using Set (Best & Cleanest)

// function union(arr1, arr2){

//   return [...new Set([...arr1, ...arr2])]
// }

// console.log(union([1, 2, 2, 3], [2, 3, 4, 5]))   //[1, 2, 3, 4, 5]

//?-----------------------------------------------------------------------------------------------------------------------------

//? Solution 2: Using concat + filter + indexOf

// function union(arr1,arr2){
//     const comnined = [...arr1, ...arr2];
//     return comnined.filter((value, index)=> comnined.indexOf(value) === index)
// }

// console.log(union([1, 2, 2, 3], [2, 3, 4, 5]));  // [ 1, 2, 3, 4, 5 ]

//todo ==================== Q4: Rotate an array by k positions =================================

// Problem:
// Rotate the array elements to the right by k positions.
// Example:
// Input: arr = [1, 2, 3, 4, 5, 6, 7], k = 3
// Output: [5, 6, 7, 1, 2, 3, 4]

// function rotate(arr, k){
//  k = k % arr.length; // handle if k > n

//  return arr.slice(-k).concat(arr.slice(0,-k))
// }

// console.log(rotate([1,2,3,4,5,6,7], 3));  // [5,6,7,1,2,3,4]

//?-----------------------------------------------------------------------------------------------------

//todo =============================find the maximum and minimum elements.=================================

//? Solution 1: Using Math.max & Math.min (Spread Operator)

// function findMinMax(arr){
//     return {
//         min: Math.min(...arr),
//         max: Math.max(...arr)
//     }

// }

// console.log(findMinMax([3, 7, 1, 9, 2]))  //{ min: 1, max: 9 }

//?-----------------------------------------------------------------------------------------------------

//? Solution 2: Using Loop (Classic O(n))

// function findMinMax(arr) {
//   let min = arr[0], max = arr[0];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//     if (arr[i] > max) max = arr[i];
//   }

//   return { min, max };
// }

// console.log(findMinMax([3, 7, 1, 9, 2]));
// { min: 1, max: 9 }

//todo ===================== Flatten a nested array ===========================================

// Problem:
// Convert a nested array into a single-level array.
// Example:
// Input: [1, [2, [3, 4], 5], 6]
// Output: [1, 2, 3, 4, 5, 6]

//? Solution 1: Using flat() (ES2019)

// function flattenArray(arr){
//     return arr.flat(Infinity)
// }
// console.log(flattenArray([1, [2, [3, 4], 5], 6]))  // [ 1, 2, 3, 4, 5, 6 ]

//?-----------------------------------------------------------------------------------------------------

//? Solution 2: Using reduce + Recursion

// function flatternArray(arr){
//     return arr.reduce((acc,ele)=>{
//         return acc.concat(Array.isArray(ele) ? flatternArray(ele) : ele)
//     }, [])
// }

// console.log(flatternArray([1, [2, [3, 4], 5], 6])) // [ 1, 2, 3, 4, 5, 6 ]

//?-----------------------------------------------------------------------------------------------------

//todo ====================== Sort an array of numbers correctly ========================================
// Problem:
// Sort an array of numbers in ascending and descending order.
// Example:
// Input: [3, 1, 11, 2, 25]
// Output (ascending): [1, 2, 3, 11, 25]
// Output (descending): [25, 11, 3, 2, 1]

// Mistake in JavaScript
// console.log([3, 1, 11, 2, 25].sort());
// [1, 11, 2, 25, 3] ❌ Wrong!

// Because Array.sort() converts elements to strings and sorts lexicographically ("11" comes before "2").

//? Solution 1: Correct Way with Compare Function

// const arr = [3, 1, 11, 2, 25];

// const ascending = arr.slice().sort((a,b)=> a-b)

// const descending = arr.slice().sort((a,b)=> b-a)

// Use .slice() to avoid mutating original array.
// a - b → ascending order.
// b - a → descending order.

// console.log(ascending);  // [1, 2, 3, 11, 25]
// console.log(descending); // [25, 11, 3, 2, 1]

//?-----------------------------------------------------------------------------------------------------

//todo ============================ Find frequency of elements in an array =============================

// Problem:
// Given an array, count how many times each element appears.
// Example:
// Input: [1, 2, 2, 3, 1, 4, 2]
// Output: {1: 2, 2: 3, 3: 1, 4: 1}

//? Solution 1: Using Object

// function findFrequency(arr){
//     const freq = {};
//     for(let num of arr){
//         freq[num] = (freq[num] || 0) + 1
//     }
//     return freq
// }

// console.log(findFrequency([1, 2, 2, 3, 1, 4, 2]))  //{1: 2, 2: 3, 3: 1, 4: 1}

//?-----------------------------------------------------------------------------------------------------

//? Solution 3: Using reduce

// function findFrequency(arr){
//    return arr.reduce((acc, num)=>{
//     acc[num] = (acc[num] || 0) + 1
//     return acc;
//    }, {})
// }

// console.log(findFrequency([1, 2, 2, 3, 1, 4, 2])) //{ '1': 2, '2': 3, '3': 1, '4': 1 }

//? Now you want to collect numbers whose frequency = 1 into a separate array.

// function findFrequency(arr) {
//   const freq = arr.reduce((acc, num) => {
//     acc[num] = (acc[num] || 0) + 1;
//     return acc;
//   }, {});

//   const uniqueOnes = Object.keys(freq)
//     .filter(key => freq[key] === 1)     // freq[key] --->  2 3 1 1
//     .map(Number);

//   return { freq, uniqueOnes };
// }

// console.log(findFrequency([1, 2, 2, 3, 1, 4, 2]));
//  { freq: { '1': 2, '2': 3, '3': 1, '4': 1 }, uniqueOnes: [3, 4] }

//todo ================================== Group users by their age =====================================================

// INPUT:
// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 },
// ];

// const groupedUserbyAge = (users) =>{

//     return users.reduce((acc,user)=>{

//? if the age key doesn't exist, initialize with []

//         if(!acc[user.age]){
//             acc[user.age] = []
//         };
//         acc[user.age].push(user.name);
//         return acc
//     }, {})
// }

// console.log(groupedUserbyAge(users))  //{ '25': [ 'Alice', 'Charlie' ], '30': [ 'Bob' ] }

//?-----------------------------------------------------------------------------------------------------

//todo Count how many users per age

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 },
// ];

// function countByAge(users){
//     return users.reduce((acc, user )=>{
//         acc[user.age] = (acc[user.age] || 0) + 1;
//         return acc;
//     }, {})
// }

// console.log(countByAge(users));  //{ '25': 2, '30': 1 }

//?-------------------------------------------------------------------------------------------------------------------------------------

//? Q2. Find the oldest user

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 28 },
// ];

// function findOldest(users){

//     return users.reduce((oldest, user)=>{
//         return user.age > oldest.age ? user : oldest
//     })

// }

// console.log(findOldest(users)) //{ name: 'Bob', age: 30 }

//?------------------------------------------------------------------------------------------------------------------------------------

//? Q4. Create a map of ID → name

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];
//o/p --> { 1: "Alice", 2: "Bob", 3: "Charlie" }

// function mapToId(users){
//     return users.reduce((acc, user)=>{
//         acc[user.id] = user.name;
//
//         return acc;
//     }, {})
// }

// console.log(mapToId(users)); //{ '1': 'Alice', '2': 'Bob', '3': 'Charlie' }

//? ------------------------------------------------------------------------------------------------------------------------------------

//? Q5. Flatten skills of users

// const users = [
//   { name: "Alice", skills: ["JS", "React"] },
//   { name: "Bob", skills: ["Python", "Django"] },
// ];

//output: [ 'JS', 'React', 'Python', 'Django' ]

// const flattenSkills = (users)=>{
//     return users.reduce((acc,user)=>{
//         return [...acc, ...user.skills]
//     }, [])
// }

// console.log(flattenSkills(users)) //[ 'JS', 'React', 'Python', 'Django' ]

//? ------------------------------------------------------------------------------------------------------------------------------------

//? Q6. Find duplicate ages

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 },
//   { name: "David", age: 30 },
// ];

// Output : [25, 30]

// const findDuplicates = (users) =>{

//     const count =  users.reduce((acc, user)=>{
//         acc[user.age] = (acc[user.age] || 0) + 1;
//         return acc;
//     }, {})

//     return Object.keys(count).filter((age)=> count[age] > 1)

// }

// console.log(findDuplicates(users)) // [25, 30]

//? ------------------------------------------------------------------------------------------------------------------------------------

//? Q7. Sort users by age

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Charlie", age: 22 },
//   { name: "Bob", age: 30 },
// ];

// O/P:
// [
//   { name: "Charlie", age: 22 },
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
// ]

// const sortedUser = [...users].sort((a,b)=> a.age - b.age);
// console.log(sortedUser)

//? ------------------------------------------------------------------------------------------------------------------------------------

//? Q8. Find users who share the same age

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 },
//   { name: "David", age: 30 },
// ];

//O/P
// {
//   25: ["Alice", "Charlie"],
//   30: ["Bob", "David"]
// }

// const groupByAge = users.reduce((acc,user)=>{

//         if(!acc[user.age]){
//             acc[user.age] = []
//         }

//         acc[user.age].push(user.name)

//         return acc
//     },{})

// console.log(groupByAge) //{ '25': [ 'Alice', 'Charlie' ], '30': [ 'Bob', 'David' ] }

//? ------------------------------------------------------------------------------------------------------------------------------------

//? remove duplicate objects by id from the array.

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
//   { id: 1, name: "Mice" }
// ];

// O/P
// [
//   { id: 1, name: "Alice" },   // keeps first 1
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" }
// ]

// const uniqusers = users.reduce((acc, user)=>{

//     if(!acc[user.id]){
//         acc[user.id] = user
//     }

//     return acc
// },{})

// console.log(uniqusers)

// const result = Object.values(uniqusers)
// console.log(result)

//================================================================================================================

//todo Interview Question: Convert Array → Object

//Convert this array into an object where each key is the user’s id,
//and the value is the user’s details (name and age).

// INPUT:
// const users = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 22 },
// ];

//OUTPUT
// {
//   1: { name: "Alice", age: 25 },
//   2: { name: "Bob", age: 30 },
//   3: { name: "Charlie", age: 22 }
// }

//? Using reduce() (Most Common and Best Practice)

// const userObj = users.reduce((acc, user) => {
//   acc[user.id] = { name: user.name, age: user.age };

//   return acc;
// }, {});

// console.log(userObj)

//? Using for...of Loop

// const userObj = {};
// for (const user of users) {
//   userObj[user.id] = { name: user.name, age: user.age };
// }

// console.log(userObj);

//================================================================================================================

//todo Convert Array of Nested Objects into Keyed Object (by ID)

//? 🧠 Problem Statement
// You are given an array of objects, where each object has an id, name, and a nested address object.
// Convert this array into an object keyed by id, and ensure that the nested address remains intact.

// const users = [
//   {
//     id: 1,
//     name: "Alice",
//     address: { city: "Pune", zip: 411001 },
//   },
//   {
//     id: 2,
//     name: "Bob",
//     address: { city: "Mumbai", zip: 400001 },
//   },
//   {
//     id: 3,
//     name: "Charlie",
//     address: { city: "Delhi", zip: 110001 },
//   },
// ];

// const userMapId = users.reduce((acc, user) => {
//   acc[user.id] = { name: user.name, address: user.address.city };

//   return acc;
// }, {});

// console.log(userMapId)`

//OUTPUT:

// {
//   '1': { name: 'Alice', address: 'Pune' },
//   '2': { name: 'Bob', address: 'Mumbai' },
//   '3': { name: 'Charlie', address: 'Delhi' }
// }

//todo 🚀 Bonus: Flatten Nested Structure (Advanced Follow-up)

// Interviewer might ask:
// “Can you flatten nested address objects (e.g., merge city and zip into a single object)?”

// const userMapId = users.reduce((acc, user) => {
//   acc[user.id] = {
//     name: user.name,
//     ...user.address, // spread nested fields to top-level
//   };

//   return acc; //important to add return acc
// }, {});

// console.log(userMapId);

// OUTPUT:
// {
//   1: { name: "Alice", city: "Pune", zip: 411001 },
//   2: { name: "Bob", city: "Mumbai", zip: 400001 },
//   3: { name: "Charlie", city: "Delhi", zip: 110001 }
// }

//================================================================================================================

//todo Flatten a Deeply Nested Array of Objects

//? 🧠 Problem Statement

// You are given an array that contains nested arrays and objects,
// and you need to flatten it into a single array of objects.
// This type of question checks your understanding of recursion,
// array methods (reduce, concat, flat), and deep traversal.

// INPUT:
// const data = [
//   {
//     id: 1,
//     name: "Alice",
//     children: [
//       { id: 2, name: "Bob" },
//       {
//         id: 3,
//         name: "Charlie",
//         children: [{ id: 4, name: "David" }],
//       },
//     ],
//   },
// ];

// OUTPUT:
// [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
//   { id: 4, name: "David" },
// ];

// function flatten(data) {
//   return data.reduce((acc, item) => {
//     // Step 1: Push the current object (excluding children)
//     const { children, ...rest } = item;
//     acc.push(rest);

//     // Step 2: If children exist, recursively flatten them
//     if (children && Array.isArray(children)) {
//       acc.push(...flatten(children));
//     }

//     // Step 3: Return accumulator for next iteration
//     return acc;
//   }, []);
// }

// const result = flatten(data);
// console.log(result);

//================================================================================================================

//todo Merge Multiple Arrays of Objects by Unique Key

// You have multiple arrays of objects.
// If two objects have the same id, merge their data.
// The merge should:
// Combine unique fields
// Override values where conflict occurs (or preserve original, based on requirement)
// INPUT:
// const arr1 = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
// ];

// const arr2 = [
//   { id: 2, age: 30 },
//   { id: 3, name: "Charlie" },
// ];

// OUTPUT:
// [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie" }
// ]

//? Solution : Using reduce()

// const merged = [...arr1, ...arr2].reduce((acc, item) => {

//   const existing = acc.find(obj => obj.id === item.id);

//   if (existing) {
//     // Merge existing and new data
//     Object.assign(existing, item);
//   } else {
//     acc.push({ ...item });
//   }

//   return acc;
// }, []);

// console.log(merged)

//================================================================================================================

// 🧩 Problem Statement
// You’re given:
// An array of objects, each having { id, isActive, value }
// A numeric variable threshold
// You need to:
// Filter objects where isActive === true and value > threshold
// Create a new array containing only id and value
// Sort this new array in descending order by value

//INPUT:
// const data = [
//   { id: 1, isActive: true, value: 50 },
//   { id: 2, isActive: false, value: 80 },
//   { id: 3, isActive: true, value: 30 },
//   { id: 4, isActive: true, value: 90 },
//   { id: 5, isActive: true, value: 70 }
// ];

// const threshold = 60;

// OUTPUT

// [
//   { id: 4, value: 90 },
//   { id: 5, value: 70 }
// ]

// function getActiveAboveThreshold(data, threshold) {
//   return data
//     .filter(item => item.isActive && item.value > threshold) // ✅ Step 1
//     .map(({ id, value }) => ({ id, value }))                 // ✅ Step 2
//     .sort((a, b) => b.value - a.value);                     // ✅ Step 3
// }

// console.log(getActiveAboveThreshold(data, threshold));

//? ✅ To make it safer:
// .filter(item => item.isActive === true && typeof item.value === "number" && item.value > threshold)

//? Using reduce() (for functional/advanced interviews)
// function getActiveAboveThresholdReduce(data, threshold) {
//   return data.reduce((acc, curr) => {
//     if (curr.isActive && curr.value > threshold) {
//       acc.push({ id: curr.id, value: curr.value });
//     }
//     return acc;
//   }, []).sort((a, b) => b.value - a.value);
// }

// console.log(getActiveAboveThresholdReduce(data, threshold));

//=========================================================================

//  const obj = [
//     {apple: 2, orange: 1, banana: 3, grapes: 1},
//     {apple: 2, orange: 1, banana: 3},
//     {apple: 2, orange: 1, banana: 3, grapes: 2},
//     ];

//Expected Result:
//{apple: 6, orange: 3, banana: 9, grapes: 3}
//NOTE: Using reduce() method

// const obj = [
//   { apple: 2, orange: 1, banana: 3, grapes: 1 },
//   { apple: 2, orange: 1, banana: 3 },
//   { apple: 2, orange: 1, banana: 3, grapes: 2 },
// ];

// const result = obj.reduce((acc, curr) => {
//   for (let key in curr) {
//     acc[key] = (acc[key] || 0) + curr[key];
//   }
//   return acc;
// }, {});

// console.log(result);
// { apple: 6, orange: 3, banana: 9, grapes: 3 }


//?==================== Alternative method ======================
// const result = obj.reduce((acc, curr) => {
//   Object.entries(curr).forEach(([key, value]) => {
//     acc[key] = (acc[key] || 0) + value;
//   });
//   return acc;
// }, {});




//todo ==============================================================================

// let obj = [
//   { Sno: 1, score: 20 },
//   { Sno: 2, score: 30 },
//   { Sno: 1, score: 50 }
// ];

// [
//   { Sno: 1, score: 70 },
//   { Sno: 2, score: 30 }
// ]


// const newArr = Object.values(
//   obj.reduce((acc, curr) => {
//     // If Sno does not exist -> create it
//     if (!acc[curr.Sno]) {
//       acc[curr.Sno] = { ...curr }; 
//     } else {
//       // If exists -> add score
//       acc[curr.Sno].score += curr.score;
//     }
//     return acc;
//   }, {})
// );

// console.log(newArr);
// // [ { Sno: 1, score: 70 }, { Sno: 2, score: 30 } ]

