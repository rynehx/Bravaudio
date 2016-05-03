//react
var React = require("react");
//stores
var MusicStore = require("../../stores/musicStore");



var UserContentItem = React.createClass({

  setMusic: function(){
    var item = this.props.item;
    if(item.tracks){
      MusicStore.setMusic(undefined,item);
    }else{
      MusicStore.setMusic(item);
    }


  },

  render: function(){
    return (
      <li className = "user-content-items">
        <img className = "user-content-items-images" src= {this.props.item.image_url}
          onClick = {this.setMusic} />
        <div className = "user-content-items-info" >{this.props.item.title}</div>
      </li>
    );
  }
});

module.exports = UserContentItem;
