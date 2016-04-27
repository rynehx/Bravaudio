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
var LoginForm = require('./components/loginForm.jsx');

//Mixins
var CurrentUserState = require('./mixins/currentUserState');

var App = React.createClass({
  mixins: [CurrentUserState],
  render: function(){
    return (
      <div>
        <header><h1>WELCOME</h1></header>

        {this.props.children}
      </div>
    );
  }
});


var AppRouter = (
  <Router history={hashHistory}>
    <Route path="/" components={App}>
    <Route path="splash" components={LoginForm}/>
  
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
