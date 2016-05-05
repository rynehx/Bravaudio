var React = require('react'),
    TrackStore = require('../../stores/trackStore'),
    hashHistory = require('react-router').hashHistory;

var TrackContent = React.createClass({

goToAuthor: function(){
  hashHistory.push("/" + this.props.track.author);
},

render: function(){
return(
  <div className = "track-content">
    <div className = "track-content-top">tag</div>
      <div className = "track-content-bottom">
        <div className = "track-content-bottom-user" >
          <img className = "track-content-user-image" onClick={this.goToAuthor}
            src = {"http://blog.caribanatoronto.com/wp-content/uploads/2015/03/drake-940x626.jpg"}>
          </img>
          <div className = "track-content-user-name" >{this.props.track.author}</div>
        </div>
        <div className = "track-content-bottom-right" >
          <div className = "track-content-bottom-description" >{this.props.track.description}</div>
          <div className = "track-content-bottom-tags" ></div>

          <ol className = "track-content-bottom-comment" >
          </ol>

        </div>

      </div>
  </div>
);
}

});

module.exports = TrackContent;
