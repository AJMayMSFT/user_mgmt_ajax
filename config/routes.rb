Rails.application.routes.draw do
  root 'users#index'
  get 'users/new' => 'users#new'
  post '/users' => 'users#create'
  get '/users' => 'users#index'
  get '/users/:id' => 'users#show'
  patch '/users/:id' => 'users#update'
  delete '/users/:id' => 'users#destroy'
  get '/users/:id/edit' => 'users#edit'
  # post '/users/update' => 'users#update'
  # get 'users/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
