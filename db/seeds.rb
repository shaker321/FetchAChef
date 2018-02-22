# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Users
User.destroy_all
User.create!(username: "ChefRatatouille", password: "DemoChef")
User.create!(username: "ChefArcher", password: "i<3food")
User.create!(username: "ChefChef", password: "i<3food")
User.create!(username: "ChefRemy", password: "i<3food")
User.create!(username: "ChefSpongebob", password: "i<3food")
User.create!(username: "ChefBobBelcher", password: "i<3food")
User.create!(username: "ChefBoyardee", password: "i<3food")
User.create!(username: "ChefLana", password: "i<3food")
User.create!(username: "ChefMalory", password: "i<3food")

# Carts
Cart.destroy_all
Cart.create!(user_id: User.first.id)
Cart.create!(user_id: User.second.id)
Cart.create!(user_id: User.third.id)
Cart.create!(user_id: User.fourth.id)
Cart.create!(user_id: User.fifth.id)
Cart.create!(user_id: User.sixth.id)
Cart.create!(user_id: User.seventh.id)
Cart.create!(user_id: User.eigth.id)
Cart.create!(user_id: User.ninth.id)

# Kitchens
Kitchen.destroy_all
kitchen_names = [
  "Amazing Appetites Kitchen",
  "Beyond Bon Appetit Kitchen",
  "Chicken Paradise Kitchen",
  "Delightful Food Kitchen",
  "Everything Delicious Kitchen",
  "Forget Fast Food Kitchen",
  "Great Food Kitchen",
  "Hello Dinner Kitchen",
  "I Dinner Kitchen",
  "Just Eat Kitchen",
  "Krabby Patty Kitchen",
  "Love of Food Kitchen",
  "Memorable Cuisine Kitchen",
  "New York Giants Kitchen",
  "Only Fresh Food Kitchen",
  "Patrick's Krusty Krab Kitchen",
  "Quite Delicious Food Kitchen",
  "Round the Corner Kitchen",
  "Savory Selections Kitchen",
  "The Absolute Finest Kitchen",
  "Ultimate Bistro Kitchen",
  "Very Good Kitchen",
  "West Coast Kitchen",
  "XYZ Kitchen",
  "Yellow Kitchen",
  "Zach's Snacks Kitchen",
]

descriptions = [
  "Amazing cuisine that won't break the bank.",
  "Beyond delicious food.",
  "Grandma's own recipes come to life.",
  "Only locally sourced foods.",
  "Unbelievable home cooking by us for your family.",
  "A kitchen that makes what you love!",
  "The best food this side of the Mississippi!",
  "You'll be back time and time again.",
  "The best food in the city.",
  "The only food you'll ever want!",
  "Recipes from around the globe come together here!",
  "The taste you can see.",
  "Phenomenal food every time.",
  "Our chefs make food that your family will love!",
  "You won't believe how flavorful our food is.",
  "Tasty beyond belief.",
  "Our food makes you want to marry it, settle down, have kids, and grow old together.",
  "Sometimes we think we'd like some fast food, then we remember that our kitchen exists.",
  "This food will put a smile on your face.",
  "Food for life!"
]

owners = [
  "John Jacob",
  "Tony Stark",
  "Steve Rodgers",
  "Timmy Turner",
  "Tommy Pickles",
  "Teddy Roosevelt",
  "Aladdin Jasmine",
  "Rachel Ray",
  "Esmerelda Short",
  "Steny Smith",
  "Joseph O'Toole",
  "Mike Wazowski",
  "Phineas Ferb",
  "Michelle Rose",
  "Marie Hopper",
  "Max Long"
]

user_ids = []

User.all.each do |user|
  user_ids << user.id
end

