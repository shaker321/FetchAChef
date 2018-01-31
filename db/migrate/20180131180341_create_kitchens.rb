class CreateKitchens < ActiveRecord::Migration[5.1]
  def change
    create_table :kitchens do |t|
      t.string :kitchen_name, null: false
      t.string :description
      t.integer :user_id, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :owner, null: false
      t.boolean :approved, default: false, null: false
      t.timestamps
    end

    add_index :kitchens, :user_id
  end
end
