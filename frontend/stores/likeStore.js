var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    LikeConstants = require('../constants/likeConstants');
var _likes =[];
var LikeStore = new Store(AppDispatcher);

LikeStore.fetchLikes = function(){
  return _likes;
};

LikeStore.receiveLikes = function(items){
  debugger
  _likes = items;
  this.__emitChange();
};


LikeStore.__onDispatch = function(payload){

  switch(payload.actionType){
    case LikeConstants.RECEIVELIKES:
      LikeStore.receiveLikes(payload.items);
      break;

  }


};

module.exports = LikeStore;
