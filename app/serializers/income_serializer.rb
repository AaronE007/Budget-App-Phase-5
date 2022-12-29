class IncomeSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount, :time_period
end

