var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    SearchConstants = require('../constants/searchConstants');


var _searches = [];


var SearchStore = new Store(AppDispatcher);
SearchStore.fetchSearchBar = function(){
  return _searches;
};

SearchStore.fetchSearchPage = function(){
  return _searches;
};

SearchStore.receivedSearchBar = function(searches){
  _searches = searches;
  this.__emitChange();
};

SearchStore.receivedSearchPage = function(searches){
  _searches = searches;
  this.__emitChange();
};

SearchStore.__onDispatch = function(payload){
  switch(payload.actionType){
    case SearchConstants.RECEIVESEARCHBAR:
      SearchStore.receivedSearchBar(payload.searches);
      break;
    case SearchConstants.RECEIVESEARCHPAGE:
      SearchStore.receivedSearchPage(payload.searches);
      break;
  }
};


module.exports = SearchStore;
