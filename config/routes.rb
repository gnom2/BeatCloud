Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index]
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :tracks, only: [:create, :index, :show]
    resources :comments, only: [:create, :index, :destroy, :show]
  end

end
