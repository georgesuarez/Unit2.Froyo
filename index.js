// Prompt the user for a list of froyo flavors
const userInput = prompt(
    "Please enter some froyo flavors seperated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Split the string of froyo flavors into an array of objects.
const stringArray = userInput.split(",");

// Convert the array of strings into an array of objects.
const froyoOrders = [];
for (let i = 0; i < stringArray.length; i++) {
    const froyoFlavor = stringArray[i];
    const froyoOrder = {
        order: {
            flavor: froyoFlavor,
            count: 1
        },
    };
    froyoOrders.push(froyoOrder);
}

for (const order in froyoOrders) {
    console.log(froyoOrders[order]);
}

/**
 * @param {froyoOrders[]} froyoOrders an array of froyo objects
 * @param {froyoFlavor} froyoFlavor a string of a specific froyo flavor
 * @returns {number} the count of the froyo flavor 
 */
// function getFroyoFlavorCount(froyoOrders, froyoFlavor) {
//     let count = 0;
//     for (const flavor in froyoOrders) {

//     }
// }

