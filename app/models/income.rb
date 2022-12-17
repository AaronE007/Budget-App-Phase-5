class Income < ApplicationRecord
  belongs_to :user
  belongs_to :income_categories
end
