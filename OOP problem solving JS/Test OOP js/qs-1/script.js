const myCar = new Car('Toyota', 'Corolla', 2020, 5);
const myTruck = new Truck('Ford', 'F-150', 2019, 1000);
const myVehicle = new Vehicle('Audi','R6',2005);

class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        return `This is a ${this.year} ${this.make} ${this.model}.`
    }
}
class Car extends Vehicle {
    constructor(make, model, year, doors) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.doors = doors;
    }

    getDescription() {
        return `This is a ${this.year} ${this.make} ${this.model},${this.doors}`
    }
}
class Truck extends Vehicle {
    constructor(make, model, year, cargoCapacity) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.cargoCapacity = cargoCapacity;
    }

    getDescription() {
        return`This is a ${this.year}, ${this.make} ,${this.model} ,${this.cargoCapacity}`;
    }
}




console.log(myVehicle.getDescription())
console.log(myCar.getDescription())
console.log(myTruck.getDescription())
