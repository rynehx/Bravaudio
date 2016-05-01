//react
var React = require('react'),
    hashHistory = require('react-router').hashHistory;
//stores
var SessionStore = require('../stores/sessionStore'),
    TrackStore = require('../stores/trackStore');
//actions
var TrackClientActions = require('../actions/trackClientAction');
//components
var TrackContent = require('./trackPage/trackContent'),
    TrackSideBar = require('./trackPage/trackSideBar'),
    TrackForeground = require('./trackPage/trackForeground'),
    TrackNotFound = require('./trackPage/trackNotFound');



var TrackPage = React.createClass({

  getInitialState: function () {
    return { track: {title:"", audio_url: "", image_url: "" } };
  },

  componentDidMount: function(){
    this.trackstorelistener = TrackStore.addListener(this._onChange);
    TrackClientActions.fetchDisplayTrack(this.props.params.user,
      this.props.params.track);
  },

  componentWillUnmount: function(){
    this.trackstorelistener.remove();
  },

  _onChange: function(){
    this.setState({track: TrackStore.displayTrack()});
  },

  render: function(){

    if(this.state.track === null){
      return(
        <div>
          <TrackNotFound notFoundTrack = {this.props.params.track} />
        </div>
      );
    }else{
      return(
        <div>
          <TrackForeground track = {this.state.track}/>
          <TrackContent track = {this.state.track}/>
          <TrackSideBar track = {this.state.track}/>
        </div>
      );
    }
  }
});

module.exports = TrackPage;
