function countWords(input) {
    const wordsList = {};
    let myArray = input.split(/\W+/); //can use replace(/,/gi, "").split(" ") instead

    console.log(myArray);
    for (let word of myArray) {
        if (wordsList[word]) {
            wordsList[word] += 1;
        } else {
            wordsList[word] = 1;
        }
    }
    console.log('Words count: ');
    for (let word in wordsList) {
        console.log(`\t${word}: ${wordsList[word]}`);
    }
}

function main() {
    const prompt = require('prompt-sync')({ sigint: true });
    const inputStr = prompt('Please input your string: ');
    countWords(inputStr);
}

main();