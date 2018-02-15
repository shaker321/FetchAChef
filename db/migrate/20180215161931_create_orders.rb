class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.float :price, null: false
      t.integer :user_id, null: false
      t.integer :chef_id, null: false
      t.integer :menu_item_id, null: false
      t.boolean :complete, default: false, null: false
      t.integer :kitchen_id, null: false
      t.timestamps
    end

    add_index :orders, :chef_id
    add_index :orders, :kitchen_id
    add_index :orders, :menu_item_id
    add_index :orders, :user_id
  end
end
