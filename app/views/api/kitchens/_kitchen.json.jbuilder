json.extract! kitchen, :id, :kitchen_name, :lat, :lng, :description, :owner, :user_id, :approved
json.chefs kitchen.chefs
json.menu_items kitchen.menu_items
json.reviews kitchen.reviews
json.health_cert_url asset_path(kitchen.health_cert.url)
json.food_handler_cert_url asset_path(kitchen.food_handler_cert.url)
json.image asset_path(kitchen.image.url)
