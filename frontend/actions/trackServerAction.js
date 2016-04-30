var Dispatcher = require('../dispatcher/dispatcher'),
    trackConstants = require('../constants/trackConstants');

var TrackServerActions = {
  receiveTracks: function(tracks){
    Dispatcher.dispatch({
      actionType :  trackConstants.RECEIVETRACKS,
      tracks: tracks
     }
    );
  }

};

module.exports = TrackServerActions;
