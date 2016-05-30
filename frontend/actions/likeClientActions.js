var SessionApiUtil = require('../util/sessionApiUtil');

var LikeClientActions = {
  postLike: SessionApiUtil.postLike,
  fetchLikes: SessionApiUtil.fetchLikes
};

module.exports = LikeClientActions;
