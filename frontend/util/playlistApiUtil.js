var PlaylistServerActions = require('../actions/playlistServerActions');

var PlaylistApiUtil = {
  fetchDisplayPlaylist: function(user,playlist){
    var request = {
      type: "get",
      url: "api/" + user + "/playlist/" + playlist,
      success: function(data){
        PlaylistServerActions.receiveDisplayPlaylist(data);
      },
      error: function(error){
        PlaylistServerActions.receiveNoPlaylist(error);
      }
    };

    $.ajax(request);
  }
};

module.exports = PlaylistApiUtil;
