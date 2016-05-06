//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;

//Components
var LoginModal = require('./navBar/loginModal'),
    UserProfile = require('./navBar/userProfile'),
    SearchBar = require('./navBar/searchBar');
//Mixins
var SessionStore = require('../stores/sessionStore'),
    SessionActions = require('../actions/sessionActions'),
    MusicStore = require('../stores/musicStore');

var NavBar = React.createClass({

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
          <LoginModal sessionAction = "signup" errors = {this.errors()} />
          <LoginModal sessionAction = "login" errors = {this.errors()}/>
        </div>
      );
    }else{
      return (
        <div className = "logged-in-nav">
          <div className = "upload-button nav-buttons" onClick={function(){hashHistory.push('upload');}}>upload</div>
          <div className = "logout-button nav-buttons" onClick={this.logout}>logout</div>
        </div>
      );
    }

  },



  render: function(){

        if(SessionStore.fetchCurrentUser()){var homeButton =  "home";}else{}




    return (
      <div className = "navBar">
        <div className = "navBar-container">
          <div className = "navBar-title" >Bravaudio</div>

          <div className = "home-button nav-buttons"
            onClick={function(){hashHistory.push('home');}}>{homeButton}</div>

          <SearchBar />
          {this.userProfile()}
          {this.loginButtons()}
        </div>
      </div>
    );
    }

});

module.exports = NavBar;
