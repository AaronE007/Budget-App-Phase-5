class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :bio

  has_many :incomes
  has_many :income_categories, through: :incomes
  
  has_many :user_bills
  has_many :expense_categories, through: :user_bills

end
