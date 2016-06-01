//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;
//stores


//actions
var UserClientActions = require('../actions/userClientActions');


var YourPage = React.createClass({
  getInitialState: function () {
    return {
      tabtype: this.initialTabSet()
    };
  },

  initialTabSet: function(){

    return (this.props.params.tabtype) ?  this.props.params.tabtype : "all";
  },

  componentDidMount: function(){

    //UserClientActions.fetchDisplayUser(this.state.user);
    // this.sessionStoreListener = SessionStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
  //  this.sessionStoreListener.remove();
  },

  componentWillReceiveProps: function(newprops){
    //UserClientActions.fetchDisplayUser(newprops.params.user);
    var tab = (newprops.params.tabtype) ?  newprops.params.tabtype : "all";

    this.setState({tabtype: tab});
  },

  // _onChange: function(){
  //   this.setState({user:SessionStore.currentDisplayUser(),tabtype: this.initialTabSet()});
  // },


  pushTabs: function(action){
    if(action === "all"){
      hashHistory.push("/you/");
    }else{
      hashHistory.push("/you/" + action);
    }

  },


  tabbed: function(type){
    if(type === this.state.tabtype){
      return " tab-selected";
    }
    return "";
  },


  render: function(){

    return (
      <div className ="yourpage">
        <div className = "your-content-tabs">

          <div className = {"your-content-tabitems" + this.tabbed("all")}
            onClick={function(){this.pushTabs("all");}.bind(this)}>
            Overview
          </div>

          <div className = {"your-content-tabitems" + this.tabbed("tracks")}
            onClick={function(){this.pushTabs("tracks");
                }.bind(this)}>
            Tracks
          </div>

          <div className ={"your-content-tabitems"+this.tabbed("playlists")}
            onClick={function(){this.pushTabs("playlists");
                }.bind(this)} >
            Playlists
          </div>

          <div className ={"your-content-tabitems"+this.tabbed("likes")}
            onClick={function(){this.pushTabs("likes");
                }.bind(this)} >
            Likes
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = YourPage;
