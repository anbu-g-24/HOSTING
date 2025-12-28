class shape{
    constructor(name){
        this.name=name;
    }
    display(){
        console.log(`Name:${this.name}`);
        
    }
}
class Circle extends shape{
    constructor(radius){
        super("Circle");
        this.radius = radius;
    } 

    calculateArea(){
        return Math.PI * this.radius * this.radius;
    }
}

const circle1 = new Circle(7);

circle1.display();
console.log("Area:", circle1.calculateArea().toFixed(2));
