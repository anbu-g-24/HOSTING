// function add(a,b){
//     return a+b
// }

//  var total=add(10,24)
// console.log("total:"+total);

 

// if else

// var homework =true

// if (homework) {
//     console.log("Greate job");
// }
// else {
//     console.log("Finish your homework before playing");
    
// }

// var cookies =false
// if (cookies){
//     console.log("Would you like a cookie");
    
// }
// else{
//     console.log("Time to bake more coolies");
    
// }


//  let age =21;
//  if (age>=18){
//     console.log("you are eligile to vote");
    
//  }
//  else{
//     console.log("you are not eligile to vote");
//  }




// else if

// let marks =100;

// if (marks>=90){
//     console.log("Grade A");
    
// }
// else if(marks>=70){
//     console.log("Grade B");
    
// }
// else{
//     console.log("Grade c");
    
// }




// login check

// let isLoggedIn = true;
// if (isLoggedIn) {
//     console.log("Welcome user");
// }else{
//     console.log("Please Login");
    
// }



// Even or Odd
// let number = 3;
// if (number % 2 === 0){
//     console.log("Even number");   
// }
// else{
//     console.log("Old number");
    
// }







// logical AND && , logical OR || , logical NOT !

// console.log(false && true);
// console.log(true && true);

// console.log(true || true);
// console.log(false|| false);

// console.log(!true);








// var color = "red"

// if(color=="green"){
//     console.log("go");
    
// }else if(color=="yellow"){
//     console.log("ready");
    
// }
// else{
//     console.log("stop");
    
// }




// var season = "summer"

// if(season == "spring"){
//     console.log("Enjoy the blooming flowers");
    
// }
//  if(season === "summer"){
//     console.log("have fun in the sun");
// }
//  if(season = "autumn"){
//     console.log("admire the colorful leaves");
// }


 

// var score=4;
// if(score>= 50){
//     console.log("you need to improve");   
// }
//  else if(score >50 && score<=70) {
//     console.log("Good job");
//  }
 
// else  if(score>70){
//     console.log("Ecellent performance");
    
//  }
// else {
//     console.log("bad");
    
// }

// var number=250;

// if(number % 2==0){
//     console.log("even numbers");
// }
// else{
//     console.log("old numbers");
    
// }



// let prices = [100, 200, 300];

// let totalPrice = prices
// //   .filter(p => p > 150)
// //   .map(p=> p + 10)
// //   .reduce((sum,p) => sum+p,0)
//   .includes(300);
  
 

// console.log(totalPrice);



//ARRAY OF OBJECT

// let users = [
//   { id: 1, name: "Anbu", age: 22 },
//   { id: 2, name: "keeru", age: 25 }
// ];

// users.map(users => console.log(users.name)
// )



// Nested Object

// let student ={
//     name :"Pugazhanthi",
//     marks:{
//         Tamil:45,
//         English:33,
//         Maths :51,
//         Science:38,
//         Sscience:35
//     }
// }

// console.log(student.marks.Tamil);


// let numbers =[45, 33, 51, 38, 35]

// var total = numbers
// .reduce((sum,p) => sum+p,0)


// console.log(total);


// let cart = {
//   items: [
//     { name: "Mobile", price: 10000 },
//     { name: "Charger", price: 500 }
//   ]
// };

// let total = cart.items.reduce((sum, item) => sum + item.price, 0);
// console.log(total);



// let numbers = [10, 20, 30, 40];

// // numbers.forEach(function (num) {
// //   console.log(num);
// // });

// numbers.forEach((num, index) => {
//   console.log(index, num);
// });




// let fruits = ["Apple", "Orange", "Banana"];

// fruits.forEach(fruit => {
//   console.log(fruit);
// });


let prices =[100 , 200, 300];

prices.forEach (prices =>{
    console.log(prices + 10);
    
})

