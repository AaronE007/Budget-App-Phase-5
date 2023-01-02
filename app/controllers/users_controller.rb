class UsersController < ApplicationController
  skip_before_action :authorize!, only: :create


  def create
    user = User.create(user_params)
    if user.valid?
    session[:user_id] = user.id
    render json: user
    else 
      render json: {errors: user.errors.full_messages}
    end 
  end

  def show
    if current_user
    render json: current_user
    else 
      render json: {error: ["Not Authorized"]}, status: :unauthorized
    end 
  end 


  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :password_confirmation, :bio)                        
  end

end
