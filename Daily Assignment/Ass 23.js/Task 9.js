// Create an array of product objects
const products = [
  { id: 1, name: "Laptop", price: 50000, category: "Electronics" },
  { id: 2, name: "Mobile", price: 20000, category: "Electronics" },
  { id: 3, name: "Shoes", price: 3000, category: "Fashion" }
];

// Example: Loop through products and use destructuring
products.forEach(product => {
  const { id, name, price, category } = product; // Destructuring
  console.log(`Product ID: ${id}, Name: ${name}, Price: ₹${price}, Category: ${category}`);
});
