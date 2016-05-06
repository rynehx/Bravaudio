//react
var React = require("react"),
    hashHistory = require('react-router').hashHistory;
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

  gotToItem: function(){
    var item = this.props.item;
    if(item.tracks){
      hashHistory.push("/" + this.props.user+ "/playlist/" + this.props.item.title);
    }else{
      hashHistory.push("/" + this.props.user + "/track/" + this.props.item.title);
    }
  },

  render: function(){
    return (
      <li className = "user-content-items">
        <img className = "user-content-items-images" src= {this.props.item.image_url}
          onClick = {this.gotToItem} />
        <div className = "user-content-items-main" >
          <div className = "user-content-items-top" >
            <div className = "user-content-items-play"
              onClick ={this.setMusic}></div>
            <div className = "user-content-items-header">
              <a className = "user-content-items-author">{this.props.user}</a>
              <a className = "user-content-items-title" onClick = {this.gotToItem}>{this.props.item.title}</a>
            </div>
          </div>

          <div className = "user-content-items-mid" >
            m
          </div>

          <div className = "user-content-items-bottom" >
            b
          </div>

        </div>
      </li>
    );
  }
});

module.exports = UserContentItem;
