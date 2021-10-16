"use strict";

// alert('Hey!');

let userNumbers = {
    number1: +prompt('Введите первое число:', ''),
    number2: +prompt('Введите вторе число:', ''),
    operation: prompt('Введите операцию:', '')
};
console.log(`Input variables: ${userNumbers.number1}, ${userNumbers.number2}, ${userNumbers.operation}`);
console.log(`Types of variables: ${typeof(userNumbers.number1)}, ${typeof(userNumbers.number2)}, ${typeof(userNumbers.operation)}`);

const operators = ["*", "/", "+", "-"];
let resultOfOperation;

if (isNaN(userNumbers.number1) == false && isNaN(userNumbers.number2) == false) {
    for (var userInput in operators) {
        if (operators.includes(userNumbers.operation)) {
            console.log('We are found operator in list -- ' + userNumbers.operation);
            if (userNumbers.operation === "*") {
                resultOfOperation = userNumbers.number1 * userNumbers.number2;
                console.log(`Result*: ${resultOfOperation}`);
                document.write(`Результат: ${resultOfOperation}`);
                break;
            } else if (userNumbers.operation === "/") {
                resultOfOperation = userNumbers.number1 / userNumbers.number2;
                console.log(`Result/: ${resultOfOperation}`);
                document.write(`Результат: ${resultOfOperation}`);
                break;
            } else if (userNumbers.operation === "+") {
                resultOfOperation = userNumbers.number1 + userNumbers.number2;
                console.log(`Result+: ${resultOfOperation}`);
                document.write(`Результат: ${resultOfOperation}`);
                break;
            } else if (userNumbers.operation === "-") {
                resultOfOperation = userNumbers.number1 - userNumbers.number2;
                console.log(`Result-: ${resultOfOperation}`);
                document.write(`Результат: ${resultOfOperation}`);
                break;
            } else {
                resultOfOperation = 'Operator is ok, but result is unknown';
            }
        } else {
            resultOfOperation = 'Unknown operator';
            console.log(`Checking operator ${operators[userInput]}, we are looking for ${userNumbers.operation}`);
        }
    }
} else {
    resultOfOperation = 'Both or one of operators is not numbers';
}

if (typeof (resultOfOperation) != 'number') {
    alert(`You have an error: ${resultOfOperation}`);
} else {
    alert(`Your result: ${resultOfOperation}`);
}