// // Creating unique user IDs using Symbols
// const userId1 = Symbol("user");
// const userId2 = Symbol("user"); 
// // Creating user objects
// let user1 = {
//   name: "Alice",
//   userId1: "ID_001"
// };

// let user2 = {
//   name: "Anbu",
//   userId2: "ID_002"
// };

// // Display users and their unique IDs
// console.log("User 1 Name:", user1.name);
// console.log("User 1 ID:", user1.userId1);

// console.log("User 2 Name:", user2.name);
// console.log("User 2 ID:", user2.userId2);

// // Check uniqueness
// console.log(userId1 === userId2); // false (always unique)


const userId1 = Symbol("user");
const userId2 = Symbol("user");

let user1 ={
  name:"Anbu",
  userId1:"ID_001"
};
let user2 ={
  name:"Kumar", 
  userId2:"ID_002",
};
console.log("user 1 name:",user1.name );


