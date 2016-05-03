//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;

//Components
var LoginModal = require('./loginModal');
//Mixins
var SessionStore = require('../stores/sessionStore'),
    SessionActions = require('../actions/sessionActions');

var NavBar = React.createClass({
  greeting: function(){
		if (!SessionStore.fetchCurrentUser()) {
			return;
		}
		return (
			<div>
				<h2>Hi, {SessionStore.fetchCurrentUser().username}!</h2>
			</div>
		);
	},
	errors: function(){
		if (SessionStore.fetchError() === null){
			return;
		}
		var self = this;
		return (<ul>
		{
			Object.keys(SessionStore.fetchError()).map(function(key, i){
				return (<li key={i}>{SessionStore.fetchError()[key]}</li>);
			})
		}
		</ul>);
	},

  logout: function(e){
		e.preventDefault();
		SessionActions.logout();
	},

  loginButtons: function(){

    if(!SessionStore.fetchCurrentUser()){

      return (
        <div className = "logged-out-nav">
          <LoginModal sessionAction = "signup" errors = {this.errors()} />
          <LoginModal sessionAction = "login" errors = {this.errors()}/>
        </div>
      );
    }else{
      return (
        <div className = "logged-in-nav">
          <div className = "logout-button nav-buttons" onClick={this.logout}>logout</div>
          <div className = "upload-button nav-buttons" onClick={function(){hashHistory.push('upload');}}>upload</div>
          <div className = "home-button nav-buttons" onClick={function(){hashHistory.push('home');}}>home</div>
        </div>
      );
    }

  },



  render: function(){

    return (
      <div className = "navBar">
        <div className = "navBar-container">
          {this.loginButtons()}
        </div>
      </div>
    );
    }

});

module.exports = NavBar;
