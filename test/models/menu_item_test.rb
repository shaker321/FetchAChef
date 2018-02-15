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

require 'test_helper'

class MenuItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
