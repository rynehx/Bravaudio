var React = require('react'),
    UserStore = require('../../stores/userStore'),
    TrackStore = require('../../stores/trackStore'),
    MusicStore = require('../../stores/musicStore'),
    hashHistory = require('react-router').hashHistory,
    AudioPlayer = require('./audioPlayer');

var MusicBarPlay = React.createClass({

render: function(){
  return (
    <div>
        <AudioPlayer audioUrl = "http://res.cloudinary.com/bravaudio/video/upload/v1461867581/Fetty_Wap_ft._Drake_-_My_Way_Remix_CDQ_cuaq28.mp3"/>
    </div>
  );

}

});


module.exports = MusicBarPlay;
