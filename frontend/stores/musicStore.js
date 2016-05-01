var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    trackConstants = require('../constants/trackConstants');

var _music = {}, _currentTrack={url: "http://res.cloudinary.com/bravaudio/video/upload/v1461867581/Fetty_Wap_ft._Drake_-_My_Way_Remix_CDQ_cuaq28.mp3"};

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
