class EmailsController < ApplicationController


  def index
    @emails = GmailAPI.new.grab_all_unread
    render json: @emails
  end


  def create
    @email = Email.create(email_params)
    
  end




  private

  def email_params
    params.require(:email).permit(:to, :subject, :body)
  end



end
