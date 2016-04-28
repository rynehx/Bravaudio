var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    Modal = require('react-modal'),
    UserActions = require("../actions/userActions"),
    UserStore = require("../stores/userStore"),
    CurrentUserState = require("../mixins/currentUserState");
var style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.0)'
  },
  content : {
    position        : 'fixed',
    top             : '100px',
    left            : '150px',
    right           : '150px',
    bottom          : '100px',
    border          : '1px solid #ccc',
    padding         : '20px'
  }
};



var LoginModal = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function() {
      return { modalIsOpen: false};
    },
    componentWillMount: function(){
      var container = document.getElementById("content");
       Modal.setAppElement(container);
    },
    componentWillUpdate: function(){
      if(UserStore.fetchCurrentUser() && this.state.modalIsOpen){
        this.closeModal();
      }
    },
    openModal: function() {
      this.setState({modalIsOpen: true});
    },

    afterOpenModal: function() {
      // references are now sync'd and can be accessed.

    },

    closeModal: function() {
      this.setState({modalIsOpen: false});
    },
    handleSubmit: function(e){
  		e.preventDefault();
  		UserActions[this.props.userAction]({
  			username: this.state.username,
  			password: this.state.password
  		});

  	},

    render: function() {
      return (
        <div>
        <button onClick={this.openModal}>{this.props.userAction}</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={style}>



          <h2>{this.props.userAction}</h2>
          <p>{this.props.errors}</p>
          <form>
            <input type="text" valueLink={this.linkState("username")}/>
            <input type="password" valueLink={this.linkState("password")}/>
            <button onClick={this.handleSubmit}>submit</button>
            <button onClick={this.closeModal}>close</button>
          </form>
        </Modal>
        </div>
      );
    }
});

module.exports = LoginModal;
