var React = require('react'),
    UserStore = require('../stores/userStore'),
    hashHistory = require('react-router').hashHistory,
    TrackContent = require('./trackPage/trackContent'),
    TrackSideBar = require('./trackPage/trackSideBar'),
    TrackForeground = require('./trackPage/trackForeground'),
    TrackClientActions = require('../actions/trackClientAction'),
    TrackStore = require('../stores/trackStore');

var TrackPage = React.createClass({

  componentDidMount: function(){
    TrackStore.addListener(this._onChange);
    TrackClientActions.fetchDisplayingTrack();
  },

  _onChange: function(){
    this.setState({DisplayingTrack: TrackStore.DisplayingTrack()});
  },

  render: function(){
    return(
      <div>
        HI
      </div>
    );
  }
});

module.exports = TrackPage;
