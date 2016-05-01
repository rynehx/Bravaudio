var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    trackConstants = require('../constants/trackConstants');

var _currentPlaylist = {title:"",audio_url: "", image_url:""},
    _currentTrack = {title:"",audio_url: "", image_url:""};

var MusicStore = new Store(AppDispatcher);

MusicStore.play = function(track){

};


MusicStore.currentTrack = function(){
  return _currentTrack;
};

MusicStore.currentPlaylist = function(){
  return _currentPlaylist;
};

MusicStore.setMusic = function(track,playlist){

  AppDispatcher.dispatch({
    actionType: "UPDATEMUSICBAR",
    music: {track:track, playlist: playlist}
  });
};

MusicStore.__onDispatch = function(payload){

  switch(payload.actionType){
    case "UPDATEMUSICBAR":
    MusicStore.updateMusicBar(payload.music.track, payload.music.playlist);
  }
};


MusicStore.updateMusicBar= function(track,playlist){

  if(!track){
    _currentTrack = playlist.tracks[0];
  }else{
    _currentTrack = track;
  }

  if(playlist){
    _currentPlaylist = playlist;
  }else{
    _currentPlaylist = {};
  }

  this.__emitChange();
};



module.exports= MusicStore;
