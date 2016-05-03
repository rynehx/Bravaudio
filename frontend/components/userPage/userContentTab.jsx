var React = require('react'),
    UserStore = require('../../stores/userStore');

var userContentTab = React.createClass({
  getInitialState: function () {
    return { contents: [] };
  },

  componentDidMount: function(){
    debugger
  //   this.trackstorelistener = TrackStore.addListener(this._onChange);
  //   this.playliststorelistener = PlaylistStore.addListener(this._onChange);
   },
  _onChange: function(){
    // this.setState({tracks: , playlists: })

  },

  componentWillUnmount: function(){
    // this.trackstorelistener.remove();
    // this.playliststorelistener.remove();
  },

  componentWillReceiveProps: function(){


  },

  render: function(){
    return (
      <div className = "user-content-tab-items">
        {this.props.tabtype}
      </div>
    );
  }
});

module.exports = userContentTab;
