var React = require('react'),
    SessionStore = require('../stores/sessionStore'),
    hashHistory = require('react-router').hashHistory;

//Components
var HomeContent = require('./homePage/homeContent'),
    HomeSideBar = require('./homePage/homeSideBar');


var HomePage = React.createClass({
  componentWillMount: function(){
    if(!SessionStore.fetchCurrentUser()){
      hashHistory.push("/");
    }
  },

  componentWillUpdate: function(){
    if(!SessionStore.fetchCurrentUser()){
      hashHistory.push("/");
    }
  },



  render: function(){
    return (
      <div className = "home">
        <HomeContent/>
      </div>
    );
  }

});


module.exports = HomePage;
