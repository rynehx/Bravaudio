//react
var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    Modal = require("react-modal"),
    hashHistory = require('react-router').hashHistory;
//actions
var PlaylistClientActions = require('../../actions/playlistClientActions');

//stores
var SessionStore = require('../../stores/sessionStore'),
    TrackStore = require('../../stores/trackStore'),
    PlaylistStore = require('../../stores/playlistStore'),
    MusicStore = require('../../stores/musicStore');
//actions
var TrackClientActions = require('../../actions/trackClientActions');


var modalWidth = window.innerWidth*0.7;
var modalHeight = window.innerHeight*0.7;
var selected;
var style = {
  overlay : {
		    position        : 'fixed',
		    top             : 0,
		    left            : 0,
		    right           : 0,
		    bottom          : 0,
		    backgroundColor : 'rgba(255, 255, 255, 0.80)',
		    zIndex          : 1000,
		  },
		  content : {
        Height       : modalHeight,
        width           : '500px',
        height          : modalHeight,
		    position        : 'fixed',
				margin          : '0 auto',
		    border          : 'none',
		    zIndex          : 1001,
				maxWidth        : '500px',
        overflowY    : 'scroll',
        WebkitOverflowScrolling    : 'touch',
      }
		};
//var colors = ["Red","Green","Blue","Yellow","Black","White","Orange"];





var LikesModal = React.createClass({

    getInitialState: function(){
      return({ modalOpen: false });
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




    render: function(){

    return (
       <div >
         <div className="track-sidebar-likes-viewall" onClick={this.openModal}>view all</div>
           <Modal className = "likes-modal"
             isOpen={this.state.modalIsOpen}
             onAfterOpen={this.afterOpenModal}
             onRequestClose={this.closeModal}
             style={style}>
              <div className = "likes-modal-container">
                {
                  this.props.items.map(function(item){
                    return (
                      <div key = {item.id} className = "likes-modal-items" onClick = {function(username){this.props.goToUser(item.username);}.bind(this)}>
                          <img className = 'likes-modal-image' src={item.image_url} />
                          <div className = "likes-modal-user">{item.username}</div>
                      </div>
                    );
                  }.bind(this))
                }
              </div>
          </Modal>
       </div>
     );
    }
});


module.exports = LikesModal;
