// core concepts of oops in javascript

// concepts                      meaning
// class                         blueprint for creating Objects
// object                        instance of a class
// constructor                   special method to initialeze objects
// method                        function difined inside a class
// inheritance                   mechanism tyo create a new class from a existing class
// prototype                     template object from which other objects inheritance property and methods


// class person {
//   constructor(name){
//     this.name = name
//   }
//   greet(){
//     console.log(`I am ${this.name}`);
//   }
// }
// const a= new person("Anu");
// a.greet();


// class person{
//     constructor(name,age,city,country){
//         this.name=name;
//         this.age=age;
//         this.city=city;
//         this.country=country;
//     }
//     greet(){
//         console.log(`Hello, i am ${this.name} and i am ${this.age} years old,i am from ${this.city} `);
        
//     }
//   }
//     const p1 = new person("Anbu" , 22, "chennai");
//     p1.greet();
 




// class animal{
//     constructor(name,species){
//         this.name=name;
//         this.species=species;
//     }
//     speak(){
//         console.log(`${this.name} makes a sound.${this.species} `);
        
//     }
//   }
// const a1=new animal("leo","lion", "dog");
// a1.speak();





// class Vehicle{
//     this.type=type;
// }
// Vehicle.prototype.drive=function(){
//     console.log(this.type+ "is ");
    
// }



// function Findmax(ary) {
//  return Math.max(...ary);
// }
// console.log(Findmax([2,3,7,5,9, 25]));




// function remove(arr) {
//   return [...new Set(arr)];
// }

// console.log(remove([1,2,2,3,4,4,5, 7 , 6 ,5]));





// async function getUsers() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
//   console.log(data);
// }

// getUsers();



