var Dispatcher = require('../dispatcher/dispatcher'),
    SearchConstants = require('../constants/searchConstants');


var SearchServerActions = {
  receiveSearchBarQuery: function(searches){
    Dispatcher.dispatch({
      actionType: SearchConstants.RECEIVESEARCHBAR,
      searches: searches
    }
    );
  }
};

module.exports = SearchServerActions;
