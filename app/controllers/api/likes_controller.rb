class Api::LikesController < ApplicationController

  def playlist_likes #gets users that likes the playlist
    @playlist = Playlist.find(params[:playlist_id])
    @likes = @playlist.likings
    render "api/likes/show_playlist"
  end

  def track_likes #gets users that likes the track
    @track = Track.find(params[:track_id])
    @likes = @track.likings
    render "api/likes/show_track"
  end

  def user_likes
    @user = User.find(params[:user_id])
    # @likes = @user.likings
    #
      @likes = (@user.liked_tracks.includes(:author) + @user.liked_playlists.includes(:author,:tracks)).shuffle!
    render "api/likes/show_user"
  end

  def like_track
    @like = Like.find_by(author_id: current_user.id, likeable_id: params[:track_id], likeable_type: "Track")
    unless @like
      Like.create!(author_id: current_user.id, likeable_id: params[:track_id], likeable_type: "Track")
      @track = Track.find(params[:track_id])
      @likes = @track.likings
      render "api/likes/show_track"
    else
      @errors = ['like error']
      render "api/shared/error", status: 404
    end

  end

  def like_playlist
    @like = Like.find_by(author_id: current_user.id, likeable_id: params[:playlist_id], likeable_type: "Playlist")
    unless @like
      Like.create!(author_id: current_user.id, likeable_id: params[:playlist_id], likeable_type: "Playlist")
      @playlist = Playlist.find(params[:playlist_id])
      @likes = @playlist.likings
      render "api/likes/show_playlist"
    else
      @errors = ['like error']
      render "api/shared/error", status: 404
    end

  end

  def unlike_track
    @like = Like.find_by(author_id: current_user.id, likeable_id: params[:track_id], likeable_type: "Track")
    if @like
      @like.destroy
      @track = Track.find(params[:track_id])
      @likes = @track.likings
      render "api/likes/show_track"
    else
      @errors = ['like error']
      render "api/shared/error", status: 404
    end
  end

  def unlike_playlist
    @like = Like.find_by(author_id: current_user.id, likeable_id: params[:playlist_id], likeable_type: "Playlist")
    if @like
      @like.destroy
      @playlist = Playlist.find(params[:playlist_id])
      @likes = @playlist.likings
      render "api/likes/show_playlist"
    else
      @errors = ['like error']
      render "api/shared/error", status: 404
    end
  end

end
