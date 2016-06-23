var React = require('react');
var SessionActions = require("../actions/sessionActions");
var SessionStore = require('../stores/sessionStore');
var hashHistory = require('react-router').hashHistory;

var SplashPage = React.createClass({
  // getInitialState: function () {
  //   return { videoList: ["https://s3-us-west-1.amazonaws.com/bravaudio/splash1.mp4",
  //     "https://s3-us-west-1.amazonaws.com/bravaudio/splash2.mp4",
  //     "https://s3-us-west-1.amazonaws.com/bravaudio/splash3.mp4"
  //     ,"https://s3-us-west-1.amazonaws.com/bravaudio/splash5.mp4"] };
  // },
  //

  guestLogin: function(){
    if(SessionStore.fetchCurrentUser()){
      hashHistory.push("home");
    }else{
        SessionActions["login"]({
          username: "guest",
          password: "password"
        });
    }
  },

  //
  // componentDidMount: function(){
  //   this.video = document.getElementById("splashvideo");
  //   this.counter=1;
  //
  // },
  //
  // changeVideo: function(){
  //
  //   if(this.counter || (this.counter <= this.state.videoList.length)){
  //     this.video.setAttribute("src", this.state.videoList[this.counter]);
  //     this.counter+=1;
  //   }else{
  //     this.counter=1;
  //     this.video.setAttribute("src", this.state.videoList[this.counter]);
  //   }
  //   this.video.play();
  // },

  render: function(){



    var modalWidth = "300px";
    return (
      <div className = "splashpage">
        <video autoPlay id = "splashvideo" muted loop  type="video/mp4" className = "splashvideo">
          <source src="https://s3-us-west-1.amazonaws.com/bravaudio/splash+combined.mp4" type="video/mp4"/>
        </video>





        <div  className = "splash-entry" onClick={this.guestLogin} >
          Immerse Yourself In Music
        </div>

      </div>
    );
  }
});

module.exports = SplashPage;
