Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  root to: "tasks#index"

  # namespace :api do
  #   jsonapi_resources :tasks
  # end

  get "*path", to: "tasks#index", constraints: { format: "html" }
end
