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





var EditPlaylistModal = React.createClass({
    mixins: [LinkedStateMixin],
    getInitialState: function(){
      return({ modalOpen: false, tab: "add", playlists:[], newTitle:"", newDescription:"" });
    },
    componentWillMount: function(){

      var container = document.getElementById("content");
      Modal.setAppElement(container);
      this.playliststorelistener = PlaylistStore.addListener(this._onAddToPlaylist);
      PlaylistClientActions.fetchUserPlaylists({username: SessionStore.fetchCurrentUser().username});
    },
    componentWillUnmount: function(){
      this.playliststorelistener.remove();
    },

    _onAddToPlaylist: function(){
      this.setState({playlists: PlaylistStore.displayUserPlaylists()});
    },

    createNewPlaylist: function(){
      PlaylistClientActions.createNewPlaylist({title: this.state.newTitle,
        description: this.state.newDescription, track: this.props.track.id, author:SessionStore.fetchCurrentUser().id }, this._createNewPlaylistSuccess);
    },

    _createNewPlaylistSuccess: function(){
      this.setInfoTab();
      this.setState({newTitle:"", newDescription:""} );
    },

    setInfoTab: function(){
      this.setState({tab:"add"});
    },

    setTracksTab: function(){
      this.setState({tab:"create"});
    },

    openModal: function() {
      this.setState({modalIsOpen: true,tab: "add"});
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

    changeTitle: function(event){
      this.setState({newTitle: event.target.value});
    },

    changeDescription: function(event){
      this.setState({newDescription: event.target.value});
    },

    goToPlaylist: function(playlist){
      this.closeModal();
      hashHistory.push(SessionStore.fetchCurrentUser().username +  "/playlist/" + playlist);
    },
    addButton: function(playlist){
        var included =  playlist.tracks.find(function(track){
          return track.id === this.props.track.id;}.bind(this));
      if(included){
        return <div className =
          {"newplaylist-modal-list-add newplaylist-modal-list-added"}
          onClick = {function(){this.pressAddButton(playlist);}.bind(this)}>
          Added</div>;
      }else{
        return <div className = {"newplaylist-modal-list-add"}
          onClick = {function(){this.pressAddButton(playlist);}.bind(this)}>
          Add to Playlist</div>;
      }
    },


    pressAddButton: function(playlist){
      PlaylistClientActions.addTrackToPlaylist(SessionStore.fetchCurrentUser() ,
      playlist, this.props.track);
    },

    newPlaylistSaveButton: function(){
      if(this.state.newTitle.replace(/\s/g, "").length>0 &&
       this.state.newDescription.replace(/\s/g, "").length>0 ){
         return <div className = "newplaylist-modal-inside-save" onClick= {this.createNewPlaylist}>Save</div>;
      }else{
        return <div className = "newplaylist-modal-inside-save save-null" >Save</div>;
      }
    },

    contentShow:function(){

      if(this.state.tab==="create"){
        return (
          <form>
            <div className = "newplaylist-modal-inside-title">Title</div>
            <input defaultValue = {this.state.newTitle}
              className = "newplaylist-modal-inside-input"
              onChange={this.changeTitle}></input>



            <div className = "newplaylist-modal-inside-description">Description</div>
            <textarea className = "newplaylist-modal-inside-textarea"
              defaultValue = {this.state.newDescription}
              onChange={this.changeDescription}></textarea>

            {this.newPlaylistSaveButton()}

          </form>
        );
      }else if(this.state.tab==="add"){
        return (
          <ul className = "">
            {
              this.state.playlists.map(function(playlist){
                return (<li className = "newplaylist-modal-list-items" key = {playlist.id}>
                  <img className = "newplaylist-modal-list-image"
                     src = {playlist.image_url}/>
                  <div className = "newplaylist-modal-list-title"
                    onClick={function(){  this.goToPlaylist(playlist.title);}.bind(this)}>{playlist.title}</div>

                  <div className = "newplaylist-modal-list-trackcount" onClick={function(){  this.goToPlaylist(playlist.title);}.bind(this)}>{playlist.tracks.length + " tracks"}</div>
                  {this.addButton(playlist)}

                </li>);
              }.bind(this))
            }
          </ul>
        );
      }
    },

    cancelSaveButtons: function(){

    },

    render: function(){

    return (
       <div >
         <img className="new-playlist-button-image" src={this.props.icon}  onClick={this.openModal}/>
           <Modal className = "new-playlist-modal modal-outer"
             isOpen={this.state.modalIsOpen}
             onAfterOpen={this.afterOpenModal}
             onRequestClose={this.closeModal}
             style={style}>

             <div className = "newplaylist-modal-inside-tabs">
               <div className = {"newplaylist-modal-inside-tab" + this.tabbed("add")} onClick={this.setInfoTab}>Add to playlist</div>
               <div className = {"newplaylist-modal-inside-tab"+ this.tabbed("create")} onClick={this.setTracksTab}>Create a playlist</div>
             </div>



             <div className = "newplaylist-modal-inside-container">
               {this.contentShow()}
             </div>



           </Modal>
       </div>
     );
    }
});


module.exports = EditPlaylistModal;


// <div className = "newplaylist-modal-inside-tags">Tags</div>
// <input className = "newplaylist-modal-inside-input"
//   defaultValue = {""}></input>
