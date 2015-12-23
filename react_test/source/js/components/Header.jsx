var React = require('react');

var HeaderComponent = React.createClass({
  render: function() {
     return (<div>
      <input type="text" placeholder="Enter text here" />
      </div>);
  }
});

module.exports = HeaderComponent;