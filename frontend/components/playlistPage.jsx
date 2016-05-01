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
    return { playlist: { } };
  },

  componentDidMount: function(){
    this.playliststorelistener = PlaylistStore.addListener(this._onChange);
    PlaylistClientActions.fetchDisplayPlaylist(this.props.params.user,
      this.props.params.playlist);
  },

  componentWillUnmount: function(){
    this.playliststorelistener.remove();
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
        <div>
          <PlaylistForeground playlist = {this.state.playlist}/>
          <PlaylistContent playlist = {this.state.playlist}/>
          <PlaylistSideBar playlist = {this.state.playlist}/>
        </div>
      );
    }
  }
});


module.exports = PlaylistPage;
