//react
var React = require('react');
//stores
var UserStore = require('../../stores/userStore'),
    TrackStore = require('../../stores/trackStore'),
    PlaylistStore = require('../../stores/playlistStore');

//actions
var TrackClientActions = require('../../actions/trackClientActions'),
    PlaylistClientActions = require('../../actions/playlistClientActions');
//components
var UserContentItem = require("./userContentItem");


var dateComparator = function(time1,time2){
  var t1 = new Date(time1.created_at);
  var t2 = new Date(time2.created_at);

  if(t1 < t2){
    return (-1);
  }else{
    return (1);
  }
};


var UserContentTab = React.createClass({
  getInitialState: function () {
    return { contents: [], tracks: [], playlists: [] };
  },


  componentDidMount: function(){
    this.trackstorelistener = TrackStore.addListener(this._onChangeTracks);
    this.playliststorelistener = PlaylistStore.addListener(this._onChangePlaylists);
    PlaylistClientActions.fetchUserPlaylists({username: this.props.params.user});
    TrackClientActions.fetchUserTracks({username: this.props.params.user});
   },

  _onChangeTracks: function(){
    this.setState({tracks:TrackStore.displayUserTracks()});
  },

  _onChangePlaylists: function(){
    this.setState({playlists: PlaylistStore.displayUserPlaylists()});
  },

  componentWillReceiveProps: function(newprops){
    PlaylistClientActions.fetchUserPlaylists(newprops.params.user);
    TrackClientActions.fetchUserTracks(newprops.params.user);
  },


  componentWillUnmount: function(){
     this.trackstorelistener.remove();
     this.playliststorelistener.remove();
  },
  allSorter: function(arr1,arr2){
    return (arr1.concat(arr2)).sort(dateComparator);
  }
  ,
  renderType: function(){
    if(this.props.params.tabtype === "tracks"){
      return this.state.tracks.map(function(track){return <UserContentItem key={track.id + "t"} item = {track} user = {this.props.params.user}/>;}.bind(this));
    }else if(this.props.params.tabtype === "playlists"){
      return this.state.playlists.map(function(playlist){return <UserContentItem key={playlist.id + "p"}  item = {playlist} user = {this.props.params.user}/>;}.bind(this));
    }else{
      return this.allSorter(this.state.tracks,this.state.playlists).map(function(item){
        return <UserContentItem key={ ((item.tracks)? item.id+ "p" : item.id+ "t")
        }  item = {item} user = {this.props.params.user}/>;}.bind(this));
    }
  },

  render: function(){

    return (
      <ul className = "user-content-tab-items">
        {this.renderType()}
      </ul>
    );
  }
});

module.exports = UserContentTab;
