class UserBillSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :amount
end
