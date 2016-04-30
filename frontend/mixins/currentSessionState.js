var SessionStore = require('../stores/sessionStore'),
    SessionActions = require('../actions/sessionActions');

var CurrentSessionStateMixin = {
  getInitialState: function(){
    return {
      currentUser: SessionStore.fetchCurrentUser(),
      authError: SessionStore.fetchError()
     };
  },
  componentWillMount: function(){

    SessionStore.addListener(this.updateUser);

    // if (!this.state.currentUser){
    //   UserActions.fetchCurrentUser();
    // }

  },
  updateUser: function(){

    this.setState({
      currentUser: SessionStore.fetchCurrentUser(),
      authError: SessionStore.fetchError()
    });
  }
};




module.exports = CurrentSessionStateMixin;
