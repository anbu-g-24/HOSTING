function greet(name, callback){
    console.log("Hello "+ name);
    callback();
}
function sayBye(){
    console.log("GoodBye");
    
}

greet("Anbu",sayBye);



// setTimeout

function SayHello(callback){
    setTimeout(()=>{
        callback("Welcome Anbu")
    },2000)
}
SayHello((result)=>{
    console.log(result);
    
})


// simple example (maths)

function calculate(a,b, callback){
    callback(a,b);

};
calculate(5,3, function(x ,y){
    console.log(x+y);
    
});



// callback Hell


doA(function(){
    doB(function(){
        document(function(){
            console.log("Hellooo");
            
        })
    })
})
