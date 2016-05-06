var React = require('react'),
    TrackStore = require('../../stores/trackStore'),
    hashHistory = require('react-router').hashHistory;

var TrackSideBar = React.createClass({

goToPlaylist: function(playlist){
  hashHistory.push("/"+ playlist.author+ "/playlist/" + playlist.title);
},

goToPlaylistAuthor: function(playlist){
  hashHistory.push("/" + playlist.author);
},

render: function(){
  var that = this;
  if(this.props.track.playlists){
    var playlists = this.props.track.playlists.map(function(playlist){
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


return(
  <div className = "track-sidebar">
    <div className = "track-sidebar-inplaylists">
      <div className = "track-sidebar-inplaylists-header">
        In playlists
      </div>
        {playlists}


    </div>

  </div>
);
}

});

module.exports = TrackSideBar;
