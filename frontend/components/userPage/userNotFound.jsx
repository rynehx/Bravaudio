var React = require('react');


var UserNotFound = React.createClass({
  render: function(){
    return (
      <div>
        CANNOT FIND {this.props.notFoundUser}
      </div>
    );
  }

});

module.exports = UserNotFound;
