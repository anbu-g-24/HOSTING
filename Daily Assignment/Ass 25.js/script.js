// let products=[
//     {name:"Laptop",price:67000},
//     {name:"Mobile",price:25000},
//     {name:"Headphones",price:2000},
//     {name:"Bike", price:200000}
// ];

// const list = document.getElementById("products");

// products.forEach(function(product){
//     let li=document.createElement("li");
//     li.textContent = product.name;
//     list.appendChild(li);
// });




// Array of products
let products = [
  { name: "Laptop", price: 50000 },
  { name: "Mobile", price: 20000 },
  { name: "Headphones", price: 3000 },
  { name: "Keyboard", price: 1500 }
];

// Select the UL element
let list = document.getElementById("productList");

// Display product names using forEach
products.forEach(function(product) {
  let li = document.createElement("li");
  li.textContent = product.name ,product.price;
  list.appendChild(li);
});
