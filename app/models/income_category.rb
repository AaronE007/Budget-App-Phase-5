class IncomeCategory < ApplicationRecord
  has_many :incomes
  has_many :users, through: :incomes
end
