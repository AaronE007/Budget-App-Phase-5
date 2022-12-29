class ApplicationController < ActionController::API
  include ActionController::Cookies

  #before_action :authorize!

  private

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end 

  def authorize!
    no_route unless current_user
  end

  def no_route
    render json {error ["Not authorized"]}
  end 

end
