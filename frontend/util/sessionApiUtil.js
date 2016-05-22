var AppDispatcher = require('../dispatcher/dispatcher');

module.exports = {
	post: function(options){
		$.ajax({
			url: options.url,
			type: "post",
			data: {user: options.user},
			success: options.success,
			error: options.error
		});
	},
	logout: function(success, error){

		$.ajax({
			url: '/api/session',
			type: 'delete',
			success: success,
			error: error
		});
	},
	fetchCurrentUser: function(success, error){
		$.ajax({
			url: '/api/session',
			type: 'get',
			success: success,
			error: error
		});
	},
};
