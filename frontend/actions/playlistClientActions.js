var PlaylistApiUtil = require('../util/playlistApiUtil');


var PlaylistClientActions = {
  fetchDisplayPlaylist: function(user,playlist){
    PlaylistApiUtil.fetchDisplayPlaylist(user, playlist);
  },
  fetchUserPlaylists: function(user){
    PlaylistApiUtil.fetchUserPlaylists(user);
  }
};

module.exports = PlaylistClientActions;
