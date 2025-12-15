// BankAccount class
class BankAccount {
  // Constructor to initialize account holder and balance
  constructor(accountHolder, balance = 0) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  // Method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`₹${amount} deposited. New balance: ₹${this.balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount > 0) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`₹${amount} withdrawn. Remaining balance: ₹${this.balance}`);
      } else {
        console.log("Insufficient balance!");
      }
    } else {
      console.log("Withdraw amount must be positive.");
    }
  }
}

// Example usage
const myAccount = new BankAccount("Anbu", 5000);
myAccount.deposit(2000);  // ₹2000 deposited. New balance: ₹7000
myAccount.withdraw(3000); // ₹3000 withdrawn. Remaining balance: ₹4000
myAccount.withdraw(5000); // Insufficient balance!
