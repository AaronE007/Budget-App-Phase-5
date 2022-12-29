class ApplicationController < ActionController::API
  include ActionController::Cookies

  #before_action :authorize!

  private

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end 

end
