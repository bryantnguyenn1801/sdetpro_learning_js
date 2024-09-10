class CheckingMoney extends BankingAccount {
    private overdraftLimit: number;
    private minimumLeft: number;

    constructor(initialBalance: number, overdraftLimit: number, minimumLeft: number = 50) {
        super(initialBalance);
        this.overdraftLimit = overdraftLimit;
        this.minimumLeft = minimumLeft;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (this.balance - amount >= this.minimumLeft - this.overdraftLimit) {
            this.balance -= amount;
        } else {
            console.log(`[Error] Can't withdraw. Minimum required balance is ${this.minimumLeft}`);
        }
    }

    getBalance(): number {
        return this.balance;
    }
}