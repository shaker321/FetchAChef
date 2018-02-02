Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy, :show]
    resource :users, only: [:create]
    resource :kitchens, only: [:create, :destroy, :index, :show, :update]
    resource :chefs, only: [:create, :destroy, :index, :show, :update]
  end

  root "static_pages#root"
end
