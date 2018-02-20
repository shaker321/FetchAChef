class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])

    if @user.can_change_password?(
      params[:user][:current_password],
      params[:user][:new_password],
      params[:user][:new_password_confirm]
    )
      logout
      @user.change_password(params[:user][:new_password])
    end

    if @user.update(user_params)
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :username,
      :password,
      :current_password,
      :new_password,
      :new_password_confirm
    ).except(
      :current_password,
      :new_password,
      :new_password_confirm
    )
  end
end
