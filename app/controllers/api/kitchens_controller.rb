class Api::KitchensController < ApplicationController
  before_action :require_logged_in, only: [:update, :destroy]

  def index
    @kitchens = Kitchen.in_bounds(params[:bounds][:bounds]).includes(:chefs)
  end

  def show
    @kitchen = Kitchen.find(params[:id])

    if @kitchen
      render :show
    else
      render json: ["Sorry, that kitchen is not in our database."], status: 404
    end
  end

  def create
    @kitchen = Kitchen.new(kitchen_params)

    if @kitchen.save
      render :show
    else
      render json: ["Invalid parameters"], status: 422
    end
  end

  def update
    @kitchen = Kitchen.find(params[:id])

    if @kitchen.update(kitchen_params)
      render :show
    else
      render json: @kitchen.errors.full_messages, status: 422
    end
  end

  def destroy
    @kitchen = Kitchen.find(params[:id])

    if @kitchen
      @kitchen.destroy
      @kitchens = Kitchen.all

      render :index
    else
      render json: @kitchen.errors.full_messages, status: 422
    end
  end

  private

  def kitchen_params
    params.require(:kitchen).permit(
      :kitchen_name,
      :description,
      :lat,
      :lng,
      :user_id,
      :owner,
      :approved
    )
  end
end
