import * as APIUtil from "../util/cart_api_util.js";

export const RECEIVE_CART = "RECEIVE_CART";

export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart
});

export const fetchCart = (cartId) => (dispatch) => (
  APIUtil.fetchCart(cartId).then(cart => (
    dispatch(receiveCart(cart))
  ))
);

export const addToCart = (userId, menuItem, kitchen) => (dispatch) => (
  APIUtil.addToCart(userId, menuItem, kitchen).then(cart => (
    dispatch(receiveCart(cart))
  ))
);

export const removeFromCart = (orderId) => (dispatch) => (
  APIUtil.removeFromCart(orderId).then(cart => (
    dispatch(receiveCart(cart))
  ))
);
