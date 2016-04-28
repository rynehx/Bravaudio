var React = require("react"),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    UserActions = require("../actions/userActions"),
    CurrentUserState = require("../mixins/currentUserState"),
    UserStore = require('../stores/userStore');
var LoginForm = React.createClass({
	mixins: [LinkedStateMixin, CurrentUserState],
	getInitialState: function(){
		return {form: "login"};
	},

	setForm: function(e){
		this.setState({form: e.currentTarget.value});
	},
	handleSubmit: function(e){
		e.preventDefault();
		UserActions[this.state.form]({
			username: this.state.username,
			password: this.state.password
		});
	},
	logout: function(e){
		e.preventDefault();
		UserActions.logout();
	},
	greeting: function(){
		if (!this.state.currentUser) {
			return;
		}
		return (
			<div>
				<h2>Hi, {this.state.currentUser.username}!</h2>
				<input type="submit" value="logout" onClick={this.logout}/>
			</div>
		);
	},
	errors: function(){
		if (!this.state.authError){
			return;
		}
		var self = this;
		return (<ul>
		{
			Object.keys(this.state.authError).map(function(key, i){
				return (<li key={i}>{self.state.authError[key]}</li>);
			})
		}
		</ul>);
	},
	form: function(){

		if (this.state.currentUser) {
			return;
		} else if(!UserStore.check()){
      return;
    }
		return(
				<form onSubmit={this.handleSubmit}>
					<section>
						<label> Username:
							<input type="text" valueLink={this.linkState("username")}/>
						</label>

						<label> Password:
							<input type="password" valueLink={this.linkState("password")}/>
						</label>
					</section>

					<section>
						<label className = "log-in-button"> Login
							<input type="Radio" name="action"
              value="login" onChange={this.setForm}/>
						</label>

						<label className = "sign-up-button" > Sign Up
							<input type="Radio" name="action"
              value="signup" onChange={this.setForm}/>
						</label>
					</section>

					<input type="Submit" value="Submit" readOnly="true" />
				</form>
		);
	},
	render: function(){
  
		return (
			<div id="login-form">
				{this.greeting()}
				{this.errors()}
				{this.form()}
			</div>
		);
	}
});

module.exports = LoginForm;
