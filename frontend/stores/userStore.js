var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    userConstants = require('../constants/userConstants');

var UserStore = new Store(AppDispatcher);
var _currentUser, _authErrors;

UserStore.fetchCurrentUser = function(){
  return _currentUser;
};

UserStore.login = function(user){
  _currentUser = user;
};

UserStore.logout = function(){
  _currentUser = null;
};


UserStore.updateError = function(errors){
  _authErrors = errors;
};

UserStore.fetchError= function(){
  return _authErrors;
};

UserStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case userConstants.LOGIN:
    UserStore.login(payload.user);
      break;
    case userConstants.LOGOUT:
    UserStore.logout();
      break;
    case userConstants.ERROR:
      UserStore.updateError(payload.errors);
      break;
  }
};

module.exports = UserStore;
