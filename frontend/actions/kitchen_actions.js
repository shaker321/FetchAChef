import * as APIUtil from "../util/kitchen_api_util.js";

export const RECEIVE_ALL_KITCHENS = "RECEIVE_ALL_KITCHENS";
export const RECEIVE_SINGLE_KITCHEN = "RECIEVE_SINGLE_KITCHEN";
export const RECEIVE_SINGLE_REVIEW = "RECEIVE_SINGLE_REVIEW";

export const receiveAllKitchens = (kitchens) => ({
  type: RECEIVE_ALL_KITCHENS,
  kitchens
});

export const receiveSingleKitchen = (kitchen) => ({
  type: RECEIVE_SINGLE_KITCHEN,
  kitchen
});

export const fetchAllKitchens = (bounds) => dispatch => (
  APIUtil.fetchAllKitchens(bounds).then(kitchens => (
    dispatch(receiveAllKitchens(kitchens))
  ))
);

export const fetchSingleKitchen = id => dispatch => (
  APIUtil.fetchSingleKitchen(id).then(kitchen => (
    dispatch(receiveSingleKitchen(kitchen))
  ))
);

export const createKitchen = kitchen => dispatch => (
  APIUtil.createKitchen(kitchen).then(newKitchen => (
    dispatch(receiveSingleKitchen(newKitchen))
  ))
);

export const updateKitchen = kitchen => dispatch => (
  APIUtil.updateKitchen(kitchen).then((kitchens) => (
    dispatch(receiveAllKitchens(kitchens))
  ))
);

export const createReview = review => dispatch => (
  APIUtil.createReview(review).then(kitchen => (
    dispatch(receiveSingleKitchen(kitchen))
  ))
);
