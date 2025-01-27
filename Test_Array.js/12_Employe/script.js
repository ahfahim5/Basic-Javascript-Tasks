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
    super(name, salary);
    this.department = department;
  }
  anualSalary() {
    const basic = super.anualSalary();
    const bonus = parseInt(prompt("Enter the bonus ammount:"));
    return basic + bonus;
  }
}
const Manager1 = new Manager("Kamal", 30000, "Soft");
const Manager2 = new Manager("jamal", 35000, "web");

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
