class Income < ApplicationRecord
  belongs_to :user
  belongs_to :income_category
end
