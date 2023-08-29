function createRestaurant(name) {
  return { 
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  };
}

function addMenuItem(restaurant, menuItem) {
  restaurant.menus[menuItem.type].push(menuItem);
}

module.exports = {
  createRestaurant, 
  addMenuItem,
  //removeMenuItem,
  //checkForFood
}