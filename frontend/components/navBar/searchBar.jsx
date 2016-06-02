//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;
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

  search: function(query){
    SearchClientActions.getSearchBarQuery(query);
  },

  emptySearch: function(){
    this.setState({searches: []});
  },

  populateSearch: function(){
    this.setState({searches: SearchStore.fetchSearchBar()});
  },

  changeSearchQuery: function(event){
    this.setState({searchquery: event.target.value});
    if(event.target.value.length>0){
      this.search(event.target.value);
    }else{
      this.emptySearch();
    }
  },

  goToPage: function(searchItem){
    if(searchItem.type === "user"){
      hashHistory.push("/"+searchItem.title);
    }else{
      hashHistory.push("/"+ searchItem.author +"/"+searchItem.type+"/"+searchItem.title);
    }

  },

  goToSearchPage: function(){

  },

  render: function(){

    return (
      <div className = "searchbar">
        <div className = "searchbar-top">
          <input className = "searchbar-inner" placeholder="search"
            onChange={this.changeSearchQuery} onBlur={this.emptySearch} onFocus={this.populateSearch}>
          </input>
          <div className = "searchbar-go" onClick = {this.goToSearchPage}>
            🔍
          </div>
        </div>
        <ul className = "searchbar-bottom">
        {
          this.state.searches.slice(0,6).map(function(search){
            return (<li key = {search.id+search.type} className = "searchbar-items" onMouseDown={function(){this.goToPage(search);}.bind(this)}>
              <img className = "searchbar-items-image" src = {search.image_url}></img>
              <div className = "searchbar-items-main">{
                  search.title
                }</div>
              <div className = "searchbar-items-author">
                {search.author}
              </div>
            </li>);
          }.bind(this))
        }
        </ul>
      </div>
    );
  }
});

module.exports = SearchBar;
