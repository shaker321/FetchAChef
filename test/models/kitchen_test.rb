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

require 'test_helper'

class KitchenTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
