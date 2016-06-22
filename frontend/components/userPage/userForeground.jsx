var React = require('react'),
    hashHistory = require('react-router').hashHistory;


var UserForeground = React.createClass({


  render: function(){

    return (
      <div className = "user-foreground">
        <div className = "user-profile-pic-container">
        <img className = "user-profile-pic" onClick = {this.click} src={this.props.user.profile_picture_url} id = "profile-image"/>
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
