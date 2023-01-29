class IncomeSerializer < ActiveModel::Serializer
  attributes :id, :name, :amount, :time_period, :image, :image_url

  belongs_to :user

end

