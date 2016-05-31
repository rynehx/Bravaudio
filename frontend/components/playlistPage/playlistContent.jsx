//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;
//actions
var PlaylistClientActions = require('../../actions/playlistClientActions');
//components
var PlaylistContentItems = require('./playlistContentItem');
var EditPlaylistModal = require('../modals/editPlaylistModal');
///stores
var  PlaylistStore = require('../../stores/playlistStore');
var PlaylistContent = React.createClass({

  componentWillReceiveProps: function(newProps){
   //re render when new props are received
  },

  goToAuthor: function(){
    hashHistory.push("/" + this.props.playlist.author);
  },

  deleteDisplayPlaylist: function(){
    PlaylistClientActions.deleteDisplayPlaylist(this.props.playlist.author, this.props.playlist.title, this.onDeleteSuccess);
  },

  onDeleteSuccess: function(data){
    hashHistory.push("/"+data.username+"/playlists");
  },

  render: function(){

  return(
    <div className = "playlist-content">
      <div className = "playlist-content-top">
        <div className = "playlist-content-top-buttons">
          <EditPlaylistModal className = "playlist-content-top-button"
            icon="http://simpleicon.com/wp-content/uploads/pen-15.svg"
            playlist = {this.props.playlist}/>
          <img className = "playlist-content-top-button"
            src= "http://simpleicon.com/wp-content/uploads/trash.png"
            onClick = {this.deleteDisplayPlaylist}/>
        </div>
      </div>
      <div className = "playlist-content-bottom">
        <div className = "playlist-content-bottom-user" >
          <img className = "playlist-content-user-image" onClick={this.goToAuthor}
            src = {this.props.playlist.author_img}>
          </img>
          <div className = "playlist-content-user-name" >{this.props.playlist.author}</div>
        </div>
        <div className = "playlist-content-bottom-right" >
          <div className = "playlist-content-bottom-description" >{this.props.playlist.description}</div>
          <div className = "playlist-content-bottom-tags"></div>

          <ol className = "playlist-content-bottom-tracks">
            {this.props.playlist.tracks.map(function(track,i){

              return (
                <PlaylistContentItems key = {track.id} track = {track}
                  playlist = {this.props.playlist} index = {i+1}/>
              );
            }.bind(this))}
          </ol>
        </div>
      </div>
    </div>
  );
  }

});

module.exports = PlaylistContent;
