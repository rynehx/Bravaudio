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
      type: "DELETE",
      url: "api/" + user + "/playlist/" + playlist,
      success: function(data){
        onSuccess(data);
      },
      error: function(error){
        console.log("user playlists not deleted");
      }
    };
    $.ajax(request);
  },

  deletePlaylistTrack: function(user, playlist, track_id, updateModal){
    var request = {
      type: "DELETE",
      url: "api/" + user +"/playlist/" + playlist + "/" + track_id,
      success: function(data){

        updateModal(data);
        PlaylistServerActions.deletedTrackFromPlaylist(data);
      },
      error: function(error){
        console.log("user playlists not deleted");
      }
    };

    $.ajax(request);
  },

  editPlaylist: function(form, redirectOnSave){
    var request = {
      type: "PATCH",
      url: "api/" + form.author +"/playlist/" + form.title,
      data: {form: form},
      success: function(playlist){

        redirectOnSave(playlist);
        //PlaylistServerActions.receiveDisplayPlaylist(playlist);
      },
      error: function(error){
        console.log("user playlists not updated");
      }
    };

    $.ajax(request);
  },
  addTrackToPlaylist: function(user, playlist, track){
    var request = {
      type: "post",
      url:  "api/" + user.id + "/playlist/" + playlist.id + "/" + track.id,
      success: function(data){
        PlaylistServerActions.receiveUserPlaylists(data);
      },
      error: function(){
        console.log("track not added");
      }
    };
    $.ajax(request);
  }

};

module.exports = PlaylistApiUtil;
