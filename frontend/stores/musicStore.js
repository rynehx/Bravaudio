var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    trackConstants = require('../constants/trackConstants');

var _music = {}, _currentTrack={url: ""};

var MusicStore = new Store(AppDispatcher);

MusicStore.play = function(track){
  _currentTrack = track;

};


MusicStore.currentTrack = function(){
  return _currentTrack;
};

MusicStore.__onDispatch = function(){



};



module.exports= MusicStore;
