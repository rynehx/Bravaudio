//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;

//Components
var LoginModal = require('./navBar/loginModal'),
    SignUpModal = require('./navBar/signUpModal'),
    UserProfile = require('./navBar/userProfile'),
    SearchBar = require('./navBar/searchBar');
//Mixins
var SessionStore = require('../stores/sessionStore'),
    SessionActions = require('../actions/sessionActions'),
    MusicStore = require('../stores/musicStore');

var NavBar = React.createClass({
  getInitialState: function () {
    return { users: null };
  },

  componentWillMount: function(){
    SessionStore.addListener(this._onChange);
    SessionActions.fetchCurrentUser();

  },

  _onChange: function(){
      this.setState({user: SessionStore.fetchCurrentUser()});
  },

	errors: function(){
		if (SessionStore.fetchError() === null){
			return;
		}
		var self = this;
		return (<ul>
		{
			Object.keys(SessionStore.fetchError()).map(function(key, i){
				return (<li key={i}>{SessionStore.fetchError()[key]}</li>);
			})
		}
		</ul>);
	},

  logout: function(e){
		e.preventDefault();
		SessionActions.logout();
    MusicStore.emptyMusicStore();
	},

  userProfile: function(){
        if(SessionStore.fetchCurrentUser()){
          return <UserProfile user = {SessionStore.fetchCurrentUser()}/>;
        }else{
          return <div></div>;
        }

  },

  loginButtons: function(){

    if(!SessionStore.fetchCurrentUser()){

      return (
        <div className = "logged-out-nav">
          <SignUpModal sessionAction = "signup" errors = {this.errors()} />
          <LoginModal sessionAction = "login" errors = {this.errors()}/>
        </div>
      );
    }else{
      return (
        <div className = "logged-in-nav">
          <div className = "logout-button nav-buttons" onClick={this.logout}>logout</div>
        </div>
      );
    }

  },

  searchBar: function(){
    if(!SessionStore.fetchCurrentUser()){
        return <div className = "searchbar-spacer"></div>;
    }else{

        return <SearchBar />;
    }
  },

  loggedIn: function(){

    if(this.state.user){
      return "";
    }
    return " hidden";
  },

  render: function(){


    return (
      <div className = "navBar">
        <div className = "navBar-container">
          <img className = "navBar-title" src = "https://s3-us-west-1.amazonaws.com/bravaudio/orange-note-md.png" onClick ={function(){hashHistory.push('home');}} ></img>

          <div className = {"nav-buttons home-button" + this.loggedIn()} id="home-button"
            onClick={function(){hashHistory.push('home');}}>{"Home"}
          </div>

          <div className = {"nav-buttons you-button" + this.loggedIn()} id="you-button"
            onClick={function(){hashHistory.push('you');}}>{"Collection"}
          </div>


          {this.searchBar()}
          {this.userProfile()}
          {this.loginButtons()}
        </div>
      </div>
    );
    }

});

module.exports = NavBar;

//<div className = "upload-button nav-buttons" onClick={function(){hashHistory.push('upload');}}>upload</div>
