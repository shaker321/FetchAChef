class Api::OrdersController < ApplicationController
  before_action :require_logged_in, only: [:create, :destroy]

  def create
    @order = Order.new(order_params)

    if @order.save
      render :show
    else
      render json: @order.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destory
    @order = Order.find(params[:id])
    @user = @order.user

    @cart_minus_orders = @user.cart
    @kitchen = @order.kitchen

    if @order
      @order.destroy

      # after deleting the order in question, it returns the rest
      # of the orders for the user so they can populate the cart
      @orders = @user.orders.where(complete: false)
      @cart = {
        id: @cart_minus_orders.id,
        user_id: @cart_minus_orders.user_id,
        orders: @orders
      }

      render "api/carts/show"
    else
      render json: @order.errors.full_messages, status: 422
    end
  end

  private

  def order_params
    params.require(:order).permit(
      :price,
      :chef_id,
      :kitchen_id,
      :menu_item_id,
      :complete
    )
  end
end
