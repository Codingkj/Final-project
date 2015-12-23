var React = require('react');

var TextLineComponent = React.createClass({
  render: function() {
     return (<div>
      <input type="text" placeholder="Enter text here" />
      </div>);
  }
});

module.exports = TextLineComponent;