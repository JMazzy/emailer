require 'gmail'

class GmailAPI


  def initialize
    @gmail = Gmail.connect!(ENV["gmail_address"], ENV["gmail_password"])
    # @gmail = Gmail.connect!(:xoauth2, current_user.email, current_user.oauth_token)

    # breakhere
  end


  def inbox_count
    @count = @gmail.inbox.count
  end


  def grab_all_unread
    @arr = []
    @email_objects = []
    @emails = @gmail.inbox.emails(:from => "julia.herron@gmail.com")
    @emails.each do |email|
      obj = {
        from: email.from[0].name,
        from_email: email.from[0]["mailbox"] + email.from[0]["host"],
        subject: email.subject,
        body: email.body.parts[0],
        date: email.date
      }
      @email_objects << obj
    end
    @email_objects
  end


  def logout_of_gmail
    @gmail.logout
  end


  def send_email(object)
    @gmail.deliver do
      to "#{object.to}"
      subject "#{object.subject}"
      text_part do
        body "#{object.body}"
      end
    end
  end


end