//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;

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
			</div>
		);
	},
	errors: function(){
		if (UserStore.fetchError() === null){
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
	},

  logout: function(e){
		e.preventDefault();
		UserActions.logout();
	},

  loginButtons: function(){

    if(!UserStore.fetchCurrentUser()){

      return (
        <section>
        <LoginModal userAction = "signup" errors = {this.errors()} />
        <LoginModal userAction = "login" errors = {this.errors()}/>
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
