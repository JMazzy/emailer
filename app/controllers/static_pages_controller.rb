class StaticPagesController < ApplicationController

  before_action :authenticate_user!

  def authenticate_user!
    if current_user.nil?
      redirect_to home_path
    end
  end

  def index
  end


end
