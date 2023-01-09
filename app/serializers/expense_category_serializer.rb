class ExpenseCategorySerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :user_bills
  has_many :users, through: :user_bills
end


# {
# "id": 1,
# "username": "Aaron",
# "email": "aaron@aaronmail.com",
# "bio": "Stock guy",
#   "incomes": [
#     {
#     "id": 1,
#     "name": "Teacher Pay Check",
#     "amount": "3.5",
#     "time_period": "Bi-Weekly"
#     }
#   ],
  
#   ],
#   "expense_categories": [
#     {
#     "id": 1,
#     "name": "House Hold Bill"
#     }
#     "user_bills": [
#     {
#     "id": 1,
#     "name": "Internet Bill",
#     "description": "Got dang interwebs money.",
#     "amount": "500.4"
#     }
#     ]
#   }