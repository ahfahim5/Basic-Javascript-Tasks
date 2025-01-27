class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        return `This is a ${this.year} ${this.make} ${this.model}.`;
    }
}

class Car {
    constructor(make, model, year, doors) {
        this.vehicle = new Vehicle(make, model, year);
        this.doors = doors;
    }

    getDescription() {
        return `${this.vehicle.getDescription()} with ${this.doors} doors.`;
    }
}

class Truck {
    constructor(make, model, year, cargoCapacity) {
        this.vehicle = new Vehicle(make, model, year);
        this.cargoCapacity = cargoCapacity;
    }

    getDescription() {
        return `${this.vehicle.getDescription()} with ${this.cargoCapacity}kg of cargo capacity.`;
    }
}

const myCar = new Car('Toyota', 'Corolla', 2020, 5);
const myTruck = new Truck('Ford', 'F-150', 2019, 1000);

console.log(myCar.getDescription());
console.log(myTruck.getDescription());