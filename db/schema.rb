# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180222192011) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "carts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_carts_on_user_id"
  end

  create_table "chefs", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "username", null: false
    t.integer "user_id", null: false
    t.string "description", null: false
    t.integer "kitchen_id", null: false
    t.string "general_cuisine", null: false
    t.string "specific_cuisine", null: false
    t.boolean "approved", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["kitchen_id"], name: "index_chefs_on_kitchen_id"
    t.index ["user_id"], name: "index_chefs_on_user_id"
  end

  create_table "kitchens", force: :cascade do |t|
    t.string "kitchen_name", null: false
    t.string "description"
    t.integer "user_id", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.string "owner", null: false
    t.boolean "approved", default: false, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "health_cert_file_name"
    t.string "health_cert_content_type"
    t.integer "health_cert_file_size"
    t.datetime "health_cert_updated_at"
    t.string "food_handler_cert_file_name"
    t.string "food_handler_cert_content_type"
    t.integer "food_handler_cert_file_size"
    t.datetime "food_handler_cert_updated_at"
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.index ["user_id"], name: "index_kitchens_on_user_id"
  end

  create_table "menu_items", force: :cascade do |t|
    t.string "title", null: false
    t.string "description"
    t.integer "price", null: false
    t.integer "chef_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["chef_id"], name: "index_menu_items_on_chef_id"
  end

  create_table "orders", force: :cascade do |t|
    t.float "price", null: false
    t.integer "user_id", null: false
    t.integer "chef_id", null: false
    t.integer "menu_item_id", null: false
    t.boolean "complete", default: false, null: false
    t.integer "kitchen_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["chef_id"], name: "index_orders_on_chef_id"
    t.index ["kitchen_id"], name: "index_orders_on_kitchen_id"
    t.index ["menu_item_id"], name: "index_orders_on_menu_item_id"
    t.index ["user_id"], name: "index_orders_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "body", null: false
    t.integer "rating", null: false
    t.integer "user_id", null: false
    t.string "username", null: false
    t.integer "kitchen_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["kitchen_id"], name: "index_reviews_on_kitchen_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
