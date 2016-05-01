var Dispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/userConstants');

var UserServerActions = {
  receivedDisplayUser: function(user){
    Dispatcher.dispatch({
      actionType:UserConstants.RECEIVEDISPLAYUSER,
      user: user
    });
  },
  receivedNoUser: function(){
    Dispatcher.dispatch({
      actionType:UserConstants.RECEIVEDNOUSER
    });
  }
};

module.exports = UserServerActions;
