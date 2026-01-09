function greet(name, callback){
    setTimeout(function(){
        console.log("Hello" , name);
        callback();
    },2000)
}

function afterGreeting(){
    console.log("welcome to our website!");
    
}
 
greet("anbu", afterGreeting);