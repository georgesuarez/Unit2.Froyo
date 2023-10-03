// Prompt the user for a list of froyo flavors
const userInput = prompt(
    "Please enter some froyo flavors seperated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Split the string of froyoFlavors seperated by commas
const froyoFlavors = userInput.split(",");

const froyoOrders = [];
function generateFroyoOrder() {
    for (let i = 0; i < froyoFlavors.length; i++) {
        froyoOrders.push({
            flavor: froyoFlavors[i],
            count: countFroyoFlavors(froyoFlavors[i]),
        });
    }
}

function countFroyoFlavors(target) {
    let count = 0;
    for (let i = 0; i < froyoFlavors.length; i++) {
        if (froyoFlavors[i] === target) {
            count++;
        }
    }
    return count;
}

function displayFroyoOrder() {
    for (const order in froyoOrders) {
        console.log(
            `Flavor: ${froyoOrders[order].flavor} Count: ${froyoOrders[order].count}`
        );
    }
}

generateFroyoOrder();
displayFroyoOrder();
