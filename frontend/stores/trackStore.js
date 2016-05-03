var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    TrackConstants = require('../constants/trackConstants');

var _tracks = {};
var _displayTrack;
var _userTracks;
var TrackStore = new Store(AppDispatcher);

////Trending Page methods
TrackStore.all = function(){
  return _tracks;
};



TrackStore.recieveTracks = function(tracks){
  _tracks=tracks;
  TrackStore.__emitChange();
};



/////////Track Display Page Methods

TrackStore.displayTrack = function(){
  return _displayTrack;
};

TrackStore.recieveDisplayTrack = function(track){
  _displayTrack = track;
  TrackStore.__emitChange();
};

TrackStore.fetchedNoTrack = function(){
  _displayTrack = null;
  TrackStore.__emitChange();
};
///////User page tracklist methods
TrackStore.userTracks = function(){
  return _userTracks;
};


TrackStore.receiveUserTracks = function(tracks){
  _userTracks = tracks;
  TrackStore.__emitChange();
};

TrackStore.displayUserTracks = function(){
  return _userTracks;
};


///////

TrackStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case TrackConstants.RECEIVETRACKS:
      TrackStore.recieveTracks(payload.tracks);
      break;
    case TrackConstants.RECEIVEDISPLAYTRACK:
      TrackStore.recieveDisplayTrack(payload.track);
      break;
    case TrackConstants.RECEIVEUSERTRACKS:
      TrackStore.receiveUserTracks(payload.tracks);
      break;
    case TrackConstants.DIDNOTFINDTRACK:
      TrackStore.fetchedNoTrack();
      break;
    case TrackConstants.DIDNOTFETCHTRACKS:
      break;
  }
};


module.exports = TrackStore;
