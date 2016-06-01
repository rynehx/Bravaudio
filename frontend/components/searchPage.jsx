var React = require('react');
var SearchStore = require('../stores/searchStore');

var SearchPage = React.createClass({
  getInitialState: function () {
    return { searches: [] };
  },

  componentDidMount: function(){
    this.searchstorelistener = SearchStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.searchstorelistener.remove();
  },

  _onChange: function(){
    this.setState({searches: SearchStore.fetchSearchPage()});
  },

  render: function(){
    return (<div className = "searchpage">search page</div>);
  }
});

module.exports = SearchPage;
