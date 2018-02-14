import { connect } from "react-redux";

import { fetchSingleChef } from "../../../actions/chef_actions.js";

import MenuIndexItem from "./menu_index_item.jsx";

const mapStateToProps = (state, props) => ({
  fetchSingleChef,
  title: props.title,
  description: props.description,
  chefId: props.chefId,
  price: props.price,
});

const mapDispatchToProps = (dispatch) => ({
  fetchsingleChef: (id) => dispatch(fetchSingleChef(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuIndexItem);
