var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    PlaylistConstants = require('../constants/playlistConstants');


var _displayPlaylist;
var _playlists;
var PlaylistStore = new Store(AppDispatcher);

PlaylistStore.displayPlaylist = function(){
  return _displayPlaylist;
};

PlaylistStore.displayUserPlaylists = function(){
  return _playlists;
};

PlaylistStore.receiveDisplayPlaylist = function(playlist){
  _displayPlaylist = playlist;
  this.__emitChange();
};

PlaylistStore.receivedNoPlaylist = function(){
  _displayPlaylist = null;
  this.__emitChange();
};

PlaylistStore.receiveUserPlaylists = function(playlists){
  _playlists = playlists;
  this.__emitChange();
};

PlaylistStore.deletedTrackFromPlaylist = function(deletedTrack){
  var removedTrackIdx = _displayPlaylist.tracks.findIndex(
  function(track){return track.id===deletedTrack.id;});

  _displayPlaylist.tracks.splice(removedTrackIdx,1);
  this.__emitChange();
};

PlaylistStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case PlaylistConstants.RECEIVEDISPLAYPLAYLIST:
      PlaylistStore.receiveDisplayPlaylist(payload.playlist);
      break;
    case PlaylistConstants.RECEIVEDNOPLAYLIST:
      PlaylistStore.receivedNoPlaylist();
      break;
    case PlaylistConstants.RECEIVEUSERPLAYLISTS:
      PlaylistStore.receiveUserPlaylists(payload.playlists);
      break;
    case PlaylistConstants.DELETEDTRACKFROMPLAYLIST:
      PlaylistStore.deletedTrackFromPlaylist(payload.track);
      break;

  }
};

module.exports = PlaylistStore;
