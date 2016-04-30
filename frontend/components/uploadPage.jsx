var React = require('react'),
    SessionStore = require('../stores/sessionStore'),
    hashHistory = require('react-router').hashHistory;

var UploadPage = React.createClass({

  componentWillMount: function(){
    if(!SessionStore.fetchCurrentUser()){
      hashHistory.push("/");
    }
  },

  componentWillUpdate: function(){
    if(!SessionStore.fetchCurrentUser()){
      hashHistory.push("/");
    }
  },


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
