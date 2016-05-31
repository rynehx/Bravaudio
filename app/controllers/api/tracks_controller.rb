class Api::TracksController < ApplicationController

  def create

  end


  def index
    @tracks = Track.all
    render 'api/tracks/index'
  end

  def show
    author_id = User.find_by(username: params[:username])
    @track = Track.includes(:author, {playlists: :author}).find_by(title: params[:title], author_id: author_id)
    if @track
      render "api/tracks/show"
    else
      @errors = ['track not found']
      render "api/shared/error", status: 404
    end
  end

  def user_tracks
    author = User.find_by(username: params[:username])
    @tracks = author.tracks
    if @tracks
      render "api/tracks/index"
    else
      @errors = ['track not found']
      render "api/shared/error", status: 404
    end
  end

  def played

    @track = Track.find(params[:track_id])

    if @track
      @track.update!({times_played: @track.times_played+1})
      render "api/tracks/show"
    else
      @errors = ['track not found']
      render "api/shared/error", status: 404
    end

  end


  def track_playlists
    @track = Track.find(params[:track_id])

      if @track
        @playlists = @track.playlists
        render "api/playlists/index"
      else
        @errors = ['track not found']
        render "api/shared/error", status: 404
      end


  end

  # def show
  #   @playlist = Playlist.find(params[:id])
  #   start_idx = params[:start_idx] || 1
  #   @tracks = @playlist.find(start_idx).next(20)
  # end


end
