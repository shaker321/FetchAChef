import { connect } from "react-redux";

import { fetchSingleChef } from "../../../chef_actions.js"

import MenuIndexItem from "./menu_index_item.jsx"

const mapStateToProps = (state) => ({
  fetchSingleChef
});

const mapDispatchToProps = (dispatch) => ({
  return {};
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuIndexItem);
