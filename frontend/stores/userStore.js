var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    UserConstants = require('../constants/userConstants');


var _displayUser = null;


var UserStore = new Store(AppDispatcher);


UserStore.currentDisplayUser = function(){
  return _displayUser;
};

UserStore.receivedDisplayUser = function(user){
  _displayUser = user;
  UserStore.__emitChange();
};


UserStore.receivedNoUser = function(){
  _displayUser = null;
  UserStore.__emitChange();
};

UserStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case UserConstants.RECEIVEDISPLAYUSER:
      UserStore.receivedDisplayUser(payload.user);
      break;
    case UserConstants.RECEIVEDNOUSER:
      UserStore.receivedNoUser();
      break;

  }
};


module.exports = UserStore;
