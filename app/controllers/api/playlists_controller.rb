class Api::PlaylistsController < ApplicationController


  def show
    author_id = User.find_by(username: params[:username])
    @playlist = Playlist.includes(:tracks).find_by(title: params[:title], author_id: author_id)

    @tracks = @playlist.tracks.includes(:author)

    if @playlist
      render "api/playlists/show"
    else
      @errors = ['playlist not found']
      render "api/shared/error", status: 404
    end
  end

  def user_playlists
    author = User.find_by(username: params[:username])
    @playlists = author.playlists
    #@playlists = author.playlists.includes(tracks: :author)
    if @playlists
      render "api/playlists/index"
    else
      @errors = ['playlist not found']
      render "api/shared/error", status: 404
    end

  end

  def delete
    #@playlist = current_user.playlists.find_by(title: params[:title])

     if (current_user.username == params[:username])
    #   @playlist = Playlist.find_by(title: params[:title])
      @playlist = current_user.playlists.includes(:author).find_by(title: params[:title])

      if @playlist.destroy
        render "api/playlists/delete"
      else
        @errors = ['playlist not deleted']
        render "api/shared/error", status: 404
      end
     end
  end

  def delete_track

     if (current_user.username == params[:username])
       @playlist = current_user.playlists.includes(:author, :tracks).find_by(title: params[:title])
       @track =@playlist.tracks.find(params[:track_id])
       @playlist_track_joining = @playlist.playlist_track_joinings.find_by(track_id: @track)



       if @playlist_track_joining.destroy

         @playlist_track_joinings = @playlist.playlist_track_joinings.each_with_index do |joining,i|
           joining.update!({order: i+1})
         end


         render "api/playlists/deleteTrack"
       else
         @errors = ['track not deleted from playlist']
         render "api/shared/error", status: 404
       end
     end

  end

  def edit
    if (current_user.username == params[:username])
      @playlist = current_user.playlists.includes(:author, :playlist_track_joinings).find_by(title: params[:title])

      if(editing_params[:newTitle])
        @playlist.update!({title: editing_params[:newTitle]})
      end

      if(editing_params[:description])
        @playlist.update!({description: editing_params[:description]})
        puts "editted"
      end

      params["form"]["tracks"].each_with_index do |id,i|
        @playlist.playlist_track_joinings.where(track_id: id).first.update!({order: i+1})
      end

      @playlist = current_user.playlists.includes(:author, :tracks).find_by(title: editing_params[:newTitle])
      @tracks = @playlist.tracks.includes(:author)
      render "api/playlists/show"
    end

  end


  def create

  end


  def add_track

    if (current_user.id.to_s == params[:user_id])
      author = User.find(params[:user_id])
      check = PlaylistTrackJoining.find_by(playlist_id: params[:playlist_id], track_id: params[:track_id])
      if check
        PlaylistTrackJoining.destroy(check.id)
        @playlists = author.playlists
        render "api/playlists/index"
      else

        count = PlaylistTrackJoining.count(playlist_id: params[:playlist_id])
        PlaylistTrackJoining.create({order: count+1, playlist_id: params[:playlist_id], track_id: params[:track_id]})

        @playlists = author.playlists
        render "api/playlists/index"
      end
    else
      @error = "not authorized user"
      render "api/shared/error"
    end
  end



  private

  def editing_params
    params.require(:form).permit( :title, :newTitle, :author, :description)
  end





end
