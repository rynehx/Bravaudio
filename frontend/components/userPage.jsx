//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;
//stores
var UserStore = require('../stores/userStore');
//actions
var UserClientActions = require('../actions/userClientActions');
//components
var UserForeground = require('./userPage/userForeground'),
    UserSideBar = require('./userPage/userSideBar'),
    UserNotFound = require('./userPage/userNotFound');



var page;

var UserPage = React.createClass({
  getInitialState: function () {
    return { user: {username: "", name: "", city: "",
      country:"", state: ""} ,tabtype: this.initialTabSet()};
  },

  initialTabSet: function(){

    if(!this.props.params.tabtype){
      return "all";
    }
    return this.props.params.tabtype;
  },

  componentDidMount: function(){
    UserClientActions.fetchDisplayUser(this.props.params.user);
    this.userStoreListener = UserStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.userStoreListener.remove();
  },

  componentWillReceiveProps: function(newprops){
    UserClientActions.fetchDisplayUser(newprops.params.user);
  },

  _onChange: function(){
    this.setState({user:UserStore.currentDisplayUser(),tabtype: this.initialTabSet()});
  },

  tabbed: function(type){
    if(type === this.state.tabtype){
      return " tab-selected";
    }
    return "";
  },
  pushTabs: function(action){
    if(action === "all"){
      hashHistory.push("/" + this.props.params.user + "/");
    }else{
      hashHistory.push("/" + this.props.params.user + "/" + action);
    }

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
          <div className = "user-content">

            <div className = "user-content-tabs">

              <div className = {"user-content-tabitems" + this.tabbed("all")}
                onClick={
                  function(){this.pushTabs("all");}.bind(this)}>

                All</div>
              <div className = {"user-content-tabitems" + this.tabbed("tracks")}
                onClick={
                  function(){this.pushTabs("tracks");
                    }.bind(this)}>
                Tracks</div>

              <div className ={"user-content-tabitems"+this.tabbed("playlists")}
                onClick={
                  function(){this.pushTabs("playlists");
                    }.bind(this)} >
                Playlists</div>

            </div>
            {this.props.children}

          </div>

          <UserSideBar user = {this.state.user}/>
        </div>
      </div>
      );
    }



  }
});

module.exports = UserPage;
