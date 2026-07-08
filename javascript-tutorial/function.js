// Creating functions/declaring

function add(a,b) {
    console.log(a + b)
}
add(56, 87)// calling function


function welcome(name = "Guest"){
    console.log(`Hello ${name}`) //body
}
welcome("Matthew");

function display() {
    console.log("This is what will be returned");
    return "Returning the function";
    // unreachable code block
    console.log("Anything for me?")
}
let message = display ();
console.log(message)

function fizzBuzz(n) {
    for (i = 1; i<= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FissBuzz");
        } else if(i % 3 === 0){
            console.log("Fizz")
        } else if(i % 5 === 0){
            console.log("Buzz")
        }
        else {
            console.log(i)
        }
    }
} 
fizzBuzz(50);

const fizzBuzzArrow = (n) => {
    for (let i = 1; i <= n; i++){
        console.log(
        (i % 3 === 0 && i % 5 === 0 ? "FizzBuzz" : "") +
        (i % 3 === 0 ? "Fizz" : "") + 
        (i % 5 === 0 ? "Buzz" : "") || i)
    }
}
fizzBuzzArrow(20);