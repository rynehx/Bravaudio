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
  goToCurrentPlaylist: function(){
    hashHistory.push("/" + this.state.track.author + "/playlist/"+ this.state.playlist.title);
  },
  goToCurrentTrack: function(){
    hashHistory.push("/" + this.state.track.author + "/track/"+ this.state.track.title);
  },


  render: function(){
    return (
      <div className="musicbar-audio-display">
        <img className = "musicbar-track-image" onClick = {this.goToCurrentTrack} src={this.state.track.image_url} />
      <div className = "musicbar-text">
        <div className = "musicbar-playlist-title" onClick = {this.goToCurrentPlaylist}>{this.state.playlist.title}</div>
        <div className = "musicbar-track-title" onClick = {this.goToCurrentTrack}>{this.state.track.title}</div>
      </div>
      </div>
    );
  }
});

module.exports = AudioDisplay;
