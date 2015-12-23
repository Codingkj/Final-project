var React = require('react');

var TextAreaComponent = React.createClass({
  render: function() {
     return (<div>
      <textarea placeholder="Enter text here" />
      </div>);
  }
});

module.exports = TextAreaComponent;