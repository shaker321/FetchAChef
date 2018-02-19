import React from "react";

import ChefEditMenuItemsContainer from "./chef_edit_menu_items/chef_edit_menu_items_container.jsx";
import ChefEditProfileContainer from "./chef_edit_profile/chef_edit_profile_container.jsx";

class ChefTools extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chef-tools-container">
        <ChefEditProfileContainer/>
        <ChefEditMenuItemsContainer/>
      </div>
    );
  }
}

export default ChefTools;
