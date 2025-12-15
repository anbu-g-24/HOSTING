// core concepts of oops in javascript

// concepts                      meaning
// class                         blueprint for creating Objects
// object                        instance of a class
// constructor                   special method to initialeze objects
// method                        function difined inside a class
// inheritance                   mechanism tyo create a new class from a existing class
// prototype                     template object from which other objects inheritance property and methods



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
// }
//     const p1 =new person("Anbu" , 22, "chennai");
//     p1.greet();
 


// class animal{
//     constructor(name,species){
//         this.name=name;
//         this.species=species;
//     }
//     speak(){
//         console.log(`${this.name} makes a sound.`);
        
//     }
//     class dog extends animal{
//         bark(){
//         console.log(`${this.name}barks`);
//         }
        
//     }
// }

// const a1=new animal("leo","lion");
// a1.speak();
// a1.bark();




class Vehicle{
    this.type=type;
}
Vehicle.prototype.drive=function(){
    console.log(this.type+ "is ");
    
}





