var React = require('react');
var YourContentItems = require('./yourContentItems');

var YourContentAll = React.createClass({
  render: function(){
    return (
      <div className = "your-content-main">
        <YourContentItems items={this.props.tracks} typing = "track" all={true}/>
        <YourContentItems items={this.props.playlists} typing = "playlist" all={true}/>
        <YourContentItems items={this.props.likes} typing = "like" all={true}/>
      </div>
    );
  }
});

module.exports = YourContentAll;
