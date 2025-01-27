class Rectangle{
    constructor (width,height){
        this.width = width;
        this.height = height;
    }
    calculateArea(){
        return this.width * this.height;
    }
    calculatePerimeter(){
        return 2 * (this.height + this.width);
    }
}
const rectangle = new Rectangle(5,3);

const area = rectangle.calculateArea();
const perimeter = rectangle.calculatePerimeter();

console.log(`Area is : ${area}`);
console.log(`Perimeter: ${perimeter}`);