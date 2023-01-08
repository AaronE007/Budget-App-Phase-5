Rails.application.routes.draw do
  namespace :api do
  resources :expense_categories
  resources :user_bills
  resources :income_categories
  resources :incomes
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  end 
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end

