var AppDispatcher = require('../dispatcher/dispatcher.js'),
    Store = require('flux/utils').Store,
    SearchConstants = require('../constants/searchConstants');


var _searchedTracks = [];
var _searchedPlaylists = [];
var _searchedUsers = [];

var SearchStore = new Store(AppDispatcher);
SearchStore.fetchSearchBar = function(){
  return _searchedTracks.concat(_searchedPlaylists,_searchedUsers);
};

SearchStore.fetchSearchPage = function(){
  return _searchedTracks.concat(_searchedPlaylists,_searchedUsers);
};



SearchStore.receivedSearchBar = function(searches){
  _searchedTracks = searches.tracks;
  _searchedPlaylists = searches.playlists;
  _searchedUsers = searches.users;
  this.__emitChange();
};

SearchStore.receivedSearchPage = function(searches){
  _searchedTracks = searches.tracks;
  _searchedPlaylists = searches.playlists;
  _searchedUsers = searches.users;
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
