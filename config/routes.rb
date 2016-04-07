Rails.application.routes.draw do
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'signout', to: 'sessions#destroy', as: 'signout'

  resources :sessions, only: [:create, :destroy]
  resource :home, only: [:show], controller: "home"
  resources :static_pages, only: [:index]
  
  scope :api do
    scope :v1 do
      resources :emails do
        get :search
      end
    end
  end

  root "static_pages#index"
end
