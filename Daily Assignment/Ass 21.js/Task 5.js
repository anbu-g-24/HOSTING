

const user = {name: "Anbu", age: 21};
for (let key in user) {
  console.log(key, user[key]);
}

const colors =["red", "green", "blue"];
for (let color in colors){
    console.log(color,colors[color] );
    console.log(color,colors[color].toUpperCase());
    
}
