var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    userConstants = require('../constants/userConstants');

var UserStore = new Store(AppDispatcher);

var myLocStorage = localStorage;

// var _currentUser, _authErrors;

UserStore.fetchCurrentUser = function(){
  return JSON.parse(myLocStorage.getItem("currentUser"));
};

UserStore.login = function(user){
  myLocStorage.setItem("currentUser",JSON.stringify(user));
};



UserStore.logout = function(){
  return myLocStorage.setItem("currentUser",null);
};


UserStore.updateError = function(errors){

  myLocStorage.setItem("authErrors",errors);
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
