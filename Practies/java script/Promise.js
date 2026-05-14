// // 1.   Promise

// const promise = new Promise((resolve, reject) => {
    
//     let success ="true"

//     if(success){
//         resolve("Data recived")
//     }
//     else[
//         reject("Data failed")
//     ]
// })

// promise
// .then(res =>console.log(res))
// .catch(err=>console.log(err))
// .finally(()=>{
//     console.log("Thank you");
    
// });




// 2. Promise vs Asynce / await +finally
 
// async function anbu() {
//     try{
//         const response = await fetch("https://api.github.com/users/arun-cloud-dev/followers")  
        
        
//         const followers = await response.json();

//         console.log("Followers List : ",followers );

//         followers.forEach (user =>{
//             console.log(user.login);
            
//         });   
//     }
//     catch(error) {
//         console.log(error.message);
//     }
//     finally{
//         console.log("Thank you! welcome");
        
//     }
// }

// anbu()



