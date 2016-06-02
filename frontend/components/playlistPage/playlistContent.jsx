//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;
//actions
var PlaylistClientActions = require('../../actions/playlistClientActions');
var LikeClientActions = require('../../actions/likeClientActions');
var SessionActions = require('../../actions/sessionActions');
//components
var PlaylistContentItems = require('./playlistContentItem');
var EditPlaylistModal = require('../modals/editPlaylistModal');
///stores
var  PlaylistStore = require('../../stores/playlistStore');
var SessionStore = require('../../stores/sessionStore');



var PlaylistContent = React.createClass({


  getInitialState: function () {
    return { user: {liked_playlists:[]} };
  },
  componentDidMount: function(){
    this.sessionlistener = SessionStore.addListener(function(){

    this.setState({user: SessionStore.fetchCurrentUser()
    });}.bind(this));
  },

  componentWillUnmount: function(){
    this.sessionlistener.remove();
  },


  componentWillReceiveProps: function(newProps){
   //re render when new props are received
  },

  goToAuthor: function(){
    hashHistory.push("/" + this.props.playlist.author);
  },

  likePlaylist: function(){
    LikeClientActions.postLike("playlist",this.props.playlist,
    function(){SessionActions.fetchCurrentUser();});
  },

  unlikePlaylist: function(){
    LikeClientActions.deleteLike("playlist",this.props.playlist,
    function(){SessionActions.fetchCurrentUser();});
  },

  _liked: function(){

    var currentUserPlaylists = this.state.user.liked_playlists;

    if(currentUserPlaylists.find(function(el){ return el['id='] ===this.props.playlist.id; }.bind(this))){
      return <div className = {"like-button"+ " " + "like-button-unlike"} onClick = {this.unlikePlaylist}>
        ♥ unlike
      </div>;
    }else{
      return <div className = {"like-button"} onClick = {this.likePlaylist}>
        ♥ like
      </div>;
    }

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
          {this._liked()}
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
                  playlist = {this.props.playlist} index = {i+1} user = {this.state.user}/>
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
