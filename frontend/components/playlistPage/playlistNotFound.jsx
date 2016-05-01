var React = require('react'),
    PlaylistStore = require('../../stores/playlistStore'),
    hashHistory = require('react-router').hashHistory;

var PlaylistNotFound = React.createClass({

render: function(){
return(
  <div>
    {this.props.notFoundPlaylist} playlist not found
  </div>
);
}

});

module.exports = PlaylistNotFound;
