//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;
//stores
var PlaylistStore = require('../../stores/playlistStore'),
    TrackStore = require('../../stores/playlistStore');



var imgsrc = "https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png";
var PlaylistForeground = React.createClass({

render: function(){
return(
  <div className = "playlist-foreground">




    <div className = "playlist-foreground-box">
      <div className = "playlist-info">
          <div className = "playlist-profile-owner">
            {this.props.playlist.title}
          </div>
          <div className = "playlist-title">Henry Li</div>
      </div>

      <div className = "playlist-stats">


      </div>


    </div>

        <img className = "playlist-pic" src={imgsrc} id = "profile-image"/>
  </div>
);
}

});

module.exports = PlaylistForeground;
