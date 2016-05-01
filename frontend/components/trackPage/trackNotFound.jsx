var React = require('react');


var TrackNotFound = React.createClass({
  render: function(){
    return (
      <div>
        CANNOT FIND {this.props.notFoundTrack}
      </div>
    );
  }

});

module.exports = TrackNotFound;
