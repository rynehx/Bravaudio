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
        <div className = "playlist-top">

          <div className = "playlist-foreground-playbutton" onClick = {function(){console.log("lol")}} />
          <div className = "playlist-top-container">
            <div className = "playlist-top-names">
              <div className = "playlist-owner">
                Henry Li
              </div>
              <div className = "playlist-title">{this.props.playlist.title}</div>
            </div>
            <div className = "playlist-top-tagshistory"></div>
          </div>
        </div>
        <div className = "playlist-bottom">  </div>

      </div>

        <img className = "playlist-pic" src={imgsrc} id = "profile-image"/>
  </div>
);
}

});

module.exports = PlaylistForeground;
