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
    TrackPage = require('./components/trackPage');
//Mixins
var CurrentSessionState = require('./mixins/currentSessionState'),
    SessionActions = require('./actions/sessionActions'),
    SessionStore = require('./stores/sessionStore');

//need listener to update store

var App = React.createClass({
  mixins: [CurrentSessionState],
  componentWillMount: function(){
    if (!this.state.currentUser){
      SessionActions.fetchCurrentUser();
    }
  },
  render: function(){
    return (
      <div>
        <NavBar />
        {this.props.children}
        <MusicBar />
      </div>
    );
  }
});





var AppRouter = (
  <Router history={hashHistory}>
    <Route path="/" components={App}>
      <Route path="home" components={HomePage}/>
      <Route path="upload" components={UploadPage}/>
      <Route path=":user" components={TrackPage}>
        <Route path=":track" components={TrackPage}/>
      </Route>

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
