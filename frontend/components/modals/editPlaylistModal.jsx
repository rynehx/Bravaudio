//react
var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    Modal = require("react-modal"),
    hashHistory = require('react-router').hashHistory;
//actions
var PlaylistClientActions = require('../../actions/playlistClientActions');

//stores
var SessionStore = require('../../stores/sessionStore');

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

var placeholder = document.createElement("li");
placeholder.className = "placeholder";






var EditPlaylistModal = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function(){
      return({ modalOpen: false, tab: "info", playlist: this.props.playlist, tracks: this.props.playlist.tracks.slice(0)});
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

      this.setState({modalIsOpen: true,tab: "info",title: this.props.playlist.title,description: this.props.playlist.description ,tracks: this.props.playlist.tracks.slice(0)});

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
      if(this.nodePlacement === "after") to++;
      tracks.splice(to, 0, tracks.splice(from, 1)[0]);
      this.setState({tracks: tracks});
    },

    dragOver: function(e) {
       e.preventDefault();
       this.dragged.style.display = "none";
       if(e.target.className === "placeholder") return;
       this.over = e.target;
       // Inside the dragOver method
       var relY = e.clientY -155 - (this.over.offsetTop-41);

       var height = this.over.offsetHeight / 2;
       var parent = e.target.parentNode;

       if(relY > height) {
         this.nodePlacement = "after";
         parent.insertBefore(placeholder, e.target.nextElementSibling);
       }else if(relY <= height) {
         this.nodePlacement = "before";
         parent.insertBefore(placeholder, e.target);
       }

    },

    changeTitle: function(event){
      this.setState({title: event.target.value});
    },

    changeDescription: function(event){
      this.setState({description: event.target.value});
    },

    deleteTrackFromPlaylist: function(item){
      PlaylistClientActions.deletePlaylistTrack(
      this.props.playlist.author,
      this.props.playlist.title, item.id, this.onTrackDeletion);
    },

    onTrackDeletion: function(deletedTrack){
      var oldTracks = this.state.tracks;

      var removedTrackIdx = this.state.tracks.findIndex(
      function(track){return track.id === deletedTrack.id;});

      oldTracks.splice(removedTrackIdx,1);
      this.setState({tracks: oldTracks});
    },
    redirectOnSave: function(newPlaylist){
      this.closeModal();
      hashHistory.push("" + newPlaylist.author +"/playlist/" + newPlaylist.title);

    },

    savePlaylist: function(event){

      var data = {title:this.props.playlist.title, author:this.props.playlist.author ,
        description: this.state.description,
        newTitle: this.state.title,
        tracks: this.state.tracks.map(function(track){return track.id;})};
      PlaylistClientActions.editPlaylist(data,this.redirectOnSave);
    },

    contentShow:function(){

      if(this.state.tab==="info"){
        return (
          <form>
            <div className = "playlist-modal-inside-title">Title</div>
            <input className = "playlist-modal-inside-input"
               defaultValue = {this.state.title}
                onChange={this.changeTitle}></input>

            <div className = "playlist-modal-inside-title">Tags</div>
            <input className = "playlist-modal-inside-input"
              defaultValue = {""}
              ></input>

            <div className = "playlist-modal-inside-title">Description</div>
            <textarea className = "playlist-modal-inside-textarea"
              defaultValue = {this.state.description}
               onChange={this.changeDescription}></textarea>

          </form>
        );
      }else if(this.state.tab==="tracks"){
        return (
          <ul className = "playlist-modal-inside-container"
          onDragOver={this.dragOver}>

            {this.state.tracks.map(function(item,i){
              return (<li className = "playlist-modal-list"
                data-id ={i}
                draggable="true"
                onDragEnd={this.dragEnd}
                onDragStart={this.dragStart}
                self={item.title}
                key = {item.id}>
                  <div className = "playlist-modal-list-number">{i+1+"."}</div>
                  <img className = "playlist-modal-list-items-image" src = {item.image_url}/>
                  <div className = "playlist-modal-list-items">{item.title}</div>
                  <div className = "playlist-modal-list-author">{item.author}</div>
                  <div className = "playlist-modal-list-delete"
                    onClick = {function(){this.deleteTrackFromPlaylist(item)}.bind(this)}>✕</div>
                </li>);
              }, this)
            }
          </ul>

        );
      }

    },

    cancelSaveButtons: function(){
        return (<div className = "playlist-modal-inside-buttons">
          <div className = "playlist-modal-inside-buttons-cancel" onClick = {this.closeModal}>cancel</div>
          <div className = "playlist-modal-inside-buttons-save" onClick ={this.savePlaylist}>save</div>
        </div>);
    },

    render: function(){
      var topButtons;
    if(this.state.tab==="tracks"){
      topButtons =   this.cancelSaveButtons();
    }


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


              {topButtons}
              <div className = "playlist-modal-inside-container">
                {this.contentShow()}
              </div>
              {this.cancelSaveButtons()}




           </Modal>
       </div>
     );
    }
});


module.exports = EditPlaylistModal;
