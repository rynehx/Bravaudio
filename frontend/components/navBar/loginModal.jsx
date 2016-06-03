var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    Modal = require('react-modal'),
    SessionActions = require("../../actions/sessionActions"),
    SessionStore = require("../../stores/sessionStore"),
    CurrentSessionState = require("../../mixins/currentSessionState");
var style = {
  overlay : {
		    position        : 'fixed',
		    top             : 0,
		    left            : 0,
		    right           : 0,
		    bottom          : 0,
		    backgroundColor : 'rgba(255, 255, 255, 0.90)',
		    zIndex          : 1000,
		  },
		  content : {
		    position        : 'fixed',
				margin          : '0 auto',
		    border          : '1px solid #ccc',
		    padding         : '20px',
		    zIndex          : 1001,
				width           : '30%',
				maxWidth        : '500px',
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

    guestLogin: function(){
      SessionActions[this.props.sessionAction]({
        username: "guest",
        password: "password"
      });
    },

    render: function() {
      return (
        <div className = "logged-out-modals">
        <div className={this.props.sessionAction + "-button nav-buttons"} onClick={this.openModal}>{this.props.sessionAction}</div>
          <Modal className = "login-modal modal-outer"
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={style}>



            <p className = "login-title">{this.props.sessionAction}</p>
            <section>{this.showErrors()}</section>
            <form>
              <div className = "login-input">
                <input type="text" valueLink={this.linkState("username")} placeholder="username"/>
                <input type="password" valueLink={this.linkState("password")} placeholder="password"/>
              </div>
              <div className = "login-input-buttons">
                <div className = "login-input-button" onClick={this.handleSubmit}>Submit</div>
                <div className = "login-input-button" onClick={this.closeModal}>Close</div>
                <div className = "login-input-button" onClick = {this.guestLogin}>Guest Login</div>
              </div>
            </form>
          </Modal>
        </div>
      );
    }
});

module.exports = LoginModal;
