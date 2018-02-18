import React from "react";

// import ChefProfile from "somwhere";
import ChefEditMenuItemsContainer from "./chef_edit_menu_items/chef_edit_menu_items_container.jsx";

class ChefTools extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ChefEditMenuItemsContainer/>
      </div>
    );
  }
}

export default ChefTools;
