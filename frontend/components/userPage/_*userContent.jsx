///deprecated
///deprecated
///deprecated
///deprecated


var React = require('react'),
    hashHistory = require('react-router').hashHistory;




var UserContent = React.createClass({
  getInitialState: function () {
    return { tabtype: "all" };
  },

  tabbed: function(type){
    if(type === this.state.tabtype){
      return " tab-selected";
    }
    return "";
  },

  render: function(){
    return (
      <div className = "user-content">

        <div className = "user-content-tabs">

          <div className = {"user-content-tabitems" + this.tabbed("all")}
            onClick={function(){this.setState({tabtype:"all"});}.bind(this)}>

            All</div>
          <div className = {"user-content-tabitems" + this.tabbed("tracks")}
            onClick={function(){this.setState({tabtype:"tracks"});}.bind(this)}>
            Tracks</div>

          <div className = {"user-content-tabitems" + this.tabbed("playlists")}
            onClick={function(){this.setState({tabtype:"playlists"});}.bind(this)}>
            Playlists</div>

        </div>
          1111

        {this.props.tabbing}
        3333
      </div>
    );
  }
});


module.exports = UserContent;
