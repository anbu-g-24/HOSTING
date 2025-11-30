let a={ sore:10};
let b= a;

b.score=20
console.log(a.score)



// var, let, cosnt


// the traditiona keyword for declaring varables in js 

var msg="hello wold";
{
    var name="Anbu";
    console.log(msg);
}
console.log(name);


// globle scope  , local scope


let age=20;
age =21
console.log(age)    // globle scope  


// block element
{    
let age=30;
console.log(age) ; 
// local scope      
}




const PI =3.14;

{
    const  PI=2.5;
    console.log(PI);
    // logal scope
}

console.log(PI)











