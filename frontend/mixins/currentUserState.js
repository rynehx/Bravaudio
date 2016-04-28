var UserStore = require('../stores/userStore'),
    UserActions = require('../actions/userActions');

var CurrentUserStateMixin = {
  getInitialState: function(){
    return {
      currentUser: UserStore.fetchCurrentUser(),
      authError: UserStore.fetchError()
     };
  },
  componentWillMount: function(){

    UserStore.addListener(this.updateUser);

    // if (!this.state.currentUser){
    //   UserActions.fetchCurrentUser();
    // }

  },
  updateUser: function(){

    this.setState({
      currentUser: UserStore.fetchCurrentUser(),
      authError: UserStore.fetchError()
    });
  }
};




module.exports = CurrentUserStateMixin;
