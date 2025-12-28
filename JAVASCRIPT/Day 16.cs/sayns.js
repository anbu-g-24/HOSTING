1
//  console.log("start");

// for(i=1 ; i<=1e2; i++){
//     console.log(i);
    
// }

// console.log("End");


   2 //  callback method

// function fetchData(callback){
//     setTimeout(()=> {
//         callback ("data Fethed ")

//     },2000)
// }

// fetchData((result)=>{
//     console.log(result);
    
// })


// call back hall
// hards to debugger
// poor reality


// Promise

// pending 
// fullifilled
// Rejected

    3 // promis method

// const promise1= new Promise((resolve, reject)=>{
//     let success = false;

//     if(success){
//         resolve("operation was successfull");
//     }
//     else{
//         reject("something want ronge");
//     }
// });

// promise1
// .then(result =>console.log(result))
// .catch (error =>console.error(error))
// .finally(()=> console.log("opertaion Finished"));



// 4   async /await

// function fetchData(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>resolve("data Received"),2000);
//     });
// }

// async function loaddata(){
//     const result =await fetchData();

// }






5

// function fetchData(){
//     return new Promise((resolve , reject)=>{
//         const success = true;

//         setTimeout (()=>{
//             if (success)resolve("Data Received");
//                 else reject("faild to fetch data");
//         }, 2000);
//     })
// }


// async function loaddata(){
//     try{
//         const result = await fetchData();
//         console.log("Async/Await:", result); 
// } catch(err){
//     console.log("Async/Await:" , err);
    
// }
// }
// loaddata();



// (function(){
//     let secreate ="hidden";
//     console.log(secreate);
    
// }());

// navigator.geolocation.getCurrentPosition(success , error , optyions);

// success runs if location fetched 
// error = runs if permission denied or failed




// PROMISE METHOD
3
// const promise = new Promise((resolve, reject) => {
//      let success = true;
//      if (success) {
//         resolve("Operation was successfully");
//      }
//      else{
//         reject("something went wrong");
//      }
// });

// promise
//    .then(result => console.log(result))
//    .catch(error => console.log(error))
//    .finally(()=>console.log("operation was finished") );


4

// async / await

// function fetchData(){
//     return new Promise((resolve) => {
//         setTimeout(()=>resolve("DATA RECIVED"),200);
//     })
// }

//  async function anbu() {
//     const result = await fetchData();
//     console.log(result);   
//  }
//  anbu();

 2
// function fetchData(callback){
//     setTimeout(()=>{
//         callback("Hi")
//     })
// }

// fetchData((result)=>{
//     console.log(result);
    
// })


3

//     const promise =new Promise((resolve, reject) => {
//         let success = true;
//         if(success){
//             resolve("✅ you are select")
//         }
//         else{
//             reject("❌ you are reject")

//         }
//     },200)


// promise 
// .then(result => console.log(result))
// .catch(error => console.log(error))
// .finally(()=>console.log("operation finished❤️‍🔥")
// );



5

// function fetchData(){
//     return new Promise((resolve, reject) => {
//         let success = true;
//         setTimeout(() => {
//             if(success) resolve("Data Recived 😇");
//             else reject("Failed to fetch Data 😤");
            
//         },200);
//     });
// }

// async function anbu() {
//     try{
//         const result = await  fetchData();
//         console.log("Async / Await:", result);
//     }catch( err){
//         console.log("Async/ Await:", err);
        
//     }
// }
// anbu();



(function (){
    console.log("Hi Anbu");
    
})();