Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy]
    resource :session, only: [:create, :destroy, :show]





    # resources :users, only: [:show] do
    #   resources :tracks, only: [:index, :create]
    #   resources :users, only: [:show]
    # end

    resources :tracks, only: [:index]

    # resources :playlists, only: [:show] do
    #   resources :tracks, only: [:index, :show, :create]
    # end
    get ":username", to: "users#username"
    get ":username/track/:title", to: "tracks#show"
    get ":username/tracks", to: "tracks#user_tracks"
    get ":username/playlist/:title", to: "playlists#show"
    get ":username/playlists", to: "playlists#user_playlists"
    delete ":username/playlist/:title" , to: "playlists#delete"
  end

    root "static_pages#root"
end
