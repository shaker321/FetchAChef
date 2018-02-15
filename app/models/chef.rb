# == Schema Information
#
# Table name: chefs
#
#  id               :integer          not null, primary key
#  first_name       :string           not null
#  last_name        :string           not null
#  username         :string           not null
#  user_id          :integer          not null
#  description      :string           not null
#  kitchen_id       :integer          not null
#  general_cuisine  :string           not null
#  specific_cuisine :string           not null
#  approved         :boolean          default(FALSE), not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Chef < ApplicationRecord
  validates :first_name, :last_name, :username, :specific_cuisine, :general_cuisine, :description, :kitchen_id, :user_id, presence: true
  validates :general_cuisine, inclusion: { in: ["African", "Asian", "Caribbean", "European", "Indian", "Mediterranean", "Middle Eastern", "North American", "South American"] }
  validates :approved, inclusion: { in: [true, false] }

  belongs_to :user
  belongs_to :kitchen
  has_many :menu_items
  has_many :orders
end
