var React = require('react'),
    UserStore = require('../stores/userStore'),
    hashHistory = require('react-router').hashHistory;

//Components
var HomeContent = require('./homePage/homeContent'),
    HomeSideBar = require('./homePage/homeSideBar');


var HomePage = React.createClass({
  componentWillMount: function(){
    if(!UserStore.fetchCurrentUser()){
      hashHistory.push("/");
    }
  },

  componentWillUpdate: function(){
    if(!UserStore.fetchCurrentUser()){
      hashHistory.push("/");
    }
  },


  render: function(){
    return (
      <div className = "home">
        {this.props.children}
        <HomeContent/>
        <HomeSideBar/>
      </div>
    );
  }

});


module.exports = HomePage;
