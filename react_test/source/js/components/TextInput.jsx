var React = require('react');

var TextInputComponent = React.createClass({
  render: function() {
     return (<div>
      <input type="text" placeholder={this.props.placeholder} />
      </div>);
  }
});

module.exports = TextInputComponent;