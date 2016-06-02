//react
var React = require('react'),
    classNames = require('classnames');

//stores
var MusicStore = require('../../stores/musicStore');

var actionButton;
var clickdown = false;
var repeatButton;
var _mouseDown = false;


var numberToTime = function(num) {
  // var hour = Math.floor(num/3600);
  // num = num%3600;
  var minute = Math.floor(num/60);
  var second = Math.floor(num%60);


	// return (hour > 9 ? "" + hour: "0" + hour) + ":" +
    return (minute > 9 ? "" + minute:  minute) + ":" +
    (second > 9 ? "" + second: "0" + second);
};


var AudioPlayer = React.createClass({
  getInitialState: function () {
    return { audioAction: "pause" ,initial: "0:00", track: {title:"",audio_url: "", image_url:""},
    playlist: {}, onRepeat : MusicStore.repeat() };
  },

  componentDidMount: function(){

    this.musicstorelistener = MusicStore.addListener(this._onChange);
    this.setState({track: MusicStore.currentTrack(),
      playlist: MusicStore.currentPlaylist()});

    this.refs["audioDom"].ontimeupdate = this.updateTimer;
  },

  componentWillUnmount: function(){
    this.musicstorelistener.remove();
  },

  _onChange: function(){

      this.setState({audioAction: "pause" ,initial: "0:00", track: MusicStore.currentTrack(),
      playlist: MusicStore.currentPlaylist(), onRepeat: MusicStore.repeat()});
      //used the reset below to restart song on ff if its the only song on playlist otherwise do not need
      //also used to reset for slow audio fetching

      this.refs.audioDom.src="";

      this.refs["displaytime-current"].innerHTML ="0:00";
      this.refs["displaytime-end"].innerHTML ="0:00";
      this.refs["displayprogress-inner"].style.width="0px";
      this.refs.audioDom.src = this.state.track.audio_url;

      if(MusicStore.currentTrack().lastTime){
        this.refs["audioDom"].currentTime = MusicStore.currentTrack().lastTime;
        this.refs["displaytime-current"].innerHTML =numberToTime(MusicStore.currentTrack().lastTime);
      }else{
        this.refs["audioDom"].currentTime = 0;
        this.refs["displaytime-current"].innerHTML ="0:00";
      }

      if(!(this.state.track.audio_url.length === 0)){
        this.refs.audioDom.play();
      }


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

    if(this.refs["audioDom"].duration === this.refs["audioDom"].duration){
      this.refs["displaytime-end"].innerHTML =
      numberToTime(this.refs["audioDom"].duration);
    }else{
      this.refs["displaytime-end"].innerHTML =
      "0:00";
    }

    this.refs["displayprogress-inner"].style.width =
    (this.refs["audioDom"].currentTime/this.refs["audioDom"].duration)*400 + "px";

    if(!this.state.playlist.title){

      MusicStore.updateTrackTime(this.state.track,this.refs["audioDom"].currentTime);
    }
  },

  updateProgress: function(e){

    if(clickdown){
      var selectedtime=(((e.clientX-this.refs["displayprogress"].offsetLeft)/
        this.refs["displayprogress"].offsetWidth)*
        this.refs["audioDom"].duration);
        this.refs["audioDom"].currentTime = selectedtime;

        this.refs["displaytime-current"].innerHTML = numberToTime(selectedtime);

        this.refs["displayprogress-inner"].style.width=
        ((e.clientX-this.refs["displayprogress"].offsetLeft)/
          this.refs["displayprogress"].offsetWidth)*400 + 'px';

        if(!this.state.playlist.title){
          MusicStore.updateTrackTime(this.state.track,this.refs["audioDom"].currentTime);
        }

     }
  },
  trackEndedAction: function(){
    MusicStore.nextTrack();
  },

  nextTrack: function(){
    MusicStore.nextTrack();
  },

  rewindTrack: function(){
    this.refs["audioDom"].currentTime = 0;
    this.refs["displayprogress-inner"].style.width = 0 + "px";
  },

  previousTrack: function(){

    MusicStore.previousTrack();
  },
  clickRepeat: function(){
    this.setState({onRepeat: !MusicStore.repeat()});
    MusicStore.toggleRepeat();
  },

  mouseDown: function(e){
    _mouseDown = true;
    this.adjustVolume(e);
  },

  mouseUp: function(){
    _mouseDown = false;
  },

  adjustVolume: function(e){
    if(_mouseDown){

      //735 560
      var top = this.refs.volumebar.getBoundingClientRect().top;
      var bot = this.refs.volumebar.getBoundingClientRect().bottom;

      var diff = .07*(bot - top);

      if(e.clientY> top+diff && e.clientY < bot-diff){
        this.refs.volume.style.bottom =   (bot - e.clientY)-13  + "px";
        this.refs.audioDom.volume = ((bot-diff)-e.clientY)/ ((bot-diff)-(top+diff));
      }
    }
  },

  render: function(){

    if(this.refs.audioDom){
      this.refs.audioDom.volume= 0.5;
    }

    if(this.state.audioAction === "play"){
      actionButton = <div onClick={this.audioActionButton}
        className = "musicbar-button">
        <div className = "musicbar-play"></div>
      </div>;
    }else{
      actionButton = <div  onClick={this.audioActionButton}
        className = "musicbar-button">
        <div className = "musicbar-pause"></div>
        <div className = "musicbar-pause"></div>
      </div>;
    }


    if(this.state.onRepeat){
      repeatButton = <div className = "musicbar-repeat"
        onClick = {this.clickRepeat}>⟳</div>;
    }else{
      repeatButton = <div className = "musicbar-repeat"
        onClick = {this.clickRepeat}>⤨</div>;
    }



    return (
      <div className = "musicbar-audioplayer">
        <audio ref = "audioDom" id="audioDom"
          src={this.state.track.audio_url}
          onEnded = {this.trackEndedAction} autoPlay>
          <p>Your browser does not support the audio element</p>
        </audio>

        <div className = "music-ffrw"
          onDoubleClick={this.previousTrack}
          onClick = {this.rewindTrack}>

          <div  className = "musicbar-ff-bar"/>
          <div className = "musicbar-ff"/>
        </div>

        <div>
          {actionButton}
        </div>

        <div className = "music-ffrw"
          onClick={this.nextTrack}>
            <div  className = "musicbar-rw"/>
            <div  className = "musicbar-rw-bar"/>
        </div>

        {repeatButton}

        <section ref = "displaytime-current"
          className = "musicbar-time">{this.state.initial}</section>


        <div ref = "displayprogress" className = "musicbar-progressbar"
          style={{width:'400px'}}

          onClick = {function(e){
            clickdown = true;
            this.updateProgress(e);
            clickdown = false;
          }.bind(this)}

          onMouseDown = {
            function(){clickdown = true;
            this.refs["audioDom"].muted = true;
          }.bind(this)}

          onMouseMove = {this.updateProgress}

          onMouseUp = {function(){
            clickdown = false;
            this.refs["audioDom"].muted = false;
          }.bind(this)}

          onMouseLeave ={function(){
            clickdown = false;
            this.refs["audioDom"].muted = false;
          }.bind(this)} >

          <div className = "musicbar-progressbar-inner-base" >
            <div ref = "displayprogress-inner"
              className = "musicbar-progressbar-inner" style={{width:'0px'}}>
            </div>
          </div>



        </div>

        <section ref = "displaytime-end"
          className = "musicbar-time">{this.state.initial}
        </section>
        <div ref = "volumebox" className = "musicbar-volume">
          <img className = "musicbar-volume-speaker"
            src = "http://res.cloudinary.com/bravaudio/image/upload/v1462434645/Untitled_Diagram_6_xemipi.svg">
          </img>
          <div ref = "volumebar"  className = "musicbar-volume-container"
            onMouseDown = {this.mouseDown}
            onMouseUp = {this.mouseUp}
            onMouseLeave = {this.mouseUp}
            onMouseMove = {this.adjustVolume}>
            <div ref = "volume" style = {{bottom: "90px"}}  className = "musicbar-volume-nobe">
            </div>
          </div>
        </div>

      </div>
    );
  }
});




module.exports = AudioPlayer;
