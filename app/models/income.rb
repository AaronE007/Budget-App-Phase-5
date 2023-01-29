class Income < ApplicationRecord
  belongs_to :user
  has_one_attached :image

  def image_url
    Rails.application.routes.url_helpers.rails_blob_path(image, only_path: true) if image.attached?
  end
end
