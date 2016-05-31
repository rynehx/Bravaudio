var React = require('react'),
    hashHistory = require('react-router').hashHistory;
//components
var InPlaylistModal = require('../modals/inPlaylistModal'),
    LikesModal = require('../modals/likesModal');
//stores
var SessionStore = require('../../stores/sessionStore'),
    TrackStore = require('../../stores/trackStore');

var TrackSideBar = React.createClass({


goToPlaylist: function(playlist){
  hashHistory.push("/"+ playlist.author+ "/playlist/" + playlist.title);
},

goToPlaylistAuthor: function(playlist){
  hashHistory.push("/" + playlist.author);
},

goToUser: function(user){
  hashHistory.push("/" + user);
},

render: function(){
  var that = this;

  if(this.props.playlists && this.props.playlists.length > 0){

    var playlists = this.props.playlists.slice(0,3).map(function(playlist){
      return (<div key={playlist.id} className = "track-sidebar-inplaylists-items">
          <img className = "track-sidebar-inplaylists-image" src = {playlist.image_url}
            onClick = {function(){that.goToPlaylist(playlist);}}></img>
          <div className = "track-sidebar-inplaylists-info">
            <div className = "track-sidebar-inplaylists-author" onClick = {
                function(){that.goToPlaylistAuthor(playlist);}}>{playlist.author}
              </div>
            <div className = "track-sidebar-inplaylists-title" onClick = {
                function(){that.goToPlaylist(playlist);}}>{playlist.title}
              </div>
          </div>
        </div>);
    });
  }else{
    var playlists = null;
  }


  if(this.props.likes.length > 0){

    var userLikeIdx = this.props.likes.findIndex(function(like){
      return like.id === SessionStore.fetchCurrentUser().id;});

      if(userLikeIdx>-1){
        var userLike = this.props.likes.splice(userLikeIdx,1);
        this.props.likes.unshift(userLike[0]);
      }

    var likes = this.props.likes.slice(0,5).map(function(like){

      return (
        <div key = {like.id} className = 'track-sidebar-like-info' >
          <img className = "track-sidebar-like-image" src = {like.image_url}
          onClick = {function(){that.goToUser(like.username);}}></img>

        </div>);
    });
  }else{

    var likes = null;
  }



return(
  <div className = "track-sidebar">
    <div className = "track-sidebar-inplaylists">
      <div className = "track-sidebar-inplaylists-header">
        In playlists
        <InPlaylistModal
          items = {this.props.playlists}
          goToPlaylist = {function(playlist){that.goToPlaylist(playlist);}}
          goToPlaylistAuthor = {function(playlist){that.goToPlaylistAuthor(playlist);}}  />
      </div>
        {playlists}
    </div>

    <div className = "track-sidebar-likes">
      <div className = "track-sidebar-likes-header">
        likes
        <LikesModal
          items = {this.props.likes}
          goToUser = {that.goToUser}  />
      </div>
      <div className = "track-sidebar-like-items">
        {likes}
      </div>
    </div>

  </div>
);
}

});

module.exports = TrackSideBar;
