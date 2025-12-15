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



let username="Anbu"

try {
    console.log(username);
}catch (error){
    console.log("variables in not dinied bro");
    
}finally{
    console.log("code run successfully");
    
}