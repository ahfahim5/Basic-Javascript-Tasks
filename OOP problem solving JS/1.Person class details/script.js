class person{
    constructor(name,age,country){
        this.name = name;
        this.age = age;
        this.country = country;
    }
    displayDetails(){
        console.log(`Name : ${this.name}`);
        console.log(`Age : ${this.age}`);
        console.log(`Country : ${this.country}`);
    }
}
const person1 = new person ('X', 30,"USA");
const person2 = new person ('Y', 35,"UK");

console.log("Person 1 Details:");
person2.displayDetails();