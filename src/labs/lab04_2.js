let bankAccounts = [{
    name: 'Bryant',
    accountNumber: '1234',
    routingNumber: 'AAA123',
    balance: 1000
}]

let clonedAccount = JSON.parse(JSON.stringify(bankAccounts[0]));
clonedAccount.accountNumber = '5678';
clonedAccount.name = 'Grace';
clonedAccount.balance = 2000;


bankAccounts.push(clonedAccount);
console.log(bankAccounts);


function findAccount(account) {
    return bankAccounts.find(acc => acc.accountNumber === account);
}

function displayAccountInfo(account) {
    console.log(`Account Number: ${account.accountNumber}`);
    console.log(`Name: ${account.name}`);
    console.log(`Routing Number: ${account.routingNumber}`);
    console.log(`Balance: $${account.balance.toFixed(2)}`);
}

function updateBalance(account, amount) {
    if(amount <= account.balance){
        account.balance -= amount;
        console.log(`New balance: $${account.balance.toFixed(2)}`);
    }
    else{
        console.log("Insufficient funds.");
    }
}

function main() {
    while (true) {
        console.log("=== Banking application===");
        console.log("1. Find an account");
        console.log("2. Update balance");
        console.log("0. Exit the program");
        const prompt = require('prompt-sync')({ sigint: true });
        const choice = parseFloat(prompt('Please input your choice: '));
        switch (choice) {
            case 1:
                const accountNumber = prompt('Please enter your account number: ');
                let account = findAccount(accountNumber);
                if (account) {
                    displayAccountInfo(account);
                } else {
                    console.log('Account not found.');
                }
                break;
            case 2:
                const accountNum = prompt('Please enter your account number: ');
                let acc = findAccount(accountNum);
                if (acc) {
                    displayAccountInfo(acc);
                    const amount = parseFloat(prompt('Please enter the amount to withdraw: '));
                    updateBalance(acc, amount);
                } else {
                    console.log('Account not found.');
                }
                break;
            case 0:
                console.log("Exiting the program. Goodbye!");
                return;

            default:
                console.log("Please input the correct option");
        }
    }
}
main();