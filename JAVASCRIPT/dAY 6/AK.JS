// // let str = "amma"
// // let reversed=""
// // for(let i = str.length-1;i>=0;i--){
// //     reversed+=str[i]
// // }if(str===reversed){
// //     console.log(str+ " this is palindrom");
    
// // }else{
// //     console.log(str+ " this is not  palindrom");
    
// // }             



// let str = "appa"
// let reveresd= ""
// for(let i = str.length-1;i>=0;i--){
//     reveresd+=str[i]
// }if(str===reveresd){
//     console.log(str+ " this is palindrom");
    
// }else{
//     console.log(str+= " this is not palindrom");
    
// }


// let str ="anna"
// let reversed = ""
// for(let i= str.length-1 ; i>=0 ;i--){
//     reversed += str[i]
// }if(str ===reversed){
//     console.log(str+ " This is palindrom" );
// }else{
//     console.log(str+ " This is not palindrom");
    
// }



// let str ="welcome"
// let values = str.charAt(1);

// console.log(values.toUpperCase());


// let str = "welcome"
// let reversed =""
// for(let i = str.length-1 ; i>=0 ; i--){
//     reversed += str[i]
// }
// console.log(reversed);


//Building
// let num = [1,2,3,4,5]
// num.push(6)
// console.log(num);

//remove the elements
// let num = [1,2,3,4,5]
// num.pop()
// console.log(num);


//Without using push method

// let num = [1,2,3,4]
// num[num.length]=5
// console.log(num);

//remove element from array
// let sum = [1,2,3,4,5]
// sum.splice(3,1)
// console.log(sum);

//Find the Biggest number in the array
// let num =[100,50,200,150]

// num.big = num[0]
// for(let i=1;  i<num.length; i++){
//     if(num[i]>num.big){
//         num.big = num[i]
//     }   
// }
// console.log(num.big);


// let name = "ANNA"
// let reversed = ""

// for (let i=name.length-1; i>=0; i--){
//     reversed+= name[i]
// }if(name===reversed){
//     console.log(name+ " This is palindrom");
    
// }else{
//     console.log(name+ " This is not palindrom");
    
// }


// let str ="welcome to anbu"
// console.log(str.split(" ")
// .map((s)=>s[0].toUpperCase()+s.slice(1)).join(" ")
// );


//Callback Function
// function greet(name, callback){
//     console.log("Hello", name);
//     callback();
// }
// function done(){
//     console.log("Completed");
// }
// greet("Anbu", done);


//What happens if a function does not return anything
// function test() {
//     console.log("Hello");
// }

// console.log(test());




//Function Hoisting
// greet();

// function greet() {
//     console.log("Hello");
// }



// forEach
// let arr = [1, 2, 3,4,5,6,7,8,9,10];

// arr.forEach((num)=>{
//     console.log(num);
    
// })


// let arr = [1, 2, 3];

// let result = arr.map((num) => {
//     return num * 2;
// });

// console.log(result);