//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;


//Stores
var SessionStore = require('../stores/sessionStore'),
    TrackStore = require('../stores/trackStore'),
    MusicStore = require('../stores/musicStore');
//components
var AudioPlayer = require('./musicBar/audioPlayer'),
    AudioDisplay = require('./musicBar/audioDisplay');


var hidden;

var MusicBar = React.createClass({


  componentDidMount: function(){
    this.musicstorelistener = MusicStore.addListener(function(){
      this.setState({});
    }.bind(this));
  },


  componentWillUnmount: function(){
    this.musicstorelistener.remove();
  },



  renderMusicBar: function(){

    if(SessionStore.fetchCurrentUser() && MusicStore.currentTrack().title){
      return (
        <div className = "musicbar" >
          <div className = "audio-components">
            <AudioPlayer />
            <AudioDisplay />
          </div>
        </div>
       );
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