10.times do
  kitchen_name = kitchen_names.sample
  description = descriptions.sample
  owner = owners.sample
  user_id = user_ids.sample
  kitchen_image_num = (1..26).sample

  Kitchen.create!(
    kitchen_name: kitchen_name,
    description: description,
    user_id: user_id,
    owner: owner,
    lat: [(rand(0..0.01) + 40.7529).round(6), (40.7529 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + -73.9942).round(6), (-73.9942 - rand(0..0.01)).round(6)].sample,
    approved: true,
    health_cert: File.open("app/assets/images/health_cert.jpg"),
    food_handler_cert: File.open("app/assets/images/food_handler_cert.jpg"),
    image: File.open("app/assets/images/kitchen_#{kitchen_image_num}.jpg")
  )

  Kitchen.create!(
    kitchen_name: kitchen_name,
    description: description,
    user_id: user_id,
    owner: owner,
    lat: [(rand(0..0.01) + 42.3601).round(6), (42.3601 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + -71.0589).round(6), (-71.0589 - rand(0..0.01)).round(6)].sample,
    approved: true,
    health_cert: File.open("app/assets/images/health_cert.jpg"),
    food_handler_cert: File.open("app/assets/images/food_handler_cert.jpg"),
    image: File.open("app/assets/images/kitchen_#{kitchen_image_num}.jpg")
  )

  Kitchen.create!(
    kitchen_name: kitchen_name,
    description: description,
    user_id: user_id,
    owner: owner,
    lat: [(rand(0..0.01) + 34.0522).round(6), (34.0522 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + -118.2437).round(6), (-118.2437 - rand(0..0.01)).round(6)].sample,
    approved: true,
    health_cert: File.open("app/assets/images/health_cert.jpg"),
    food_handler_cert: File.open("app/assets/images/food_handler_cert.jpg"),
    image: File.open("app/assets/images/kitchen_#{kitchen_image_num}.jpg")
  )

  Kitchen.create!(
    kitchen_name: kitchen_name,
    description: description,
    user_id: user_id,
    owner: owner,
    lat: [(rand(0..0.01) + 37.7749).round(6), (37.7749 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + -122.4194).round(6), (-122.4194 - rand(0..0.01)).round(6)].sample,
    approved: true,
    health_cert: File.open("app/assets/images/health_cert.jpg"),
    food_handler_cert: File.open("app/assets/images/food_handler_cert.jpg"),
    image: File.open("app/assets/images/kitchen_#{kitchen_image_num}.jpg")
  )

  Kitchen.create!(
    kitchen_name: kitchen_name,
    description: description,
    user_id: user_id,
    owner: owner,
    lat: [(rand(0..0.01) + 47.6062).round(6), (47.6062 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + -122.3321).round(6), (-122.3321 - rand(0..0.01)).round(6)].sample,
    approved: true,
    health_cert: File.open("app/assets/images/health_cert.jpg"),
    food_handler_cert: File.open("app/assets/images/food_handler_cert.jpg"),
    image: File.open("app/assets/images/kitchen_#{kitchen_image_num}.jpg")
  )

  Kitchen.create!(
    kitchen_name: kitchen_name,
    description: description,
    user_id: user_id,
    owner: owner,
    lat: [(rand(0..0.01) + 52.5200).round(6), (52.5200 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + 13.4050).round(6), (13.4050 - rand(0..0.01)).round(6)].sample,
    approved: true,
    health_cert: File.open("app/assets/images/health_cert.jpg"),
    food_handler_cert: File.open("app/assets/images/food_handler_cert.jpg"),
    image: File.open("app/assets/images/kitchen_#{kitchen_image_num}.jpg")
  )

  Kitchen.create!(
    kitchen_name: kitchen_name,
    description: description,
    user_id: user_id,
    owner: owner,
    lat: [(rand(0..0.01) + 22.3964).round(6), (22.3964 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + 114.1095).round(6), (114.1095 - rand(0..0.01)).round(6)].sample,
    approved: true,
    health_cert: File.open("app/assets/images/health_cert.jpg"),
    food_handler_cert: File.open("app/assets/images/food_handler_cert.jpg"),
    image: File.open("app/assets/images/kitchen_#{kitchen_image_num}.jpg")
  )

  Kitchen.create!(
    kitchen_name: kitchen_name,
    description: description,
    user_id: user_id,
    owner: owner,
    lat: [(rand(0..0.01) + 48.8566).round(6), (48.8566 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + 2.3522).round(6), (2.3522 - rand(0..0.01)).round(6)].sample,
    approved: true,
    health_cert: File.open("app/assets/images/health_cert.jpg"),
    food_handler_cert: File.open("app/assets/images/food_handler_cert.jpg"),
    image: File.open("app/assets/images/kitchen_#{kitchen_image_num}.jpg")
  )

  Kitchen.create!(
    kitchen_name: kitchen_name,
    description: description,
    user_id: user_id,
    owner: owner,
    lat: [(rand(0..0.01) + 51.5074).round(6), (51.5074 - rand(0..0.01)).round(6)].sample,
    lng: [(rand(0..0.01) + -0.1278).round(6), (-0.1278 - rand(0..0.01)).round(6)].sample,
    approved: true,
    health_cert: File.open("app/assets/images/health_cert.jpg"),
    food_handler_cert: File.open("app/assets/images/food_handler_cert.jpg"),
    image: File.open("app/assets/images/kitchen_#{kitchen_image_num}.jpg")
  )
end

#Chefs
Chef.destroy_all

first_names = [
  "Tony",
  "Steny",
  "Joseph",
  "Kameron",
  "Nigel",
  "Kemuel",
  "Patrick",
  "Steven",
  "Mark",
  "John",
  "Tom",
  "Christiane",
  "Sarah",
  "Megan",
  "Jasmine",
  "Alice",
  "Felicity",
  "Winona",
  "Michelle",
  "Monica",
  "Jessica",
  "Ava",
  "Erica"
]

last_names = [
  "Smith",
  "Johnson",
  "Lief",
  "Stark",
  "Jensen",
  "Kent",
  "Wayne",
  "Parker",
  "Quill",
  "Lynch",
  "Gupta",
  "Khalil",
  "Swanson",
  "Halpern",
  "Beasley",
  "Scott",
  "Wilson",
  "Terry",
  "Hartman",
  "Mendoza",
  "Andre",
  "Nunez",
  "Gil",
  "Boseman",
]

