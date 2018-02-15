class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, only: [:create]

  def create
    @review = Review.new(review_params)
    @review.username = User.find(review_params[:user_id]).username

    if @review.save
      @kitchen = @review.kitchens
      render "api/kitchens/show"
    else
      render json: @review.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(
      :rating,
      :body,
      :kitchen_id,
      :user_id
    )
  end
end
