var React = require('react'),
    hashHistory = require('react-router').hashHistory,
    MusicStore = require('../../stores/musicStore');

var PlaylistContentItem = React.createClass({
  goToTrack: function(){
    hashHistory.push('/'+ this.props.track.author + "/track/" + this.props.track.title);
  },

  goToAuthor: function(){
    hashHistory.push("/" + this.props.track.author);
  },
  playPlaylistTrack: function(){
    MusicStore.setMusic(this.props.track,this.props.playlist);
  },

  render: function(){


    return (<li className = "playlist-content-bottom-items">

      <div className ="playlist-content-items-image-container">
        <img className ="playlist-content-items-images"
          src = {this.props.track.image_url}>
        </img>

        <img className ="playlist-content-items-play"
          onClick = {function(){this.playPlaylistTrack();}.bind(this)}
          src = "http://res.cloudinary.com/bravaudio/image/upload/v1462401134/Untitled_Diagram_3_jxrtjl.svg" >
        </img>
      </div>


      <div className = "playlist-content-items-index">{this.props.index}</div>

      <a className = "playlist-content-items-author"
        onClick= {function(){this.goToAuthor()}.bind(this)}>
        {this.props.track.author}
      </a>

      <div className = "playlist-content-items-spacer">-</div>

      <a className = "playlist-content-items-title"
        onClick= {function(){hashHistory.push("/" + this.props.track.author+"/track/"+ this.props.track.title)}.bind(this)} >
        {this.props.track.title}
      </a>
  </li>);
  }

});

module.exports = PlaylistContentItem;
