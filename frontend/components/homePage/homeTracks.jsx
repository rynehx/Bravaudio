var React = require('react'),
    MusicStore = require('../../stores/musicStore');


var HomeTracks = React.createClass({

  addToMusicBar: function(){
    MusicStore.setMusic(this.props.track,undefined);
  },

  render: function(){
    return (
      <div className = "home-tracks" >
        <img className = "home-tracks-image" onClick={this.addToMusicBar} src ={this.props.track.image_url} />
        <section>{this.props.track.title}</section>
      </div>
    );
  }

});


module.exports = HomeTracks;
