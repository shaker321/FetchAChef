export const fetchAllKs = (success, bounds) => {
  debugger
  $.ajax({
    url: "/api/kitchens",
    type: "GET",
    data: {
      bounds: bounds
    },
    success: (data) => {
      success(data);
    }
  });
};

export const fetchSingleKitchen = (id, success) => {
  $.ajax({
    url: "/api/kitchens/" + id,
    type: "GET",
    success: (data) => {
      success(data);
    }
  });
};

export const createKitchen = (kitchen, success) => {
  $.ajax({
    url: "/api/kitchens",
    type: "POST",
    contentType: false,
    processData: false,
    data: kitchen,
    success: (data) => {
      success(data);
    }
  });
};
