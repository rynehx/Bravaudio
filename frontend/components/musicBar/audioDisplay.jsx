//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;


//Stores
var SessionStore = require('../../stores/sessionStore'),
    TrackStore = require('../../stores/trackStore'),
    MusicStore = require('../../stores/musicStore');


var AudioDisplay = React.createClass({
  render: function(){
    return (
      <div className="musicbar-audiodisplay">

        <div className = "musicbar-track-title" >{this.props.track.title}</div>
        <img className = "musicbar-track-image" src={this.props.track.url}/>

      </div>
    );
  }
});

module.exports = AudioDisplay;
