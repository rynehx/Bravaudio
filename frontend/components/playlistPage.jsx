//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;
//stores-
var SessionStore = require('../stores/sessionStore'),
    PlaylistStore = require('../stores/playlistStore');
//actions
var PlaylistClientActions = require('../actions/playlistClientActions');
//components
var PlaylistContent = require('./playlistPage/playlistContent'),
    PlaylistSideBar = require('./playlistPage/playlistSideBar'),
    PlaylistForeground = require('./playlistPage/playlistForeground'),
    PlaylistNotFound = require('./playlistPage/playlistNotFound');

var PlaylistPage = React.createClass({
  getInitialState: function () {
    return { playlist: {tracks:[] } };
  },

  componentDidMount: function(){
    this.playliststorelistener = PlaylistStore.addListener(this._onChange);
    PlaylistClientActions.fetchDisplayPlaylist(this.props.params.user,
      this.props.params.playlist);
  },

  componentWillUnmount: function(){
    this.playliststorelistener.remove();
  },

  componentWillReceiveProps: function(nextprops){
    PlaylistClientActions.fetchDisplayPlaylist(nextprops.params.user,
      nextprops.params.playlist);
  },

  _onChange: function(){

    this.setState({playlist: PlaylistStore.displayPlaylist()});
  },

  render: function(){
    
    if(this.state.playlist === null){
      return(
        <div>
          <PlaylistNotFound notFoundPlaylist = {this.props.params.playlist} />
        </div>
      );
    }else{
      return(
        <div className = "playlistpage">
          <PlaylistForeground playlist = {this.state.playlist}/>
          <div className = "playlist-bottom">
            <PlaylistContent playlist = {this.state.playlist}/>
            <PlaylistSideBar playlist = {this.state.playlist}/>
          </div>
        </div>
      );
    }
  }
});


module.exports = PlaylistPage;
