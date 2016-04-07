
API (Gmail)
  Resources
    messages
    labels (like folders and other types of labels)
    drafts (holds a message, but has its own id)
    history (list of all changes to a mailbox)
    threads (a message "conversation")
    [Maybe only use messages and labels?]

Or use gmail gem!

Database
  users
    id
    email
    password
    auth_token
    password_digest

  addresses
    id
    email

  messages
    id
    subject
    body
    sent

  user_messages
    id
    user_id
    user_type
    message_id

  label_messages
    id
    label_id
    message_id

  labels
    id
    user_id
    name


Front end
  Dependencies
    AngularJS
    UI Router
    Restangular

  Navbar w/ sign in/out/up on the top
  Email list center
    Newest to oldest
    pagination
    Unread - bold
  One side - categories (labels)





Questions
  * how to handle email retrieval?
    * rails app gets data in big packages and stores/updates db?
  * do we even have to store email on our server?
    * just use rails for users and authentication
    * make requests to gmail directly from Restangular?
      * is that secure?

Server Side or client side pagination?
http://www.michaelbromley.co.uk/blog/108/paginate-almost-anything-in-angularjs
