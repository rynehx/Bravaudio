var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    Modal = require('react-modal'),
    SessionActions = require("../actions/sessionActions"),
    SessionStore = require("../stores/sessionStore"),
    CurrentSessionState = require("../mixins/currentSessionState");
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
    padding         : '20px',
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
      if(SessionStore.fetchCurrentUser() && this.state.modalIsOpen){
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
  		SessionActions[this.props.sessionAction]({
  			username: this.state.username,
  			password: this.state.password
  		});

  	},
    showErrors: function(){

      if (this.props.errors != "null"){
        return this.props.errors;
      }

    },
    render: function() {
      return (
        <div className = "logged-out-nav">
        <div className={this.props.sessionAction + "-button nav-buttons"} onClick={this.openModal}>{this.props.sessionAction}</div>
        <Modal className = "login-modal"
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={style}>



          <h2>{this.props.sessionAction}</h2>
          <section>{this.showErrors()}</section>
          <form>
            <input type="text" valueLink={this.linkState("username")} placeholder="username"/>
            <input type="password" valueLink={this.linkState("password")} placeholder="password"/>
            <button onClick={this.handleSubmit}>submit</button>
            <button onClick={this.closeModal}>close</button>
          </form>
        </Modal>
        </div>
      );
    }
});

module.exports = LoginModal;
