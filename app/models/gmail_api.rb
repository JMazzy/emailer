require 'gmail'

class GmailAPI


  def initialize
    @gmail = Gmail.connect!(ENV["gmail_address"], ENV["gmail_password"])
    # @gmail = Gmail.connect!(:xoauth2, current_user.email, current_user.oauth_token)

    # breakme
  end


  def inbox_count
    @count = @gmail.inbox.count
  end


  def grab_all_unread
    @arr = []
    @email_objects = []
    @emails = @gmail.inbox.emails.find(:unread)
    @emails.each do |email|
      obj = {
        from: email.from[0].name,
        subject: email.subject,
        body: email.body.raw_source,
        date: email.date
      }
      @email_objects << obj
    end
    @email_objects
  end


  def logout_of_gmail
    @gmail.logout
  end


  def user_logged_in?
    @gmail.logged_in?
  end


  def get_email_count
    @gmail.inbox.count
  end


  def send_email(to, subject, body)
    @gmail.deliver do
      to "#{to}"
      subject "#{subject}"
      text_part do
        body "#{body}"
      end
    end
  end


end