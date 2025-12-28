class Employee {
    constructor(name,salary){
    this.name=name;
    this.salary=salary; 
    }

 displayInfo() {
    console.log(`Employee name: ${this.name}`);
    console.log(`salary:${this.salary}`);
}
}

const Emp1=new Employee("Anbu", 35000);
Emp1.displayInfo();