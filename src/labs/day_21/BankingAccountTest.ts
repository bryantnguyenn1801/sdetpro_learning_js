const savingsAccount = new SavingMoney(500, 100);
const checkingAccount = new CheckingMoney(300, 100);

console.log('--- SavingsAccount ---');
console.log('Initial balance:', savingsAccount.getBalance());
savingsAccount.deposit(200);
console.log('Balance after deposit:', savingsAccount.getBalance());
savingsAccount.withdraw(400);
console.log('Balance after withdraw:', savingsAccount.getBalance());
savingsAccount.withdraw(300); 

console.log('--- CheckingAccount ---');
console.log('Initial balance:', checkingAccount.getBalance());
checkingAccount.deposit(100);
console.log('Balance after deposit:', checkingAccount.getBalance());
checkingAccount.withdraw(200);
console.log('Balance after withdraw:', checkingAccount.getBalance());
checkingAccount.withdraw(150);