var React = require('react');


var SplashPage = React.createClass({
  goToLogin: function(){

  },

  render: function(){


    return (
      <div className = "splashpage">
        <video autoPlay id = "splashvideo" loop
        src="http://res.cloudinary.com/bravaudio/video/upload/v1462502918/My_Movie2_hg6zys.mp4" type="video/mp4">
        </video>


        <div  className = "splash-entry" onClick={this.goToLogin} >
          Immerse Yourself In Music
        </div>

      </div>
    );
  }
});

module.exports = SplashPage;
