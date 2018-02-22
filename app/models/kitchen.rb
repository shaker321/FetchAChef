# == Schema Information
#
# Table name: kitchens
#
#  id           :integer          not null, primary key
#  kitchen_name :string           not null
#  description  :string
#  user_id      :integer          not null
#  lat          :float            not null
#  lng          :float            not null
#  owner        :string           not null
#  approved     :boolean          default(FALSE), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Kitchen < ApplicationRecord
  validates :kitchen_name, :user_id, :lat, :lng, :owner, presence: true
  validates :approved, inclusion: { in: [true, false] }

  has_attached_file :health_cert, default_url: "missing.png"
  validates_attachment_content_type :health_cert, content_type: /\Aimage\/.*\Z/

  has_attached_file :food_handler_cert, default_url: "missing.png"
  validates_attachment_content_type :food_handler_cert, content_type: /\Aimage\/.*\Z/

  has_attached_file :image, default_url: "missing.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :chefs
  belongs_to :user # manager/owner
  has_many :menu_items, through: :chefs
  has_many :orders
  has_many :reviews

  def self.in_bounds(bounds)
    lat_upper = (bounds["northEast"]["lat"]).to_f
    lat_lower = (bounds["southWest"]["lat"]).to_f
    lng_upper = (bounds["northEast"]["lng"]).to_f
    lng_lower = (bounds["southWest"]["lng"]).to_f


    kitchen_in_bounds = Kitchen.where(
      lat: (lat_lower..lat_upper),
      lng: (lng_lower..lng_upper)
    )
  end
end
