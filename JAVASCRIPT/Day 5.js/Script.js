// function greet(name , callback)
// {
//     console.log("Hello,"+name);


// }

// function sayGoodbye(){
//     console.log("Goodbye");
    
// }
// greet("Anbu,"+sayGoodbye)




//  function greet(name){
//    console.log("Hello,"+ name +"!");

//  }
//  greet("Anbu")



// greet("Anbu");
// function greet(name){
//     console.log("Hello,"+name+"!");
    
// }





// const add=function(a,b){
//     return a + b;
// }
// const result = add(5,3);
// console.log(result);


// earo function =>
 // const mulply =(a,b)=> a*b


// function greet(name="guest"){
//     console.log("Hi " + name);
// }
// greet("Anbu");
// greet("Keeru");
// greet("Harish");
// greet("Dhanush");
// greet();
 



// function square(num){
//     return num*num;
// }
// const result =square(5)
// console.log(result);


// global scope - accessible from anywhere in the code.
// local  scope - accessible only within a specific function.
// block  scope - accessible only within a specific block.



// let x=10;
// function test(){
//     let y=5
//     console.log(x+y);
    
// }
// test()


// GLOBAL SCOPE
// const globalVar ="I am a global variable";
// var oldScopeVar ="I am a global variable(using var)";

// function helloSay(){
//     console.log(globalVar);
//     console.log(oldScopeVar);   
// }
// helloSay()

// if(true){
//  console.log(globalVar);
//     console.log(oldScopeVar);      
// }




  
// local scope
// function showLocalScope(){
//     const localVar="I am Anbu";
//     var oldLocalVar="I'm ANBARASU"

//     console.log(localVar);
//     console.log(oldLocalVar);
// }
// showLocalScope()


// Block scope
// if(true){
//     const blockVar="I am a block-scope variable";
//     let blockVar1 ="I am a block-scope variable (using let)";
//     var blockVar2 ="I am a function / global scoped (var) not block-scope variable";
//     const blockVar3=""

//     console.log(blockVar); 
//     console.log(blockVar1);
//     console.log(blockVar2);
// }
// console.log(blockVar2);




// Initialization
//    const sayhello=function(){
//     console.log("This is initialization");
    
//    }
//    sayhello()
  

// callback function
// Highlight();
// function Highlight() {
//     console.log("This is a highlight function");
    
// }


// function callme(fn){
//     fn()
// }
// callme(()=>console.log("callback running"))




// callingback function
function greet(name , callback)
{
    console.log("hello ,"+name);  
    callback() 
}

function sayGoodbye()
{
    console.log("Goodbye");
}
 greet("Anbu" , sayGoodbye)