var React = require('react'),
    hashHistory = require('react-router').hashHistory;

//this.props.user.profile_picture_url
var UserProfile = React.createClass({
  goToUser: function(){
    hashHistory.push("/" + this.props.user.username);
  },

  render: function(){

    return (
      <div className = "userprofile" onClick = {this.goToUser}>

        <img className = "userprofile-image" src = {this.props.user.profile_picture_url}/>
        <div className = "userprofile-username">{this.props.user.username}</div>
      </div>
    );
  }
});


module.exports = UserProfile;
