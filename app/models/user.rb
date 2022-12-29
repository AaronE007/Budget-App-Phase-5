class User < ApplicationRecord
  has_many :incomes
  has_many :income_categories, through: :incomes
  
  has_many :user_bills
  has_many :expense_categories, through: :user_bills

  has_secure_password

end




