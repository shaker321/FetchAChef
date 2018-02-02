export const fetchAllChefs = (success, kitchenId) => {
  $.ajax({
    url: "/api/chefs",
    type: "GET",
    data: {
      kitchen_id: kitchenId
    },
    success: (data) => {
      success(data);
    }
  });
};

export const fetchSingleChef = (id, success) => {
  $.ajax({
    url: "/api/chefs/" + id,
    type: "GET",
    success: (data) => {
      success(data);
    }
  });
};

export const createChef = (chef, success) => {
  $.ajax({
    url: "/api/chefs",
    type: "POST",
    data: chef,
    success: (data) => {
      success(data);
    }
  });
};

export const approveChef = (chef, success) => {
  $.ajax({
    url: "/api/chefs/" + chef.chef.id,
    type: "PATCH",
    data: chef,
    success: (data) => {
      success(data);
    }
  });
};

export const denyChef = (chefId, success) => {
  $.ajax({
    url: "/api/chefs/" + chefId,
    type: "DELETE",
    data: chefId,
    success: (data) => {
      success(data);
    }
  });
};

export const updateChef = (chef, success) => {
  $.ajax({
    url: "/api/chefs/" + chef.id,
    type: "PATCH",
    data: chef,
    success: (data) => {
      success(data);
    }
  });
};
