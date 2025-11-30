//callback

// function greet(name, cb){
//     console.log("Hello " + name);
//     cb();
// }

// function sayGoodMorning(){
//     console.log("Good Morning!")
// }


// greet('John',sayGoodMorning )


//todo Types of Callback

//? synchronus 

// const numbers = [1,2,3,4,5];

// const doubled = numbers.map((number)=> number*2);

// console.log(doubled)  //[ 2, 4, 6, 8, 10 ]



//? Asynchronus cb

// setInterval(function(){
//     console.log("This will runs after 2 seconds of time")
// }, 2000)

// Note : setInterval or setTimeout will work



//? Promise


const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
         const sucess = Math.random() > 0.5;

         if (sucess){
            resolve("Operation Sucessful 👌🧠")
            
         }
         else{
           reject("Operation failed ⚠️");
         }
    },1000)
});


myPromise
.then(function(result){
    console.log(result)    // handle success
    return "Next Step !!"
})
.then(function(data){
    console.log(data)   // Handle next step
})
.catch((err)=>{
    console.log(err);   //Handle Any error in the chain
}) 