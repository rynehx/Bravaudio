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
          <img className = "home-tracks-play" onClick={this.addToMusicBar} src = {"http://res.cloudinary.com/bravaudio/image/upload/v1462401134/Untitled_Diagram_3_jxrtjl.svg"}/>
          <img className = "home-tracks-image" onClick={this.goToTrack} src ={this.props.track.image_url} />
        </div>
        <section className =  "home-tracks-author" onClick ={this.goToAuthor} >{this.props.track.author}</section>
        <section className = "home-tracks-title" onClick ={this.goToTrack} >{this.props.track.title}</section>
      </div>
    );
  }

});


module.exports = HomeTracks;
