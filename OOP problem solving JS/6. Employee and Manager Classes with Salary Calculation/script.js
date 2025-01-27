class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  anualSalary() {
    return this.salary * 12;
  }
}
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name,salary);
    this.department = department;
  }
  anualSalary() {
    const basic = super.anualSalary();
    const bonuse = parseInt(prompt("Enter Ammount of Bonuse:"))
    return basic + bonuse;
  }
}
const Manager1 = new Manager("X", 30000, "Soft");
const Manager2 = new Manager("y", 34000, "Web");

console.log(
  `${Manager1.name} is the manager of ${
    Manager1.department
  } and his annual salary is ${Manager1.anualSalary()}`
);
console.log(
  `${Manager2.name} is the manager of ${
    Manager2.department
  } and his annual salary is ${Manager2.anualSalary()}`
);
