class Api::MenuItemsController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def create
    @menu_tiem = MenuItem.new(menu_item_params)

    if @menu_item.save
      @chef = @menu_item.chef
      render "api/chefs/show"
    else
      render json: @menu_item.errors.full_messages, status: 422
    end
  end

  def update
    @menu_item = MenuItem.find(params[:id])

    if @menu_item.update(menu_item_params)
      render :show
    else
      render json: @menu_item.errors.full_messages, status: 422
    end
  end

  def destory
    @menu_item = MenuItem.find(params[:id])

    if @menu_item
      @chef = @menu_item.chef
      @menu_item.destroy
      render "api/chefs/show"
    else
      render json: @menu_item.errors.full_messages, status: 422
    end
  end

  private

  def menu_item_params
    params.require(:menu_item).permit(
      :chef_id,
      :title,
      :price,
      :description
    )
  end
end
