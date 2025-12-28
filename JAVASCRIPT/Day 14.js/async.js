// const { reject } = require("async");

// function fetchData(callback){
//     setTimeout(()=>{
//         callback("data Loaded")
//     },5000 )
// }

// fetchData(function(result){
//     console.log(result);
    
// })

// pending , resolve , reject

// let promise = new Promise((resolve , reject)=>{
// let success =true;
// if(success){
//     resolve("Task completesd");
// }
// else{
//     reject("Task Failed");
// }
// });
// promise

// .catch(error=> console.log(error));



// function getDAta(){
//     return new Promise((resolve)=>{
//         setTimeout

//     })
// }






async function showData(){
    return "Hello Async"
}
showData().then(data=> console.log(data));



function fetchData(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("fetched Successfully")
        })
    })
}

async function getResult(){
    let result = await fetchData();
    console.log(result);
    
}
getResult();