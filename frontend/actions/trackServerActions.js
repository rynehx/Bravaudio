var Dispatcher = require('../dispatcher/dispatcher'),
    trackConstants = require('../constants/trackConstants');

var TrackServerActions = {
  receiveTracks: function(tracks){
    Dispatcher.dispatch({
      actionType :  trackConstants.RECEIVETRACKS,
      tracks: tracks
     }
    );
  },
  receiveDisplayTrack: function(track){
    Dispatcher.dispatch({
      actionType: trackConstants.RECEIVEDISPLAYTRACK,
      track: track
    });
  },
  didNotFindTrack: function(errors){
    Dispatcher.dispatch({
      actionType: trackConstants.DIDNOTFINDTRACK
    });
  },
  didNotFetchTracks: function(errors){
    Dispatcher.dispatch({
      actionType: trackConstants.DIDNOTFETCHTRACKS
    });
  },
  receiveUserTracks: function(tracks){
    Dispatcher.dispatch({
      actionType: trackConstants.RECEIVEDUSERTRACKS,
      tracks: tracks
    });
  }

};

module.exports = TrackServerActions;
