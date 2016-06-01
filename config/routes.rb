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
    get "likes/playlist/:playlist_id", to: "likes#playlist_likes"
    get "likes/track/:track_id", to: "likes#track_likes"
    get "likes/user/:user_id", to: "likes#user_likes"
    post "likes/track/:track_id", to: "likes#like_track"
    post "likes/playlist/:playlist_id", to: "likes#like_playlist"
    delete "likes/track/:track_id", to: "likes#unlike_track"
    delete "likes/playlist/:playlist_id", to: "likes#unlike_playlist"
    get "search/:query", to: "search#searchbar"

    get ":username", to: "users#username"
    get ":username/track/:title", to: "tracks#show"
    get ":username/tracks", to: "tracks#user_tracks"
    patch "tracks/:track_id", to: "tracks#played"
    get ":username/playlists", to: "playlists#user_playlists"

    get "track/:track_id/playlists", to: "tracks#track_playlists"

    get ":username/playlist/:title", to: "playlists#show"
    delete ":username/playlist/:title" , to: "playlists#delete"
    patch ":username/playlist/:title" , to: "playlists#edit"

    delete ":username/playlist/:title/:track_id", to: "playlists#delete_track"
    post ":user_id/playlist/:playlist_id/:track_id",to: "playlists#add_track"
    post ":user_id/playlists",to: "playlists#create"




  end

    root "static_pages#root"
end
