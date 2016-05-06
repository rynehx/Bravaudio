var React = require("react"),
    TrackStore = require('../../stores/trackStore'),
    TrackClientActions = require('../../actions/trackClientActions'),
    HomeTracks = require('./homeTracks');


var HomeContent = React.createClass({
  getInitialState: function () {
    return { tracks: [] };
  },


  componentDidMount: function(){
    TrackClientActions.fetchTopChart();
    this.trackStoreListener = TrackStore.addListener(this._onChange);
  },
  componentWillUnmount: function(){
    this.trackStoreListener.remove();
  },
  _onChange: function(){

    this.setState({tracks: TrackStore.all()});
  },



  render: function(){


    return (


        <div className = "home-container">
          {
            this.state.tracks.map(function(track){
              return (<HomeTracks key = {track.id} track={track} playlist = {null} />);
            })
          }
        </div>

    );
  }

});

module.exports = HomeContent;
