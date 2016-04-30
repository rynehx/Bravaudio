var TrackApiUtil = require('../util/trackApiUtil');

var TrackClientActions = {
  fetchTopChart: function(){
    TrackApiUtil.fetchTracks({
      url:"api/tracks"
    });
  },

  fetchDisplayingTrack: function(options){
//options = {username: , track:   }
  


  },

  fetchUserTracks: function(user){


  },

  fetchPlaylistTracks: function(playlist){


  }

};

module.exports = TrackClientActions;
