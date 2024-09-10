class SavingMoney extends BankingAccount {
    private minimumBalance: number;

    constructor(initialBalance: number, minimumBalance: number) {
        super(initialBalance);
        this.minimumBalance = minimumBalance;
    }

    deposit(amount: number): void {
        this.balance += amount;
    }

    withdraw(amount: number): void {
        if (this.balance - amount >= this.minimumBalance) {
            this.balance -= amount;
        } else {
            console.log(`[Error] Insufficient balance. Minimum balance required: ${this.minimumBalance}`);
        }
    }

    getBalance(): number {
        return this.balance;
    }
}