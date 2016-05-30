var Dispatcher = require('../dispatcher/dispatcher'),
    LikeConstants = require('../constants/likeConstants');


var LikeServerActions = {
  receiveLikes: function(items){
    Dispatcher.dispatch({
      actionType: LikeConstants.RECEIVELIKES,
      items: items
    }
    );
  }
};

module.exports = LikeServerActions;
