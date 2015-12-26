var React = require('react');

var HeaderComponent = React.createClass({
  render: function() {
     return (<div>
      <h2>{this.props.defaultValue}</h2>
      </div>);
  }
});

module.exports = HeaderComponent;