const user={
    name:"Anbu",
    age:"21",
    role:"Developer"
};

const {name , age, role} = user;

console.log(name);
console.log(age);
console.log(role);



const employee = {
    id:1,
    details:{
        email:"anbu@mail.com",
        city:"Chennai"
    }
};

const {
    details:{email,city }
} =employee;

console.log(email);
console.log(city);






