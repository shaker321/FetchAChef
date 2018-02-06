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
