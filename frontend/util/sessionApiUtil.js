var AppDispatcher = require('../dispatcher/dispatcher');
//actions
var LikeServerActions = require('../actions/likeServerActions');

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
	fetchLikes: function(type,item){
		if(type ==="playlist" || type ==="track" || type === "user"){
			var request ={
				type: "GET",
				url: "api/likes/" + type+ "/" + item.id,
				success: function(data){
					LikeServerActions.receiveLikes(data);
				},
				error: function(){
					console.log("likes not fetched");
				}
			};

			$.ajax(request);
		}
	},

	postLike: function(type,item,updateCallback){
		if(type ==="playlist" || type ==="track"){
	    var request ={
	      type: "post",
	      url: "api/likes/"+type+"/" + item.id,
	      success: function(data){
					updateCallback();
					LikeServerActions.receiveLikes(data);

	      },
	      error: function(){
	        console.log("not liked");
	      }
	    };

	    $.ajax(request);
		}

  },

	deleteLike: function(type,item,updateCallback){
		if(type ==="playlist" || type ==="track"){
			var request ={
				type: "delete",
				url: "api/likes/"+type+"/" + item.id,
				success: function(data){
					updateCallback();
					LikeServerActions.receiveLikes(data);

				},
				error: function(){
					console.log("not liked");
				}
			};

			$.ajax(request);
		}

	},


};
