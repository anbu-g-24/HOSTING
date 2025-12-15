// Base constructor: Vehicle
function Vehicle(brand, speed) {
  this.brand = brand;
  this.speed = speed;
}

// Method for Vehicle
Vehicle.prototype.drive = function() {
  console.log(`${this.brand} is driving at ${this.speed} km/h`);
};

// Constructor: Car (inherits from Vehicle)
function Car(brand, speed, fuelType) {
  Vehicle.call(this, brand, speed); // Call Vehicle constructor
  this.fuelType = fuelType;
}

// Inherit Vehicle prototype
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

// Method for Car
Car.prototype.honk = function() {
  console.log(`${this.brand} is honking!`);
};

// Constructor: ElectricCar (inherits from Car)
function ElectricCar(brand, speed, battery) {
  Car.call(this, brand, speed, "Electric"); // Fuel type is Electric
  this.battery = battery;
}

// Inherit Car prototype
ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

// Method for ElectricCar
ElectricCar.prototype.charge = function() {
  console.log(`${this.brand} is charging. Battery at ${this.battery}%`);
};

// Example usage:
const tesla = new ElectricCar("Tesla Model 3", 150, 80);

tesla.drive();  // Tesla Model 3 is driving at 150 km/h
tesla.honk();   // Tesla Model 3 is honking!
tesla.charge(); // Tesla Model 3 is charging. Battery at 80%
