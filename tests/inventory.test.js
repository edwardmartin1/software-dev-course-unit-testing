const inventory = require("../inventory.js");


const products =
[
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 800, inStock: true },
    { name: "Monitor", price: 300, inStock: true },
    { name: "Keyboard", price: 100, inStock: false }        
];

const productsOver799 =
[
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Tablet", price: 800, inStock: true }    
];

const productsSortedByPrice = [
  { name: 'Keyboard', price: 100, inStock: false },
  { name: 'Monitor', price: 300, inStock: true },
  { name: 'Phone', price: 500, inStock: false },
  { name: 'Tablet', price: 800, inStock: true },
  { name: 'Laptop', price: 1000, inStock: true }
];




describe("The calculateDiscount function", () =>
{
    test("applies a valid discount rate", 
        () =>
        {
            expect(inventory.calculateDiscount(100, 0.1)).toEqual(90);
        });

    test("handles an invalid discount rate", 
        () =>
        {
            expect(inventory.calculateDiscount(100, -0.1)).toEqual(100);
        });

    test("handles edge case with price of 0", 
        () =>
        {
            expect(inventory.calculateDiscount(0, 0.2)).toEqual(0);
        });

});


describe("The filterProducts function", () =>
{
    test("applies a valid filter", 
        () =>
        {
            expect(inventory.filterProducts(products, 
                (objectName) => objectName.price >= 800)).toEqual(productsOver799);
        });

    test("handles an invalid filter gracefully", 
        () =>
        {
            expect(inventory.filterProducts("hello world", (objectName) => objectName.price >= 800)).toEqual([]);
        });

    test("handles edge case with empty array", 
        () =>
        {
            expect(inventory.filterProducts([],(objectName) => objectName.price >= 800)).toEqual([]);
        });

});


describe("The sortInventory function", () =>
{
    test("applies a valid sort", 
        () =>
        {
            expect(inventory.sortInventory(products, "price")).toEqual(productsSortedByPrice);
        });

    test("handles an invalid sort gracefully", 
        () =>
        {
            expect(inventory.sortInventory(products, "quantity")).toEqual(products);
        });

    test("handles edge case with empty array", 
        () =>
        {
            expect(inventory.sortInventory([], "price")).toEqual([]);
        });

});



/*
describe("The removeItem function", function()
{
    test("should return an array with 1 item remaining", 
        function()
        {
            expect(cart.removeItem([{item: "pizza", quantity: 5}, {item: "chocolate", quantity: 10}], "pizza"))
            .toEqual([{item: "chocolate", quantity: 10}]);
        });

    test("should return the original array", 
        function()
        {
            expect(cart.removeItem([{item: "pizza", quantity: 5}], "chocolate"))
            .toEqual([{item: "pizza", quantity: 5}]);
        });

    test("should return an empty array", 
        function()
        {
            expect(cart.removeItem([{item: "pizza", quantity: 5}], "pizza"))
            .toEqual([]);
        });
});


describe("The getTotalItems function", function()
{
    test("should return the total quantity of items in cart", 
        function()
        {
            expect(cart.getTotalItems([{item: "pizza", quantity: 5}, {item: "chocolate", quantity: 10}]))
            .toEqual(15);
        });

    test("should return 0 total quantity for empty cart", 
        function()
        {
            expect(cart.getTotalItems([]))
            .toEqual(0);
        });

    test("should return 1,000,000 total quantity for big cart", 
        function()
        {
            expect(cart.getTotalItems([{item: "pizza", quantity: 500000}, {item: "chocolate", quantity: 500000}]))
            .toEqual(1000000);
        });
});
*/


