var React = require("react");


var UserContentItem = React.createClass({
  render: function(){
    return (
      <li className = "user-content-items">
        <img className = "user-content-items-images" src= {this.props.item.image_url}/>
        <div className = "user-content-items-info" >{this.props.item.title}</div>
      </li>
    );
  }
});

module.exports = UserContentItem;
