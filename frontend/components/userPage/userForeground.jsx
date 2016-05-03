var React = require('react'),
    hashHistory = require('react-router').hashHistory;

var imgsrc = "http://assets.audiomack.com/crooklyn00/98fe3aaa11182c65006502a066f05840.jpeg";

var UserForeground = React.createClass({

  getInitialState: function () {

    return { posts: [] };
  },
  componentDidMount: function(){

    // var img = document.createElement('img');
    // img.setAttribute('src', imgsrc);
    //
    //
    // var lol = new Vibrant(img,3);

  },


  render: function(){
    return (
      <div className = "user-foreground">
        <img className = "user-profile-pic" src={imgsrc} id = "profile-image"/>
        <div className = "user-profile-info">

            <div className = "user-profile-username">
              {this.props.user.username}
            </div>
            <div className = "user-profile-location">Henry Li</div>
            <div className = "user-profile-location">City, State, Country</div>
        </div>
      </div>
    );
  }
});


module.exports = UserForeground;
