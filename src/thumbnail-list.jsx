var React = require('react');
var Thumbnail = require('./thumbnail');

module.exports = React.createClass({
  render: function() {
    var list = this.props.thumbnailData.map(function(props) {
      return <Thumbnail key={props.id} {...props} />
    });

    return <div>
      {list}
    </div>
  }
});
