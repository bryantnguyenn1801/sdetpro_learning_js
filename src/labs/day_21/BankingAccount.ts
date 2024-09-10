abstract class BankingAccount {
    protected balance: number;

    constructor(initialBalance: number) {
        this.balance = initialBalance;
    }

    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
    abstract getBalance(): number;
}