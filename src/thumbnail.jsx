var React = require('react');
var Badge = require('./badge');

module.exports = React.createClass({
  render: function() {
    return <div className="thumbnail">
      <img src={this.props.imageUrl} alt={this.props.title} />
      <div className="caption">
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <p>
          <Badge title="Inbox" number="1024" />
        </p>
      </div>
    </div>
  }
});
