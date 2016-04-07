require 'gmail'


def initialize(username, password)
  @gmail = Gmail.connect(username, password)


def gmail_wrapper(username, password)
  # session is passed into the block, logged out after the block is executed
  Gmail.connect(username, password) do |gmail|
    # gmail-y stuff...
  end

end


# def connect_to_gmail(username, password)
#   gmail = Gmail.connect(username, password)
# end


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
  gmail.deliver do
    to "#{to}"
    subject "#{subject}"
    text_part do
      body "#{body}"
    end
  end
end
