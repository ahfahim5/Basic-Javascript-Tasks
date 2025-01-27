class Shape{
  calculateArea() {
    throw new Error("Method 'calculateArea()' must be overridden in subclasses");
  }
}
class Circle extends Shape{
  constructor(radius){
    super()
    this.radius = radius;
  }
  calculateArea(){
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape{
  constructor(height,width){
    super()
    this.height = height;
    this.width = width;
  }
  calculateArea(){
    return this.height * this.width;
  }
}
const circle = new Circle(7);
const circle_Area = circle.calculateArea();
console.log(`Area of circle is ${circle_Area}`);


const rectangle = new Rectangle(10,20);
const rectangle_Area = rectangle.calculateArea();
console.log(`Area of Rectangle is: ${rectangle_Area}`);