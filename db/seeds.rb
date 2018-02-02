# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users
User.destroy_all
User.create!(username: "test@test.com", password: "testtest");
User.create!(username: "test2@test.com", password: "testtest");

# Kitchens
Kitchen.destroy_all
Kitchen.create!(
  kitchen_name: "Now We're Cooking - NYC 1",
  description: "A kitchen in NYC",
  user_id: User.first.id,
  owner: "Bob Bobartin",
  lat: [(rand(0..0.01) + 40.7529).round(6), (40.7529 - rand(0..0.01)).round(6)].sample,
  lng: [(rand(0..0.01) + -73.9942).round(6), (-73.9942 - rand(0..0.01)).round(6)].sample,
  approved: true
)

Kitchen.create!(
  kitchen_name: "Now We're Cooking - NYC 2",
  description: "Another kitchen in NYC",
  user_id: User.second.id,
  owner: "A community Church",
  lat: [(rand(0..0.01) + 40.7529).round(6), (40.7529 - rand(0..0.01)).round(6)].sample,
  lng: [(rand(0..0.01) + -73.9942).round(6), (-73.9942 - rand(0..0.01)).round(6)].sample,
  approved: true
)

Kitchen.create!(
  kitchen_name: "Not Approved Place",
  description: "We're here",
  user_id: User.second.id,
  owner: "Someone",
  lat: [(rand(0..0.01) + 40.7529).round(6), (40.7529 - rand(0..0.01)).round(6)].sample,
  lng: [(rand(0..0.01) + -73.9942).round(6), (-73.9942 - rand(0..0.01)).round(6)].sample,
  approved: false
)

# Chefs
Chef.destroy_all
Chef.create!(
  first_name: "Tony",
  last_name: "Shaker",
  email_address: "test@test.com",
  general_cuisine: "European",
  specific_cuisine: "Italian",
  description: "I'm not actually Italian. I'm not actually Italian. I'm not actually Italian. I'm not actually Italian. I'm not actually Italian. I'm not actually Italian. I'm not actually Italian. I'm not actually Italian. I'm not actually Italian. I'm not actually Italian. ",
  user_id: User.first.id,
  kitchen_id: Kitchen.first.id,
  approved: true
)

Chef.create!(
  first_name: "Papa",
  last_name: "John's",
  email_address: "test2@test.com",
  general_cuisine: "North American",
  specific_cuisine: "Mexican",
  description: "I eat Mexican food myself. Taco Bell es mue bueno!",
  user_id: User.last.id,
  kitchen_id: Kitchen.last.id,
  approved: false
)

# # Menu Items
# MenuItem.destroy_all
# MenuItem.create!(
#   chef_id: Chef.last.id,
#   title: "Food1",
#   price: 10,
#   description: "Awesome Description dsfklsdfj;lsadkf 1"
# )
#
# MenuItem.create!(
#   chef_id: Chef.last.id,
#   title: "Food2",
#   price: 25,
#   description: "Awesome Description dsfklsdfj;lsadkf 2"
# )
#
# MenuItem.create!(
#   chef_id: Chef.last.id,
#   title: "Food3",
#   price: 15,
#   description: "Awesome Description dsfklsdfj;lsadkf 3"
# )
#
# MenuItem.create!(
#   chef_id: Chef.last.id,
#   title: "Food4",
#   price: 8,
#   description: "Awesome Description dsfklsdfj;lsadkf 4"
# )
#
# MenuItem.create!(
#   chef_id: Chef.first.id,
#   title: "Chicken Parm",
#   price: 8,
#   description: "Chicken with melted parmegiano cheese on it"
# )
#
# MenuItem.create!(
#   chef_id: Chef.first.id,
#   title: "Spagetti and Meatballs",
#   price: 10,
#   description: "Pasta with meat sauce and ground beef meatballs"
# )
#
# MenuItem.create!(
#   chef_id: Chef.first.id,
#   title: "Gnochi",
#   price: 10,
#   description: "Dough balls"
# )
#
# MenuItem.create!(
#   chef_id: Chef.first.id,
#   title: "Pizza",
#   price: 10,
#   description: "Cheese, tomato sauce, bread"
# )
#
# MenuItem.create!(
#   chef_id: Chef.first.id,
#   title: "Cheese and crackers",
#   price: 10,
#   description: "Assorted cheeses with real crackers"
# )
#
# # Reviews
# Review.destroy_all
# Review.create!(
#   rating: 3,
#   body: "Mediocre",
#   user_id: User.first.id,
#   username: User.first.username,
#   kitchen_id: Kitchen.first.id
# )
#
# Review.create!(
#   rating: 5,
#   body: "Excellent",
#   user_id: User.first.id,
#   username: User.first.username,
#   kitchen_id: Kitchen.first.id
# )
#
# Review.create!(
#   rating: 4,
#   body: "Amazing",
#   user_id: User.first.id,
#   username: User.first.username,
#   kitchen_id: Kitchen.first.id
# )
#
# Review.create!(
#   rating: 5,
#   body: "Bee's Knees",
#   user_id: User.first.id,
#   username: User.first.username,
#   kitchen_id: Kitchen.first.id
# )
#
# # Orders
# Order.destroy_all
# Order.create!(
#   chef_id: Chef.last.id,
#   user_id: User.first.id,
#   price: MenuItem.first.price,
#   menu_item_id: MenuItem.first.id,
#   complete: false,
#   kitchen_id: Kitchen.last.id
# )
#
# Order.create!(
#   chef_id: Chef.last.id,
#   user_id: User.first.id,
#   price: MenuItem.second.price,
#   menu_item_id: MenuItem.second.id,
#   complete: false,
#   kitchen_id: Kitchen.last.id
# )
#
# Order.create!(
#   chef_id: Chef.last.id,
#   user_id: User.first.id,
#   price: MenuItem.third.price,
#   menu_item_id: MenuItem.third.id,
#   complete: true,
#   kitchen_id: Kitchen.last.id
# )
#
# Order.create!(
#   chef_id: Chef.last.id,
#   user_id: User.first.id,
#   price: MenuItem.first.price,
#   menu_item_id: MenuItem.first.id,
#   complete: true,
#   kitchen_id: Kitchen.last.id
# )
