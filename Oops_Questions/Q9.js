// 2. Encapsulation & Getters/Setters
// Modify the BankAccount class to make//  balance a private
//  attribute and use//  getter and setter methods to access 
// and modify it.
class BankAccount {
    constructor(price) {
        this._balance = price; // Use a private attribute
    }

    // Getter for balance
    get balance() {
        return this._balance;
    }

    // Setter for balance
    set balance(amount) {
        if (amount < 0) {
            console.log("Balance cannot be negative.");
        } else {
            this._balance = amount;
        }
    }
}

// Create instances
let account1 = new BankAccount(4000);
let account2 = new BankAccount(600);

// Access balance using getter
console.log(account1.balance); // Output: 4000

// Modify balance using setter
account1.balance = 5000;
console.log(account1.balance); // Output: 5000

// Trying to set a negative balance
account2.balance = -100; // Output: "Balance cannot be negative."
console.log(account2.balance); // Output: 600 (remains unchanged)
