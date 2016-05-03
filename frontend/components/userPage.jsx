//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;
//stores
var UserStore = require('../stores/userStore');
//actions
var UserClientActions = require('../actions/userClientActions');
//components
var UserContent = require('./userPage/userContent'),
    UserForeground = require('./userPage/userForeground'),
    UserSideBar = require('./userPage/userSideBar'),
    UserNotFound = require('./userPage/userNotFound');



var page;

var UserPage = React.createClass({
  getInitialState: function () {
    return { user: {username: "", name: "", city: "", country:"", state: ""} };
  },

  componentDidMount: function(){
    UserClientActions.fetchDisplayUser(this.props.params.user);
    this.userStoreListener = UserStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.userStoreListener.remove();
  },

  _onChange: function(){
    this.setState({user:UserStore.currentDisplayUser()});
  },

  render: function(){
    if(this.state.user === null){
      return (
        <div>
          <UserNotFound notFoundUser = {this.props.params.user}/>
        </div>
      );
    }else{
      return(
      <div className = "userpage">
        <UserForeground user = {this.state.user}/>
        <div className = "user-bottom">
          <UserContent user = {this.state.user}/>
          <UserSideBar user = {this.state.user}/>
        </div>
      </div>
      );
    }



  }
});

module.exports = UserPage;
