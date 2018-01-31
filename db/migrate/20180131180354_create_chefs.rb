class CreateChefs < ActiveRecord::Migration[5.1]
  def change
    create_table :chefs do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :username, null: false
      t.integer :user_id, null: false
      t.string :description, null: false
      t.integer :kitchen_id, null: false
      t.string :general_cuisine, null: false
      t.string :specific_cuisine, null: false
      t.boolean :approved, default: false, null: false

      t.timestamps
    end

    add_index :chefs, :kitchen_id
    add_index :chefs, :user_id
  end
end
