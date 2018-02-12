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

  has_many :chefs
  belongs_to :user # manager/owner

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
