//react
var React = require('react');
//components
var YourContentItems = require('./yourContentItems'),
    YourContentAll = require('./yourContentAll');

//stores
var SessionStore = require('../../stores/sessionStore'),
    TrackStore = require('../../stores/trackStore'),
    PlaylistStore = require('../../stores/playlistStore'),
    MusicStore = require('../../stores/musicStore'),
    LikeStore = require('../../stores/likeStore');
//actions
var TrackClientActions = require('../../actions/trackClientActions'),
    PlaylistClientActions = require('../../actions/playlistClientActions'),
    LikeClientActions = require('../../actions/likeClientActions');


var list = ["tracks","playlists"];

var YourContent = React.createClass({
  getInitialState:function(){
    return {
      user: SessionStore.fetchCurrentUser(),
      tracks: [],
      playlists: [],
      likes:[]
    };
  },

  componentDidMount: function(){
    this.trackstorelistener = TrackStore.addListener(this._onChangeTracks);
    this.playliststorelistener = PlaylistStore.addListener(this._onChangePlaylists);
    this.likesStoreListener = LikeStore.addListener(this._onLikeChange);

    PlaylistClientActions.fetchUserPlaylists(this.state.user);
    TrackClientActions.fetchUserTracks(this.state.user);
    LikeClientActions.fetchLikes("user",this.state.user);
   },

  _onChangeTracks: function(){
    this.setState({tracks:TrackStore.displayUserTracks()});
  },

  _onChangePlaylists: function(){
    this.setState({playlists: PlaylistStore.displayUserPlaylists()});
  },

  _onLikeChange: function(){
    this.setState({likes:LikeStore.fetchLikes()});
  },
  // componentWillReceiveProps: function(newprops){
  //   PlaylistClientActions.fetchUserPlaylists(newprops.params.user);
  //   TrackClientActions.fetchUserTracks(newprops.params.user);
  // },


  componentWillUnmount: function(){
     this.trackstorelistener.remove();
     this.playliststorelistener.remove();
     this.likesStoreListener.remove();
  },

  render: function(){
    //var content;

    if(this.props.params.tabtype==="tracks"){
      return <YourContentItems items={this.state.tracks} typing = "track" />;
    }else if(this.props.params.tabtype==="playlists"){
      return <YourContentItems items={this.state.playlists} typing = "playlist" />;
    }else if(this.props.params.tabtype==="likes"){
      return <YourContentItems items={this.state.likes} typing = "like" />;
    }else{
      return <YourContentAll tracks={this.state.tracks} playlists = {this.state.playlists} />;
    }


    // return (
    //   <div className = "your-content-main">
    //     {content}
    //   </div>
    // );
  }
});

module.exports = YourContent;
