class Employee{
    constructor (name, salary){
        this.name=name;
        this.salary=salary;
}
displayInfo(){
    console.log(`Emplay name: ${this.name}`);
    console.log(`salary:${this.salary}`);
}
}

class Manager extends Employee{
 constructor(name , salary, department){
    super(name, salary);
    this.department = department;
 }
 departmentManagerInfo(){
    this.displayInfo();
    console.log(`Department: ${this.department}`);
    
 }
}

const man1 = new Manager("Anbu", 40000, "IT");
man1.departmentManagerInfo();


