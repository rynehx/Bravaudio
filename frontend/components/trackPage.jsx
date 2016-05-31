//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;
//stores
var SessionStore = require('../stores/sessionStore'),
    TrackStore = require('../stores/trackStore'),
    PlaylistStore = require('../stores/playlistStore'),
    LikeStore = require('../stores/likeStore');
//actions
var TrackClientActions = require('../actions/trackClientActions'),
    PlaylistClientActions = require('../actions/playlistClientActions'),
    LikeClientActions = require('../actions/likeClientActions');
//components
var TrackContent = require('./trackPage/trackContent'),
    TrackSideBar = require('./trackPage/trackSideBar'),
    TrackForeground = require('./trackPage/trackForeground'),
    TrackNotFound = require('./trackPage/trackNotFound');



var TrackPage = React.createClass({

  getInitialState: function () {
    return { track: {id: "",title:"", audio_url: "", image_url: "",playlists:[] } , playlists:[], likes:[]};
  },

  componentDidMount: function(){
    this.trackstorelistener = TrackStore.addListener(this._onChange);
    TrackClientActions.fetchDisplayTrack(this.props.params.user,
      this.props.params.track);

    this.playlistlistener = PlaylistStore.addListener(this._onChangePlaylist);
    this.likestorelistener = LikeStore.addListener(this._onChangeLike);

  },



  componentWillUnmount: function(){
    this.trackstorelistener.remove();
    this.playlistlistener.remove();
    this.likestorelistener.remove();
  },

  componentWillReceiveProps: function(nextprops){
    TrackClientActions.fetchDisplayTrack(nextprops.params.user,
      nextprops.params.track);
  },

  _onChangePlaylist: function(){
    this.setState({playlists: PlaylistStore.trackPlaylists()});
  },

  _onChange: function(){

    this.setState({track: TrackStore.displayTrack()});

    PlaylistClientActions.fetchTrackPlaylists(TrackStore.displayTrack());
    LikeClientActions.fetchLikes("track",TrackStore.displayTrack());
  },

  _onChangeLike: function(){
    this.setState({likes: LikeStore.fetchLikes()});
  },

  render: function(){

    if(this.state.track === null){
      return(
        <div>
          <TrackNotFound notFoundTrack = {this.props.params.track} />
        </div>
      );
    }else{
      return(
        <div className = "trackpage">
          <TrackForeground track = {this.state.track}/>
          <div className = "track-bottom">
            <TrackContent track = {this.state.track}/>
            <TrackSideBar playlists = {this.state.playlists} likes = {this.state.likes}/>
          </div>
        </div>
      );
    }
  }
});

module.exports = TrackPage;
