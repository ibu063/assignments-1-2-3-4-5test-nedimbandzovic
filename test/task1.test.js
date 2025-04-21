// Modification of this file is prohibited and will result in getting 0 points from the assignment.
const sumAll = require("../tasks/task1");

test("Sum of only 1 must be 1", () => {
    expect(sumAll(1)).toBe(1);
});

test("Sum of 2 and 3 to be 5", () => {
    expect(sumAll(2,3)).toBe(5);
});

test("Sum of 7 and 13 and 5 and 7 to be 32", () => {
    expect(sumAll(7, 13, 5, 7)).toBe(32);
});