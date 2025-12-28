
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  discountedPrice(discountPercent) {
    const discountAmount = (this.price * discountPercent) / 100;
    return this.price - discountAmount;
  }
}

const product1 = new Product("Mobile", 20000);

console.log("Name:",product1.name);
console.log("Original Price:", product1.price);
console.log("Discounted Price:", product1.discountedPrice(10)); // 10% discount
