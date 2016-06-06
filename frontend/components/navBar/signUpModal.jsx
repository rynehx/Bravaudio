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
      return { modalIsOpen: false, city: "San Francisco", state:"California", country:"USA", name: "guest" };
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
  			password: this.state.password,
        name: this.state.name,
        city: this.state.city,
        state: this.state.state,
        country: this.state.country
  		});

  	},
    showErrors: function(){

      if (this.props.errors != "null"){
        return this.props.errors;
      }

    },

    signUpButton: function(){

      if(this.state.username && this.state.name && this.state.password && this.state.city &&
        this.state.state && this.state.country){
        return  <div className = "login-input-button" onClick={this.handleSubmit}>Sign Up</div>;
      }else{
        return <div className = "login-input-button login-input-button-disable" >Sign Up</div>;
      }

    },

    setValue: function(e){
      var obj = {};
      obj[e.target.placeholder] = e.target.value;
        this.setState(obj);
    },

    render: function() {
      return (
        <div className = "logged-out-modals">
        <div className={this.props.sessionAction + "-button nav-buttons"} onClick={this.openModal}>{this.props.sessionAction}</div>
          <Modal className = "signup-modal modal-outer"
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={style}>



            <p className = "login-title">{this.props.sessionAction}</p>
            <section>{this.showErrors()}</section>
            <form>
              <div className = "signup-input">

                <div className = "signup-sub">
                  <div className = "signup-title" >username</div>
                  <input className = "signup-field" type="text" onChange={this.setValue} placeholder="username" />
                </div>

                <div className = "signup-sub">
                  <div className = "signup-title">password</div>
                  <input className = "signup-field" type="password" onChange={this.setValue} placeholder="password"/>
                </div>

                <div className = "signup-sub">
                  <div className = "signup-title">name</div>
                  <input className = "signup-field" type="text" onChange={this.setValue} placeholder="name" defaultValue= "guest"/>
                </div>

                <div className = "signup-sub">
                  <div className = "signup-title">city</div>
                  <input className = "signup-field" type="text" onChange={this.setValue} placeholder="city" defaultValue= "San Franciso"/>
                </div>

                <div className = "signup-sub">
                  <div className = "signup-title">state</div>
                  <input className = "signup-field" type="text" onChange={this.setValue} placeholder="state" defaultValue= "California"/>
                </div>

                <div className = "signup-sub">
                  <div className = "signup-title">country</div>
                  <input className = "signup-field" type="text" onChange={this.setValue} placeholder="country" defaultValue= "USA"/>
                </div>

              </div>
              <div className = "login-input-buttons">
                {this.signUpButton()}
                <div className = "login-input-button" onClick={this.closeModal}>Close</div>
              </div>
            </form>
          </Modal>
        </div>
      );
    }
});

module.exports = LoginModal;
