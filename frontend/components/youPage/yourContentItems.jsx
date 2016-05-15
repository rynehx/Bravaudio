var React = require('react'),
    hashHistory = require('react-router').hashHistory;

var YourContentItems = React.createClass({


  // goToItem: function(e){
  //
  //
  //   hashHistory.push("" + item.user +"/track/" + item.title );
  // },

  render: function(){

    var createButton;

    if(this.props.typing==="track"){
      createButton = <div className = "your-content-topbar-create"
        onClick = {function(){}}>
        new track
      </div>;
    }else if(this.props.typing==="playlist"){
      createButton = <div className = "your-content-topbar-create"
        onClick = {function(){}}>
        new playlist
      </div>;
    }


    return (
      <div className = "your-content-main">
        <div className = "your-content-topbar">
          <div className = "your-content-topbar-text">
          {"your " + this.props.typing + "s"}
          </div>
          {createButton}
        </div>

        <ul className = "your-content-list">
          {
            this.props.items.map(function(item){
              return <li key = {item.id} className = "your-content-items">
                  <img className = "your-content-items-image" src = {item.image_url}
                    onClick = {function(){hashHistory.push("" + item.author +"/" +
                      this.props.typing + "/" + item.title );}.bind(this)} />
                  <div className = "your-content-items-text" >
                    <div className = "your-content-items-title"
                      onClick = {function(){hashHistory.push("" + item.author +"/" +
                        this.props.typing + "/" + item.title );}.bind(this)}>
                      {item.title}
                    </div>
                    <div className = "your-content-items-author"
                      onClick = {function(){hashHistory.push("" + item.author );}}>
                      {item.author}
                    </div>
                  </div>
                </li>;
            }.bind(this))
          }
      </ul>
    </div>
    );
  }
});

module.exports = YourContentItems;
