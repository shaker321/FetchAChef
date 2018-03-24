import React from "react";

import MenuIndexItemContainer from "../../kitchen_profile/menu/menu_index_item_container.jsx";

class ChefEditMenuItems extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: "",
      showAddMenuItem: false
    };
  }

  componentDidMount() {
    this.setState({
      showAddMenuItem: false
    });

    this.props.fetchSingleChef(this.props.currentUser.chef.id).then(this.updateMenuItems.bind(this));
  }

  updateMenuItems() {
    this.chef = this.props.chefs[this.props.currentUser.chef.id];
    this.setState({
      menuItems: this.chef.menu_items
    });
  }

  deleteMenuItem(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.deleteMenuItem(e.target.id).then(this.updateMenuItems.bind(this));
  }

  addMenuItem(e) {
    e.preventDefault();
    e.stopPropagation();

    this.props.createMenuItem({
      menu_item: {
        chef_id: this.props.currentUser.chef.id,
        title: e.target.title.value,
        description: e.target.description.value,
        price: e.target.price.value
      }
    }).then(this.updateMenuItems.bind(this));

    this.setState({
      showAddMenuItem: false
    });
  }

  showAddMenuItemForm(e) {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      showAddMenuItem: true
    });
  }

  menuItemForm() {
    let addMenuItemForm;

    if (this.state.showAddMenuItem) {
      addMenuItemForm = (
        <form onSubmit={ this.addMenuItem.bind(this) }>
          <div className="chef-edit-menu-items-menu-index-item">
            <ul>
              <li>
                <input
                  type="text"
                  name="title"
                  placeholder="Dish Name"
                  className="chef-edit-menu-items-add-menu-item-input"
                />
              </li>
              <li>
                <textarea
                  type="textarea"
                  name="description"
                  placeholder="Description"
                  className="chef-edit-menu-items-add-menu-item-input
                  chef-edit-menu-items-add-menu-item-description-input"
                />
              </li>
              <li>
                <input
                  type="number"
                  name="price"
                  placeholder="Price Per Serving"
                  className="chef-edit-menu-items-add-menu-item-input"
                />
              </li>
            </ul>
            <input
              type="submit"
              value="Save"
              id="post"
              className="chef-edit-menu-items-add-menu-item-save-button"
            />
          </div>
        </form>
      );
    }

    return addMenuItemForm;
  }

  menuItems() {
    const MenuIndexItems = this.state.menuItems;
    let menu = [];

    if (MenuIndexItems) {
      MenuIndexItems.forEach((item) => {
        menu.push(
          <div key={ item.id }>
            <div className="chef-edit-menu-items-menu-index-item">
              <MenuIndexItemContainer
                chef={ this.chef }
                title={ item.title }
                description={ item.description }
                price={ item.price}
                key={ item.id }
              />

              <input
                type="submit"
                value="❌"
                className="chef-edit-menu-items-delete-button"
                onClick={ this.deleteMenuItem.bind(this) }
                id={ item.id }
              />
            </div>
          </div>
        );
      });
    }

    return menu;
  }

  render() {
    return (
      <div className="chef-edit-menu-items-container">
        <div className="chef-edit-menu-items-text">
          <h3 className="chef-edit-menu-items-title">Edit Menu Items</h3>
          <div>
            { this.menuItems() }

            <br/>

            { this.menuItemForm() }

            <br/>

            <input
              type="submit"
              value="Add Item"
              className="chef-edit-menu-items-add-menu-item"
              onClick={ this.showAddMenuItemForm.bind(this) }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ChefEditMenuItems;
