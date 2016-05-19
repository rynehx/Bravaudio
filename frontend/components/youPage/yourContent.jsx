//react
var React = require('react');
//components
var YourContentItems = require('./yourContentItems'),
    YourContentAll = require('./yourContentAll');

//stores
var SessionStore = require('../../stores/sessionStore'),
    TrackStore = require('../../stores/trackStore'),
    PlaylistStore = require('../../stores/playlistStore'),
    MusicStore = require('../../stores/musicStore');
//actions
var TrackClientActions = require('../../actions/trackClientActions'),
    PlaylistClientActions = require('../../actions/playlistClientActions');


var list = ["tracks","playlists"];

var YourContent = React.createClass({
  getInitialState:function(){
    return {
      user: SessionStore.fetchCurrentUser().username,
      tracks: [],
      playlists: []
    };
  },

  componentDidMount: function(){
    this.trackstorelistener = TrackStore.addListener(this._onChangeTracks);
    this.playliststorelistener = PlaylistStore.addListener(this._onChangePlaylists);
    PlaylistClientActions.fetchUserPlaylists(this.state.user);
    TrackClientActions.fetchUserTracks(this.state.user);
   },

  _onChangeTracks: function(){
    this.setState({tracks:TrackStore.displayUserTracks()});
  },

  _onChangePlaylists: function(){
    this.setState({playlists: PlaylistStore.displayUserPlaylists()});
  },

  // componentWillReceiveProps: function(newprops){
  //   PlaylistClientActions.fetchUserPlaylists(newprops.params.user);
  //   TrackClientActions.fetchUserTracks(newprops.params.user);
  // },


  componentWillUnmount: function(){
     this.trackstorelistener.remove();
     this.playliststorelistener.remove();
  },

  render: function(){
    //var content;

    if(this.props.params.tabtype==="tracks"){
      return <YourContentItems items={this.state.tracks} typing = "track" />;
    }else if(this.props.params.tabtype==="playlists"){
      return <YourContentItems items={this.state.playlists} typing = "playlist" />;
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
