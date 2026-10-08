//Q1
function ReadEvenOrOdd (number) {
    if (number % 2 === 0) {
        console.log(number + " is an Even number");
    } else {
        console.log(number + " is an Odd number");
    }
}
//Q2
function ReadLargeNumber(num1 , num2) {
    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}
//Q3
function ReadBirthday(number) {
    let age = 2026 - number;
    console.log("Your age is " + age);
}
//Q4
function PrintOddNumber (number) {
    for (let i = 1; i <= number; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
//Q5
function SumNumber (number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }       
    console.log("The sum is: " + sum);
}
ReadEvenOrOdd(7);
ReadLargeNumber(10, 20);
ReadBirthday(2005);
PrintOddNumber(10);
SumNumber(5);