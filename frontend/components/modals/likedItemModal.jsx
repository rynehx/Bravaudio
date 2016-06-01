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





var LikedItemModal = React.createClass({

    getInitialState: function(){
      return({ modalOpen: false });
    },

    componentWillMount: function(){
        Modal.setAppElement('body');
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

    goToItem: function(like){
        this.closeModal();
        hashHistory.push("/"+ like.author + "/"+ like.type+"/"+like.title);

    },

    goToAuthor: function(like){

        this.closeModal();
        hashHistory.push("/" + like.author);

    },


    render: function(){

      var items;
      if(this.props.likes){
        items = this.props.likes;
      }else{
        items = [];
      }
      console.log(items)
    return (
       <div >
         <div className="track-sidebar-inplaylists-viewall"   onClick={this.openModal}>view all</div>
           <Modal className = "likeditem-modal"
             isOpen={this.state.modalIsOpen}
             onAfterOpen={this.afterOpenModal}
             onRequestClose={this.closeModal}
             style={style}>
             <ul className="inplaylists-modal-list">
                {
                    items.map(function(item){

                    return <li key = {item.id+item.type} className = "inplaylists-modal-items">
                      <div className = "inplaylists-modal-image-container"
                        onClick = {function(){
                          if(item.type==="track"){
                            MusicStore.setMusic(item);
                          }else{
                            MusicStore.setMusic(undefined,item);
                          }
                        }}>
                        <img className = "inplaylists-modal-items-image" src={item.image_url}/>
                        <img className = "inplaylists-modal-items-play"
                           src={"http://res.cloudinary.com/bravaudio/image/upload/v1462401134/Untitled_Diagram_3_jxrtjl.svg"}/>
                      </div>


                      <div className = "inplaylists-modal-items-title" onClick = {function(){this.goToItem(item);}.bind(this)}>
                        {item.title}
                      </div>

                      <div className = "inplaylists-modal-items-author" onClick = {function(){this.goToAuthor(item);}.bind(this)}>
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


module.exports = LikedItemModal;
