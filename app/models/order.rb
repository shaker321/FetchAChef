# == Schema Information
#
# Table name: orders
#
#  id           :integer          not null, primary key
#  price        :float            not null
#  user_id      :integer          not null
#  chef_id      :integer          not null
#  menu_item_id :integer          not null
#  complete     :boolean          default(FALSE), not null
#  kitchen_id   :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Order < ApplicationRecord
  validates :price, :user_id, :chef_id, :menu_item_id, :kitchen_id, presence: true
  validates :complete, inclusion: { in: [true, false] }

  belongs_to :chef
  belongs_to :user
  belongs_to :menu_item
  belongs_to :kitchen
end
