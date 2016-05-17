var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    Modal = require("react-modal");

    var modalWidth = window.innerWidth*0.7;
    var modalHeight = window.innerHeight*0.8;

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
            "min-width"     : modalWidth,
            "min-height"    : modalHeight,
            width           : modalWidth,
            height          : modalHeight,
    		    position        : 'fixed',
    				margin          : '0 auto',
    		    border          : '1px solid #ccc',
    		    zIndex          : 1001,
    				maxWidth        : '500px',
            "overflow-y"        : 'scroll',
            WebkitOverflowScrolling    : 'touch',
          }
    		};


var PlaylistModal = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function(){
        return({ modalOpen: false });
      },
    componentWillMount: function(){
      var container = document.getElementById("content");
       Modal.setAppElement(container);
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
         <div className = "your-content-topbar-modify" onClick={this.openModal}>{'Modify '+this.props.typing}</div>
           <Modal className = "playlist-modal"
             isOpen={this.state.modalIsOpen}
             onAfterOpen={this.afterOpenModal}
             onRequestClose={this.closeModal}
             style={style}>
             <ul className = "playlist-modal-inside-container">
               {
                 this.props.items.map(function(item){
                   return <li className = "playlist-modal-list" key = {item.id}>
                     <a className = "playlist-modal-list-items" >{item.title}</a>
                     <img className = "playlist-modal-list-items-image" src = {item.image_url}/>
                   </li>;
                 })
               }
             </ul>
           </Modal>
       </div>
     );
    }
});

module.exports = PlaylistModal;
