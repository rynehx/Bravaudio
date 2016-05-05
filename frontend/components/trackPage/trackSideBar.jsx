var React = require('react'),
    TrackStore = require('../../stores/trackStore'),
    hashHistory = require('react-router').hashHistory;

var TrackSideBar = React.createClass({

render: function(){
  if(this.props.track.playlists){
    var playlists = this.props.track.playlists.map(function(playlist){
      return (<div key={playlist.id} className = "track-sidebar-inplaylists-items">
          {playlist.title}
        </div>);
    });
  }else{
    var playlists = null;

  }


return(
  <div className = "track-sidebar">
    <div className = "track-sidebar-inplaylists">

      {playlists}


    </div>

  </div>
);
}

});

module.exports = TrackSideBar;
