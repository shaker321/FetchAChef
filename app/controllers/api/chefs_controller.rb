class Api::ChefsController < ApplicationController
  before_action :require_logged_in, only: [:update, :destroy]

  def index
    @chefs = Chef.where(kitchen_id: params[:kitchen_id]).includes(:menu_items)
  end

  def show
    @chef = Chef.find(params[:id])

    if @chef
      render :show
    else
      render json: ["Sorry, that chef is not in our database"], status: 404
    end
  end

  def create
    @chef = Chef.new(chef_params)

    if @chef.save
      render :show
    else
      render json: ["Invalid parameters"], status: 422
    end
  end

  def update
    @chef = Chef.find(params[:id])

    if @chef.update(chef_params)
      render :show
    else
      render json: @chef.errors.full_messages, status: 422
    end
  end

  def destroy
    @chef = Chef.find(params[:id])

    if @chef
      @chef.destroy

      @chefs = Chef.where(kitchen_id: params[:kitchen_id])
      render :index
    else
      render json: @chef.errors.full_messages, status: 422
    end
  end

  private

  def chef_params
    params.require(:chef).permit(
      :first_name,
      :last_name,
      :username,
      :specific_cuisine,
      :general_cuisine,
      :kitchen_id,
      :user_id,
      :approved,
      :description
    )
  end
end
