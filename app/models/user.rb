class User < ApplicationRecord
  has_many :incomes
  has_many :income_categories, through: :incomes
  has_many :user_bills
  has_many :expense_categories, through: :user_bills
end


# Has_many: Incomes
# Has_many: Income Categories 
# through: Income
# Has_many: User Bills
# Has_many: Expense Categories through:  User Payments
