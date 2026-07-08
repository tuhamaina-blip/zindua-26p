

function generateReport () {
    const moduleName = "Authentication";
    const status = "Stable";
    const testCoverage = 94;

    const report = "Module: " + moduleName + " | Status: " + status + " | Coverage: " + testCoverage + "%";
    return report;
}

console.log(generateReport())

const user = {
    "firstName": "Matthew",
    "lastName" : "Maina",
    "isActive" : true,
} 

function interpolation(user) {
    return `System notification: User: ${user.firstName} ${user.lastName}
    Access Status: ${user.isActive}`
}
console.log(interpolation(user))

// const user = {
//     "firstName": "Matthew",
//     "lastName": "Maina",
//     "isActive": true,
// }

// function interpolation(user) {
//     return `Welcome, ${user.firstName} ${user.lastName}!
//     System notification: User: ${user.firstName} ${user.lastName}
//     Access Status: ${user.isActive}`
// }
// console.log(interpolation(user))

const person = "Matthew"
    function interpolation(person){
        return `Welcome ${person} to your dashboard`
    }
console.log(interpolation(person))


var message = "Hello"
let name = "James"
// Scoping in JS
function greet() {
    // local scope
    var message = "Welcome"
    var name = "David"
    console.log(`${message} ${name}`)
}
greet()
// Trying to access local variables outside the function returns not defined
console.log(`${message} ${name}`)
console.log("Cannot access the local variables")

// Block scope

function display_scope() {
    let message = "I am local variable" // Local variable
    let name = "Local variable"

    if (true) {
        let message = "I am a block scoped variable" // Block variable
        console.log(`Inner scope: ${message}`)
    }
    console.log(`Outer scope: ${message}`)
}
display_scope()

console.log(test)
var test = 4;

var test;
console.log(test)
var testy = 4;


// console.log(myMessage)

// let myMessage;
// console.log(myName);
// const myName = "Matthew";
greetings();

function greetings() {
    console.log("Welcome to hoisting!")
}
