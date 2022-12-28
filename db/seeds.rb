# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


u1 = User.create(username: 'Aaron', email: 'aaron@aaronmail.com', password: 'Aaron', bio: 'Stock guy')

ic1 = IncomeCategory.create(name: 'Paycheck')


i1 = Income.create(user_id: u1.id, income_category_id: ic1.id, name: 'Teacher Pay Check', description: 'Pay check from teaching those miserable children.', amount: '3.50', time_period: 'Bi-Weekly')


# create_table "incomes", force: :cascade do |t|
#   t.string "name"
#   t.string "description"
#   t.decimal "amount"
#   t.string "time_period"
#   t.bigint "user_id", null: false
#   t.bigint "income_category_id", null: false
#   t.datetime "created_at", precision: 6, null: false
#   t.datetime "updated_at", precision: 6, null: false
#   t.index ["income_category_id"], name: "index_incomes_on_income_category_id"
#   t.index ["user_id"], name: "index_incomes_on_user_id"
# end