class User < ApplicationRecord
  has_many :incomes
  
  has_many :user_bills
  has_many :expense_categories, through: :user_bills

  has_secure_password

  def unique_expense_categories
    expense_categories.distinct
  end
  
end




