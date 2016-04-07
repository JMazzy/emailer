class EmailsController < ApplicationController


  def index
    @emails = GmailAPI.new.grab_all_unread
    render json: @emails
  end



end
