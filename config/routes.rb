Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy]
    resource :session, only: [:create, :destroy, :show]





    # resources :users, only: [:show] do
    #   resources :tracks, only: [:index, :create]
    #   resources :users, only: [:show]
    # end

    resources :tracks, only: [:show,:index]

    # resources :playlists, only: [:show] do
    #   resources :tracks, only: [:index, :show, :create]
    # end
    get "username/:username", to: "users#username"


  end

    root "static_pages#root"
end
