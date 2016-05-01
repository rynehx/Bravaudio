var PlaylistApiUtil = require('../util/playlistApiUtil');


var PlaylistClientActions = {
  fetchDisplayPlaylist: function(user,playlist){
    PlaylistApiUtil.fetchDisplayPlaylist(user, playlist)
  }
};

module.exports = PlaylistClientActions;
