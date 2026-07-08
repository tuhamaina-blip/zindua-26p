// Creating an Array syntax - arrayName = []

const age = [17, 22, 15, 18, 19]
let fruit1 = "Apple"
let fruit2 = "Pineapple"
let fruit3 = "Peach"

const fruits = ["Apple, Pineapple, Peach", ... age]

fruits.push("Bananas"); // Adds an element at the end of the array (LIFO)
console.log(fruits);

fruits.unshift("Oranges");// Adds an element at the beginning of the array (FILO)
console.log(fruits);


fruits.shift("Mangos");
console.log(fruits);


fruits.pop("Watermelon");
console.log(fruits);

// Concat

let evenNums = [2, 4, 6, 8, 10]
let oddNums = [1, 3, 5, 7, 9]

let newConcArray = evenNums.concat(oddNums) // this joins the two arrays together and creates a new array

console.log(newConcArray);

let items = ["Javascript", 14, "a", true, 5]
console.log(items);
let stringifiedArray = items.toString();
console.log(stringifiedArray);
let languages = ["Java", "Javascript", "Python", "C", "C++", "Ruby"]

let index = languages.indexOf("Javascript");
console.log(index);

// forEach - loops through a given list 
function printLanguages(languages) {
    console.log(languages)
}

languages.forEach(printLanguages);