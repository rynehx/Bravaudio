var React = require('react'),
    PlaylistStore = require('../../stores/playlistStore'),
    hashHistory = require('react-router').hashHistory;

var PlaylistForeground = React.createClass({

render: function(){
return(
  <div>
    {this.props.playlist.title}
  </div>
);
}

});

module.exports = PlaylistForeground;
