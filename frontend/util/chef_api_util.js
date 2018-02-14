export const fetchAllChefs = (kitchenId) => (
  $.ajax({
    url: "/api/chefs",
    type: "GET",
    data: {
      kitchen_id: kitchenId
    }
  })
);

export const fetchSingleChef = (id) => (
  $.ajax({
    url: "/api/chefs/" + id,
    type: "GET"
  })
);

export const createChef = (chef) => (
  $.ajax({
    url: "/api/chefs",
    type: "POST",
    data: chef
  })
);

export const approveChef = (chef) => (
  $.ajax({
    url: "/api/chefs/" + chef.chef.id,
    type: "PATCH",
    data: chef
  })
);

export const denyChef = (chefId) => (
  $.ajax({
    url: "/api/chefs/" + chefId,
    type: "DELETE",
    data: chefId
  })
);

export const updateChef = (chef) => (
  $.ajax({
    url: "/api/chefs/" + chef.id,
    type: "PATCH",
    data: chef
  })
);

export const createReview = (review) => (
  $.ajax({
    method: "POST",
    url: "api/reviews",
    data: review
  })
);

export const createMenuItem = (menuItem) => (
  $.ajax({
    method: "POST",
    url: "api/menu_items",
    data: menuItem
  })
);

export const deleteMenuItem = (id) => (
  $.ajax({
    type: "DELETE",
    url: "/api/menu_items/" + id
  })
);
