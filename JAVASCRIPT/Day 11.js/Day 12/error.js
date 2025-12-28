// let x=10;

// if (x==90){
//     console.log("true");   
// }else{
//     console.log("False");
    
// }


// let num=23;

// let up = num.toUppercase();

// console.log(up);



// let arr = new Array(-41);
// console.log(arr);





// why error handling is important

// prevents application crashing
// improves user exprencens
// HTMLDivElement is debugging
// requried in real world application (FormData, api , patyments)



// try{
//     // code that may cause error
// }
// catch (error){
//     // runs if the error occures
// }
// finally{
//     // runs always
// }



// let username="Anbu"

// try {
//     console.log(username);
// }catch (error){
//     console.log("variables in not difined bro");
    
// }finally{
//     console.log("code run successfully");
    
// } 


// let  username1 ="Anbu"

// try{
//     console.log(username1);
    
// }
// catch (error){
//     console.log("this is not working");
// }
// finally{
//     console.log("wellcome to javascript");
    
// }

// function widthdraw(amount) {
//     if (amount > 5000){
//         throw new Error("Widthdrawal limit exceeded"); 
//     }
//     console.log("Widthdrawal successfull");
// }
//     try {
//         widthdraw(4000);
//     } catch (a) {
//         console.log(a.message);
        
//     }
    

function widthdraw(amount){
    if(amount > 5000){
        throw new Error ("withdrawal limit exceeded ")
    }
    console.log("withdrawal Successfull");

    
}

try {
    widthdraw("7000")
}catch(a){
    console.log( a.message);
    
}