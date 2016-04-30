//react
var React = require('react');
//Components

//Mixins
var UserStore = require('../stores/userStore');

//components
var MusicBarPlay = require('./musicBar/musicBarPlay');

var MusicBar = React.createClass({

  renderMusicBar: function(){
    if(UserStore.fetchCurrentUser()){
      return (
        <div className = "musicBar">
        <MusicBarPlay/ >

        </div>);
    }else{
      return (<div>
      </div>);
    }
  },

  render: function(){
    return ( this.renderMusicBar());
  }
});

module.exports = MusicBar;
