class Api::TracksController < ApplicationController

def create

end


def index

  @tracks = Track.all
  render 'api/tracks/index'

end

def show
  @track = Track.find(params[:id])

  #@tracks = [@tracks] unless @tracks.class == Array
  render 'api/tracks/show'

end

# def show
#   @playlist = Playlist.find(params[:id])
#   start_idx = params[:start_idx] || 1
#   @tracks = @playlist.find(start_idx).next(20)
# end


end
