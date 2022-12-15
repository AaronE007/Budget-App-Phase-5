class IncomeSerializer < ActiveModel::Serializer
  attributes :id, :name, :type, :amount
end
