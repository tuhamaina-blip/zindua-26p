// Accessing elements

// 1. Accessing elements by ID
const headerElement = document.getElementById('header');
const buttonElement = document.getElementById("myButton");
const newParagraph = document.createElement('p');
const devContacts = document.getElementsByClassName('family');
const allContactsArray = [...devContacts]
const allContacts = documents.getElementByTagName('p');
const selector = document.querySelector('.family');
const text = document.querySelector("#myPara"); // Accessing an ID
const allElements = document.querySelectorAll('family'); // Accessing a class


headerElement.textContent = "Welcome to the dom manipulation"
headerElement.style = "font-family: Arial; color: red"

// Adding Event listener


buttonElement.addEventListener('click', () => {
    submitForm();
})

function submitForm() {
    alert('Form submitted successfully!')
}

// Adding content dynamically


// Setting text content
newParagraph.textContent = "This is a new dynamically added paragraph";
document.body.appendChild(newParagraph);

// Accessing elements by class name


console.log(devContacts[1]);
devContacts[1].textContent = "Victor";
devContacts[1].style.color = "red";

allContactsArray.forEach(contact => {console.log(contact)});
// allContactsArray.forEach(function(contact) {console.log(contact)})
// allContactsArray.forEach((contact) => {console.log(contact)})


console.log(allContacts) // Returns a HTML collection of all the related tags

// Accessing Elements by query selector
 // Accessing a class
console.log(selector);
selector.style.font = "Arial";


console.log(text.textContent);


console.log(allElements); // Returns all elements with the class name
allElements.style = "font-family: Arial";