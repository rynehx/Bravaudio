//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;


//Stores
var SessionStore = require('../stores/sessionStore'),
    TrackStore = require('../stores/trackStore'),
    MusicStore = require('../stores/musicStore');

//components
var AudioPlayer = require('./musicBar/audioPlayer'),
    AudioDisplay = require('./musicBar/audioDisplay');




var MusicBar = React.createClass({

  getInitialState: function () {
    return { track: {title:"",audio_url: "", image_url:""}, playlist: {} };
  },

  componentDidMount: function(){
    this.musicstorelistener = MusicStore.addListener(this._onChange);
    this.setState({track: MusicStore.currentTrack(),
      playlist: MusicStore.currentPlaylist()});
  },

  componentWillUnmount: function(){
    this.musicstorelistener.remove();
  },

  _onChange: function(){
    this.setState({track: MusicStore.currentTrack(),
      playlist: MusicStore.currentPlaylist()});
  },

  renderMusicBar: function(){
    if(SessionStore.fetchCurrentUser()){
      return (
        <div className = "musicbar">
          <div className = "audio-components">
            <AudioPlayer className = "audio-player" track={this.state.track} / >
            <AudioDisplay className = "audio-display" track ={this.state.track}
               playlist={this.state.playlist}  />
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
