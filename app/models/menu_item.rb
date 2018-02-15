# == Schema Information
#
# Table name: menu_items
#
#  id          :integer          not null, primary key
#  title       :string           not null
#  description :string
#  price       :integer          not null
#  chef_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class MenuItem < ApplicationRecord
  validates :title, :price, presence: true

  belongs_to :chef
  has_many :orders
end
