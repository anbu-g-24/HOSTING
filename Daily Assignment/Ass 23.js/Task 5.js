class Mobile {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }

  discount() {
    this.price = this.price - (this.price * 0.10);
    return this.price;
  }
}

let phone1 = new Mobile("Samsung", 15000);
console.log("Original Price:", phone1.price);

phone1.discount();
console.log("Discounted Price:", phone1.price);
