class BankAccount{
    constructor(accountNumber,accountHolderName,balance){
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount
        console.log(`Amount: ${amount} deposited into account ${this.accountNumber}`);
    }
    withdraw(amount){
        if(amount <= this.balance){
            this.balance -= amount;
        console.log(`Amount${amount},Withdraw from account ${this.accountNumber}`);  
        }else{
            console.log(`Not enough balance in ${this.accountNumber}, Balance is :${this.balance}`);
        }
    }
    transfer(amount , reciverAccount){
        if(amount <= this.balance){
            this.balance -= amount;
            reciverAccount.deposit(amount);
            console.log(`Amount $${amount} transferred from account ${this.accountNumber} to account ${reciverAccount.accountNumber}.`);
        }else{
            console.log(`Not enough balance in ${this.accountNumber}, Balance is :${this.balance}`);
        }
    }
    displayBalance(){
        console.log(`Account: ${this.accountNumber}, Balance :${this.balance}`);
    }
}

const account1 = new BankAccount ('AC-001', "X", 2000);
const account2 = new BankAccount ('AC-002','Y',5000);

account1.displayBalance();
account2.displayBalance();

account1.deposit(700);
account1.displayBalance();

account1.withdraw(500); 
account1.displayBalance();

account1.transfer(900, account2); 
account1.displayBalance(); 
account2.displayBalance();