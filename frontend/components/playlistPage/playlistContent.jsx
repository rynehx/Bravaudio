//react
var React = require('react'),
    PlaylistStore = require('../../stores/playlistStore'),
    hashHistory = require('react-router').hashHistory;
//components
var PlaylistContentItems = require('./playlistContentItem');

var PlaylistContent = React.createClass({

  goToAuthor: function(){
    hashHistory.push("/" + this.props.playlist.author);
  },

  render: function(){
  return(
    <div className = "playlist-content">
      <div className = "playlist-content-top">top</div>
      <div className = "playlist-content-bottom">
        <div className = "playlist-content-bottom-user" >
          <img className = "playlist-content-user-image" onClick={this.goToAuthor}
            src = {"http://blog.caribanatoronto.com/wp-content/uploads/2015/03/drake-940x626.jpg"}>
          </img>
          <div className = "playlist-content-user-name" >{this.props.playlist.author}</div>
        </div>
        <div className = "playlist-content-bottom-right" >
          <div className = "playlist-content-bottom-tags">

          </div>
          <ol className = "playlist-content-bottom-tracks">
            {this.props.playlist.tracks.map(function(track,i){

              return (

                <PlaylistContentItems key = {track.id} track = {track}
                  playlist = {this.props.playlist} index = {i}/>
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
