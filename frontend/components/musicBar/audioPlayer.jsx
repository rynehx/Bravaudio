var React = require('react'),
    classNames = require('classnames');

var actionButton;
var clickdown = false;


var numberToTime = function(num) {
  // var hour = Math.floor(num/3600);
  // num = num%3600;
  var minute = Math.floor(num/60);
  var second = Math.floor(num%60);


	// return (hour > 9 ? "" + hour: "0" + hour) + ":" +
    return (minute > 9 ? "" + minute: "0" + minute) + ":" +
    (second > 9 ? "" + second: "0" + second);
};


var AudioPlayer = React.createClass({
  getInitialState: function () {
    return { audioAction: "play" , track: "", playlist:"" };
  },

  componentDidMount: function(){
    this.refs["audioDom"].ontimeupdate = this.updateTimer;
  },


  audioActionButton: function(){
    if (this.state.audioAction === "play"){
      this.refs["audioDom"].play();
      // document.getElementById('demo').pause();
      this.setState({audioAction: "pause"});
    }else{
      this.refs["audioDom"].pause();
      // document.getElementById('demo').play();
      this.setState({audioAction: "play"});
    }
  },
  updateTimer: function(){
    this.refs["displaytime-current"].innerHTML =
    numberToTime(this.refs["audioDom"].currentTime);

    this.refs["displaytime-end"].innerHTML =
    numberToTime(this.refs["audioDom"].duration);

    this.refs["displayprogress"].value =
    (this.refs["audioDom"].currentTime/this.refs["audioDom"].duration);
  },

  updateProgress: function(e){
    if(clickdown){
      var selectedtime=(((e.clientX-8-this.refs["displayprogress"].offsetLeft)/
        this.refs["displayprogress"].offsetWidth)*
        this.refs["audioDom"].duration);
        this.refs["audioDom"].currentTime = selectedtime;
     }

  },



  render: function(){


    if(this.state.audioAction === "play"){
      actionButton = <div className = "musicbar-circle">
        <div className = "musicbar-play"></div>
      </div>;
    }else{
      actionButton = <div className = "musicbar-circle">
        <div className = "musicbar-pause">P</div>
        <div className = "musicbar-pause">P</div>
      </div>;
    }

    return (
      <div className = "musicbar-audioplayer">
        <audio ref = "audioDom"
          src={this.props.track.url}>
          <p>Your browser does not support the audio element</p>
        </audio>

        <button className = "musicbar-button"
          onClick={this.audioActionButton}>
          {actionButton}
        </button>

        <section ref = "displaytime-current"
          className = "musicbar-time">00:00</section>

        <progress ref = "displayprogress" className = "musicbar-progressbar"
          value="0" max="1" style={{width:'400px'}}
          onClick = {function(e){
            clickdown = true;
            this.updateProgress(e);
            clickdown = false;
          }.bind(this)}
          onMouseDown = {function(){clickdown = true;}}
          onMouseUp = {function(){clickdown = false;}}
          onMouseMove = {this.updateProgress}
          onMouseLeave ={function(){clickdown = false;}} >
        </progress>

        <section ref = "displaytime-end"
          className = "musicbar-time">00:00</section>
      </div>
    );
  }
});




module.exports = AudioPlayer;
