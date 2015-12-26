var React = require('react');

var TextAreaComponent = React.createClass({
  render: function() {
     return (<div>
      <textarea placeholder={this.props.placeholder} />
      </div>);
  }
});

module.exports = TextAreaComponent;