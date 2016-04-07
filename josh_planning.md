
API (Gmail)
  Resources
    messages
    labels (like folders and other types of labels)
    drafts (holds a message, but has its own id)
    history (list of all changes to a mailbox)
    threads (a message "conversation")
    [Maybe only use messages and labels?]

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
  
