function main() {
    const intArr = [12, 34, 1, 16, 28, 8];
    const intArraySorted1 = [1, 2, 3, 4, 5, 6];
    const intArraySorted2 = [1, 8, 12, 16, 28, 34];
    const finalMergedArray = new Array(intArraySorted1.length + intArraySorted2.length);

    countOddAndEvenNumber(intArr);  //Lab3.1
    findMinAndMax(intArr);           //Lab3.2
    sortFromMinToMax(intArr);        //Lab3.3
    mergeToSortedArray(intArraySorted1, intArraySorted1.length, intArraySorted2, intArraySorted2.length, finalMergedArray);  //Lab3.4
}

function countOddAndEvenNumber(myArray) {
    let even = 0, odd = 0;
    for (let index = 0; index < myArray.length; index++) {
        if ((myArray[index] % 2) === 0) {
            even += 1;
        } else {
            odd += 1;
        }
    }
    console.log(`There are ${even} even number(s) & ${odd} odd number(s)`);
}

function findMinAndMax(myArray) {
    let min = myArray[0];
    let max = myArray[0];

    for (let index = 1; index < myArray.length; index++) {
        if (myArray[index] > max) {
            max = myArray[index];
        }
        if (myArray[index] < min) {
            min = myArray[index];
        }
    }

    console.log(`Min is: ${min}\nMax is ${max}`);
}

function sortFromMinToMax(myArray) {
    for (let index = 0; index < myArray.length; index++) {
        for (let rightIndex = index + 1; rightIndex < myArray.length; rightIndex++) {
            let temp;
            if (myArray[index] > myArray[rightIndex]) {
                temp = myArray[index];
                myArray[index] = myArray[rightIndex];
                myArray[rightIndex] = temp;
            }
        }
    }
    console.log(myArray.join(' '));
}

function mergeToSortedArray(firstArr, lengthFirstArr, SecondArr, lengthSndArr, mergedArray) {
    let firstArrInd = 0;
    let secondArrInd = 0;
    let mergedArrInd = 0;
    while (firstArrInd < lengthFirstArr) {
        mergedArray[mergedArrInd] = firstArr[firstArrInd];
        firstArrInd++;
        mergedArrInd++;
    }

    while (secondArrInd < lengthSndArr) {
        mergedArray[mergedArrInd] = SecondArr[secondArrInd];
        secondArrInd++;
        mergedArrInd++;
    }
    console.log();
    sortFromMinToMax(mergedArray);
}

main();