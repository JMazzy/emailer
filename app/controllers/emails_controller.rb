class EmailsController < ApplicationController


  def index
    @emails = GmailAPI.new.grab_all_unread
    render json: @emails
  end


  def create
    @gmail = GmailAPI.new
    @gmail.send_email(params)

    render json: 201
  end


  def search
    @gmail = GmailAPI.new
    @gmail.search(params)
  end 



end
