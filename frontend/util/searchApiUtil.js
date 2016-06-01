var AppDispatcher = require('../dispatcher/dispatcher');
//actions
var SearchServerActions = require('../actions/searchServerActions');

var SearchApiUtils = {
  getSearchBarQuery: function(query){
    var request = {
      url:"",
      type:"GET",
      success: SearchServerActions.receiveSearchBarQuery,
      error: function(){
        console.log("search not fetches");
      }
    };

    $.ajax(request);

  }
};

module.exports = SearchApiUtils;
