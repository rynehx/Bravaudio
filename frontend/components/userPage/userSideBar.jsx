var React = require('react'),
    UserStore = require('../../stores/userStore'),
    hashHistory = require('react-router').hashHistory;
//components
var LikedItemModal = require('../modals/likedItemModal');



var UserSideBar = React.createClass({

  goToLike: function(like){
      hashHistory.push("/"+ like.author + "/"+ like.type+"/"+like.title);

  },

  goToAuthor: function(user){
      hashHistory.push("/" + user.author);
  },

  render: function(){

    if(this.props.likes && this.props.likes.length > 0){

      var likes = this.props.likes.slice(0,5).map(function(like){
        return (<div key={like.id + like.type} className = "user-sidebar-likes-items">
            <img className = "user-sidebar-likes-image" src = {like.image_url}
              onClick = {function(){this.goToLike(like);}.bind(this)}></img>
            <div className = "user-sidebar-likes-info">
              <div className = "user-sidebar-likes-author" onClick = {
                  function(){this.goToAuthor(like);}.bind(this)}>{like.author}
                </div>
              <div className = "user-sidebar-likes-title" onClick = {
                  function(){this.goToLike(like);}.bind(this)}>{like.title}
                </div>
            </div>
          </div>);
      }.bind(this));
    }else{
      var likes = null;
    }


    return (
      <div className = "user-sidebar">
        <div className = "user-sidebar-likes" >
          <div className = "user-sidebar-likes-header">
            likes
            <LikedItemModal
              likes = {this.props.likes}  />
          </div>
          {likes}
        </div>
      </div>
    );
  }
});


module.exports = UserSideBar;
