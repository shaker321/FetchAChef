class Chef < ApplicationRecord
  validates :first_name, :last_name, :username, :specific_cuisine, :general_cuisine, :description, :kitchen_id, :user_id, presence: true
  validates :general_cuisine, inclusion: { in: ["African", "Asian", "Caribbean", "European", "Indian", "Mediterranean", "Middle Eastern", "North American", "South American"]}
  validates :approved, inclusion: { in: [true, false] }

  belongs_to :user
  belongs_to :kitchen
end
