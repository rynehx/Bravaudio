//React
var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router');
//Routes
var Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory;
//Components
var NavBar = require('./components/navBar'),
    MusicBar = require('./components/musicBar'),
    HomePage = require('./components/homePage'),
    UploadPage = require('./components/uploadPage'),
    TrackPage = require('./components/trackPage'),
    UserPage = require('./components/userPage'),
    PlaylistPage = require('./components/playlistPage'),
    SplashPage = require('./components/splashPage'),
    YourPage = require('./components/yourPage');

//Mixins
var CurrentSessionState = require('./mixins/currentSessionState'),
    SessionActions = require('./actions/sessionActions'),
    SessionStore = require('./stores/sessionStore');

//need listener to update store


//userpage components
var UserContentTab = require('./components/userPage/userContentTab');
//yourpage components
var YourContent = require('./components/youPage/yourContent');



var App = React.createClass({
  mixins: [CurrentSessionState],
  componentWillMount: function(){
    if (!this.state.currentUser){
      SessionActions.fetchCurrentUser();
    }
  },
  render: function(){
    return (
      <div className = "background">
        <NavBar />
        <MusicBar />
        <div className = "content-container">
          {this.props.children}
        </div>

      </div>
    );
  }
});

var AppRouter = (
  <Router history={hashHistory}>
    <Route path="/" components={App}>
      <IndexRoute component={SplashPage}/>
      <Route path="home" components={HomePage}/>
      <Route path="you" components={YourPage}>
        <IndexRoute component={YourContent}/>
        <Route path=":tabtype" component = {YourContent}/>
      </Route>
      <Route path="upload" components={UploadPage}/>
      <Route path=":user" components={UserPage}>
        <IndexRoute component={UserContentTab}/>
        <Route path=":tabtype" components={UserContentTab}/>
      </Route>
      <Route path=":user/track/:track" components={TrackPage}/>
      <Route path=":user/playlist/:playlist" components={PlaylistPage}/>

    </Route>
  </Router>
);

document.addEventListener('DOMContentLoaded',function(){
  var root = document.getElementById('content');
  ReactDOM.render(
    AppRouter,
    root
  );
});
