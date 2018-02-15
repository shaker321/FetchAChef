json.extract! kitchen, :id, :kitchen_name, :lat, :lng, :description, :owner, :user_id, :approved
json.chefs kitchen.chefs
json.menu_items kitchen.menu_items
json.reviews kitchen.reviews
