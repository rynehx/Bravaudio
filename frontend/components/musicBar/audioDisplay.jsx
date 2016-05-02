//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;


//Stores
var SessionStore = require('../../stores/sessionStore'),
    TrackStore = require('../../stores/trackStore'),
    MusicStore = require('../../stores/musicStore');


var AudioDisplay = React.createClass({
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


  render: function(){
    return (
      <div className="musicbar-audio-display">


        <img className = "musicbar-track-image" src={this.state.track.image_url}/>

      <div className = "musicbar-text">
        <div className = "musicbar-track-title" >{this.state.track.title}</div>
        <div className = "musicbar-playlist-title" >{this.state.playlist.title}</div>
      </div>

      </div>
    );
  }
});

module.exports = AudioDisplay;
