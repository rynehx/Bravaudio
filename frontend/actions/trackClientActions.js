var TrackApiUtil = require('../util/trackApiUtil');

var TrackClientActions = {
  fetchTopChart: function(){
    TrackApiUtil.fetchTracks({
      url:"api/tracks"
    });
  },

  fetchDisplayTrack: function(user,track){
    TrackApiUtil.fetchDisplayTrack(user,track);
  },


  fetchUserTracks: function(username){
    TrackApiUtil.fetchUserTracks(username);
  },

  fetchPlaylistTracks: function(playlist){


  }

};

module.exports = TrackClientActions;
