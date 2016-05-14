//react
var React = require('react');
//components
var YourCollectionPage = require('./youPage/yourCollectionPage'),
    YourTabs = require('./youPage/yourTabs');

var YourPage = React.createClass({
  render: function(){
    return (
      <div className ="yourpage">
        <div className = "yourpage-yourtabs"></div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = YourPage;
