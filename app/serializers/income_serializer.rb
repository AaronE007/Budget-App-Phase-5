class IncomeSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount, :time_period
  
  belongs_to :user
  belongs_to :income_category
end

