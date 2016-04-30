var TrackServerActions = require('../actions/trackServerAction');

var TrackApiUtil = {

  fetchTracks: function(options){
    var request = {
      type: "GET",
      url: options.url,
      success: TrackServerActions.receiveTracks,
      error: function(){console.log("track fetch failed");}
    };

    $.ajax(request);
  },

  // fetchTrack: function(options){
  //   var request = {
  //     type: options.type,
  //     url: options.url,
  //     success: options.success,
  //     error: options.error
  //   };
  //
  //   $.ajax(request);
  // }

};

module.exports = TrackApiUtil;
