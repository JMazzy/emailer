OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '345099552725-gvj9fohedtt924tnar0d4m7c5sm36g2f.apps.googleusercontent.com', 'mdAIulI4ZFS72DloaGjo5EFP', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end