function takeOrder(order, orderArray) {
  if (orderArray.length <= 2) {
    orderArray.push(order);
    return "Order accepted";
  } else {
    return "Too many orders in queue";
  }
}

function refundOrder (orderNumber, deliveryOrders) {
  for ( var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber == orderNumber) {
    deliveryOrders.splice(i, 1);
    return true;
    }
  }
  return false;
}

function listItems (deliveryOrders) {
var itemNames = [];
for (var i = 0; i < deliveryOrders.length; i++) {
  itemNames.push(deliveryOrders[i].item);
  }
  return itemNames.join(", ")
}

function searchOrder (deliveryOrders, itemNames) {
  for (var i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item === itemNames) {
      return true;
    }
  }
  return false;
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}