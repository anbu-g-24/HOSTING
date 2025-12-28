// Student constructor function
function Student(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;
}

// Add method using prototype
Student.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const s1 = new Student("Anbu", 20, "A");
const s2 = new Student("Keerthana", 21, "B");

s1.sayHello();
s2.sayHello();
