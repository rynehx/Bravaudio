var React = require('react');

var SearchBar = React.createClass({
  render: function(){
    return (
      <div className = "searchbar">
        <input className = "searchbar-inner" placeholder="search">
          
        </input>
      </div>
    );
  }
});

module.exports = SearchBar;
