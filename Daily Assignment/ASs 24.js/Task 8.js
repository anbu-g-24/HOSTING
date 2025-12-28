class student{
    constructor(name, age, gread){
        this.name=name;
        this.age=age;
        this.gread=gread;
    }
    display() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Greade: ${this.gread}`);
        console.log(`---------------------`);
        
        
    }
}

const student1=new student("Anbu",21,"A");
const student2=new student("Dinesh",22,"A+");
const student3=new student("Santhosh",25,"c");


student1.display();
student2.display();
student3.display();