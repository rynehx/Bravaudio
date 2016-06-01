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

  fetchTrackPlaylists: function(track){

    var request = {
      type: "get",
      url: "api/track/" + track.id + "/playlists",
      success: function(data){
        PlaylistServerActions.receiveTrackPlaylists(data);
      },
      error: function(error){
        console.log("user playlists not fetched");
      }
    };

    $.ajax(request);
  },


  fetchUserPlaylists: function(user){
      var field;
      if(user.username){
        field = user.username;
      }else{
        field = user;
      }
    var request = {
      type: "get",
      url: "api/" + field + "/playlists",
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
  },

  createNewPlaylist: function(playlist, onSuccess){
    var request ={
      type: "post",
      url: "api/" + playlist.author + "/playlists",
      data: {form: playlist},
      success: function(data){
        PlaylistServerActions.receiveUserPlaylists(data);
        onSuccess();
      },
      error: function(){
        console.log("playlist not created");
      }
    };

    $.ajax(request);
  }



};

module.exports = PlaylistApiUtil;
