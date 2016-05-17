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
  }

};

module.exports = PlaylistServerActions;
