//Add "delicious" to a menu item name.
function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`;
}

function createMenuItem(menuItemName, price, type) {
  return {
    name: menuItemName, 
    price: price,
    type: type
  };
}
//function adds incredients to an array, will not add duplicates
function addIngredients (ingredient, arr) {
  if (!arr.includes(ingredient)) {
  arr.push(ingredient);
  }
}

//adds the $ symbol to the price
function formatPrice (menuItemName) {
  return "$" + menuItemName;
  }

//discounts price by 10%
function decreasePrice (price) {
  return price - (price * 0.10);
}

//function creates a recipe array
function createRecipe (title, ingredients, type) {
  return {
    title: title, 
    ingredients: ingredients,
    type: type
  };
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


