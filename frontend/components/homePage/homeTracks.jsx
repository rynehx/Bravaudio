var React = require('react'),
    MusicStore = require('../../stores/musicStore'),
    hashHistory = require('react-router').hashHistory;


var HomeTracks = React.createClass({

  addToMusicBar: function(){
    MusicStore.setMusic(this.props.track,null);
  },

  goToTrack: function(){
    hashHistory.push("/" + this.props.track.author + "/track/" + this.props.track.title);
  },
  goToAuthor: function(){
    hashHistory.push("/" + this.props.track.author);
  },

  render: function(){
    return (
      <div className = "home-tracks" >
        <div className = "home-tracks-image-container">
          <div className = "home-tracks-play" onClick={this.addToMusicBar}></div>
          <img className = "home-tracks-image" onClick={this.goToTrack} src ={this.props.track.image_url} />
        </div>
        <section className =  "home-tracks-author" onClick ={this.goToAuthor} >{this.props.track.author}</section>
        <section className = "home-tracks-title" onClick ={this.goToTrack} >{this.props.track.title}</section>
      </div>
    );
  }

});


module.exports = HomeTracks;
