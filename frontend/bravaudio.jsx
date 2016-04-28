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
    MusicBar = require('./components/musicBar');
//Mixins
var CurrentUserState = require('./mixins/currentUserState'),
    UserActions = require('./actions/userActions'),
    UserStore = require('./stores/userStore');

var App = React.createClass({
  mixins: [CurrentUserState],
  componentWillMount: function(){
    if (!this.state.currentUser){
      UserActions.fetchCurrentUser();
    }
  },
  render: function(){
    return (
      <div>
        <NavBar />
        <p>body content</p>
        {this.props.children}
        <MusicBar />
      </div>
    );
  }
});





var AppRouter = (
  <Router history={hashHistory}>
    <Route path="/" components={App}>


    </Route>
  </Router>
);


document.addEventListener('DOMContentLoaded',function(){
  // debugger;
  var root = document.getElementById('content');
  ReactDOM.render(
    AppRouter,
    root
  );
});