usernames = []

User.all.each do |user|
  usernames << user.username
end

general_cuisines = [
  "African",
  "Asian",
  "Caribbean",
  "European",
  "Indian",
  "Mediterranean",
  "Middle Eastern",
  "North American",
  "South American"
]

specific_cusines = [
  ["Nigerian", "Kenyan", "South African", "Moroccan", "Zimbabwean"],
  ["Chinese", "Japanese", "Korean", "Thai", "Filipino"],
  ["Jamaican", "Cuban", "Haitian", "Dominican", "Bahamian"],
  ["French", "Irish", "Polish", "German", "Spanish"],
  ["North Indian", "South Indian"],
  ["Greek", "Italian"],
  ["Iranian", "Lebanese", "Jordanian", "Syrian", "Egyptian"],
  ["American", "Canadian", "Mexican"],
  ["Brazilian", "Argentinian", "Colombian", "Venezuelian", "Chilean"]
]

kitchen_ids = []

Kitchen.all.each do |kitchen|
  kitchen_ids << kitchen.id
end

900.times do
  first_name = first_names.sample
  last_name = last_names.sample
  username = usernames.sample
  general_cuisine = general_cuisines.sample
  specific_cuisine = specific_cuisines[general_cuisines.index(general_cuisine)][(0..8).sample]
  description = descriptions.sample
  user_id = user_ids.sample
  kitchen_id = kitchen_ids.sample
  approved = [true, false].sample

  Chef.create!(
    first_name: first_name,
    last_name: last_name,
    username: username,
    general_cuisine: general_cuisine,
    specific_cuisine: specific_cuisine,
    description: description,
    user_id: user_id,
    kitchen_id: kitchen_id,
    approved: approved
  )
end


# Menu Items
MenuItem.destroy_all

chef_ids = []

Chef.all.each do |chef|
  chef_ids << chef.id
end

titles = [
  "Chicken Breast",
  "Shrimp Special",
  "Grilled Chicken",
  "Ribeye",
  "Steak",
  "Flounder",
  "Red Snapper",
  "Salmon",
  "Tuna Steak",
  "Chicken Thigh",
  "Cow Shoulder",
  "Filet Mignon",
  "Skirtsteak",
  "Veal",
  "Lamb",
  "Goat",
  "Venison",
  "Elk",
  "Caesar Salad",
  "Mixed Vegetables",
  "Garden Salad",
  "Eggplant",
  "Asparagus",
  "Broccoli"
]

menu_item_descriptions = [
  "A delish dish featuring plenty of lemon zest.",
  "Seasoned with a secret spice.",
  "Spicy, spicy, spicy!",
  "Zesty and fresh.",
  "Served fresh with garlic and onions.",
  "Marinated overnight.",
  "House marinade with a secret blend of herbs and spices.",
  "A taste you can see.",
  "Has a smoky taste.",
  "A recipe handed down from my grandmother's grandmother.",
  "Seasoned with fresh herbs from my personal garden.",
  "All-natural and organic.",
  "World class nourishment"
]

900.times do
  chef_id = chef_ids.sample
  title = titles.sample
  price = (5..15).sample
  description = menu_item_descriptions.sample

  MenuItem.create!(
    chef_id: chef_id,
    title: title,
    price: price,
    description: description
  )
end

menu_items = []

MenuItem.all.each do |menu_item|
  menu_items << menu_item
end

# Orders
Order.destroy_all

120.times do
  chef_id = chef_ids.sample
  user_id = user_ids.sample
  kitchen_id = kitchen_ids.sample
  menu_item = menu_items.sample
  complete = [true, false].sample

  Order.create!(
    chef_id: chef_id,
    user_id: user_id,
    price: menu_item.price,
    menu_item_id: menu_item.id,
    complete: complete,
    kitchen_id: kitchen_id
  )
end


# Reviews
Review.destroy_all

reviews = [
  "Amazing cuisine that won't break the bank.",
  "Beyond delicious food.",
  "Grandma's own recipes come to life.",
  "Unbelievable home cooking.",
  "A kitchen that makes what you love!",
  "The best food this side of the Mississippi!",
  "You'll be back time and time again.",
  "The best food in the city.",
  "The only food you'll ever want!",
  "The taste you can see.",
  "Phenomenal food every time.",
  "Food that your family will love!",
  "You won't believe how flavorful the food is.",
  "Tasty beyond belief.",
  "The food makes you want to marry it, settle down, have kids, and grow old together.",
  "Sometimes we think we'd like some fast food, then we remember that this kitchen exists.",
  "This food will put a smile on your face.",
  "Food for life!"
]

users = []

User.all.each do |user|
  users << user
end


900.times do
  review = reviews.sample
  user = users.sample
  kitchen_id = kitchen_ids.sample

  Review.create!(
    rating: (3..5).sample,
    body: review,
    user_id: user.id,
    username: user.username,
    kitchen_id: kitchen_id
  )
end
