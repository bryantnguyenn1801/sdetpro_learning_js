const prompt = require('prompt-sync')({ sigint: true });

function calculateBMI(height, weight) {
    const bmi = weight / (height * height);
    return bmi;
}

function returnBMIStatus(bmiValue) {
    console.log("BMI status:");
    if (bmiValue < 18.5) {
        console.log("Underweight");
    } else if (bmiValue <= 24.9) {
        console.log("Normal weight");
    } else if (bmiValue <= 29.9) {
        console.log("Overweight");
    } else {
        console.log("Obesity");
    }
}

function checkEvenOrOddNumber(number) {
    if (number % 2 === 0) {
        console.log(`${number} is an even number.`);
    } else {
        console.log(`${number} is an odd number.`);
    }
}

function giveSuggestion(bmiNumber, currentHeight) {
    console.log("Suggestion for you:");
    if (bmiNumber < 18.5) {
        let targetWeight = (currentHeight**2) * (18.5 - bmiNumber);
        console.log("Increase your weight for better health! Your target is: " + targetWeight.toFixed(2) + "kg");
    } else if (bmiNumber > 24.9) {
        let targetWeight = (currentHeight**2) * (bmiNumber - 24.9);
        console.log("Decrease your weight for better health! Your target is: " + targetWeight.toFixed(2) + "kg");
    } else {
        console.log("No suggestion, keep doing your work!");
    }
}

function main() {
    const height = parseFloat(prompt('Please input your height (m): '));
    const weight = parseFloat(prompt('Please input your weight (kg): '));

    const bmi = calculateBMI(height, weight);
    console.log("BMI is: " + bmi.toFixed(2));
    returnBMIStatus(bmi);

    giveSuggestion(bmi, height);

    const number = parseInt(prompt("Enter a number: "));
    checkEvenOrOddNumber(number);
}

main();
