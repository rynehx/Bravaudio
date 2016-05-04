  var UserApiUtil = require('../util/userApiUtil');

  var UserClientActions ={

    fetchDisplayUser: function(username){
      debugger
      UserApiUtil.fetchDisplayUser(username);
    }
  };


  module.exports = UserClientActions;
