source 'https://rubygems.org'


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.6'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.15'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc


gem 'bootstrap-sass'
gem 'angularjs-rails'
gem 'angular_rails_csrf'
gem 'gmail', '~> 0.6.0'
gem 'omniauth-google-oauth2', '~> 0.4.1'
gem 'figaro'


group :production do
  gem 'rails_12factor' # heroku 
end

group :development do
  gem 'guard-rspec', require: false
end

group :test do
  gem 'capybara'
  gem 'launchy'
end


group :development, :test do
  gem 'jazz_hands', github: 'nixme/jazz_hands', branch: 'bring-your-own-debugger'
  gem 'pry-byebug'
  gem 'better_errors'
  gem 'binding_of_caller' # goes with better_errors
  gem 'rspec-rails'
  gem 'factory_girl_rails', '~> 4.0'
  gem 'letter_opener'
end