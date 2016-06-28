var React = require('react'),
    hashHistory = require('react-router').hashHistory;

//var ColorThief = require('../../util/color-thief.js');


var UserForeground = React.createClass({


  render: function(){


    // if(this.props.user.profile_picture_url && document.getElementById("profile-image").src){
    //
    //   var colorThief = new ColorThief();
    //   var profile_pic = document.getElementById("profile-image");
    //   console.log(colorThief.getColor(profile_pic,2));
    // }



    return (
      <div className = "user-foreground">
        <div className = "user-profile-pic-container">
        <img className = "user-profile-pic" crossOrigin="Anonymous" onClick = {this.click} src={this.props.user.profile_picture_url} id = "profile-image"/>
        </div>

        <div className = "user-profile-info">

            <div className = "user-profile-username">
              {this.props.user.username}
            </div>
            <div className = "user-profile-location">{this.props.user.name}</div>
            <div className = "user-profile-location">{this.props.user.city+",  "+ this.props.user.state + ",  " + this.props.user.country}</div>
        </div>
      </div>
    );
  }
});


module.exports = UserForeground;
