class BankAccount {
    constructor(acc_name, acc_balance, status) {
        // your code here
        //initialises account
        this.account_name = acc_name;
        this.account_balance = acc_balance;
        this.status = status;
    }

    getBalance() {
        // your code here
        console.log("Your balance is :" + this.account_balance);
        return this.account_balance;
    }

    setopen() {
        // your code here
        if (this.status === null) {
            this.status = "active";
            console.log(" Your account has been created.")
            console.log(this);
            return "acc activated";
        }
        else {
            return "already activated";
        }
    }

    getdeposit(amount) {
        // your code here
        // adds amount to the balance
        if (typeof amount === 'string') {
            return 'invalid input';
        }
        else {
            if (this.status !== "active") {
                return "account " + this.status;
            }
            else {
                this.account_balance += amount;
                console.log("You have deposited " + amount + ". Your balance is:" + this.account_balance);
                return this.account_balance;
            }
        }
    }

    getwithdraw(amount) {
        // your code here
        //subtracts amount from balance
        if (this.status === "active") {
            if (this.account_balance < amount) {
                console.log("Your acc balance is insufficient!");
                return "insufficient balance";
            }
            else if (this.account_balance > amount) {

                this.account_balance -= amount;
                console.log("you have withdrawn " + amount + ". Your balance is:" + this.account_balance);
                return this.account_balance;
            }
            else {
                this.acc_balance -= amount;
                console.log(" you are withdrawing all your money");
                return this.acc_balance;
            }
        }
        else {
            console.log("Impossible to withdraw. acc closed");
            return this.status;
        }
    }

    setclose() {
        this.status = "closed";
        console.log("Your acc has been closed!");
        console.log(this);
        return "acc closed!"
    }
}


module.exports = new BankAccount("Blessing", 1000000, null);
