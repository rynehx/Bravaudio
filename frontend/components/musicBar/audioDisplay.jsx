//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;
//actions
var LikeClientActions = require('../../actions/likeClientActions');
var SessionActions = require('../../actions/sessionActions');
//Stores
var SessionStore = require('../../stores/sessionStore'),
    TrackStore = require('../../stores/trackStore'),
    MusicStore = require('../../stores/musicStore');


var AudioDisplay = React.createClass({
  getInitialState: function () {
    return { track: {title: "",audio_url: "", image_url: ""}, playlist: {},user: {liked_tracks:[]} };
  },

  componentDidMount: function(){
    this.setState({user: SessionStore.fetchCurrentUser()});
    this.setState({track: MusicStore.currentTrack(),
      playlist: MusicStore.currentPlaylist()});

    this.musicstorelistener = MusicStore.addListener(this._onChange);

    this.sessionlistener = SessionStore.addListener(function(){

    this.setState({user: SessionStore.fetchCurrentUser()});
    }.bind(this));

  },

  componentWillUnmount: function(){
    this.musicstorelistener.remove();
    this.sessionlistener.remove();
  },

  likeTrack: function(){
    LikeClientActions.postSecondaryLike("track",this.state.track,
    function(){SessionActions.fetchCurrentUser();});
  },

  unlikeTrack: function(){
    LikeClientActions.deleteSecondaryLike("track",this.state.track,
    function(){SessionActions.fetchCurrentUser();});
  },


  _liked: function(){

    var currentUserTracks = this.state.user.liked_tracks;
    var liked="";
    var clickEffect=this.likeTrack;
    if(currentUserTracks.find(function(el){ return el['id='] ===this.state.track.id; }.bind(this))){
      liked = " musicbar-liked";
      clickEffect=this.unlikeTrack;
    }

    return (<div className = {"musicbar-like" + liked} onClick = {clickEffect}>
      ♥
    </div>);

  },

  _onChange: function(){
    this.setState({user: SessionStore.fetchCurrentUser()});
    this.setState({track: MusicStore.currentTrack(),
      playlist: MusicStore.currentPlaylist()});
  },
  goToCurrentPlaylist: function(){
    hashHistory.push("/" + this.state.playlist.author + "/playlist/"+ this.state.playlist.title);
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

        {this._liked()}

      </div>
    );
  }
});

module.exports = AudioDisplay;
