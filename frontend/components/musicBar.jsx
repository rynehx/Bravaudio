//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;


//Stores
var UserStore = require('../stores/userStore'),
    TrackStore = require('../stores/trackStore'),
    MusicStore = require('../stores/musicStore');

//components
var AudioPlayer = require('./musicBar/audioPlayer'),
    AudioDisplay = require('./musicBar/audioDisplay');




var MusicBar = React.createClass({

  renderMusicBar: function(){
    if(UserStore.fetchCurrentUser()){
      return (
        <div className = "musicbar">
          <div className = "audio-components">
        <AudioPlayer track={{url:"http://res.cloudinary.com/bravaudio/video/upload/v1461899057/08_Wild_For_The_Night_feat._Skrillex_cpvzjw.mp3"}} / >
        <AudioDisplay className = "audiodisplay" track = {{url:"http://res.cloudinary.com/bravaudio/image/upload/v1461899234/AtLongLastASAPCover_ncw4ac.jpg",title:"Wild for da night"}} />
          </div>
        </div>);
    }else{
      return (<div>
      </div>);
    }
  },

  render: function(){
    return ( this.renderMusicBar());
  }
});

module.exports = MusicBar;
