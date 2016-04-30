var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    userConstants = require('../constants/userConstants'),
    hashHistory = require('react-router').hashHistory;

var UserStore = new Store(AppDispatcher);

var myLocStorage = localStorage;

// var _currentUser, _authErrors;

UserStore.fetchCurrentUser = function(){

  return JSON.parse(myLocStorage.getItem("currentUser"));
};

UserStore.login = function(user){
  myLocStorage.setItem("currentUser",JSON.stringify(user));
    hashHistory.push("/home");
};



UserStore.logout = function(){
  myLocStorage.setItem("currentUser",null);
  debugger
  hashHistory.push("/");
};


UserStore.updateError = function(errors){

  myLocStorage.setItem("authErrors",errors);
  myLocStorage.setItem("currentUser",null);
};

UserStore.fetchError = function(){

  return myLocStorage.getItem("authErrors");
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


  UserStore.__emitChange();
};

module.exports = UserStore;
