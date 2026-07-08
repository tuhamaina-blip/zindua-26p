let number1 = Number(prompt("Enter the first number:"));
let number2 = Number(prompt("Enter the second number:"));

// Ask the user for an operator
let operator = prompt("Enter an operator ( +, -, * or / ):");

// Store the result
let result;

// Work out the answer based on the operator
switch(operator) {

    case "+":
        result = number1 + number2;
        console.log(number1 + " + " + number2 + " = " + result);
        break;

    case "-":
        result = number1 - number2;
        console.log(number1 + " - " + number2 + " = " + result);
        break;

    case "*":
        result = number1 * number2;
        console.log(number1 + " * " + number2 + " = " + result);
        break;

    case "/":
        if (number2 === 0) {
            console.log("You can't divide by zero!");
        } else {
            result = number1 / number2;
            console.log(number1 + " / " + number2 + " = " + result);
        }
        break;

    default:
        console.log("Invalid operator. Please use +, -, * or /");
};