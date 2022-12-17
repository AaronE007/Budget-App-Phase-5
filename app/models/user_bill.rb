class UserBill < ApplicationRecord
  belongs_to :user
  belongs_to :expense_categories
end
