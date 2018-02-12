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

require 'test_helper'

class ChefTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
