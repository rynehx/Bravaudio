var SessionApiUtil = require('../util/sessionApiUtil');

var LikeClientActions = {
  postLike: SessionApiUtil.postLike,
  fetchLikes: SessionApiUtil.fetchLikes,
  deleteLike: SessionApiUtil.deleteLike
};

module.exports = LikeClientActions;
