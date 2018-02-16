# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  attr_reader :password

  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_one :chef
  has_one :cart
  has_one :kitchen
  has_many :reviews
  has_many :orders
  has_one :chef

  attr_reader :password

  after_initialize :ensure_session_token
  after_create :create_cart

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    generate_unique_session_token
    self.save!
    self.session_token
  end

  def create_cart
    @cart = Cart.new({ user_id: self.id })
    @cart.save!
  end

  def can_change_password?(current_password, new_password, new_password_confirm)
    new_password == new_password_confirm && is_password?(current_password) && new_password.length >= 6
  end

  def change_password(password)
    password=(password)
  end

  private

  def ensure_session_token
    generate_unique_session_token unless self.session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end

  def generate_unique_session_token
    self.session_token = new_session_token

    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end

    self.session_token
  end
end
