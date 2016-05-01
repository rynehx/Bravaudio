var React = require("react"),
    TrackStore = require('../../stores/trackStore'),
    TrackClientActions = require('../../actions/trackClientActions');


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
  }
  ,
  _onChange: function(){

    this.setState({tracks: TrackStore.all()});
  },

  render: function(){


    return (

      <div>
        {
          this.state.tracks.map(function(track){

            return <img className = "trendingTracks" key={track.id} src={track.image_url} />;
          })
        }
      </div>
    );
  }

});

module.exports = HomeContent;
