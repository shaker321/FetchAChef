export const fetchCart = (id) => (
  $.ajax({
    url: "/api/carts/" + id,
    type: "GET"
  })
);

export const addToCart = (userId, menuItem, kitchen) => (
  $.ajax({
    url: "/api/orders/",
    type: "POST",
    data: {
      order: {
        price: menuItem.price,
        user_id: userId,
        chef_id: menuItem.chef_id,
        kitchen_id: kitchen.id,
        menu_item_id: menuItem.id,
        complete: false
      }
    }
  })
);

export const removeFromCart = (orderId) => (
  $.ajax({
    url: "/api/orders/" + orderId,
    type: "DELETE",
    data: orderId
  })
);
