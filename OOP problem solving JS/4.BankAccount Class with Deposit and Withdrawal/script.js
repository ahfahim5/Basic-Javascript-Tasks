class bankAccount {
  constructor(number, balance) {
    this.number = number;
    this.balance = balance;
    console.log(`Account Number: ${this.number}`);
    console.log(`Account Balance: ${this.balance}`);
  }
  diposit(amount) {
    this.balance += amount;
    console.log(`Deposited:${amount}`);
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdraw:${amount}`);
    } else {
      console.log(`Withdraw amount:${amount}`);
      console.log(`Error`);
    }
  }
  displayBalance() {
    console.log(`Account Balance: ${this.balance}`);
  }
}
const Account = new bankAccount("xyz-123", 1200);

Account.diposit(500);
Account.withdraw(1);
Account.displayBalance();
