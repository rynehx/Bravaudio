var React = require('react');


var SplashPage = React.createClass({
  goToLogin: function(){

  },

  render: function(){

    var modalWidth = "300px";
    return (
      <div className = "splashpage">
        <video
          autoPlay id = "splashvideo" loop muted
        src="https://s3-us-west-1.amazonaws.com/bravaudio/lights.mp4" type="video/mp4">
        </video>


        <div  className = "splash-entry" onClick={this.goToLogin} >
          Immerse Yourself In Music
        </div>

      </div>
    );
  }
});

module.exports = SplashPage;
