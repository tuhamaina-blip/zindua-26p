import { calculateTax, addNums } from "./mathUtils.js";

const productPrice = 5000;
const taxDue = calculateTax(productPrice);
console.log(`The total tax due is ${taxDue}`)

const sum = addNums(25, 40)
console.log(sum)