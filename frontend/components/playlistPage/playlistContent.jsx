var React = require('react'),
    PlaylistStore = require('../../stores/playlistStore'),
    hashHistory = require('react-router').hashHistory;

var PlaylistContent = React.createClass({

render: function(){
return(
  <div className = "playlist-content">
    <div className = "playlist-content-top">top</div>
    <div className = "playlist-content-bottom">
      <div className = "playlist-content-bottom-user" >

      </div>
      <div className = "playlist-content-bottom-right" >
        <div className = "playlist-content-bottom-tags">
          tags
        </div>
        <div className = "playlist-content-bottom-tracks">
          track
        </div>
      </div>
    </div>
  </div>
);
}

});

module.exports = PlaylistContent;
