//react
var React = require('react');
//Components
var LoginForm = require('./loginForm');
var LoginModal = require('./loginModal');
//Mixins
var UserStore = require('../stores/userStore'),
    UserActions = require('../actions/userActions');

var NavBar = React.createClass({
  greeting: function(){
		if (!UserStore.fetchCurrentUser()) {
			return;
		}
		return (
			<div>
				<h2>Hi, {UserStore.fetchCurrentUser().username}!</h2>
				<input type="submit" value="logout" onClick={this.logout}/>
			</div>
		);
	},
	errors: function(){
		if (!UserStore.fetchError()){
			return;
		}
		var self = this;
		return (<ul>
		{
			Object.keys(UserStore.fetchError()).map(function(key, i){
				return (<li key={i}>{UserStore.fetchError()[key]}</li>);
			})
		}
		</ul>);
	},logout: function(e){
		e.preventDefault();
		UserActions.logout();
	},
render: function(){
  return (
    <div className = "navBar">
      {this.greeting()}
      {this.errors()}
      <LoginModal userAction = "signup" errors = {this.errors()} />
      <LoginModal userAction = "login" errors = {this.errors()}/>
    </div>
  );
}

});

module.exports = NavBar;
