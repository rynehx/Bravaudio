var React = require('react'),
    PlaylistStore = require('../../stores/playlistStore'),
    hashHistory = require('react-router').hashHistory;

var LikesModal = require('../modals/likesModal');
//stores
var SessionStore = require('../../stores/sessionStore'),
    TrackStore = require('../../stores/trackStore');



var PlaylistSideBar = React.createClass({
  goToUser: function(user){
    hashHistory.push("/" + user);
  },


  render: function(){

    if(this.props.likes.length > 0){

      var userLikeIdx = this.props.likes.findIndex(function(like){
        return like.id === SessionStore.fetchCurrentUser().id;});

        if(userLikeIdx>-1){
          var userLike = this.props.likes.splice(userLikeIdx,1);
          this.props.likes.unshift(userLike[0]);
        }

      var likes = this.props.likes.slice(0,5).map(function(like){

        return (
          <div key = {like.id} className = 'playlist-sidebar-like-items' >
            <img className = "playlist-sidebar-like-image" src = {like.image_url}
            onClick = {function(){this.goToUser(like.username);}.bind(this)}></img>

          </div>);
      }.bind(this));
    }else{

      var likes = null;
    }



  return(
    <div className = "playlist-sidebar">
      <div className = "playlist-sidebar-likes">
        <div className = "playlist-sidebar-likes-header">
          likes
          <LikesModal
            items = {this.props.likes}
            goToUser = {this.goToUser}  />
        </div>
        <div className = "playlist-sidebar-like-items">
          {likes}
        </div>
      </div>

    </div>
  );
  }

});

module.exports = PlaylistSideBar;
