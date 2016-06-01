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
  },
  fetchUserTracks: function(user){
    var request = {
      type:"GET",
      url: "api/"+ user.username +"/tracks",
      success: TrackServerActions.receiveUserTracks,
      error: function(){console.log("did not retrieve user tracks");}
    };


    $.ajax(request);

  },

  recordPlayed: function(track){
    var request = {
      type:"PATCH",
      url: "api/tracks/"+ (track.id),
      success: function(){console.log("track play recorded");},
      error: function(){console.log("did not retrieve user tracks");}
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
