var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    SessionConstants = require('../constants/sessionConstants'),
    hashHistory = require('react-router').hashHistory;

var SessionStore = new Store(AppDispatcher);

var myLocStorage = localStorage;

 var _currentUser=null, _authErrors=null;

SessionStore.fetchCurrentUser = function(){

  return JSON.parse(myLocStorage.getItem("currentUser"));
};

SessionStore.login = function(user){
  myLocStorage.setItem("currentUser",JSON.stringify(user));
    hashHistory.push("/home");
};



SessionStore.logout = function(){

  myLocStorage.setItem("currentUser",null);
  hashHistory.push("/");
};


SessionStore.updateError = function(errors){

  _authErrors = errors;
  myLocStorage.setItem("currentUser",null);
};

SessionStore.fetchError = function(){

  return _authErrors;
};

SessionStore.__onDispatch = function(payload){

  switch(payload.actionType){
    case SessionConstants.LOGIN:
    SessionStore.login(payload.user);
      break;
    case SessionConstants.LOGOUT:

      SessionStore.logout();
      break;
    case SessionConstants.ERROR:
      SessionStore.updateError(payload.errors);
      break;
  }


  SessionStore.__emitChange();
};

module.exports = SessionStore;
