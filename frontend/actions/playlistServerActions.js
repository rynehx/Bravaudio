var Dispatcher = require('../dispatcher/dispatcher'),
    PlaylistConstants = require('../constants/playlistConstants');


var PlaylistServerActions = {
  receiveDisplayPlaylist: function(playlist){
    Dispatcher.dispatch({
      actionType: PlaylistConstants.RECEIVEDISPLAYPLAYLIST,
      playlist: playlist
    }
    );
  },
  receiveTrackPlaylists: function(playlists){

    Dispatcher.dispatch({
      actionType: PlaylistConstants.RECEIVETRACKPLAYLIST,
      playlists: playlists
    }
    );
  },
  receiveNoPlaylist: function(){
    Dispatcher.dispatch({
      actionType: PlaylistConstants.RECEIVEDNOPLAYLIST
    });
  },
  receiveUserPlaylists: function(playlists){
    Dispatcher.dispatch({
      actionType: PlaylistConstants.RECEIVEUSERPLAYLISTS,
      playlists: playlists
    });
  },
  deletedTrackFromPlaylist: function(track){
    Dispatcher.dispatch({
      actionType: PlaylistConstants.DELETEDTRACKFROMPLAYLIST,
      track: track
    });
  }



};

module.exports = PlaylistServerActions;
