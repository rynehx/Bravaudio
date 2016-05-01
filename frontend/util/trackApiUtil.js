var TrackServerActions = require('../actions/trackServerActions');

var TrackApiUtil = {

  fetchTracks: function(options){
    var request = {
      type: "GET",
      url: options.url,
      success: TrackServerActions.receiveTracks,
      error: TrackServerActions.didNotFetchTrack
    };

    $.ajax(request);
  },
  fetchDisplayTrack: function(user,track){
    var request = {
      type:"GET",
      url: "api/"+user + "/track/" + track,
      success: TrackServerActions.receiveDisplayTrack,
      error: TrackServerActions.didNotFindTrack
    };

    $.ajax(request);
  }
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
