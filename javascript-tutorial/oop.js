// const student1 = {
//     name : "Jason",
//     course : "Software Development",
//     greet : function (){
//         console.log(`Hello, my name is ${this.name}. I am doing ${this.course}`)
//     }
// }


// const student2 = {
//     name : "Abbie",
//     course : "Software Development",
//     greet : function (){
//         console.log(`Hello, my name is ${this.name}. I am doing ${this.course}`)
//     }
// }

// student1.greet()
// student2.greet()

// Creating the blueprint
// class Student {
//     constructor(name, course) {
//         this.name = name;
//         this.course = course;
//     }
//     greet() {
//         console.log(`Hello, my name is ${this.name}. I am doing ${this.course}`)
//     }
// }

// // Creating the object instances
// student1 = new Student("Idah", "Python")
// student2 = new Student("Derrick", "Machine Learning")
// student1.greet()

// class Product {
//     constructor(item, price) {
//         this.item = item;
//         this.price = price;
//     }
//     pay() {
//         console.log(`${this.item} goes for ${this.price}`)
//     }
// }
// product1 = new Product ("Shoes", "Ksh. 4000")
// product2 = new Product ("Shirts", "Ksh. 2200")
// product3 = new Product ("Jeans", "Ksh. 5600")
// product1.pay() 
// product2.pay()
// product3.pay()

// // Encapsulation - hiding internal state 
// class BankAccount {
//     #balance; // Makes the property private
//     constructor(owner, initialDeposit) {
//         this.owner =  owner
//         this.initialDeposit = initialDeposit
//         this.#balance = initialDeposit
//     }
//     checkBalance() {
//         return `Account owner is ${this.owner}. Balance is Ksh ${this.#balance}`
//     }
//     deposit(amount) {
//         if (amount > 0){
//             this.#balance += amount;
//             console.log(`Deposited Ksh ${amount}`)
//         } else {
//             console.log("Invalid deposit!")
//         }
//     }
// }

// try{
//     console.log("Attempting to change the balance");
//     // myAccount.#balance = 5000000
// }catch (error) {
//     console.error(`Error updating balance: ${error.message}`)
// }


// const myAccount = new BankAccount("Japheth", 1000)
// myAccount.balance = 5000000
// console.log(myAccount.balance)


// myAccount.deposit(500);
// console.log(myAccount.checkBalance())

// // Inheritance
// class User {
//     constructor(username, email) {
//         this.username = username;
//         this.email = email;
//     }
//     login () {
//         console.log(`${this.username} has logged in`)
//     }
// }

// // Child class (inherit from User)
// class Admin extends User {
//     constructor (username, email, adminLevel) {
//         // Super calls the constructor of the parent class (User)
//         super(username, email);
//         this.adminLevel = adminLevel;
//     }
//     deleteUser(targetUser) {
//         console.log(`Admin ${this.username} removed ${targetUser}`)
//     }
// }

// const regularUser = new User("Denis", "deno@gmail.com")
// const adminUser = new Admin("Juanita", "juan@gmail.com")

// regularUser.login()
// adminUser.login()
// adminUser.deleteUser("Denis");

// class Vehicle {
//     constructor(type, availability) {
//         this.type = type;
//         this.availability = availability;
//     }
//     check() {
//         console.log(`${this.type} is ${this.availability}`)
//     }
// }

// class Car extends Vehicle {
//     constructor(type, availability, horsepower, seats) {
//         super(type, availability);
//         this.horsepower = horsepower;
//         this.seats = seats;
//     }
//     BuyCar(targetCar) {
//         console.log (`The ${this.type} is ${this.availability} with ${this.horsepower} Horsepower, and ${this.seats} seats`)
//     }
// }
// const type1 = new Vehicle("Bus", "Available")
// const type2 = new Car("BMW", "Available", " 465", "2")

// type1.check()
// type2.BuyCar()

class CoffeeMachine {
    constructor(coffeeType) {
        this.coffeeType = coffeeType;
    }
    makeCoffee() {
        console.log(`Starting to make ${this.coffeeType}`)
        this.#boilWater();
        this.#grindingBeans();
        this.#brew();
        console.log(`Your ${this.coffeeType} is ready!`)
    }

    #boilWater() {
        console.log("Heating water at 95 degrees")
    }
    #grindingBeans() {
        console.log("Grinding beans into a fine powder")
    }
    #brew() {
        console.log("Passing hot water through the ground powder under high pressure...")
    }
}

const myMachine = new CoffeeMachine ("Cappuccino")
myMachine.makeCoffee();





class SmartDevice {
    #brightness = 0;
    #temperature = 0.0;
    #isRecording = false;
    constructor(name, deviceType) {
        this.name = name;
        this.deviceType = deviceType

    }
    activate(){
        console.log(`Starting activation of the ${this.name}`)
        if (this.deviceType === "Light") {
            this.#powerOn();
            this.#setBrightness()
        }else if (this.deviceType === "Thermostat") {
            this.#readSensor();
            this.#setTemperature();
        }else if (this.deviceType === "Camera") {
            this.#startLens();
            this.#startRecording();
        }
        console.log(`Your ${this.name} is fully operational!`)
    }
    #powerOn() {
        console.log("Powering the LED...")
    }
    #setBrightness() {
        this.#brightness = 100;
        console.log("Setting brightness to 100%...")
    }
    #readSensor() {
        console.log("Reading the ambient room temperature...")
    }
    #setTemperature() {
        this.temperature = 22.0;
        console.log("Engaging HVAC compressor to target 22.0...")
    }
    #startLens() {
        console.log("Powering on the optical sensors for night vision...")
    }
    #startRecording() {
        this.#isRecording = true;
        console.log("Encrypting the video streaming to secure cloud storage...")
    }
}

const mySmartBulb = new SmartDevice("Living Room Bulb", "Light")
const myThermostat = new SmartDevice("Main thermostat", "Thermostat")
const myCamera = new SmartDevice("Front Door Camera", "Camera")

mySmartBulb.activate()
myThermostat.activate()
myCamera.activate()

class Payment {
    process() {
        console.log("Processing standard payment...");
    }
}

class MpesaPayment extends Payment {
    // Overriding the parent's process method
    process() {
        console.log("Sending STK push notification to phone... Payment successful!");
    }
}

class CardPayment extends Payment {
    // Overriding the parent's process method
    process() {
        console.log("Validating CVV code with bank... Payment successful!");
    }
}

// A generic function that treats all payments the same way dynamically
function executePayment(paymentObject) {
    paymentObject.process(); 
}

executePayment(new MpesaPayment()); // "Sending STK push..."
executePayment(new CardPayment());  // "Validating CVV code..."


