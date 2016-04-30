var AppDispatcher = require('../dispatcher/dispatcher'),
    UserConstants = require('../constants/userConstants'),
    UserApiUtil = require('../util/userApiUtil'),
    UserStore = require('../stores/userStore');


var UserActions = {
	fetchCurrentUser: function(){
		UserApiUtil.fetchCurrentUser(UserActions.receiveCurrentUser, UserActions.handleError);
	},
	signup: function(user){

		UserApiUtil.post({
			url: "/api/users",
			user: user,
			success: UserActions.receiveCurrentUser,
			error: UserActions.handleError
		});
	},
	login: function(user){
		UserApiUtil.post({
			url: "/api/session",
			user: user,
			success: UserActions.receiveCurrentUser,
			error: UserActions.handleError
		});
	},
	guestLogin: function(){
		UserActions.login({username: "guest", password: "password"});
	},
	receiveCurrentUser: function(user){

		AppDispatcher.dispatch({
			actionType: UserConstants.LOGIN,
			user: user
		});
	},
	handleError: function(error) {
		AppDispatcher.dispatch({
			actionType: UserConstants.ERROR,
			errors: error.responseJSON.errors
		});
	},
	removeCurrentUser: function(){

		AppDispatcher.dispatch({
			actionType: UserConstants.LOGOUT,
		});
	},
	logout: function(){

		UserApiUtil.logout(UserActions.removeCurrentUser, UserActions.handleError);
	}
};

module.exports = UserActions;
