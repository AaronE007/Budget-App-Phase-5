class UserBillSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :amount

  belongs_to :user
  belongs_to :expense_category
end
