function main() {
    const intArr = [12, 34, 1, 16, 28, 8];
    const intArraySorted1 = [1, 2, 3, 4, 5, 6];
    const intArraySorted2 = [1, 8, 12, 16, 28, 34];
    const mer = new Array(intArraySorted1.length + intArraySorted2.length);

    countOddAndEvenNumber(intArr);  //Lab3.1
    findMinAndMax(intArr);           //Lab3.2
    sortFromMinToMax(intArr);        //Lab3.3
    mergeToSortedArray(intArraySorted1, intArraySorted1.length, intArraySorted2, intArraySorted2.length, mer);  //Lab3.4
}

function countOddAndEvenNumber(myArray) {
    let j = 0, k = 0;
    for (let i = 0; i < myArray.length; i++) {
        if ((myArray[i] % 2) === 0) {
            j += 1;
        } else {
            k += 1;
        }
    }
    console.log(`There are ${j} even number(s) & ${k} odd number(s)`);
}

function findMinAndMax(myArray) {
    let min = myArray[0];
    let max = myArray[0];

    for (let i = 1; i < myArray.length; i++) {
        if (myArray[i] > max) {
            max = myArray[i];
        }
        if (myArray[i] < min) {
            min = myArray[i];
        }
    }

    console.log(`Min is: ${min}\nMax is ${max}`);
}

function sortFromMinToMax(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        for (let j = i + 1; j < myArray.length; j++) {
            let temp;
            if (myArray[i] > myArray[j]) {
                temp = myArray[i];
                myArray[i] = myArray[j];
                myArray[j] = temp;
            }
        }
    }
    console.log(myArray.join(' '));
}

function mergeToSortedArray(myArray1, a, myArray2, b, mer) {
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < a) {
        mer[k] = myArray1[i];
        i++;
        k++;
    }

    while (j < b) {
        mer[k] = myArray2[j];
        j++;
        k++;
    }
    console.log();
    sortFromMinToMax(mer);
}

main();