  var UserApiUtil = require('../util/UserApiUtil');

  var UserClientActions ={
    fetchDisplayUser: function(username){
      UserApiUtil.fetchDisplayUser(username);
    }
  };


  module.exports = UserClientActions;
