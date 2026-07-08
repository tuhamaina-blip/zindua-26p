function calculateDiscount(totalAmount, couponCode) {
    if(totalAmount < 0) return 0;

    if(couponCode === "Save 10") {
        return totalAmount * 0.10;
    }
    return 0;
}

function cartSummary(itemCount) {
    if (itemCount === 0) return "Your cart is empty";
    if (itemCount ===1) return "You have 1 item in the cart";
}

module.exports = {calculateDiscount, cartSummary}
