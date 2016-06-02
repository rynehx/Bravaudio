var React = require('react'),
    hashHistory = require('react-router').hashHistory;
//components
var editPlaylistModal = require('../modals/editPlaylistModal');
//stores
var MusicStore = require('../../stores/musicStore');

var threshold = 6;


var YourContentItems = React.createClass({


  // goToItem: function(e){
  //
  //
  //   hashHistory.push("" + item.user +"/track/" + item.title );
  // },


  setMusic: function(){
    return function(e){


    };
  },

  goToFullItems: function(){
    hashHistory.push("you/"+this.props.typing+"s");
  },


  _getItems: function(item,injElement){
      if(injElement){
        var opaque = " your-content-items-opaque";
      }else{
        if(item.type === "playlist" || this.props.typing === "playlist"){
          var trackSpan = (item.tracks.length===1) ? " track" : " tracks"
          var numTracks = <div className = "your-content-playlist-trackcount">{item.tracks.length + trackSpan}</div>;
        }
        var playbutton = <img src="http://res.cloudinary.com/bravaudio/image/upload/v1462401134/Untitled_Diagram_3_jxrtjl.svg"
          className = "your-content-items-imageplay"/>;
        var opaque = "";
      }





      var typing;
      if(item.type){
        typing = item.type;
      }else{
        typing = this.props.typing;
      }


      var key = item.type ? item.id+item.type : item.id;
      return <li key = {key} className = {"your-content-items"}>
          {injElement}

         <div className = "your-content-items-image-container" onClick = { function(){
           if(item.tracks){
             MusicStore.setMusic(undefined,item);
           }else{
             MusicStore.setMusic(item);
           }}}>
            {numTracks}
            <img className = {"your-content-items-image"+opaque} src = {item.image_url} />
            {playbutton}

          </div>
          <div className = {"your-content-items-text"+opaque} >
            <div className = "your-content-items-title"
              onClick = {function(){hashHistory.push("" + item.author +"/" +
                typing + "/" + item.title );}.bind(this)}>
              {item.title}
            </div>
            <div className = "your-content-items-author"
              onClick = {function(){hashHistory.push("" + item.author );}}>
              {item.author}
            </div>
          </div>

        </li>;
    },


  render: function(){
    //
    // var createButton;
    //
    // if(this.props.typing==="track"){
    //   createButton = <PlaylistModal typing = "Tracks" items = {this.props.items}/>;
    // }else if(this.props.typing==="playlist"){
    //   createButton = <PlaylistModal typing = "Playlists" items = {this.props.items}/>;
    // }


    var page = this.props.items.map(function(item){return this._getItems(item);}.bind(this));

    var pageLength=page.length;
    if(this.props.all===true ){ //&& page.length>0
      var page = page.slice(0,threshold);

      if(pageLength<threshold){
        for(var i=0; i<(threshold-pageLength); i++){
          page.push(
            <div key = {i+"holder"} className = "your-content-items-holder">
              <div className = "your-content-items-imageholder">
              </div>
              <div className = "your-content-items-textholder" >
              </div>
            </div>
          );
        }
      }else{
        var viewAllDom = (<div className = "your-content-items-viewall">
          <div className = 'your-content-items-viewall-icon' onClick = {this.goToFullItems}>
            view all
          </div>
        </div>);
        page[threshold-1]=this._getItems(this.props.items[threshold-1],viewAllDom);
      }
    }

    return (
      <div className = "your-content-main">
        <div className = "your-content-topbar">
          <div className = "your-content-topbar-text">
            {"your " + this.props.typing + "s"}
          </div>
        </div>

        <ul className = "your-content-list">
          {page}
        </ul>
    </div>
    );
  }
});

module.exports = YourContentItems;
