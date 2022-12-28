# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_12_27_235835) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "expense_categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "income_categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "incomes", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.decimal "amount"
    t.string "time_period"
    t.bigint "user_id", null: false
    t.bigint "income_category_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["income_category_id"], name: "index_incomes_on_income_category_id"
    t.index ["user_id"], name: "index_incomes_on_user_id"
  end

  create_table "user_bills", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.decimal "amount"
    t.bigint "user_id", null: false
    t.bigint "expense_category_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["expense_category_id"], name: "index_user_bills_on_expense_category_id"
    t.index ["user_id"], name: "index_user_bills_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.string "bio"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "incomes", "income_categories"
  add_foreign_key "incomes", "users"
  add_foreign_key "user_bills", "expense_categories"
  add_foreign_key "user_bills", "users"
end
