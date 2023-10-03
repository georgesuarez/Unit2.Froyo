// Prompt the user for a list of froyo flavors
const userInput = prompt(
  "Please enter some froyo flavors seperated by commas.",
  "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
);

// Split the string of froyoFlavors seperated by commas
const froyoFlavors = userInput.split(",");

const froyoOrders = [];
// TODO: Fix this method
function generateFroyoOrder() {
  for (let i = 0; i < froyoFlavors.length; i++) {
    if (froyoOrders.length === 0) {
      froyoOrders.push({ flavor: froyoFlavors[i], count: 1 });
    } else {
      for (const order in froyoOrders) {
        if (froyoFlavors[i] === froyoOrders[order].flavor) {
          froyoOrders[order].count++;
        } else {
          froyoOrders.push({ flavor: froyoFlavors[i], count: 1 });
        }
      }
    }
  }
}

generateFroyoOrder();

for (const order in froyoOrders) {
  console.log(froyoOrders[order]);
}
