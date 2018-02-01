import * as APIUtil from "../util/chef_api_util.js";

export const RECEIVE_ALL_CHEFS = "RECEIVE_ALL_CHEFS";
export const RECEIVE_SINGLE_CHEF = "RECEIVE_SINGLE_CHEF";

export const receiveAllChefs = (chefs) => ({
  type: RECEIVE_ALL_CHEFS,
  chefs
});

export const receiveSingleChef = (chef) => ({
  type: RECEIVE_SINGLE_CHEF,
  chef
});

export const fetchAllChefs = filters => dispatch => (
  APIUtil.fetchAllChefs(filters).then(chefs => (
    dispatch(receiveAllChefs(chefs))
  ))
);

export const fetchSingelChef = id => dispatch => (
  APIUtil.fetchSingleChef(id).then(chef => (
    dispatch(receiveSingleChef(chef))
  ))
);

export const createChef = chef => dispatch => (
  APIUtil.fetchSingleChef(chef.id).then(chef => (
    dispatch(receiveSingleChef(chef))
  ))
);

export const approveChef = chef => dispatch => (
  APIUtil.approveChef(chef.id).then(chef => (
    dispatch(receiveSingleChef(chef))
  ))
);

export const denyChef = chefId => dispatch => (
  APIUtil.denyChef(chefId).then(() => (
    dispatch(receiveAllChefs())
  ))
);

export const updateChef = chef => dispatch => (
  APIUtil.updateChef(chef.id).then((chef) => (
    dispatch(receiveAllChefs)
  ))
);
