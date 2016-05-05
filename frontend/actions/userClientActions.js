  var UserApiUtil = require('../util/userApiUtil');

  var UserClientActions ={

    fetchDisplayUser: function(username){
      UserApiUtil.fetchDisplayUser(username);
    }
  };


  module.exports = UserClientActions;
