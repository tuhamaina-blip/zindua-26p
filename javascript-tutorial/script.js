// This is a single line comment

/*
 This is a multi line comment
 */

 // Javascript Variables

/*
A named container used to store data that can be used later.
*/

// Declaration
// The let Keyword is used for variables that are mutable/can be changed
// let userName;
// let name = "Aisha"; //Variable assignment
// console.log(name);
// // console.log(userName); //Output is undefined
// // userName = "Matthew";  //Variable assignment
// // console.log(userName)
// // userName = "Abigael"
// // console.log(userName);
// const keyword is used on immutable data
const userEmail = "tuhamaina@gmail.com"

console.log(userEmail)

// var keyword was used on mutable data
var myName = "Matthew";
myName ="Derrick"
console.log (myName)

let person1 = "Omondi"; // Variable name can end with a numerical but not start with a numerical
console.log(person1);
let _code = "Javascript"; // Cannot start with a hyphen but can start with an underscore
console.log(_code)
let myEmail; // Camel Case naming
let my_user_email; // Snake case naming
let UserProfile; //Pascal Case naming

// Primitive Data types
// Data types
// 1. Strings - text based data
let myString = "a list of character or text based data"
console.log(typeof(myString) );

// 2. Numbers - integers, decimals
let myNum = 15;
let myNum2 = 15.0;
console.log(typeof(myNum));
console.log(typeof(myNum2));

// 3. Boolean - return true or false

let num = true;
console.log(num)

// 4. Undefined - for unassigned variables

let course;
console.log(course); // Output is undefined

// 5. BigInt - Very large number
let veryLargeNumber = 93583802784243783n;
console.log(veryLargeNumber + 1n);
console.log(veryLargeNumber + 2n);

// 6. Symbol - used to create private or hidden properties
const sym1 = Symbol("id");
const sym2 = Symbol("id");

console.log(sym1 === sym2);

// Operators - Special symbols that perform operations on variables and values

// 1. Arithmetic calculations - perform arithmetic calculations
/*
+ addition (1+1)
- subtraction (1-1)
/ division (1/1)
* multiplication (1*1)
*/

// modulo - returns the remainder
let num1 = 5 % 2;
console.log(num1 +1);

let num2 = 5;
// console.log(++num2);
console.log(--num2);
console.log(num2**3);

// Variables
// let x = "Matthew"

// mnemonic names


// 2. Comparison operators

//  == Equal to  3==5  // false
//  != Not equal  to 3!=4  // true
//  === Strictly equal to 3 === "3" // false
//  !== Strictly not equal to 3 !=="3" // true
//  > Greater than  4 > 4  // false
//  < Less than  3 < 3 // false
//  >= Greater than or equal to  4 >= 4 // true
//  <= Less than or equal to 3 <= 3 // true

let a = 5, b = "5"
console.log(a !=b );

// for ( let i = 1; 1<10; i++); {
//     console.log(i)
// }

// 3. Ternary operators
 const userRole = "Admin"
 let welcomeMessage
 if (userRole === "Admin") {
    welcomeMessage = "Welcome, Admin! Access granted."
 } else {
    welcomeMessage = "Access denied. Please log in to access dashboard."
 }
 console.log(welcomeMessage)

 const customMessage = userRole === "Admin"
 ? welcomeMessage = "Welcome, Admin! Access granted."
 : welcomeMessage = "Access denied. Please log in to access dashboard"
 console.log(welcomeMessage)

//  Logical and &&
const isLoggedIn = true;
const hasPremiumAccount = true;

isLoggedIn && console.log("Welcome to your dashboard!")
hasPremiumAccount && console.log("Showing premium ads-free videos")


// Logical or || 

const userName = "Matthew"; 
const displayName = userName || "Guest"
console.log(`Welcome back, ${displayName}`)

let trafficLights = "green";
let message = "";
switch (trafficLights) {
    case "red":
        message = "Stop immediately."
        break 
    case "yellow":
        message = "Prepare to stop."
        break
    case "green":
        message = "Continue driving."
        break
    default: 
        message ="Invalid traffic light color."
}
console.log(message)

// let number1 = Number(prompt("Enter the value of number1: "));
// let number2 = Number(prompt("Enter the value of number2: "));

// // take user input to select an operator 
// const operator = prompt("Enter a operator ( either +, -, * or / ): ");

// switch(operator) {

//     case "+":
//         result = number1 + number2;
//         console.log(`${number1} + ${number2} = ${result}`);
//         break;

//     case "-":
//         result = number1 - number2;
//         console.log(`${number1} - ${number2} = ${result}`);
//         break;

//     case "*":
//         result = number1 * number2;
//         console.log(`${number1} * ${number2} = ${result}`);
//         break;

//     case "/":
//         result = number1 / number2;
//         console.log(`${number1} / ${number2} = ${result}`);
//         break;

//     default:
//         console.log("Invalid operator");
// }

// Events
number = 10;
document.getElementById("output"). innerHTML = 
"The number is : " + number;

function submit() {
    alert("Button was clicked!")
}
const btn = document.getElementById("subscribe")
function subscribe() {
    btn.addEventListener(`click`, function (){
        alert ("Thanks for subscribing!")
    })
}
subscribe();
document.cookie = "username =MatthewMaina, theme=dark";
console.log(document.cookie)

function createCookie() {
    const key = "session_token";
    const value = "xyz1234567890abc";
    const maxAge = "max-age=" + 3600;
    const path = "path=/"
    const security = "Secure; SameSite=Lax";

    document.cookie = `${key}=${value}; ${maxAge}; ${path}; ${security}`

    console.log("Cookie created successfully!")
}
createCookie();