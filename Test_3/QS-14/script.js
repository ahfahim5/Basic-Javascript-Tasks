class car {
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDetails(){
        return `Car: ${this.make} ${this.model} ${this.year}`;
    }
};
const newCar = new car("Toyota", "Corolla", 2020);
console.log(newCar.getDetails());