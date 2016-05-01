var UserServerActions = require('../actions/userServerActions');

var UserApiUtil  = {
  fetchDisplayUser: function(username){

    var request = {
      type: "GET",
      url: "api/" + username,
      success: function(user){
        UserServerActions.receivedDisplayUser(user);
      },
      error: function(errors){
        UserServerActions.receivedNoUser(errors);
      }
    };

    $.ajax(request);
  }
};

module.exports = UserApiUtil;
