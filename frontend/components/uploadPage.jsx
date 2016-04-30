var React = require('react'),
    UserStore = require('../stores/userStore'),
    hashHistory = require('react-router').hashHistory;

var UploadPage = React.createClass({

  // componentDidMount: function(){
  //   this.userStoreListener = UserStore.addListener(this._onChange);
  // },
  // componentWillUnMount: function(){
  //   this.userStoreListener.remove();
  // },
  //
  // _onChange: function(){
  //   this.setState({user:UserStore.getCurrentUser()});
  //   if(!this.state.user){
  //     hashHistory.push("/");
  //   }
  // },


  render: function(){


    return (
      <div>
        <section className = "upload-box">

        </section>
      </div>
    );
  }
});

module.exports = UploadPage;
