var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    trackConstants = require('../constants/trackConstants');

var _currentPlaylist = {title:"",audio_url: "", image_url:""},
    _currentTrack = {title:"",audio_url: "", image_url:"", id:null},
    _playedTracks={}, _onRepeat = true, _repeatedSong = false, _lastTime;

var TrackClientActions = require('../actions/trackClientActions');

var MusicStore = new Store(AppDispatcher);

MusicStore.toggleRepeat = function(){
  if (_onRepeat){
    _onRepeat = false;
  }else{
    _onRepeat = true;
  }
};

MusicStore.emptyMusicStore = function(){
      _currentPlaylist = {title:"",audio_url: "", image_url:""},
      _currentTrack = {title:"",audio_url: "", image_url:""},
      _playedTracks={}, _onRepeat = true, _repeatedSong = false;
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


MusicStore.updateTrackTime = function(track,time){
  _playedTracks[track.id]=time;

};

MusicStore.recordPlayed = function(track){
  TrackClientActions.recordPlayed(track);
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
    if(_playedTracks[track.id]){
      track.lastTime = _playedTracks[track.id];
      _currentTrack = track;
    }else{
      track.lastTime= 0;
      _currentTrack = track;
    }


  }else{
    _currentTrack = playlist.tracks[0];
  }

  if(playlist){
    _currentPlaylist = playlist;
  }else{
    _currentPlaylist = {tracks:[track]};
  }

  MusicStore.recordPlayed(_currentTrack);
  this.__emitChange();
};


MusicStore.updateToPreviousTrack = function(action){

  // _currentTrack.currentTime = (document.getElementById("audioDom").currentTime);
  // _playedTracks[_currentTrack.id] = _currentTrack;
  var toBase = ((_currentPlaylist.tracks.indexOf(_currentTrack)) <=0 );

    if(toBase){
      if(_currentTrack ===  _currentPlaylist.tracks[0]){_repeatedSong = true;}
      _currentTrack =  _currentPlaylist.tracks[0];
    }else{
      _currentTrack =  _currentPlaylist.tracks[_currentPlaylist.tracks.indexOf(_currentTrack)-1];
    }

    MusicStore.recordPlayed(_currentTrack);
    this.__emitChange();
};


MusicStore.updateToNextTrack = function(){
  // _currentTrack.currentTime = (document.getElementById("audioDom").currentTime);
  // _playedTracks[_currentTrack.id] = _currentTrack;

  var toRepeat = ((_currentPlaylist.tracks.indexOf(_currentTrack)+1) >=
   _currentPlaylist.tracks.length );


  if(toRepeat && _onRepeat){
    if(_currentTrack ===  _currentPlaylist.tracks[0]){_repeatedSong = true;}
    _currentTrack =  _currentPlaylist.tracks[0];


  }else if(toRepeat){
    console.log("");
  }else{
    _currentTrack =  _currentPlaylist.tracks[_currentPlaylist.tracks.indexOf(_currentTrack)+1];


  }
  MusicStore.recordPlayed(_currentTrack);
  this.__emitChange();


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


};





module.exports= MusicStore;
