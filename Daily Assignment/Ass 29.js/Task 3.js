// const promise = new Promise((resolve, reject) => {
//     let success =false;

//     if(success){
//         resolve("Operation was successully");
//     }
//     else{
//         reject("operation failure");
        
//     }
// })

// promise
// .then(result =>console.log(result))
// .catch(error =>console.log(error)
// );



function greet(name){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        console.log("Hello", name);
        resolve("Greeting Done")
    },2000)
    })
    
}

greet("Anbu")

     . then((message)=>{
        console.log("welcome");
        console.log(message);
        
        
     })
     

     .catch(error => console.log(error));

