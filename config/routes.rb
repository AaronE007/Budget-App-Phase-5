Rails.application.routes.draw do
  
  resources :expense_categories
  resources :user_bills
  resources :income_categories
  resources :incomes
  resources :users

  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
end
