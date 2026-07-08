
const {calculateTax, calculateTotalByCategory} = require('./analytics');

describe("Tax & Category Test Suite", () => {
    describe("Calculate Tax", () => {
        const VAT_RATE = 0.16;
        it("Should correctly calculate the tax for a positive base price", () => {
            const basePrice = 1000;
            const expectedTax = 160; // 1000 * 0.16
            expect(calculateTax(basePrice, VAT_RATE)).toBe(expectedTax)
        });
        it("Should return 0 when the base price is 0", () => {
            expect(calculateTax(0, VAT_RATE)).toBe(0)
        })
        it("Should throw and error if price is negative", () => {
            expect(() => {
                calculateTax(-1000, VAT_RATE);
            }).toThrow("Price cannot be negative")
        });
    });
});

describe('calculateTotalByCategory', () => {
        // Mock dataset for testing array manipulations safely
        const mockItems = [
            { id: 1, name: 'Laptop', category: 'electronics', price: 1000 },
            { id: 2, name: 'Mouse', category: 'electronics', price: 50 },
            { id: 3, name: 'Book', category: 'books', price: 20 },
            { id: 4, name: 'Shirt', category: 'clothing', price: 40 }
        ];

        it('should sum up the prices of items matching the specified category', () => {
            const total = calculateTotalByCategory(mockItems, 'electronics');
            expect(total).toBe(1050); // 1000 + 50
        });

        it('should return 0 if no items match the specified category', () => {
            const total = calculateTotalByCategory(mockItems, 'groceries');
            expect(total).toBe(0);
        });

        it('should return 0 if the items array is empty', () => {
            const total = calculateTotalByCategory([], 'electronics');
            expect(total).toBe(0);
        });

        it('should handle cases where only one item matches the category', () => {
            const total = calculateTotalByCategory(mockItems, 'books');
            expect(total).toBe(20);
        });
    });