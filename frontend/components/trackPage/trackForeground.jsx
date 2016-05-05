//react
var React = require('react'),
    TrackStore = require('../../stores/trackStore'),
    hashHistory = require('react-router').hashHistory;

//stores
var MusicStore = require('../../stores/musicStore');

var TrackForeground = React.createClass({

playDisplayTrack: function(){
  MusicStore.setMusic(this.props.track);
},


render: function(){
return(
  <div className = "track-foreground">
          <div className = "track-foreground-box">
            <div className = "track-top">

              <div className = "track-foreground-playbutton"
                onClick = {this.playDisplayTrack} />
              <div className = "track-top-container">
                <div className = "track-top-names">
                  <div className = "track-owner">
                    {this.props.track.author}
                  </div>
                  <div className = "track-title">{this.props.track.title}</div>
                </div>
                <div className = "track-top-tagshistory"></div>
              </div>
            </div>
            <div className = "track-bottom">  </div>

          </div>

            <img className = "track-pic" src={this.props.track.image_url} id = "profile-image"/>
      </div>
    );

}

});

module.exports = TrackForeground;
