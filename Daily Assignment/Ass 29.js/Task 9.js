let cart = [];

// Add item to cart
function addToCart(item) {
  const existingItem = cart.find(i => i.id === item.id);

  if (existingItem) {
    cart = cart.map(i =>
      i.id === item.id
        ? { ...i, qty: i.qty + 1 }   // spread operator
        : i
    );
  } else {
    cart = [...cart, { ...item, qty: 1 }]; // spread operator
  }
}

// Remove item from cart
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
}

// Example usage
addToCart({ id: 1, name: "Shoes", price: 1200 });
addToCart({ id: 2, name: "T-Shirt", price: 500 });
addToCart({ id: 1, name: "Shoes", price: 1200 });

console.log(cart);

removeFromCart(2);
console.log(cart);
