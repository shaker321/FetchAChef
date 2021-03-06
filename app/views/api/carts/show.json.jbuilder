json.id @cart[:id]
json.user_id @cart[:user_id]

json.orders @cart[:orders] do |order|
  json.id order.id
  json.price order.price
  json.menu_item order.menu_item
  json.chef order.chef
  json.user order.user
  json.created_at order.created_at
  json.complete order.complete
end
