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
//var colors = ["Red","Green","Blue","Yellow","Black","White","#ff5e00"];





var InPlaylistModal = React.createClass({

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

      var items;
      if(this.props.items){
        items = this.props.items;
      }else{
        items = [];
      }


    return (
       <div >
         <div className="track-sidebar-inplaylists-viewall"   onClick={this.openModal}>view all</div>
           <Modal className = "inplaylists-modal modal-outer"
             isOpen={this.state.modalIsOpen}
             onAfterOpen={this.afterOpenModal}
             onRequestClose={this.closeModal}
             style={style}>

             <ul className="inplaylists-modal-list">
               {

                   items.map(function(item){

                   return <li key = {item.id} className = "inplaylists-modal-items">
                     <div className = "inplaylists-modal-image-container"
                       onClick = {function(){MusicStore.setMusic(null,item);}}>
                       <img className = "inplaylists-modal-items-image" src={item.image_url}/>
                       <img className = "inplaylists-modal-items-play"
                          src={"http://res.cloudinary.com/bravaudio/image/upload/v1462401134/Untitled_Diagram_3_jxrtjl.svg"}/>
                     </div>


                     <div className = "inplaylists-modal-items-title" onClick = {function(){this.props.goToPlaylist(item);}.bind(this)}>
                       {item.title}
                     </div>

                     <div className = "inplaylists-modal-items-author" onClick = {function(){this.props.goToPlaylistAuthor(item);}.bind(this)}>
                       {item.author}
                     </div>
                   </li>;

                 }.bind(this))

             }
             </ul>


           </Modal>
       </div>
     );
    }
});


module.exports = InPlaylistModal;
