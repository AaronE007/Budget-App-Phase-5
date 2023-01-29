class User < ApplicationRecord
  has_many :incomes
  
  has_many :user_bills
  has_many :expense_categories, through: :user_bills

  has_secure_password

  def unique_expense_categories
    expense_categories.distinct
  end

  def bills_total
    unique_expense_categories.flat_map(&:user_bills).sum(&:amount)
  end 
  
  def incomes_total
    incomes.sum(&:amount)
  end 

end




