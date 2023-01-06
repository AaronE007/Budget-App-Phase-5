class ExpenseCategorySerializer < ActiveModel::Serializer
  attributes :id, :name, :balance

  has_many :user_bills
  has_many :users, through: :user_bills
end
