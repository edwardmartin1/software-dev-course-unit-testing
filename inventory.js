
function calculateDiscount(price = 0, discountRate = 0.0) 
{
    let returnValue;
  
    try
    {
        if (typeof price !== "number")
        {
            returnValue = null;

            throw new Error("Price must be a number.");
        } 

        if (price < 0)
        {
            returnValue = 0;

            throw new Error("Price must be greater than 0.");
        }
            
        if (typeof discountRate !== 'number') 
        {
            returnValue = price;

            throw new Error("Discount rate must be a number.");
        }

        if (discountRate < 0)
        {
            returnValue =  price;

            throw new Error("Discount rate must be great than 0.");
        } 
            
        if (discountRate > 1) 
        {
            returnValue = price;

            throw new Error("Discount rate must be less than 100%.");
        }
    
        return price * (1 - discountRate);
    
    }
    
    catch (err)
    {
        console.error(`Error: ${err.message}`);

        return returnValue;
    }
}


function filterProducts(products, callback) 
{
    try
    {
        if (!Array.isArray(products)) 
        {
            throw new Error("Products must be an array.");
        }
            
        if (typeof callback !== 'function')
        {
            throw new Error("Callback must be a function.");
        }
    
        return products.filter(callback);
    }

    catch (err)
    {
        console.error(`Error: ${err.message}`);

        return [];
    }
}


function sortInventory(inventory = [], key = "") 
{
    let returnValue;

    try
    {
        if (!Array.isArray(inventory))
        {
            returnValue = [];

            throw new Error("Inventory must be an array.");    
        }

        if (inventory.length === 0)
        {
            return [];
        }

        if (typeof key !== 'string')
        {
            returnValue = inventory;

            throw new Error("Key must be a string.");
        }

        if (!key)
        {
            returnValue = inventory;

            throw new Error("No key was provided.");
        }

        if (key.trim() === "")
        {
            returnValue = inventory;

            throw new Error("Blank key was provided.");
        }

        let foundKey = false;

        for (let keyName in inventory[1])
        {  
            if (keyName === key)
            {
                foundKey = true;
                break;
            }
        }

        if (!foundKey)
        {
            returnValue = inventory;

            throw new Error("Key not found in object.");
        }

        if (key === "price" || key === "inStock")
        { 
            return inventory.sort((a, b) => a[key] - b[key]);
        }
        else if (key === "name")
        {
            return inventory.sort((a, b) => a[key].toLowerCase().localeCompare(b[key].toLowerCase()));
        }
    }

    catch (err)
    {
        console.error(`Error: ${err.message}`);

        return returnValue;
    }
}


module.exports = 
{
    calculateDiscount: calculateDiscount,
    filterProducts: filterProducts,
    sortInventory: sortInventory
};

/*
const products =
[
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 500, inStock: false },
    { name: "Tablet", price: 800, inStock: true },
    { name: "Monitor", price: 300, inStock: true },
    { name: "Keyboard", price: 100, inStock: false }
];
*/


/*
console.log("sortInventory:", "price:", sortInventory(products, "price"));
console.log("sortInventory:", "inStock:",sortInventory(products, "inStock"));
console.log("sortInventory:", "name:",sortInventory(products, "name"));
console.log("sortInventory:", "invalid key:",sortInventory(products, "quantity"));
console.log("sortInventory:", "empty array:",sortInventory([], "name"));
console.log("sortInventory:", "blank key provided:",sortInventory(products, ""));
console.log("sortInventory:", "no key provided:",sortInventory(products));
console.log("sortInventory:", "no arguments provided:",sortInventory());
*/


/*
console.log();
console.log("filterProduts: ", "inStock: true: ", 
    filterProducts(products, (objectName) => objectName.inStock === true));
console.log("filterProduts: ", "inStock: false: ", 
    filterProducts(products, (objectName) => objectName.inStock === false));
console.log("filterProduts: ", "price >= 800: ", 
    filterProducts(products, (objectName) => objectName.price >= 800));
console.log("filterProduts: ", "name: phone: ", 
    filterProducts(products, (objectName) => objectName.name.toLowerCase() === "phone"));

console.log("filterProduts: ", "invalid argument: ", 
    filterProducts("hello", (objectName) => objectName.name.toLowerCase() === "phone"));

console.log("filterProduts: ", "empty array: ", 
    filterProducts([], (objectName) => objectName.name.toLowerCase() === "phone"));
*/

/*
console.log()
console.log("calculateDiscount:", calculateDiscount(100, .1));
console.log("calculateDiscount:", calculateDiscount(100, -0.1));
console.log("calculateDiscount:", calculateDiscount(100, 1));
console.log("calculateDiscount:", calculateDiscount(100, 0));
console.log("calculateDiscount:", calculateDiscount(100, 1.1));
*/
