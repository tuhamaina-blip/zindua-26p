const { calculateDiscount, cartSummary } =  require('./shoppingCart')

describe('Shopping Cart Tests', () => {
    describe('calculateDiscount', () => {
        test('Returns a 10% discount when a valid coupon in applied', () => {
            const discount =  calculateDiscount(100, 'Save 10');
            expect(discount).toBe(10);
        })
    })
})

describe("Cart Summary", () => {
    test("Give a specific message when the count is 0", () => {
        const message = cartSummary(0)
        expect(message).toBe("Your cart is empty")
    })
})

