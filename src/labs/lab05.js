function countWords(input) {
    const wordsList = {};
    let myArray = input.split(/\W+/);

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
    const inputStr = 'Hello ban, tui ten Teo, ban cung cung ten Teo luon ah';
    countWords(inputStr);
}

main();