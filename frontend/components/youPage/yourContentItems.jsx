var React = require('react'),
    hashHistory = require('react-router').hashHistory;
//components
var PlaylistModal = require('../modals/playlistModal');
//stores
var MusicStore = require('../../stores/musicStore');



var YourContentItems = React.createClass({


  // goToItem: function(e){
  //
  //
  //   hashHistory.push("" + item.user +"/track/" + item.title );
  // },


  setMusic: function(){
    return function(e){
      debugger

    };
  },

  render: function(){

    var createButton;

    if(this.props.typing==="track"){
      createButton = <PlaylistModal typing = "Tracks" items = {this.props.items}/>;
    }else if(this.props.typing==="playlist"){
      createButton = <PlaylistModal typing = "Playlists" items = {this.props.items}/>;
    }


    return (
      <div className = "your-content-main">
        <div className = "your-content-topbar">
          <div className = "your-content-topbar-text">
          {"your " + this.props.typing + "s"}
          </div>

        </div>

        <ul className = "your-content-list">
          {
            this.props.items.map(function(item){
              return <li key = {item.id} className = "your-content-items">
                 <div className = "your-content-items-image-container" onClick = { function(){ if(item.tracks){
                   MusicStore.setMusic(undefined,item);
                 }else{
                   MusicStore.setMusic(item);
                 }}}>
                    <img className = "your-content-items-image" src = {item.image_url} />
                    <img src="http://res.cloudinary.com/bravaudio/image/upload/v1462401134/Untitled_Diagram_3_jxrtjl.svg" className = "your-content-items-imageplay"/>
                  </div>
                  <div className = "your-content-items-text" >
                    <div className = "your-content-items-title"
                      onClick = {function(){hashHistory.push("" + item.author +"/" +
                        this.props.typing + "/" + item.title );}.bind(this)}>
                      {item.title}
                    </div>
                    <div className = "your-content-items-author"
                      onClick = {function(){hashHistory.push("" + item.author );}}>
                      {item.author}
                    </div>
                  </div>
                </li>;
            }.bind(this))
          }
      </ul>
    </div>
    );
  }
});

module.exports = YourContentItems;
