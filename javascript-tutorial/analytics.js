const VAT_RATE = 0.16;

function calculateTax(basePrice,VAT_RATE) {
    if(basePrice < 0) throw new Error("Price cannot be negative")
        return basePrice*VAT_RATE
}

function calculateTotalByCategory(items, category) {
    return items 
    .filter (item => item.category === category) 
    .reduce((sum, item) => sum + item.price, 0)
}

module.exports = {calculateTax, calculateTotalByCategory};