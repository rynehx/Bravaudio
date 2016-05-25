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
  },

  deletePlaylistTrack: function(user, playlist, track, updateModal){
    PlaylistApiUtil.deletePlaylistTrack(user, playlist, track, updateModal);
  },

  editPlaylist: function(data,redirectOnSave){
    PlaylistApiUtil.editPlaylist(data,redirectOnSave);
  },

  addTrackToPlaylist: function(user, playlist, track){
    PlaylistApiUtil.addTrackToPlaylist(user, playlist, track);
  },

  createNewPlaylist: function(playlist, successCallback){
    PlaylistApiUtil.createNewPlaylist(playlist, successCallback);
  }


  // createPlaylist: function(user,playlist,track){
  //
  // }

};

module.exports = PlaylistClientActions;
