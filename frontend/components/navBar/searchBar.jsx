//react
var React = require('react');
//stores
var SearchStore = require('../../stores/searchStore');
//actions
var SearchClientActions = require('../../actions/searchClientActions');


var SearchBar = React.createClass({

  getInitialState: function () {
    return { searches: [], searchquery: "" };
  },

  componentDidMount: function(){
    this.searchstorelistener = SearchStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.searchstorelistener.remove();
  },

  _onChange: function(){
    this.setState({searches: SearchStore.fetchSearchBar()});
  },

  search: function(){
    SearchClientActions.getSearchBarQuery(this.state.searchquery);
  },

  changeSearchQuery: function(event){
    this.setState({searchquery: event.target.value});
    if(event.target.value.length>4){
      this.search();
    }
  },

  goToSearchPage: function(){

  },

  render: function(){
    return (
      <div className = "searchbar">
        <input className = "searchbar-inner" placeholder="search"
          onChange={this.changeSearchQuery}>
        </input>
        <div onClick = {this.goToSearchPage}>
          go
        </div>
      </div>
    );
  }
});

module.exports = SearchBar;
