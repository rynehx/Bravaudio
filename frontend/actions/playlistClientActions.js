var PlaylistApiUtil = require('../util/playlistApiUtil');


var PlaylistClientActions = {
  fetchDisplayPlaylist: function(user,playlist){
    PlaylistApiUtil.fetchDisplayPlaylist(user, playlist);
  },
  fetchUserPlaylists: function(user){
    PlaylistApiUtil.fetchUserPlaylists(user);
  },
  deleteDisplayPlaylist: function(user, playlist, onSuccess){
    PlaylistApiUtil.deleteDisplayPlaylist(user, playlist, onSuccess);
  }
};

module.exports = PlaylistClientActions;
