
// function showUser(){
//             const JsonData =` {"name": "Anbu" , "age":21 , "city":"chennai"}`
//         }

//          const user =JSON.parse("JsonData");

//            const userObj=JSON.parse(jsonData);

//            console.log(userObj);






// fetch("https://api.github.com/users/arun-cloud-dev/followers")

// .then((response) => response.json())

// .then((data) => {

// data.forEach((n) => {

// console.log(n.login);


// const user={
//     name:"Anbu",
//     Age:"21"
// }

// const jsonData=JSON.stringify(user)
// console.log(jsonData);

// const userObj=JSON.parse(jsonData)
// console.log(userObj);




// const productJson =`[{"id": 1, "name":"Laptop"}, {"id": 2,"name":"Mobile"}]`;

// const products =JSON.parse(productJson)

// products.forEach(p => {
//     console.log(p.name);
    
    
// });


// fetch("https://api.github.com/users/arun-cloud-dev/followers")
// .then(Response => Response.json())
// .then(data=>{
//     data.forEach(n => {
//         console.log(n.login);    
//     });
    
// })

// .catch(Error => console.log(Error));



// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json()) // JSON.parse happens here
//   .then(data => {
//     data.forEach(n => {
//         console.log(n.name);
        
        
//     });
//   })
//   .catch(error => {
//     console.log(error);
//   });



  fetch ("https://jsonplaceholder.typicode.com/users")
  .then (response =>response.json())
  .then(data=>{
    data.forEach(a=>{
        console.log(a.name);
        
    });
  })
  .catch (error =>{
    console.log(error);
    
  }
  )
  