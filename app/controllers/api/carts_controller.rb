class Api::CartsController < ApplicationController
  before_action :require_logged_in, only: [:update, :show]

  def show
    @cart_minus_orders = Cart.find(params[:id])
    @orders = @cart_minus_orders.user.orders.where(complete: false)

    @cart = {
      id: @cart_minus_orders.id,
      user_id: @cart_minus_orders.user_id,
      orders: @orders
    }

    if @cart
      render :show
    else
      render json: ["Sorry, that cart does not exist."], status: 404
    end
  end

  def update
    @cart = Cart.find(params[:id])

    if @cart.update(cart_params)
      @user = @cart.user
      @orders = @user.orders.where(complete: false)
      render :show
    else
      render json: @cart.errors.full_messages, status: 422
    end
  end

  private

  def cart_params
    params.require(:cart).permit(
      :user_id
    )
  end
end
