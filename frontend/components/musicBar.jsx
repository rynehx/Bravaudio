//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;


//Stores
var SessionStore = require('../stores/sessionStore'),
    TrackStore = require('../stores/trackStore');

//components
var AudioPlayer = require('./musicBar/audioPlayer'),
    AudioDisplay = require('./musicBar/audioDisplay');




var MusicBar = React.createClass({


  renderMusicBar: function(){
    if(SessionStore.fetchCurrentUser()){
      return (
        <div className = "musicbar">
          <div className = "audio-components">
            <AudioPlayer />
            <AudioDisplay />
          </div>
        </div>);
    }else{
      return (<div>
        </div>);
    }
  },

  render: function(){
    return ( this.renderMusicBar());
  }
});

module.exports = MusicBar;
