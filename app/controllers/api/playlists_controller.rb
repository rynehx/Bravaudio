class Api::PlaylistsController < ApplicationController


  def show
    author_id = User.find_by(username: params[:username])
    @playlist = Playlist.find_by(title: params[:title], author_id: author_id)
    if @playlist
      render "api/playlists/show"
    else
      @errors = ['playlist not found']
      render "api/shared/error", status: 404
    end
  end






end
