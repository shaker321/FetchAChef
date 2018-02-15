# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  body       :string           not null
#  rating     :integer          not null
#  user_id    :integer          not null
#  username   :string           not null
#  kitchen_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }
  validates :user_id, :kitchen_id, :rating, presence: true

  belongs_to :kitchen
  belongs_to :user
end
