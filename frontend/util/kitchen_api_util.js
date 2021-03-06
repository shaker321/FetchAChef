export const fetchAllKitchens = (bounds) => (
  $.ajax({
    url: "/api/kitchens",
    type: "GET",
    data: {
      bounds: bounds
    }
  })
);

export const fetchSingleKitchen = (id) => (
  $.ajax({
    url: "/api/kitchens/" + id,
    type: "GET"
  })
);

export const createKitchen = (kitchen) => (
  $.ajax({
    url: "/api/kitchens",
    type: "POST",
    contentType: false,
    processData: false,
    data: kitchen
  })
);

export const updateKitchen = (kitchen) => (
  $.ajax({
    url: "/api/kitchens/" + kitchen.id,
    type: "PATCH",
    data: kitchen,
    processData: false,
    contentType: false,
  })
);

export const createReview = (review) => (
  $.ajax({
    method: "POST",
    url: "api/reviews",
    data: review
  })
);
