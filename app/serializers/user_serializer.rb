class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :bio, :expense_categories

  has_many :incomes

  def expense_categories
    object.expense_categories.includes(:user_bills).map do |ec|
    {
      "id": ec.id,
      "name": ec.name,
      "user_bills": ec.user_bills
    } 
    end 
  end

end

