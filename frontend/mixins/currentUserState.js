var UserStore = require('../stores/userStore');


var CurrentUserStateMixin = {
  getInitialState: function(){
    return {
      currentUser: UserStore.fetchCurrentUser(),
       authError: UserStore.fetchError()};
  },
  componentDidMount: function(){
    UserStore.addListener(this.updateUser);

    if (!this.state.currentUser){
      UserStore.fetchCurrentUser();
    }

  },
  updateUser: function(){
    this.setState({
      currentUser: UserStore.fetchCurrentUser(),
      authError: UserStore.fetchError()
    });
  }
};




module.exports = CurrentUserStateMixin;
