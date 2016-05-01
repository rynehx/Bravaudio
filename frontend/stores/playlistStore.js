var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    PlaylistConstants = require('../constants/playlistConstants');


var _displayPlaylist;
var PlaylistStore = new Store(AppDispatcher);

PlaylistStore.displayPlaylist = function(){
  return _displayPlaylist;
};

PlaylistStore.receiveDisplayPlaylist = function(playlist){
  _displayPlaylist = playlist;
};

PlaylistStore.__onDispatch = function(payload){

  switch(payload.actionType){
    case PlaylistConstants.RECEIVETRACKS:
      PlaylistStore.receiveDisplayPlaylist(payload.paylist);

  }
};

module.exports = PlaylistStore = new Store(AppDispatcher);
