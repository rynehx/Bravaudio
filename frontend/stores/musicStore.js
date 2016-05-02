var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    trackConstants = require('../constants/trackConstants');

var _currentPlaylist = {title:"",audio_url: "", image_url:""},
    _currentTrack = {title:"",audio_url: "", image_url:""},
    _playedTracks={}, _onRepeat = true;

var MusicStore = new Store(AppDispatcher);

MusicStore.play = function(track){

};

MusicStore.toggleRepeat = function(){
  if (_onRepeat){
    _onRepeat = false;
  }else{
    _onRepeat = true;
  }
};

MusicStore.repeat = function(){
  return _onRepeat;
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

MusicStore.nextTrack = function(){
  AppDispatcher.dispatch({
    actionType: "NEXTTRACK"
  });
};

MusicStore.previousTrack = function(){
  AppDispatcher.dispatch({
    actionType: "PREVIOUSTRACK"
  });
};




MusicStore.updateMusicBar= function(track,playlist){
  // _currentTrack.currentTime = (document.getElementById("audioDom").currentTime);
  // _playedTracks[_currentTrack.id] = _currentTrack;


  if(track){
    _currentTrack = track;
  }else{
    _currentTrack = playlist.tracks[0];
  }

  if(playlist){
    _currentPlaylist = playlist;
  }else{
    _currentPlaylist = {tracks:[track]};
  }

};


MusicStore.updateToPreviousTrack = function(action){

  // _currentTrack.currentTime = (document.getElementById("audioDom").currentTime);
  // _playedTracks[_currentTrack.id] = _currentTrack;
  var toBase = ((_currentPlaylist.tracks.indexOf(_currentTrack)) <=0 );

    if(toBase){
      _currentTrack =  _currentPlaylist.tracks[0];
    }else{
      _currentTrack =  _currentPlaylist.tracks[_currentPlaylist.tracks.indexOf(_currentTrack)-1];
    }


};


MusicStore.updateToNextTrack = function(){
  // _currentTrack.currentTime = (document.getElementById("audioDom").currentTime);
  // _playedTracks[_currentTrack.id] = _currentTrack;

  var toRepeat = ((_currentPlaylist.tracks.indexOf(_currentTrack)+1) >=
   _currentPlaylist.tracks.length );

  if(_onRepeat){

    if(toRepeat){
      _currentTrack =  _currentPlaylist.tracks[0];
      console.log("only one track");
    }else{
      _currentTrack =  _currentPlaylist.tracks[_currentPlaylist.tracks.indexOf(_currentTrack)+1];
    }

  }else{ //repeat off
    console.log("check");
  }

};

MusicStore.__onDispatch = function(payload){

  switch(payload.actionType){
    case "UPDATEMUSICBAR":
      MusicStore.updateMusicBar(payload.music.track, payload.music.playlist);
      break;
    case "PREVIOUSTRACK":
      MusicStore.updateToPreviousTrack();
      break;
    case "NEXTTRACK":
      MusicStore.updateToNextTrack();
      break;
  }
  this.__emitChange();
};





module.exports= MusicStore;
