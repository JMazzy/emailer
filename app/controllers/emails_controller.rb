class EmailsController < ApplicationController


  def index
    @emails = GmailAPI.new.grab_all_unread
    render json: @emails
  end


  def create
    @gmail = GmailAPI.new
    @gmail.send_email(params)
  end

 # "email"=>{"to"=>"you", "subject"=>"board", "description"=>"board"}


  def search
    @gmail = GmailAPI.new
    @gmail.search(params)
  end 



end
