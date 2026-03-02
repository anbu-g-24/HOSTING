// // Glopal scope

// var name="anbu"
// function sayName(){
//     console.log(name);
    
// }
// sayName()




// // Function scope

// function anbu(){ 
//     let age=21;
//     console.log(age);   
// }
// anbu()

// // block scope

// if (true){
//     const city="chennai"
//     console.log(city); 
// }

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const counter = outer();

// counter(); // 1
// counter(); // 2
// counter();


// function bankAccount() {
//   let balance = 1000;

//   return {
//     deposit(amount) {
//       balance += amount;
//       console.log(balance);
//     },
//     withdraw(amount) {
//       balance -= amount;
//       console.log(balance);
//     }
//   };
// }

// const account = bankAccount();
// account.deposit(500);   // 1500
// account.withdraw(200);  // 1300


// let a = 10;

// function one() {
//   let b = 20;

//   function two() {
//     let c = 30;
//     console.log(a, b, c);
//   }

//   two();
// }

// one();


function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

fetchData((result) => {
  console.log(result);
});


// function fetch(callback){
//   setTimeout(()=>{
//     callback("Data Received");
//   },2000);
// }
// fetch((result)=>{
//   console.log(result);
  
// })




// const myPromise = new Promise((resolve, reject) => {
//   let success = true;

//   if (success) {
//     resolve("Task completed");
//   } else {
//     reject("Task failed");
//   }
// });


// function bankaccount(){
//     let balance = 1000;

//     return{
//         deposit(amount){
//             balance +=amount
//             console.log(balance);
            
//         },
//         withrawal(amount){
//             balance -=amount
//             console.log(balance); 
//         }
//     }
// }
// const Bank = bankaccount();

// Bank.deposit(500);
// Bank.withrawal(800)

// function SayHello(callback){
//   setTimeout(() => {
//     callback("Welcome to Chennai")
  
//   }, 2000);
// }
// SayHello((Ak)=>{
//   console.log(Ak);
  
// })




// const promise = new Promise((resolve, reject)=>{
//   let success = true;

//   if(success){
//     resolve("Payment resived")
//   }else{
//     reject("Payment Failed")
//   }
// })