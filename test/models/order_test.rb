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

require 'test_helper'

class OrderTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
