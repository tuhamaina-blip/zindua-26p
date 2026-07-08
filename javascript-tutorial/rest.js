function calculateTotalInvoice(clientName, taxRate, ...itemPrices) {
    console.log(`Processing the invoice for ${clientName}`);
    const subtotal = itemPrices.reduce((accumulator, currentPrice) => accumulator + currentPrice)
    const totalWithTax = subtotal * (1 + taxRate)
    return totalWithTax.toFixed(2);
}

let myArray = [1, 3, 4, 6, 6,]
const finalBill = calculateTotalInvoice("Matthew", 0.16, 1200, 450, 3100, 4800, 210, 7900)
console.log(`The final Tax-Inclusive Balance is: KSH ${finalBill}`)

const deploymentConfig = {
    environment: "production"
    // sslCertificateId: "cert-992a01",
    // dbHost: "127.0.0.1",
    // dbPassword: "super_secret_password_hush",
    // dbPort: 5432
};

const {environment, sslCertificateId, ...rest} = deploymentConfig;
console.log(rest);
let nums = [12, 34, 56, 78]
nums.forEach(num => console.log(num) );
nums.map(num => num * 0.16)
console.log(nums)
function add(...numbers) {
    return numbers.reduce((accumulator, current) => accumulator + current, 0)
}

add (12, 34, 56, 78)
console.log(nums)



// iterationCount = 0
// firstloop = 0 + 12
// secondloop = 12 + 34
// thirdloop = 46 + 56
// fourthloop = 102 + 78
// numbers = 180 

function processCatalogPricing() {
    const rawInventory = [
        { id: "prod_001", name: "Wireless Router", basePriceKES: 5000 },
        { id: "prod_002", name: "Ergonomic Desk", basePriceKES: 18500 },
        { id: "prod_003", name: "USB-C Hub", basePriceKES: 2500 }
    ];

    const VAT_RATE = 0.16; // 16% Kenyan VAT 

    const customerFacingCatalog = rawInventory.map((item) => {
        const totalTax = item.basePriceKES * VAT_RATE;
      
        return {
            sku: item.id.toUpperCase(),
            displayName: item.name,
            priceWithTax: item.basePriceKES + totalTax,
            currency: "KES"
        };
    });

    console.log(" Processed Catalog data :" , customerFacingCatalog )
}

processCatalogPricing();


const dispatchManifest = [
        { orderId: 1024, zone: "Nairobi CBD", deliveryType: "Express", weightKg: 1.2 },
        { orderId: 1025, zone: "Mombasa", deliveryType: "Standard", weightKg: 14.5 },
        { orderId: 1026, zone: "Westlands", deliveryType: "Express", weightKg: 0.5 },
        { orderId: 1027, zone: "Kisumu", deliveryType: "Standard", weightKg: 4.2 }
    ];

    const inventory = [
    { name: "Wireless Router", category: "Electronics", price: 5000 },
    { name: "Ergonomic Desk", category: "Furniture", price: 18500 },
    { name: "USB-C Hub", category: "Electronics", price: 2500 },
    { name: "Office Chair", category: "Furniture", price: 12000 }
];

const affordableElectronics = inventory.filter(item => {
    return item.category === "Electronics" && item.price < 4000;
});
console.log(affordableElectronics)

const todoList = [
    { id: "task_1", task: "Buy groceries", completed: false },
    { id: "task_2", task: "Pay internet bill", completed: true },
    { id: "task_3", task: "Walk the dog", completed: false }
];

const deleteBtn = "task_2";

const updatedTodo = todoList.filter(todo => todo.id !== deleteBtn);
console.log(updatedTodo);

const shoppingCart = [
        { description: "Logitech Mouse", quantity: 2, unitPrice: 3500 },
        { description: "HDMI Cable 3m", quantity: 1, unitPrice: 1200 },
        { description: "Laptop Stand", quantity: 1, unitPrice: 6800 }
    ];

    const finalInvoice = shoppingCart.reduce((summary, item) => {
        const totalCost = item.quantity * item.unitPrice

        summary.subtotal += totalCost;
        summary.itemCount += item.quantity;
        return summary
        }, {subtotal: 0, itemCount: 0}
)
console.log(`Invoice Summary: Ksh ${finalInvoice.subtotal} for ${finalInvoice.itemCount}`)

orderSummary()