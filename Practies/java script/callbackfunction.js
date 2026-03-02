// let num= 8

// for (i=1; i<=16; i++){
//     console.log(`${i} x ${num} = ${i*num}`);
    
// }



// 3. Call back function

// function callme(name){
//     console.log("Hi "+ name);
   
// }
// function greet(callback){
//     callback("Anbu")

// }
// greet(callme);



// function setData(callback){
//     setTimeout (function (){
//         callback()
//     },2000);
// }
// setData(function (){
//     console.log("Hello macha");
    
// })


// function getData(callback) {
//   setTimeout(function () {
//     callback("Data received da");
//   }, 1500);
// }

// getData(function (msg) {
//   console.log(msg);
// });


// function loadPage(callback){
//     console.log("Loading...");
//     setTimeout(function(){
//         callback();

//     }, 2000);   
// }

// loadPage(function (){
//     console.log("Page Loaded ✅");
    
// })



// IIFE(Immediately Invoked Function)



(function(){
    console.log("Hello everyone");
    
})();

