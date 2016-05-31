var SessionApiUtil = require('../util/sessionApiUtil');

var LikeClientActions = {
  postLike: SessionApiUtil.postLike,
  fetchLikes: SessionApiUtil.fetchLikes,
  deleteLike: SessionApiUtil.deleteLike,
  postSecondaryLike: SessionApiUtil.postSecondaryLike,
  deleteSecondaryLike: SessionApiUtil.deleteSecondaryLike
};

module.exports = LikeClientActions;
