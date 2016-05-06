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

        <img className = "userprofile-image" src = "http://a5.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE1ODA0OTcyMDcxMjkwMzgx.jpg"/>
        <div className = "userprofile-username">{this.props.user.username}</div>
      </div>
    );
  }
});


module.exports = UserProfile;
