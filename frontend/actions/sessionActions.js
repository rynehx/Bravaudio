var AppDispatcher = require('../dispatcher/dispatcher'),
    SessionConstants = require('../constants/sessionConstants'),
    SessionApiUtil = require('../util/sessionApiUtil'),
    SessionStore = require('../stores/sessionStore');


var SessionActions = {
	fetchCurrentUser: function(){
		SessionApiUtil.fetchCurrentUser(SessionActions.receiveCurrentUser,
      SessionActions.handleError);
	},
	signup: function(user){

		SessionApiUtil.post({
			url: "/api/users",
			user: user,
			success: SessionActions.receiveCurrentUser,
			error: SessionActions.handleError
		});
	},
	login: function(user){
		SessionApiUtil.post({
			url: "/api/session",
			user: user,
			success: SessionActions.receiveCurrentUser,
			error: SessionActions.handleError
		});
	},
	guestLogin: function(){
		SessionActions.login({username: "guest", password: "password"});
	},
	receiveCurrentUser: function(user){

		AppDispatcher.dispatch({
			actionType: SessionConstants.LOGIN,
			user: user
		});
	},
	handleError: function(error) {
		AppDispatcher.dispatch({
			actionType: SessionConstants.ERROR,
			errors: error.responseJSON.errors
		});
	},
	removeCurrentUser: function(){

		AppDispatcher.dispatch({
			actionType: SessionConstants.LOGOUT,
		});
	},
	logout: function(){

		SessionApiUtil.logout(SessionActions.removeCurrentUser,
      SessionActions.handleError);
	}
};

module.exports = SessionActions;
