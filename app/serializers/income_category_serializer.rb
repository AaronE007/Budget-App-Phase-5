class IncomeCategorySerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :incomes
  has_many :users, through: :incomes
end
