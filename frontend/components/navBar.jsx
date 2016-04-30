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
        <section>
        <LoginModal sessionAction = "signup" errors = {this.errors()} />
        <LoginModal sessionAction = "login" errors = {this.errors()}/>
        </section>
      );
    }else{
      return (
        <section>
        <button className = "logout-button" onClick={this.logout}>logout</button>
        <button className = "upload-button" onClick={function(){hashHistory.push('upload');}}>upload</button>
        <button className = "home-button" onClick={function(){hashHistory.push('home');}}>home</button>
        </section>
      );
    }

  },



  render: function(){

    return (
      <div className = "navBar">
        {this.greeting()}
        {this.loginButtons()}
      </div>
    );
    }

});

module.exports = NavBar;
