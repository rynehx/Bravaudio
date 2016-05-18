var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    Modal = require("react-modal");

var modalWidth = window.innerWidth*0.7;
var modalHeight = window.innerHeight*0.8;
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
        minWidth        : modalWidth,
        minHeight       : modalHeight,
        width           : modalWidth,
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

var placeholder = document.createElement("li");
placeholder.className = "placeholder";


var PlaylistModal = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function(){
      return({ modalOpen: false,tab: "info",playlist: this.props.playlist, tracks: this.props.playlist.tracks});
    },
    componentWillMount: function(){
      var container = document.getElementById("content");
      Modal.setAppElement(container);
    },

    setInfoTab: function(){
      this.setState({tab:"info"});
    },

    setTracksTab: function(){
      this.setState({tab:"tracks"});
    },

    openModal: function() {
      this.setState({modalIsOpen: true,tab: "info",playlist: this.props.playlist,tracks: this.props.playlist.tracks});
    },

    afterOpenModal: function() {
      // references are now sync'd and can be accessed.
    },

    closeModal: function() {
      this.setState({modalIsOpen: false});
    },

    tabbed: function(type){
      if(this.state.tab===type){
        return " playlist-modal-inside-tabbed";
      }else{
        return "";
      }
    },

    dragStart:function(e) {
      this.dragged = e.currentTarget;
      e.dataTransfer.effectAllowed = 'move';
      // Firefox requires dataTransfer data to be set
      e.dataTransfer.setData("text/html", e.currentTarget);
    },

    dragEnd: function(e) {
      this.dragged.style.display = "flex";
      this.dragged.parentNode.removeChild(placeholder);
      // Update data
      var tracks = this.state.tracks;
      var from = Number(this.dragged.dataset.id);
      var to = Number(this.over.dataset.id);
      if(from < to) to--;
      if(this.nodePlacement == "after") to++;
      tracks.splice(to, 0, tracks.splice(from, 1)[0]);
      this.setState({tracks: tracks});
    },

    dragOver: function(e) {
       e.preventDefault();
       this.dragged.style.display = "none";
       if(e.target.className == "placeholder") return;
       this.over = e.target;
       // Inside the dragOver method
       var relY = e.clientY -120 - (this.over.offsetTop-41);
       console.log(this.over.offsetHeight)


       var height = this.over.offsetHeight / 2;
       var parent = e.target.parentNode;

       if(relY > height) {
         this.nodePlacement = "after";
         parent.insertBefore(placeholder, e.target.nextElementSibling);
       }
       else if(relY <= height) {
         this.nodePlacement = "before";
         parent.insertBefore(placeholder, e.target);
       }

    },

    contentShow:function(){
      if(this.state.tab==="info"){
        return (
          <div>

          </div>
        );
      }else if(this.state.tab==="tracks"){
        return (<ul className = "playlist-modal-inside-container"
          onDragOver={this.dragOver}>
            {this.state.tracks.map(function(item,i){
              return (<li className = "playlist-modal-list"
                data-id ={i}
                draggable="true"
                onDragEnd={this.dragEnd}
                onDragStart={this.dragStart}
                key = {item.id}>
                  <div className = "playlist-modal-list-number">{i+1+"."}</div>
                  <img className = "playlist-modal-list-items-image" src = {item.image_url}/>
                  <div className = "playlist-modal-list-items">{item.title}</div>
                  <div className = "playlist-modal-list-items">{item.author}</div>
                </li>);
              }, this)
            }
          </ul>);
      }

    },

    render: function(){

    return (
       <div >
         <img className="playlist-content-top-button" src={this.props.icon}  onClick={this.openModal}/>
           <Modal className = "playlist-modal"
             isOpen={this.state.modalIsOpen}
             onAfterOpen={this.afterOpenModal}
             onRequestClose={this.closeModal}
             style={style}>


          <div className = "playlist-modal-inside-tabs">
            <div className = {"playlist-modal-inside-tab" + this.tabbed("info")} onClick={this.setInfoTab}>Info</div>
            <div className = {"playlist-modal-inside-tab"+ this.tabbed("tracks")} onClick={this.setTracksTab}>Tracks</div>
          </div>

          <div className = "playlist-modal-inside-container">
            {this.contentShow()}
          </div>






           </Modal>
       </div>
     );
    }
});


module.exports = PlaylistModal;
