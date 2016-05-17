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
  },
  fetchUserPlaylists: function(user){
    var request = {
      type: "get",
      url: "api/" + user + "/playlists",
      success: function(data){
        PlaylistServerActions.receiveUserPlaylists(data);
      },
      error: function(error){
        console.log("user playlists not fetched");
      }
    };

    $.ajax(request);
  },
  deleteDisplayPlaylist: function(user, playlist, onSuccess){
    var request = {
      type: "delete",
      url: "api/" + user + "/playlists",
      success: function(data){
        onSuccess();
      },
      error: function(error){
        console.log("user playlists not fetched");
      }
    };
    $.ajax(request);
  }

};

module.exports = PlaylistApiUtil;
