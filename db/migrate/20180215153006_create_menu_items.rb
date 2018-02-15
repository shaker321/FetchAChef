class CreateMenuItems < ActiveRecord::Migration[5.1]
  def change
    create_table :menu_items do |t|
      t.string :title, null: false
      t.string :description
      t.integer :price, null: false
      t.integer :chef_id, null: false
      t.timestamps
    end

    add_index :menu_items, :chef_id
  end
end
