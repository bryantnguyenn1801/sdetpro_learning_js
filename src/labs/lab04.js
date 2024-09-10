function generateArray(number) {
    const myList = new Array();
    for (let i = 0; i < number; i++) {
        const randomNumber = Math.floor(Math.random() * 1001);
        myList.push(randomNumber);
    }
    return myList;
}

function main() {
    const number = 10;
    const randomNumbers = generateArray(number);
    console.log(randomNumbers);

    while (true) {
        console.log("=====MENU======");
        console.log("1. Print all numbers");
        console.log("2. Print maximum value");
        console.log("3. Print minimum value");
        console.log("4. Search number");
        const prompt = require('prompt-sync')({ sigint: true });
        const choice = parseFloat(prompt('Please input your choice: '));
        switch (choice) {
            case 1:
                console.log(randomNumbers);
                break;
            case 2:
                let max = randomNumbers[0];
                for (let i = 1; i < randomNumbers.length; i++) {
                    if (randomNumbers[i] > max) {
                        max = randomNumbers[i];
                    }
                }
                console.log("Max value is: %d\n", max);
                break;
            case 3:
                let min = randomNumbers[0];

                for (let i = 1; i < randomNumbers.length; i++) {
                    if (randomNumbers[i] < min) {
                        min = randomNumbers[i];
                    }
                }
                console.log("Min value is: %d\n", min);
                break;
            case 4:
                const numberToSearch = parseFloat(prompt('Please input number: '));
                if (randomNumbers.includes(numberToSearch)) {
                    console.log("Number %d is exist in list with index %d\n", numberToSearch, randomNumbers.lastIndexOf(numberToSearch) + 1);
                } else {
                    console.log("Number %d is not existing in list\n", numberToSearch);
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