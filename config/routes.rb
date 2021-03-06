Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create, :update]
    resources :chefs, only: [:create, :destroy, :index, :show, :update]
    resources :kitchens, only: [:create, :destroy, :index, :show, :update]
    resources :menu_items, only: [:create, :update, :destroy]
    resources :reviews, only: [:create]
    resources :orders, only: [:create, :destroy]
    resources :carts, only: [:show, :update]
  end

  root "static_pages#root"
end
