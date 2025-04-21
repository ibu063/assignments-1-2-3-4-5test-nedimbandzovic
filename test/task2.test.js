// Modification of this file is prohibited and will result in getting 0 points from the assignment.
const processOrder = require("../tasks/task2");

describe("processOrder function", () => {
    let orders;

    beforeEach(() => {
        orders = [
            { id: 1, product: "Laptop", price: 1200, status: "pending", timestamp: 0 },
            { id: 2, product: "Phone", price: 800, status: "pending", timestamp: 0 }
        ];
    });

    test("should update the status and timestamp of the specified order", () => {
        const updatedOrders = processOrder(orders, 1700000000, 1);
        expect(updatedOrders).toEqual([
            { id: 1, product: "Laptop", price: 1200, status: "processed", timestamp: 1700000000 },
            { id: 2, product: "Phone", price: 800, status: "pending", timestamp: 0 }
        ]);
    });

    test("should not modify the original orders array", () => {
        const ordersCopy = JSON.parse(JSON.stringify(orders));
        processOrder(orders, 1700000000, 1);
        expect(orders).toEqual(ordersCopy);
    });

    test("should return the same result for the same input", () => {
        const result1 = processOrder(orders, 1700000000, 2);
        const result2 = processOrder(orders, 1700000000, 2);
        expect(result1).toEqual(result2);
    });

    test("should return the same array if orderId is not found", () => {
        expect(processOrder(orders, 1700000000, 99)).toEqual(orders);
    });

    test("should return the same array if orders array is empty", () => {
        expect(processOrder([], 1700000000, 1)).toEqual([]);
    });
});
