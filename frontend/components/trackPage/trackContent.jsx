//react
var React = require('react'),
    TrackStore = require('../../stores/trackStore'),
    hashHistory = require('react-router').hashHistory;
//components
var NewPlaylistModal = require('../modals/newPlaylistModal');
//actions
var LikeClientActions = require('../../actions/likeClientActions');
var TrackClientActions = require('../../actions/trackClientActions');
var SessionActions = require('../../actions/sessionActions');
//stores
var SessionStore = require('../../stores/sessionStore');


var TrackContent = React.createClass({



componentDidMount: function(){
  this.sessionlistener = SessionStore.addListener(function(){
    this.setState({user: SessionStore.fetchCurrentUser()
    });}.bind(this));
},

componentWillUnmount: function(){
  this.sessionlistener.remove();
},


goToAuthor: function(){
  hashHistory.push("/" + this.props.track.author);
},


likeTrack: function(){
  LikeClientActions.postLike("track",this.props.track,
  function(){SessionActions.fetchCurrentUser();});
},

unlikeTrack: function(){
  LikeClientActions.deleteLike("track",this.props.track,
  function(){SessionActions.fetchCurrentUser();});
},

_liked: function(){

  var currentUserTracks = SessionStore.fetchCurrentUser().liked_tracks;


  if(currentUserTracks.find(function(el){ return el['id='] ===this.props.track.id; }.bind(this))){
    return <div className = {"like-button"+ " " + "like-button-unlike"} onClick = {this.unlikeTrack}>
      ♥ unlike
    </div>;
  }else{
    return <div className = {"like-button"} onClick = {this.likeTrack}>
      ♥ like
    </div>;
  }

},

render: function(){
return(
  <div className = "track-content">
    <div className = "track-content-top">
      <div className = "track-content-top-writecomments">write comments</div>

      <div className = "track-content-top-bottom">
        <div className = "track-content-top-buttons">

          <NewPlaylistModal track = {this.props.track}
            icon = "https://s3-us-west-1.amazonaws.com/bravaudio/addplaylist.svg"/>
          {this._liked()}
        </div>

        <div className = "track-content-top-stats">
          <div className = "track-content-top-stats-plays">
            <img className = "track-content-top-stats-playsicon" src = "https://s3-us-west-1.amazonaws.com/bravaudio/times_played.svg"/>
            {this.props.track.times_played}
          </div>
        </div>
      </div>
    </div>
      <div className = "track-content-bottom">
        <div className = "track-content-bottom-user" >
          <img className = "track-content-user-image" onClick={this.goToAuthor}
            src = {this.props.track.author_img}>
          </img>
          <div className = "track-content-user-name" >{this.props.track.author}</div>
        </div>
        <div className = "track-content-bottom-right" >
          <div className = "track-content-bottom-description" >{this.props.track.description}</div>
          <div className = "track-content-bottom-tags" ></div>

          <ol className = "track-content-bottom-comment" >
          </ol>

        </div>

      </div>
  </div>
);
}

});

module.exports = TrackContent;
